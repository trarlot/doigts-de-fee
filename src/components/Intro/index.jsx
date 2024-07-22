import '../../app/page.module.scss';
import styles from './style.module.scss';
import Image from 'next/image';
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Index() {
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(`#${styles.pink}`, {
                rotate: -65,
                scrollTrigger: {
                    trigger: `.${styles.duo}`,
                    start: 'top bottom',
                    end: 'bottom bottom',
                    scrub: true,
                },
            });
            gsap.to(`#${styles.photo}`, {
                rotate: -90,
                scrollTrigger: {
                    trigger: `.${styles.duo}`,
                    start: 'top bottom',
                    end: 'bottom bottom',
                    scrub: true,
                },
            });
            gsap.to(`#${styles.green}`, {
                rotate: -115,
                scrollTrigger: {
                    trigger: `.${styles.duo}`,
                    start: 'top bottom',
                    end: 'bottom bottom',
                    scrub: true,
                },
            });
        });

        return () => ctx.revert(); // Cleanup
    }, []);
    return (
        <>
            <section className={styles.duo}>
                <div className={styles.description}>
                    <p data-aos="fade-up">Bonjour chèr(e) être magique !</p>
                    <p data-aos="fade-up">
                        Moi c’est laurine, je suis esthéticienne depuis plus de
                        7 ans, styliste ongulaire passionnée de beauté et de
                        paillettes. Étant une artiste dans l’âme créer mon
                        onglerie était pour moi une évidence !
                    </p>
                    <p data-aos="fade-up">
                        Je vous donc invite à découvrir mon univers enchanté.
                    </p>
                </div>
                <div className={styles.images}>
                    <Image
                        className={styles.nail}
                        id={styles.pink}
                        width={700}
                        height={2000}
                        alt={'ongle rose'}
                        src={`/assets/pinkNail.png`}
                    />
                    <Image
                        className={styles.nail}
                        id={styles.photo}
                        width={700}
                        height={2000}
                        alt={'ongle laurine'}
                        src={`/assets/photoNail.png`}
                    />
                    <Image
                        className={styles.nail}
                        id={styles.green}
                        width={700}
                        height={2000}
                        alt={'ongle vert'}
                        src={`/assets/greenNail.png`}
                    />
                </div>
            </section>
        </>
    );
}
