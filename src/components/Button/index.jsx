import Image from 'next/image';
import styles from './style.module.scss';
import Magnetic from '../../common/Magnetic';
import React, { forwardRef } from 'react';

const Button = forwardRef(({ children, ...props }, ref) => {
    return (
        <Magnetic>
            <a href="/" className={styles.buttonContainer}>
                <Image
                    ref={ref}
                    {...props}
                    className={styles.buttonbg}
                    src="/svg/buttonbg.svg"
                    width={150}
                    height={90}
                    alt="button background"
                />
                {children}
            </a>
        </Magnetic>
    );
});
Button.displayName = 'Button';

export default Button;
