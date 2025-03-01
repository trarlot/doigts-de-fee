import Image from 'next/image';
import Title from '@/svg/title.svg';
import '../../app/page.module.scss';
import styles from './style.module.scss';
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../../common/Button';
import Magnetic from '../../common/Magnetic';

gsap.registerPlugin(ScrollTrigger);

export default function Index() {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

            tl.fromTo(
                [`.${styles.title}`, `.${styles.subtitle}`],
                { opacity: 0 },
                { delay: 1.4, opacity: 1, duration: 0.8, stagger: 0.3 },
            );
        });

        return () => ctx.revert(); // Cleanup
    }, []);

    return (
        <>
            <div ref={containerRef} className={styles.container}>
                <div className={styles.bannerContainer}>
                    <Image
                        className={styles.banner}
                        width={1300}
                        height={1080}
                        alt={'banner'}
                        src={`/assets/brown_nails.jpg`}
                    />
                </div>
                <div className={styles.content}>
                    <div className={styles.text}>
                        <p className={styles.title}>Doigts de fée</p>
                        <p className={styles.subtitle}>
                            Offrez à vos mains une touche de magie
                        </p>
                        {/* <div className={styles.button}>
                            <Button>
                                <Magnetic ratio={0.3}>
                                    <p className={styles.buttonText}>
                                        Réserver
                                    </p>
                                </Magnetic>
                            </Button>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
}
