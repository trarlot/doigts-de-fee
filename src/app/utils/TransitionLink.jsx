'use client';
import Link from 'next/link';
import styles from '../page.module.scss';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useMenu } from '../../components/contexts/MenuContext';
import Magnetic from '../../common/Magnetic';

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export const TransitionLink = ({
    magnetic = false,
    children,
    title,
    href,
    ...props
}) => {
    const router = useRouter();
    const { isActive, setIsActive, titlename, setTitleName } = useMenu();

    const handleTransition = async (e) => {
        e.preventDefault();
        if (isActive) {
            setIsActive(false);
        }
        setTitleName(title);
        const shutter = document.querySelector(`.${styles.shutter}`);
        const body = document.querySelector('body');
        const titleContent = document.querySelector(
            `.${styles.titleTransition}`,
        );

        shutter?.classList.add(`${styles.transition}`);
        titleContent?.classList.add(`${styles.fade}`);
        body.style.overflowY = 'hidden';
        await sleep(800);
        router.push(href);
        await sleep(200);
        titleContent?.classList.remove(`${styles.fade}`);

        await sleep(500);

        body.style.overflowY = 'unset';
        shutter?.classList.remove(`${styles.transition}`);
    };

    // Ajout d'un useEffect pour gérer le nettoyage

    return (
        <>
            {magnetic ? (
                <Magnetic ratio={0.5}>
                    <Link {...props} href={href} onClick={handleTransition}>
                        {children}
                    </Link>
                </Magnetic>
            ) : (
                <Link {...props} href={href} onClick={handleTransition}>
                    {children}
                </Link>
            )}
        </>
    );
};
