'use client';
import { Inter } from 'next/font/google';
import styles from './page.module.scss';
import { useEffect, useRef } from 'react';
import './globals.css';
import Header from '../components/header/index';
import Lenis from 'lenis';
import gsap from 'gsap';
import { LoadingProvider } from '../components/contexts/LoadingContext';
import { MenuProvider } from '../components/contexts/MenuContext';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PageTextProvider, usePageText } from '../components/contexts/PageName';

const inter = Inter({ subsets: ['latin'] });

function RootLayoutContent({ children }) {
    const lenisRef = useRef(null);
    const { pageText } = usePageText();

    useEffect(() => {
        const lenis = new Lenis();
        lenisRef.current = lenis;
        lenis.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

        return () => {
            lenis.destroy();
            gsap.ticker.remove(lenis.raf);
        };
    }, []);

    return (
        <html lang="en">
            <body className={inter.className}>
                <div className={styles.shutter}></div>
                <p className={styles.titleTransition}>{pageText}</p>
                <Header lenisRef={lenisRef} />
                {children}
            </body>
        </html>
    );
}

export default function RootLayout({ children }) {
    return (
        <MenuProvider>
            <LoadingProvider>
                <PageTextProvider>
                    <RootLayoutContent>{children}</RootLayoutContent>
                </PageTextProvider>
            </LoadingProvider>
        </MenuProvider>
    );
}
