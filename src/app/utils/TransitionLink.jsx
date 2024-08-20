'use client';
import Link from 'next/link';
import styles from '../page.module.scss';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useMenu } from '../../components/contexts/MenuContext';
import { usePageText } from '../../components/contexts/PageName';
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export const TransitionLink = ({ children, title, href, ...props }) => {
    const router = useRouter();
    const { isActive, setIsActive } = useMenu();
    const { setPageText } = usePageText();

    const handleTransition = async (e) => {
        e.preventDefault();
        setPageText(title);
        if (isActive) {
            setIsActive(false);
        }
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
        titleContent?.classList.remove(`${styles.fade}`);

        await sleep(800);

        body.style.overflowY = 'unset';
        shutter?.classList.remove(`${styles.transition}`);
    };

    return (
        <Link {...props} href={href} onClick={handleTransition}>
            {children}
        </Link>
    );
};
