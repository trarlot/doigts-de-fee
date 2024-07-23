'use client';
import { useState, useLayoutEffect, useRef } from 'react';
import styles from './style.module.scss';
import Nav from './nav/index';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function index({ lenisRef }) {
    const button = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const handleClick = (e) => {
        const rippleElement = document.querySelector('.myRipple');
        const rippleDiv = document.createElement('div');
        const main = document.getElementById('main');
        const principal = document.getElementById('principal');
        const body = document.getElementsByTagName('body')[0];
        const rect = main.getBoundingClientRect();
        const container = document.getElementById('container');
        const windowHeight = window.innerHeight;
        let origin = windowHeight - rect.top;
        if (!isActive) {
            body.style.overflowY = 'hidden';
            console.log(origin - window.innerHeight);
            origin - window.innerHeight < 500
                ? (main.style.transform =
                      'rotate(-10deg) translate(-250px, -150px)')
                : (main.style.transform =
                      'rotate(-10deg) translate(-250px, 0px)');
            main.style.transformOrigin = '100vw ' + origin + 'px';
            main.classList.add('displayMenu');
            principal.style.opacity = '70%';
            container.style.opacity = '100%';

            if (lenisRef.current) {
                lenisRef.current.stop();
            }
        } else {
            body.style.overflowY = 'unset';
            main.classList.remove('displayMenu');
            main.style.transform = 'unset';
            principal.style.opacity = '0%';
            container.style.opacity = '0%';
            if (lenisRef.current) {
                lenisRef.current.start();
            }
        }
        rippleDiv.classList.add(`${styles.ripple}`);
        rippleElement.insertAdjacentElement('beforeBegin', rippleDiv);

        setTimeout(function () {
            rippleDiv.parentElement.removeChild(rippleDiv);
        }, 900);
    };
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
    }, []);

    return (
        <>
            <div className={styles.header}>
                <Image
                    className={styles.logo}
                    src="/svg/logo.svg"
                    width={120}
                    height={100} // Set a fixed height
                    alt="logo"
                    priority
                />
                <div className={styles.nav}>
                    <div className={styles.el}>
                        <a>Acceuil</a>
                    </div>

                    <div className={styles.el}>
                        <a>Galerie</a>
                    </div>

                    <div className={styles.el}>
                        <a>Tarifs</a>
                    </div>
                </div>
                <div
                    className={styles.menu}
                    onClick={(e) => {
                        setIsActive(!isActive);
                        handleClick(e);
                    }}>
                    Menu
                </div>
            </div>
            <div ref={button} className={styles.containerButton}>
                <div
                    className={`${styles.button} myRipple button_animation`}
                    onClick={(e) => {
                        setIsActive(!isActive);
                        handleClick(e);
                    }}>
                    <div
                        className={`${styles.burger} ${
                            isActive ? styles.burgerActive : ''
                        }`}></div>
                </div>
            </div>
            <Nav />
        </>
    );
}
