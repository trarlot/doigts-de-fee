import '../../app/page.module.scss';
import styles from './style.module.scss';
import Image from 'next/image';
import { useRef, useEffect } from 'react';
import Card from '../../common/Card';
import gsap from 'gsap';
import Magnetic from '../../common/Magnetic';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Index() {
    const leafsRef = useRef([]);

    return (
        <section className={styles.footer}>
            <Card id={styles.card} image={'/assets/laurine2.jpg'}>
                <div className={styles.links}>
                    <Magnetic ratio={0.4}>
                        <a
                            href={'https://www.instagram.com/doigtsdefee91'}
                            className={styles.container}>
                            <Image
                                id={styles.shapeInsta1}
                                src={'/svg/shapeInsta1.svg'}
                                alt={'instagram'}
                                width={45}
                                height={50}
                            />
                            <Image
                                id={styles.shapeInsta2}
                                src={'/svg/shapeInsta2.svg'}
                                alt={'instagram'}
                                width={45}
                                height={50}
                            />
                            <Magnetic ratio={0.2}>
                                <Image
                                    id={styles.instagram}
                                    src={'/svg/instagram.svg'}
                                    alt={'instagram'}
                                    width={55}
                                    height={55}
                                />
                            </Magnetic>
                        </a>
                    </Magnetic>
                    <Magnetic ratio={0.2}>
                        <div className={styles.container}>
                            <Image
                                id={styles.shapePhone}
                                src={'/svg/shapePhone.svg'}
                                alt={'phone'}
                                width={120}
                                height={30}
                            />
                            <Magnetic ratio={0.25}>
                                <a
                                    href={'tel:0982598070'}
                                    className={styles.phone}>
                                    09 82 59 80 70
                                </a>
                            </Magnetic>
                        </div>
                    </Magnetic>
                </div>
            </Card>
            <Image
                ref={(el) => (leafsRef.current[0] = el)}
                className={styles.leafs}
                id={styles.leafs1}
                src={'/svg/leafs1.svg'}
                alt={'footer'}
                width={350}
                height={350}
            />
            <Image
                ref={(el) => (leafsRef.current[1] = el)}
                className={styles.leafs}
                id={styles.leafs2}
                src={'/svg/leafs2.svg'}
                alt={'footer'}
                width={350}
                height={350}
            />
            <Image
                ref={(el) => (leafsRef.current[2] = el)}
                className={styles.leafs}
                id={styles.leafs3}
                src={'/svg/leafs3.svg'}
                alt={'footer'}
                width={350}
                height={350}
            />
            <Image
                ref={(el) => (leafsRef.current[3] = el)}
                className={styles.leafs}
                id={styles.leafs4}
                src={'/svg/leafs4.svg'}
                alt={'footer'}
                width={350}
                height={350}
            />
            <Image
                ref={(el) => (leafsRef.current[4] = el)}
                className={styles.leafs}
                id={styles.leafs5}
                src={'/svg/leafs5.svg'}
                alt={'footer'}
                width={350}
                height={350}
            />
        </section>
    );
}
