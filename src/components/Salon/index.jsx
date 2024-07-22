import '../../app/page.module.scss';
import styles from './style.module.scss';
import Image from 'next/image';
import gsap from 'gsap';
import Leaf5 from '@/svg/leaf5.svg';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useLayoutEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Index() {
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const pedicure = document.querySelector(`#${styles.pedicure}`);
            const manucure = document.querySelector(`#${styles.manucure}`);
            const accueil = document.querySelector(`#${styles.accueil}`);
            gsap.to(`#${styles.pedicure}`, {
                y: pedicure.offsetHeight / 2,
                scrollTrigger: {
                    trigger: `#${styles.pedicure}`,
                    start: 'center center',
                    end: 'bottom top',
                    scrub: true,
                },
            });
            gsap.to(` #${styles.manucure}`, {
                y: manucure.offsetHeight / 2,
                scrollTrigger: {
                    trigger: `#${styles.manucure}`,
                    start: 'center center',
                    end: 'bottom top',
                    scrub: true,
                },
            });
            gsap.to(`#${styles.accueil}`, {
                y: accueil.offsetHeight / 2,
                scrollTrigger: {
                    trigger: `#${styles.accueil}`,
                    start: 'center center',
                    end: 'bottom top',
                    scrub: true,
                },
            });
        });

        return () => ctx.revert(); // Cleanup
    }, []);

    return (
        <section className={styles.salon}>
            <h2 data-aos="fade-up" className={styles.title}>
                Le Salon
            </h2>
            <div id={styles.accueil} className={styles.container}>
                <Image
                    className={styles.image}
                    width={975}
                    height={700}
                    alt={'accueil salon'}
                    src={`/assets/accueil_salon.png`}
                />
            </div>
            <div id={styles.manucure} className={styles.container}>
                <Image
                    className={styles.image}
                    width={700}
                    height={680}
                    alt={'manucure salon'}
                    src={`/assets/manucure_salon.png`}
                />
            </div>
            <div id={styles.pedicure} className={styles.container}>
                <Image
                    className={styles.image}
                    width={700}
                    height={975}
                    alt={'pedicure salon'}
                    src={`/assets/pedicure_salon.png`}
                />
            </div>
        </section>
    );
}
