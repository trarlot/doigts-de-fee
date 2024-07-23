import Image from 'next/image';
import Title from '@/svg/title.svg';
import '../../app/page.module.scss';
import styles from './style.module.scss';
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { slideUp } from './animation';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

export default function Index() {
    const containerRef = useRef(null);
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(`.${styles.container} svg`, {
                y: -500,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top-=300px top',
                    end: 'bottom top',
                    scrub: true,
                },
            });
        });

        return () => ctx.revert(); // Cleanup
    }, []);

    return (
        <motion.section variants={slideUp} initial="initial" animate="enter">
            <div ref={containerRef} className={styles.container}>
                <Image
                    className={styles.banner}
                    fill={true}
                    style={{ objectFit: 'cover', objectPosition: '34%' }}
                    alt={'banner'}
                    src={`/assets/banner_doigtsdefee.png`}
                />
                <Title />
            </div>
        </motion.section>
    );
}
