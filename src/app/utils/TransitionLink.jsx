'use client';
import Link from 'next/link';
import styles from '../page.module.scss';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import stylesNav from '../../components/header/style.module.scss';
import { useMenu } from '../../components/contexts/MenuContext';
import Magnetic from '../../common/Magnetic';
import stylesShutter from '../../common/Shutter/style.module.scss';

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
    const { isActive, setIsActive, setTitleName } = useMenu();

    const handleTransition = async (e) => {
        e.preventDefault();
        console.log(document.querySelector(`.${stylesNav.activeDot}`));
        if (e.target.textContent === 'Galerie') {
            document
                .getElementsByClassName(`${stylesNav.activeDot}`)[0]
                .classList.add(`${stylesNav.activeDotGalerie}`);
        } else if (e.target.textContent === 'Accueil') {
            document
                .getElementsByClassName(`${stylesNav.activeDot}`)[0]
                .classList.remove(`${stylesNav.activeDotGalerie}`);
        }
        if (isActive) {
            setIsActive(false);
        }
        setTitleName(title);
        const shutter = document.querySelector(`.${stylesShutter.shutter}`);
        const body = document.querySelector('body');
        const titleContent = document.querySelector(
            `.${stylesShutter.titleTransition}`,
        );

        shutter?.classList.add(`${stylesShutter.transition}`);
        titleContent?.classList.add(`${stylesShutter.fade}`);
        body.style.overflowY = 'hidden';
        await sleep(800);
        router.push(href);
        await sleep(200);
        titleContent?.classList.remove(`${stylesShutter.fade}`);

        await sleep(500);

        body.style.overflowY = 'unset';
        shutter?.classList.remove(`${stylesShutter.transition}`);
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
