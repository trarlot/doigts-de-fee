import '../../app/page.module.scss';
import styles from './style.module.scss';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Index() {
    const shape6Ref = useRef(null);
    const plant4Ref = useRef(null);
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(
                [`.${styles.col}`, shape6Ref.current, plant4Ref.current],
                { opacity: 0 },
                {
                    opacity: 1,
                    duration: 0.5,
                    ease: 'power1.inOut',
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: '[data-salon]',
                        start: 'center-=20% bottom',
                        toggleActions: 'restart none play reverse',
                    },
                },
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <section className={styles.container} data-salon-container>
            <div className={styles.salonContainer}>
                <div className={styles.salon} data-salon>
                    <div className={styles.row}>
                        <div className={styles.col}>
                            <div className={styles.title}>
                                <p className={styles.titleText}>
                                    Notre havre de paix...
                                </p>
                            </div>
                        </div>
                        <div className={styles.col}>
                            <Image
                                width={900}
                                height={200}
                                alt={'accueil salon'}
                                src={`/assets/salon2.jpg`}
                            />
                        </div>
                        <div className={styles.col}>
                            <Image
                                width={900}
                                height={200}
                                alt={'accueil salon'}
                                src={`/assets/salon3.jpg`}
                            />
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.col}>
                            <Image
                                width={900}
                                height={200}
                                alt={'accueil salon'}
                                src={`/assets/salon4.jpg`}
                            />
                        </div>
                        <div className={styles.col}>
                            <Image
                                width={900}
                                height={200}
                                alt={'accueil salon'}
                                src={`/assets/salon5.jpg`}
                            />
                        </div>
                    </div>
                </div>
                <Image
                    ref={shape6Ref}
                    id={styles.shape6}
                    width={900}
                    height={200}
                    alt={'accueil salon'}
                    src={`/svg/shape1.svg`}
                />
                <Image
                    ref={plant4Ref}
                    id={styles.plant4}
                    width={900}
                    height={200}
                    alt={'accueil salon'}
                    src={`/svg/plant4.svg`}
                />
            </div>
        </section>
    );
}
