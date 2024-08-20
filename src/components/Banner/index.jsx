import Image from 'next/image';
import Title from '@/svg/title.svg';
import '../../app/page.module.scss';
import styles from './style.module.scss';
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLoading } from '../contexts/LoadingContext'; // Assurez-vous que le chemin est correct

gsap.registerPlugin(ScrollTrigger);

export default function Index() {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(`.${styles.container} svg`, {
                y: -500,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                },
            });
        });

        return () => ctx.revert(); // Cleanup
    }, []);

    return (
        <section>
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
        </section>
    );
}
