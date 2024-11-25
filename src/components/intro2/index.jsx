import '../../app/page.module.scss';
import styles from './style.module.scss';
import Image from 'next/image';
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Index() {
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const boldRef = useRef(null);
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Create matchMedia instance
            let mm = gsap.matchMedia();

            // Add media query for responsive animations
            mm.add('(min-width: 1250px)', () => {
                // Animation for larger screens
                gsap.to(`#${styles.plant2}`, {
                    y: 500,
                    scrollTrigger: {
                        trigger: `.${styles.intro}`,
                        start: 'center bottom-=20%',
                        end: 'bottom top',
                        scrub: 1,
                    },
                });
            });

            mm.add('(max-width: 1250px)', () => {
                // Animation for smaller screens
                gsap.to(`#${styles.plant2}`, {
                    y: 400,
                    scrollTrigger: {
                        trigger: `.${styles.intro}`,
                        start: 'center bottom-=20%',
                        end: 'bottom top',
                        scrub: 1,
                    },
                });
            });

            // Split text into characters

            gsap.fromTo(
                [titleRef.current],
                { opacity: 0 },
                {
                    opacity: 1,
                    duration: 0.5,
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: 'bottom+=100px bottom',
                        toggleActions: 'play none play reverse',
                    },
                },
            );

            gsap.fromTo(
                [descriptionRef.current],
                { opacity: 0 },
                {
                    opacity: 1,
                    duration: 0.5,

                    scrollTrigger: {
                        trigger: descriptionRef.current,
                        start: 'bottom+=100px bottom',
                        toggleActions: 'play none play reverse',
                    },
                },
            );

            gsap.fromTo(
                [boldRef.current],
                { opacity: 0 },
                {
                    opacity: 1,

                    duration: 0.5,
                    scrollTrigger: {
                        trigger: boldRef.current,
                        start: 'bottom+=100px bottom',
                        toggleActions: 'play none play reverse',
                    },
                },
            );

            gsap.to(`#${styles.plant1}`, {
                y: -300,
                scrollTrigger: {
                    trigger: `.${styles.intro}`,
                    start: 'top bottom+=25%',
                    end: 'bottom top',
                    scrub: 1,
                },
            });
        });

        // Move mm declaration outside of gsap.context
        let mm = gsap.matchMedia();

        return () => {
            ctx.revert(); // Cleanup
            mm.revert(); // Revert matchMedia
        };
    }, []);
    return (
        <>
            <section className={styles.intro}>
                <Image
                    id={styles.shape1}
                    src={'/svg/shape1.svg'}
                    alt={'tache verte'}
                    width={300}
                    height={300}
                />
                <Image
                    id={styles.plant1}
                    src={'/svg/plant1.svg'}
                    alt={'silhouette feuille'}
                    width={300}
                    height={300}
                />

                <h2 ref={titleRef}>Bonjour chèr(e) être magique...</h2>
                <p className={styles.description} ref={descriptionRef}>
                    Je suis Laurine, esthéticienne depuis plus de 7 ans,
                    styliste ongulaire passionnée de beauté et de paillettes.
                    Étant une artiste dans l’âme créer mon onglerie était pour
                    moi une évidence !
                </p>
                <p ref={boldRef} className={styles.bold}>
                    Je vous invite donc à découvrir mon univers enchanté.
                </p>
                <Image
                    id={styles.shape2}
                    src={'/svg/shape2.svg'}
                    alt={'tache verte'}
                    width={100}
                    height={170}
                />
                <Image
                    id={styles.shape3}
                    src={'/svg/shape3.svg'}
                    alt={'tache verte'}
                    width={100}
                    height={170}
                />
                <Image
                    id={styles.plant2}
                    src={'/svg/plant2.svg'}
                    alt={'silhouette feuille'}
                    width={400}
                    height={400}
                />
            </section>
        </>
    );
}
