import '../../app/page.module.scss';
import styles from './style.module.scss';
import Image from 'next/image';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Index() {
    const btn1Ref = useRef();
    const btn2Ref = useRef();
    const btn3Ref = useRef();
    const btn4Ref = useRef();
    const btn5Ref = useRef();
    const instagramRef = useRef();

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(
                [
                    btn1Ref.current,
                    btn2Ref.current,
                    btn3Ref.current,
                    btn4Ref.current,
                    btn5Ref.current,
                ],
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: `.${styles.footer}`,
                        start: 'top bottom',
                        end: 'bottom bottom',
                        scrub: 5,
                    },
                },
            );
        });

        return () => ctx.revert();
    }, []);

    const triggerHover = () => {
        instagramRef.current.path.style.fill = '$beige-light';
    };
    return (
        <section className={styles.footer}>
            <div className={styles.container}>
                <a
                    ref={btn1Ref}
                    id={styles.logo}
                    className={styles.button}
                    href="/">
                    <Image
                        className={styles.logo}
                        src="/assets/logo.png"
                        alt="doigts de fée logo"
                        width={100}
                        height={100}
                    />
                </a>
                <div ref={btn2Ref} id={styles.hours} className={styles.button}>
                    <div className={styles.hover}></div>
                    <p>
                        <span>Lundi - Vendredi :</span> 9h - 19h
                        <br />
                        <span>Samedi :</span> 9h - 18h
                    </p>
                </div>
                <a
                    ref={btn3Ref}
                    id={styles.address}
                    className={styles.button}
                    target="_blank"
                    href="https://www.google.fr/maps/place/Doigts+de+Fée/@48.6362818,2.3336313,17z/data=!3m1!4b1!4m6!3m5!1s0x47e5d969f2f1bb9f:0x3911d361f0f18fac!8m2!3d48.6362818!4d2.3336313!16s%2Fg%2F11pxlmbv6k?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D">
                    <div className={styles.hover}></div>
                    <p>
                        165 route de Corbeil, 91700,
                        <br />
                        Sainte-Geneviève-des-Bois
                    </p>
                </a>
                <div className={styles.contact}>
                    <a
                        ref={btn4Ref}
                        className={styles.button}
                        href="tel:0982598070">
                        <Image
                            src="/svg/telephone-icon.svg"
                            alt="telephone icon"
                            width={50}
                            height={50}
                        />
                    </a>
                    <a
                        ref={btn5Ref}
                        target="_blank"
                        href="https://www.instagram.com/doigtsdefee91/?hl=fr"
                        className={styles.button}>
                        <Image
                            src="/svg/instagram-icon.svg"
                            alt="instagram icon"
                            width={50}
                            height={50}
                        />
                    </a>
                </div>
            </div>
            <p className={styles.copyright}>
                &copy; 2024 Doigts de Fée - Tous droits réservés
            </p>
        </section>
        // <section className={styles.container}>
        //     <div className={styles.footer}>
        //         <div className={styles.logo}>
        //             <Image
        //                 src="/assets/logo_doigtsdefee.png"
        //                 alt="logo"
        //                 width={500}
        //                 height={500}
        //             />
        //         </div>
        //         <div className={styles.info}>
        //             <h3>Contact</h3>

        //             <div className={styles.infos}>
        //                 <div className={styles.row}>
        //                     <p className={styles.bold}>Tel : </p>
        //                     <a href="tel:0982598070">09 82 59 80 70</a>
        //                 </div>
        //                 <div className={styles.row}>
        //                     <p className={styles.bold}>Adresse : </p>
        //                     <a
        //                         href="https://maps.app.goo.gl/opTVWwbfx2Cm92ov5"
        //                         target="_blank">
        //                         165 route de Corbeil, 91700,<br></br>
        //                         Sainte-Geneviève-des-Bois
        //                     </a>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className={styles.info}>
        //             <h3>Horaires</h3>

        //             <div className={styles.infos}>
        //                 <div className={styles.row}>
        //                     <p className={styles.bold}>Lundi : </p>
        //                     <p>14h - 19h</p>
        //                 </div>
        //                 <div className={styles.row}>
        //                     <p className={styles.bold}>Mardi - Vendredi : </p>
        //                     <p>10h - 19h</p>
        //                 </div>
        //                 <div className={styles.row}>
        //                     <p className={styles.bold}>Samedi : </p>
        //                     <p>10h - 18h</p>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className={styles.info}>
        //             <h3>Réseaux</h3>
        //             <a
        //                 href="https://www.instagram.com/doigtsdefee/"
        //                 target="_blank">
        //                 <svg
        //                     src="/svg/instagram.svg"
        //                     width="23"
        //                     height="23"
        //                     viewBox="0 0 23 23"
        //                     fill="none"
        //                     xmlns="http://www.w3.org/2000/svg">
        //                     <path
        //                         d="M6.79545 0C3.0488 0 0 3.0488 0 6.79545L0 16.2045C0 19.9512 3.0488 23 6.79545 23H16.2045C19.9512 23 23 19.9512 23 16.2045V6.79545C23 3.0488 19.9512 0 16.2045 0L6.79545 0ZM6.79545 0.5L16.2045 0.5C19.3861 0.5 22.5 3.61388 22.5 6.79546V16.2045C22.5 19.3861 19.3861 22.5 16.2045 22.5H6.79545C3.61388 22.5 0.5 19.1816 0.5 16L0.5 6.59091C0.5 3.40934 3.61388 0.5 6.79545 0.5ZM17.7727 4.18182C17.4955 4.18182 17.1961 4.30394 17 4.5C16.8039 4.69606 16.7273 4.95 16.7273 5.22727C16.7273 5.50454 16.8374 5.77046 17.0335 5.96652C17.2295 6.16258 17.4955 6.27273 17.7727 6.27273C18.05 6.27273 18.3159 6.16258 18.512 5.96652C18.708 5.77046 18.8182 5.50454 18.8182 5.22727C18.8182 4.95 18.708 4.68409 18.512 4.48802C18.3159 4.29196 18.05 4.18182 17.7727 4.18182ZM11.5 5.75C8.33055 5.75 5.75 8.33055 5.75 11.5C5.75 14.6694 8.33055 17.25 11.5 17.25C14.6694 17.25 17.25 14.6694 17.25 11.5C17.25 8.33055 14.6694 5.75 11.5 5.75ZM11.5 6.27273C14.1044 6.27273 16.2045 8.89556 16.2045 11.5C16.2045 14.1044 14.1044 17 11.5 17C8.89556 17 6.79545 14.1044 6.79545 11.5C6.79545 8.89556 8.89556 6.27273 11.5 6.27273Z"
        //                         fill="black"
        //                     />
        //                 </svg>
        //             </a>
        //         </div>
        //     </div>
        //     <p className={styles.copyright}>
        //         &copy; 2024 Doigts de Fée - Tous droits réservés
        //     </p>
        // </section>
    );
}
