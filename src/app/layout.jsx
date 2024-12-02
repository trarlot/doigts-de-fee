'use client';
import { Inter } from 'next/font/google';
import styles from './page.module.scss';
import HeadBand from '../components/HeadBand';
import './globals.css';
import Header from '../components/header/index';
import { MenuProvider, useMenu } from '../components/contexts/MenuContext';
import Shutter from '../common/Shutter';
const inter = Inter({ subsets: ['latin'] });

function RootLayoutContent({ children }) {
    return (
        <html lang="en">
            <body className={styles.body}>
                <Shutter />
                <HeadBand />
                <Header />
                {children}
            </body>
        </html>
    );
}

export default function RootLayout({ children }) {
    return (
        <MenuProvider>
            <RootLayoutContent>{children}</RootLayoutContent>
        </MenuProvider>
    );
}
