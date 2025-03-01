import styles from './style.module.scss';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Card from '../../../common/Card';
import { useMenu } from '../../contexts/MenuContext';
import { TransitionLink } from '../../../app/utils/TransitionLink';
import { useEffect, useRef, useState } from 'react';

export default function index() {
    const path = usePathname();
    const { isActive, setIsActive } = useMenu();
    const cardRef = useRef(null);

    const handleClickOutside = (event) => {
        if (cardRef.current && !cardRef.current.contains(event.target)) {
            setIsActive(false);
        }
    };

    useEffect(() => {
        if (isActive) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isActive]);

    const navItems = [
        {
            title: 'Accueil',
            href: '/',
        },
        {
            title: 'Galerie',
            href: '/pages/gallery',
        },
    ];

    return (
        <div className={styles.menu}>
            <div id="container" className={styles.container}>
                <Card
                    image="/assets/tropicalbg.png"
                    id={styles.card}
                    ref={cardRef}
                    onClick={() => setIsActive(!isActive)}>
                    <div className={styles.links}>
                        {navItems.map((data) => {
                            return (
                                <div
                                    key={data.href}
                                    className={styles.linkContainer}>
                                    {/* <Image
                                        className={styles.buttonbg}
                                        width={100}
                                        height={100}
                                        alt={'ongles doigts de fée'}
                                        src={'/svg/buttonbg.svg'}
                                    /> */}
                                    <TransitionLink
                                        href={data.href}
                                        title={data.title}>
                                        {data.title}
                                    </TransitionLink>
                                </div>
                            );
                        })}
                    </div>
                </Card>
            </div>
        </div>
    );
}
