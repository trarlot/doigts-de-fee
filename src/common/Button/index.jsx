import Image from 'next/image';
import styles from './style.module.scss';
import Magnetic from '../Magnetic';
import stylesShutter from '../Shutter/style.module.scss';
import React, { forwardRef } from 'react';
import { useRouter } from 'next/navigation';
import { useMenu } from '../../components/contexts/MenuContext';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Button = forwardRef(
    ({ children, href, target, transition = false, page, ...props }, ref) => {
        const router = useRouter();
        const { isActive, setIsActive, setTitleName } = useMenu();

        const handleTransition = async (e) => {
            e.preventDefault();
            if (isActive) {
                setIsActive(false);
            }
            setTitleName(page);
            const shutter = document.querySelector(`.${stylesShutter.shutter}`);
            const body = document.querySelector('body');
            const titleContent = document.querySelector(
                `.${stylesShutter.titleTransition}`,
            );

            shutter?.classList.add(`${stylesShutter.transition}`);
            titleContent?.classList.add(`${stylesShutter.fade}`);
            body.style.overflowY = 'hidden';
            await sleep(800);
            router.push(href);
            await sleep(200);
            titleContent?.classList.remove(`${stylesShutter.fade}`);

            await sleep(500);

            body.style.overflowY = 'unset';
            shutter?.classList.remove(`${stylesShutter.transition}`);
        };
        return !transition ? (
            <Magnetic>
                <a
                    href={href}
                    className={styles.buttonContainer}
                    target={target ? '_blank' : undefined}>
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
        ) : (
            <Magnetic>
                <a
                    href={href}
                    className={styles.buttonContainer}
                    onClick={handleTransition}
                    target={target ? '_blank' : undefined}>
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
    },
);
Button.displayName = 'Button';

export default Button;
