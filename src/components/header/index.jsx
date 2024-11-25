'use client';
import { useLayoutEffect, useRef } from 'react';
import styles from './style.module.scss';
import Nav from './nav/index';
import Image from 'next/image';
import gsap from 'gsap';
import Magnetic from '../../common/Magnetic';
import { TransitionLink } from '../../app/utils/TransitionLink';
import { useMenu } from '../contexts/MenuContext';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePathname } from 'next/navigation';

export default function index() {
    const path = usePathname();
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
    const button = useRef(null);
    const { isActive, setIsActive } = useMenu();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);
            gsap.to(button.current, {
                scrollTrigger: {
                    trigger: document.documentElement,
                    start: 0,
                    end: 500,
                    onLeave: () => {
                        gsap.to(button.current, {
                            scale: 1,
                            duration: 0.3,
                            ease: 'power1.out',
                        });
                    },
                    onEnterBack: () => {
                        gsap.to(
                            button.current,
                            { scale: 0, duration: 0.3, ease: 'power1.out' },
                            setIsActive(false),
                        );
                    },
                },
            });

            return () => ctx.revert(); // Cleanup
        });
        const main = document.getElementById('main');
        if (main) {
            const rippleElement = document.querySelector('.myRipple');
            const rippleDiv = document.createElement('div');
            const principal = document.getElementById('principal');
            const body = document.getElementsByTagName('body')[0];
            const rect = main.getBoundingClientRect();
            const container = document.getElementById('container');
            const menu = document.getElementsByClassName(`${styles.menu}`)[0];
            const logo = document.getElementsByClassName(`${styles.logo}`)[0];
            const windowHeight = window.innerHeight;
            let origin = windowHeight - rect.top;
            menu.style.color = 'white';
            logo.style.filter = 'none';

            if (isActive) {
                body.style.overflowY = 'hidden ';
                menu.style.color = 'black';
                logo.style.filter = 'invert(1)';
                origin - window.innerHeight < 500
                    ? (main.style.transform =
                          'rotate(-10deg) translate(-250px, -150px)')
                    : (main.style.transform =
                          'rotate(-10deg) translate(-250px, 0px)');
                main.style.transformOrigin = '100vw ' + origin + 'px';
                main.classList.add('displayMenu');
                principal.style.opacity = '70%';
                container.style.opacity = '100%';
            } else {
                body.style.overflowY = 'unset';
                menu.style.color = 'white';
                logo.style.filter = 'unset';
                main.classList.remove('displayMenu');
                main.style.transform = 'unset';
                principal.style.opacity = '0%';
                container.style.opacity = '0%';
            }
            rippleDiv.classList.add(`${styles.ripple}`);
            rippleElement.insertAdjacentElement('beforeBegin', rippleDiv);

            setTimeout(function () {
                rippleDiv.parentElement.removeChild(rippleDiv);
            }, 900);
        }
    }, [isActive]);

    return (
        <>
            <div className={styles.header}>
                <Image
                    className={styles.logo}
                    src="/svg/logo2.svg"
                    width={100}
                    height={80}
                    alt="logo"
                    priority
                />
                <div className={styles.nav}>
                    {navItems.map((data, index) => {
                        return (
                            <div
                                className={styles.linkContainer}
                                key={data.href}>
                                <TransitionLink
                                    href={data.href}
                                    title={data.title}>
                                    {data.title}
                                </TransitionLink>

                                {path === data.href && (
                                    <div className={styles.activeDot}></div>
                                )}
                            </div>
                        );
                    })}
                </div>
                <div
                    className={styles.menu}
                    onClick={(e) => {
                        setIsActive(!isActive);
                    }}>
                    Menu
                </div>
            </div>
            <div ref={button} className={styles.containerButton}>
                <Magnetic>
                    <div
                        className={`${styles.button}`}
                        onClick={(e) => {
                            setIsActive(!isActive);
                        }}>
                        <div
                            className={`${
                                styles.burger
                            } myRipple button_animation ${
                                isActive ? styles.burgerActive : ''
                            }`}></div>
                    </div>
                </Magnetic>
            </div>
            <Nav />
        </>
    );
}
