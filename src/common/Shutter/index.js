'use client';

import Image from 'next/image';
import Title from '@/svg/title.svg';
import styles from './style.module.scss';
import { useRef, useLayoutEffect, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useMenu } from '../../components/contexts/MenuContext';

gsap.registerPlugin(ScrollTrigger);

export default function Index() {
    const { titleName } = useMenu();
    useEffect(() => {
        const shutter = document.querySelector(`.${styles.shutter}`);
        const body = document.querySelector('body');
        const titleContent = document.querySelector(
            `.${styles.titleTransition}`,
        );
        setTimeout(() => {
            titleContent?.classList.remove(`${styles.fade}`);
        }, 700);

        setTimeout(() => {
            body.style.overflowY = 'unset';
            shutter?.classList.remove(`${styles.transition}`);
        }, 1300);
    }, []);

    return (
        <>
            <div className={`${styles.shutter} ${styles.transition}`}></div>
            <p className={`${styles.titleTransition} ${styles.fade}`}>
                {titleName}
            </p>
        </>
    );
}
