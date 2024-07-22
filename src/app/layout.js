'use client';
import { Inter } from 'next/font/google';
import { React, useEffect, useRef } from 'react';
import './globals.css';
import Header from '../components/header/index';
import Lenis from 'lenis';
import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
const inter = Inter({ subsets: ['latin'] });
export default function RootLayout({ children }) {
    const lenisRef = useRef(null);

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
                <Header lenisRef={lenisRef} />
                {children}
            </body>
        </html>
    );
}
