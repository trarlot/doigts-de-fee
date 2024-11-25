'use client';

import {
    React,
    useState,
    useContext,
    useLayoutEffect,
    useRef,
    useEffect,
} from 'react';
import Line from '@/svg/line.svg';
import Banner from '../components/Banner/index';
import Intro from '../components/Intro2/index';
import Salon from '../components/Salon/index';
import Planity from '../components/Planity/index';
import styles from './page.module.scss';
import Gallery from '../components/Gallery/index';
import Footer from '../components/Footer/index';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Home() {
    const lenisRef = useRef();

    useEffect(() => {
        AOS.init({
            duration: 500,
        });

        // if (isLoading) {
        //     document.body.style.cursor = 'wait';
        //     setTimeout(() => {
        //         document.body.style.cursor = 'default';
        //         setIsLoading(false);
        //         window.scrollTo(0, 0);
        //     }, 4500);
        // }
    }, []);
    useEffect(() => {
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
        <>
            <main data-main id="main" className={styles.main}>
                <div id="principal" className={styles.principal}></div>
                <Line className={styles.line} />
                {/* <AnimatePresence mode="wait">
                {isLoading && <Preloader />}
                </AnimatePresence> */}
                <Banner />
                <Intro />
                <Planity />
                <Gallery />
                <Salon />
            </main>
            <Footer />
        </>
    );
}
