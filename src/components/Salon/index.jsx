import '../../app/page.module.scss';
import styles from './style.module.scss';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Index() {
    useLayoutEffect(() => {
        const mm = gsap.matchMedia();

        // Ajouter des media queries spécifiques
        mm.add(
            {
                isDesktop: '(min-width: 450px)',
                isMobile: '(max-width: 449px)',
            },
            (context) => {
                let { isDesktop, isMobile } = context.conditions;

                if (isDesktop) {
                    const pedicure = document.querySelector(
                        `#${styles.pedicure}`,
                    );
                    const manucure = document.querySelector(
                        `#${styles.manucure}`,
                    );
                    const accueil = document.querySelector(
                        `#${styles.accueil}`,
                    );

                    const pedicureAnimation = gsap.to(`#${styles.pedicure}`, {
                        y: pedicure.offsetHeight / 2,
                        scrollTrigger: {
                            trigger: `#${styles.pedicure}`,
                            start: 'center center',
                            end: 'bottom top',
                            scrub: true,
                            id: 'pedicureAnimation', // Nom unique pour l'animation
                        },
                    });

                    const manucureAnimation = gsap.to(`#${styles.manucure}`, {
                        y: manucure.offsetHeight / 2,
                        scrollTrigger: {
                            trigger: `#${styles.manucure}`,
                            start: 'center center',
                            end: 'bottom top',
                            scrub: true,
                            id: 'manucureAnimation', // Nom unique pour l'animation
                        },
                    });

                    const accueilAnimation = gsap.to(`#${styles.accueil}`, {
                        y: accueil.offsetHeight / 2,
                        scrollTrigger: {
                            trigger: `#${styles.accueil}`,
                            start: 'center center',
                            end: 'bottom top',
                            scrub: true,
                            id: 'accueilAnimation', // Nom unique pour l'animation
                        },
                    });
                } else {
                    // Désactiver spécifiquement les animations GSAP pour les écrans inférieurs à 800px
                    ScrollTrigger.getById('pedicureAnimation')?.kill();
                    ScrollTrigger.getById('manucureAnimation')?.kill();
                    ScrollTrigger.getById('accueilAnimation')?.kill();
                }
            },
        );

        return () => {
            // Cleanup
            mm.revert();
        };
    }, []);

    return (
        <section className={styles.salon}>
            <h2 data-aos="fade-up" className={styles.title}>
                Le Salon
            </h2>
            <div id={styles.accueil} className={styles.container}>
                <Image
                    data-aos="fade-up"
                    className={styles.image}
                    width={975}
                    height={700}
                    alt={'accueil salon'}
                    src={`/assets/accueil_salon.png`}
                />
            </div>
            <div id={styles.manucure} className={styles.container}>
                <Image
                    data-aos="fade-up"
                    className={styles.image}
                    width={700}
                    height={680}
                    alt={'manucure salon'}
                    src={`/assets/manucure_salon.png`}
                />
            </div>
            <div id={styles.pedicure} className={styles.container}>
                <Image
                    data-aos="fade-up"
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
