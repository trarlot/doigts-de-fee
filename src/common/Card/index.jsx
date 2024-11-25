import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './style.module.scss';
import gsap from 'gsap';

export default function index({ image, id, children }) {
    useEffect(() => {}, []);

    return (
        <>
            <div id={id} className={styles.card}>
                <div className={styles.container}>
                    <Image
                        className={styles.image}
                        width={400}
                        height={400}
                        alt={'ongles doigts de fée'}
                        src={image}
                    />
                </div>
                {children}
            </div>
        </>
    );
}
