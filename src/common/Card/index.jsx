import React, { useEffect, useRef, forwardRef } from 'react';
import Image from 'next/image';
import styles from './style.module.scss';
import gsap from 'gsap';

// Utilisation de forwardRef pour permettre le passage de la référence
const Card = forwardRef(({ image, id, children }, ref) => {
    useEffect(() => {}, []);

    return (
        <>
            <div id={id} className={`${styles.card} `} ref={ref}>
                {image && (
                    <div className={styles.container}>
                        <Image
                            className={styles.image}
                            width={400}
                            height={400}
                            alt={'ongles doigts de fée'}
                            src={image}
                        />
                    </div>
                )}
                {children}
            </div>
        </>
    );
});

// Exportation du composant
export default Card;
