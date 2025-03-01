import { MenuProvider } from '../components/contexts/MenuContext';
import './globals.css';
import Header from '../components/header/index';
import Shutter from '../common/Shutter';
import styles from './page.module.scss'; // Assurez-vous d'importer vos styles
import HeadBand from '../components/HeadBand/index';
import React from 'react';

export default function Layout({ children }) {
    return (
        <MenuProvider>
            <html lang="en" suppressHydrationWarning>
                <body className={styles.body}>
                    <HeadBand />

                    <Shutter />
                    <Header />
                    {children}
                </body>
            </html>
        </MenuProvider>
    );
}
