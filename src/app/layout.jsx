'use client';
import { Inter } from 'next/font/google';
import styles from './page.module.scss';
import { useEffect, useRef } from 'react';
import './globals.css';
import Header from '../components/header/index';
import { LoadingProvider } from '../components/contexts/LoadingContext';
import { MenuProvider, useMenu } from '../components/contexts/MenuContext';

const inter = Inter({ subsets: ['latin'] });

function RootLayoutContent({ children }) {
    const { titleName } = useMenu();

    return (
        <html lang="en">
            <body className={inter.className}>
                <div className={styles.shutter}></div>
                <p className={styles.titleTransition}>{titleName}</p>
                <Header />
                {children}
            </body>
        </html>
    );
}

export default function RootLayout({ children }) {
    return (
        <MenuProvider>
            <LoadingProvider>
                <RootLayoutContent>{children}</RootLayoutContent>
            </LoadingProvider>
        </MenuProvider>
    );
}
