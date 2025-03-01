import '../../app/page.module.scss';
import styles from './style.module.scss';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import Button from '../../common/Button';
import Card from '../../common/Card';
import Magnetic from '../../common/Magnetic';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Index({ images }) {
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const svgButtonRef = useRef(null);
    const shape6Ref = useRef(null);
    const plant5Ref = useRef(null);
    console.log(images[0]?.data.nail.url);
    useEffect(() => {
        let ctx = gsap.context(() => {
            const mm = gsap.matchMedia();
            mm.add('(min-width: 1200px)', () => {
                gsap.fromTo(
                    '#' + styles.card1,
                    {
                        opacity: 0,
                        y: 100,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: '#' + styles.card1,
                            start: 'center bottom',
                            toggleActions: 'play none play reverse',
                        },
                    },
                );

                gsap.fromTo(
                    '#' + styles.card2,
                    {
                        opacity: 0,
                        y: 100,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: '#' + styles.card2,
                            start: 'center bottom',
                            toggleActions: 'play none play reverse',
                        },
                    },
                );

                gsap.fromTo(
                    '#' + styles.card3,
                    {
                        opacity: 0,
                        y: 100,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: '#' + styles.card3,
                            start: 'center bottom',
                            toggleActions: 'play none play reverse',
                        },
                    },
                );
            });
            mm.add('(max-width: 1199px) and (min-width: 600px)', () => {
                gsap.fromTo(
                    '#' + styles.card1,
                    {
                        opacity: 0,
                        y: 100,
                    },
                    {
                        opacity: 1,
                        y: 20,
                        duration: 0.5,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: '#' + styles.card1,
                            start: 'center bottom',
                            toggleActions: 'play none play reverse',
                        },
                    },
                );

                gsap.fromTo(
                    '#' + styles.card2,
                    {
                        opacity: 0,
                        y: 100,
                    },
                    {
                        opacity: 1,
                        y: -20,
                        duration: 0.5,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: '#' + styles.card2,
                            start: 'center bottom',
                            toggleActions: 'play none play reverse',
                        },
                    },
                );

                gsap.fromTo(
                    '#' + styles.card3,
                    {
                        opacity: 0,
                        y: 100,
                    },
                    {
                        opacity: 1,
                        y: 20,
                        duration: 0.5,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: '#' + styles.card3,
                            start: 'center bottom',
                            toggleActions: 'play none play reverse',
                        },
                    },
                );
            });
            mm.add('(max-width: 599px)', () => {
                gsap.fromTo(
                    '#' + styles.card1,
                    {
                        opacity: 0,
                        y: 100,
                    },
                    {
                        opacity: 1,
                        y: 10,
                        duration: 0.5,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: '#' + styles.card1,
                            start: 'top center+=25%',
                            toggleActions: 'play none play reverse',
                        },
                    },
                );

                gsap.fromTo(
                    '#' + styles.card2,
                    {
                        opacity: 0,
                        y: 100,
                    },
                    {
                        opacity: 1,
                        y: -10,
                        duration: 0.5,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: '#' + styles.card2,
                            start: 'top center+=25%',
                            toggleActions: 'play none play reverse',
                        },
                    },
                );

                gsap.fromTo(
                    '#' + styles.card3,
                    {
                        opacity: 0,
                        y: 100,
                    },
                    {
                        opacity: 1,
                        y: 10,
                        duration: 0.5,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: '#' + styles.card3,
                            start: 'top center+=25%',
                            toggleActions: 'play none play reverse',
                        },
                    },
                );
            });
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
                        start: 'center bottom',
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
                        start: 'top bottom',
                        toggleActions: 'play none play reverse',
                    },
                },
            );
            gsap.fromTo(
                `#${styles.plant5}`,
                { y: 50 },
                {
                    y: 0,
                    scrollTrigger: {
                        trigger: `#${styles.plant5}`,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1,
                        toggleActions: 'play none play reverse',
                    },
                },
            );
        });

        return () => ctx.revert(); // Cleanup
    }, []);
    return (
        <>
            <section className={styles.duo}>
                <div className={styles.container}>
                    <div className={styles.photos}>
                        <Card
                            image={'/assets/green_nails.jpg'}
                            id={styles.card1}
                        />
                        <Card
                            image={'/assets/red_nails.jpg'}
                            id={styles.card2}
                        />
                        <Card
                            // image={images[0]?.data.nail.url}
                            image={'/assets/ongles-vert-noel.jpg'}
                            id={styles.card3}
                        />
                    </div>
                    <div className={styles.text}>
                        <h2 ref={titleRef}>
                            Laissez-vous inspirer par nos créations…
                        </h2>
                        <p ref={descriptionRef}>
                            Notre galerie est une fenêtre sur l’art de la
                            manucure. Découvrez chaque réalisation pour imaginer
                            le soin qui vous ressemble !
                        </p>
                        <Button
                            transition={true}
                            href="/pages/gallery"
                            page="Gallery"
                            ref={svgButtonRef}>
                            <Magnetic ratio={0.3}>
                                <p className={styles.buttonText}>
                                    <span className={styles.word}>Galerie</span>
                                </p>
                            </Magnetic>
                        </Button>
                    </div>
                </div>
                <Image
                    ref={shape6Ref}
                    id={styles.shape6}
                    src={'/svg/shape6.svg'}
                    width={300}
                    height={300}
                    alt={'ongles doigts de fée'}
                />
                <Image
                    ref={plant5Ref}
                    id={styles.plant5}
                    src={'/svg/plant5.svg'}
                    width={400}
                    height={400}
                    alt={'ongles doigts de fée'}
                />
            </section>
        </>
    );
}
