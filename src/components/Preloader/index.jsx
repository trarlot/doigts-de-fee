import styles from './style.module.scss';
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { animation, slide } from './animationLogo';
import { motion } from 'framer-motion';
import Logo from '../../../public/svg/logo2.svg';
import Title from '../../../public/svg/title.svg';
export default function Index() {
    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.set('path', {
                autoAlpha: 1,
            });
            gsap.from(
                '#hand,#ring',

                {
                    opacity: 0,
                    stagger: 0.1,
                    duration: 2,
                },
            );

            gsap.from(
                '.style_preloader__SOzM5 svg:nth-child(2) path',

                {
                    opacity: 0,
                    delay: 2.8,
                    stagger: 0.1,
                    duration: 1,
                },
            );

            animation.forEach((e) => {
                gsap.fromTo(
                    e.el,
                    {
                        scale: 0,
                        transformOrigin: e.origin,
                        delay: e.delay,
                        ease: e.ease,
                    },
                    {
                        scale: 1,
                        duration: e.duration,
                        delay: e.delay,
                        ease: e.ease,
                    },
                );
            });
        });
        return () => ctx.revert(); // <-- CLEANUP!
    }, []);
    return (
        <motion.div
            variants={slide}
            initial="initial"
            exit="exit"
            className={styles.preloader}>
            <Logo />
            <Title />
        </motion.div>
    );
}
