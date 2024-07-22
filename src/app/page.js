'use client';

import { React, useState, useLayoutEffect, useEffect } from 'react';
import Preloader from '../components/Preloader/index';
import Line from '@/svg/line.svg';
import { AnimatePresence } from 'framer-motion';
import Banner from '../components/Banner/index';
import Intro from '../components/Intro/index';
import Salon from '../components/Salon/index';
import styles from './page.module.scss';
import 'aos/dist/aos.css';
import AOS from 'aos';
export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        AOS.init({
            duration: 500,
        });
        setTimeout(() => {
            document.body.style.cursor = 'default';
            console.log('salut');
            setIsLoading(false);
            window.scrollTo(0, 0);
        }, 4500);
    }, []);
    useLayoutEffect(() => {
        let path = document.querySelector('#line path');
        let pathLength = path.getTotalLength();
        path.style.strokeDasharray = pathLength + ' ' + pathLength;
        path.style.strokeDasharray = pathLength;
        window.addEventListener('scroll', () => {
            var scrollPercentage =
                (document.documentElement.scrollTop + document.body.scrollTop) /
                (document.documentElement.scrollHeight -
                    document.documentElement.clientHeight);
            var drawLength = pathLength * scrollPercentage;
            path.style.strokeDashoffset = pathLength - drawLength;
        });
    }, []);

    return (
        <main id="main" className={styles.main}>
            <div id="principal" className={styles.principal}></div>
            <Line className={styles.line} />
            <AnimatePresence mode="wait">
                {isLoading && <Preloader />}
            </AnimatePresence>
            <Banner />
            <Intro />
            <Salon />
        </main>
    );
}
