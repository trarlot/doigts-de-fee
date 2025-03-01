import '../../app/page.module.scss';
import styles from './style.module.scss';
import Image from 'next/image';
import { useRef, useEffect } from 'react';
import Button from '../../common/Button/index';
import gsap from 'gsap';
import Magnetic from '../../common/Magnetic';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Index() {
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const svgButtonRef = useRef(null);
    const imageRef = useRef(null);
    const shape4Ref = useRef(null);
    const plant3Ref = useRef(null);
    const shape5Ref = useRef(null);
    const plant4Ref = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            mm.add('(min-width: 1200px)', () => {
                // Original animations for screens wider than 800px
                gsap.fromTo(
                    titleRef.current,
                    { opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.5,
                        scrollTrigger: {
                            trigger: titleRef.current,
                            start: 'bottom bottom',
                            toggleActions: 'play none play reverse',
                        },
                    },
                );
                gsap.fromTo(
                    descriptionRef.current,
                    { opacity: 0 },
                    {
                        opacity: 1,
                        duration: 0.5,
                        scrollTrigger: {
                            trigger: descriptionRef.current,
                            start: 'bottom bottom',
                            toggleActions: 'play none play reverse',
                        },
                    },
                );

                gsap.fromTo(
                    [svgButtonRef.current, `.${styles.word}`],
                    { opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.3,
                        stagger: 0.2,
                        scrollTrigger: {
                            trigger: `.${styles.buttonText}`,
                            start: 'bottom bottom',
                            toggleActions: 'play none play reverse',
                        },
                    },
                );

                gsap.fromTo(
                    [imageRef.current, plant3Ref.current, shape4Ref.current],
                    { opacity: 0 },
                    {
                        opacity: 1,
                        duration: 0.5,
                        scrollTrigger: {
                            trigger: titleRef.current,
                            start: 'bottom bottom',
                            toggleActions: 'play none play reverse',
                        },
                    },
                );

                gsap.to(plant4Ref.current, {
                    y: 340,
                    scrollTrigger: {
                        trigger: `.${styles.duo}`,
                        start: 'bottom bottom',
                        end: 'bottom top',
                        scrub: 1,
                    },
                });
            });

            mm.add('(max-width: 1199px)', () => {
                // Variant animations for screens narrower than 800px
                gsap.fromTo(
                    titleRef.current,
                    { opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.5,
                        scrollTrigger: {
                            trigger: titleRef.current,
                            start: 'bottom bottom',
                            toggleActions: 'play none play reverse',
                        },
                    },
                );
                gsap.fromTo(
                    descriptionRef.current,
                    { opacity: 0 },
                    {
                        opacity: 1,
                        duration: 0.5,
                        scrollTrigger: {
                            trigger: descriptionRef.current,
                            start: 'bottom bottom',
                            toggleActions: 'play none play reverse',
                        },
                    },
                );

                gsap.fromTo(
                    [svgButtonRef.current, `.${styles.word}`],
                    { opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.3,
                        stagger: 0.2,
                        scrollTrigger: {
                            trigger: `.${styles.buttonText}`,
                            start: 'bottom bottom',
                            toggleActions: 'play none play reverse',
                        },
                    },
                );

                gsap.fromTo(
                    [imageRef.current, plant3Ref.current, shape4Ref.current],
                    { opacity: 0 },
                    {
                        opacity: 1,
                        duration: 0.5,

                        scrollTrigger: {
                            trigger: imageRef.current,
                            start: 'center bottom',
                            toggleActions: 'play none play reverse',
                        },
                    },
                );

                gsap.to(plant4Ref.current, {
                    y: 340,
                    scrollTrigger: {
                        trigger: `.${styles.duo}`,
                        start: 'bottom bottom',
                        end: 'bottom top',
                        scrub: 1,
                    },
                });
            });
        });

        return () => ctx.revert(); // Cleanup
    }, []);
    return (
        <>
            <section className={styles.duo}>
                <div className={styles.container}>
                    <div className={styles.text}>
                        <h2 ref={titleRef}>
                            Un moment enchanté vous attend...
                        </h2>
                        <p ref={descriptionRef}>
                            Pour explorer nos soins et consulter nos tarifs,
                            laissez-vous guider jusqu'à notre espace de
                            réservation.
                        </p>
                        <Button
                            target={true}
                            href="https://www.planity.com/doigts-de-fee-91700-sainte-genevieve-des-bois"
                            ref={svgButtonRef}>
                            <Magnetic ratio={0.2}>
                                <p className={styles.buttonText}>
                                    <span className={styles.word}>Planity</span>
                                </p>
                            </Magnetic>
                        </Button>
                    </div>

                    <Image
                        ref={shape4Ref}
                        className={styles.shape4}
                        width={200}
                        height={300}
                        alt={'ongles doigts de fée'}
                        src={'/svg/shape4.svg'}
                    />
                    <Image
                        ref={plant3Ref}
                        className={styles.plant3}
                        width={200}
                        height={300}
                        alt={'ongles doigts de fée'}
                        src={'/svg/plant3.svg'}
                    />
                    <div className={styles.container_image}>
                        <Image
                            ref={imageRef}
                            className={styles.image}
                            width={1000}
                            height={1000}
                            alt={'ongles doigts de fée'}
                            src={'/assets/nails_planity.jpg'}
                        />
                    </div>
                </div>
                <Image
                    id={styles.shape5}
                    width={200}
                    height={300}
                    alt={'ongles doigts de fée'}
                    src={'/svg/shape5.svg'}
                />
                <Image
                    ref={plant4Ref}
                    id={styles.plant4}
                    width={200}
                    height={300}
                    alt={'ongles doigts de fée'}
                    src={'/svg/plant4.svg'}
                />
            </section>
        </>
    );
}
