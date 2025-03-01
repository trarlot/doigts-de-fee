'use client';

import {
    React,
    useState,
    useContext,
    useLayoutEffect,
    useRef,
    useEffect,
} from 'react';

import Gallery from '../components/Gallery';
import Line from '@/svg/line.svg';
import { createClient } from '../prismicio';

import Banner from '../components/Banner/index';
import Intro from '../components/Intro2/index';
import Salon from '../components/Salon/index';
import stylesSalon from '../components/Salon/style.module.scss';
import Planity from '../components/Planity/index';
import styles from './page.module.scss';
import Footer from '../components/Footer/index';
import stylesFooter from '../components/Footer/style.module.scss';
import gsap from 'gsap';

import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Home() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            const client = createClient();
            try {
                const response = await client.getAllByType('image');
                setImages(response);
            } catch (err) {
                console.log(err);
            }
        };

        fetchImages();
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 500,
        });
    }, []);
    useEffect(() => {
        if (window.history.scrollRestoration) {
            window.history.scrollRestoration = 'manual';
        }
        let path = document.querySelector('#line path');

        let pathLength = path.getTotalLength();

        path.style.strokeDasharray = pathLength;
        window.addEventListener('scroll', () => {
            var scrollPercentage =
                (document.documentElement.scrollTop + document.body.scrollTop) /
                (document.documentElement.scrollHeight -
                    document.documentElement.clientHeight);
            var drawLength = pathLength * scrollPercentage;
            path.style.strokeDashoffset = pathLength - (drawLength - 200);
        });
    }, []);

    return (
        <>
            <main data-main id="main" className={styles.main}>
                <div id="principal" className={styles.principal}></div>

                <div className={styles.container}>
                    <Line className={styles.line} />

                    <Banner />
                    <Planity />
                    <Gallery images={images} />
                    <Salon />
                    <Footer />
                </div>
            </main>
        </>
    );
}
