import styles from './style.module.scss';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Magnetic from '../../../common/Magnetic';

import { TransitionLink } from '../../../app/utils/TransitionLink';

export default function index() {
    const path = usePathname();

    const navItems = [
        {
            title: 'Accueil',
            href: '/',
        },
        {
            title: 'Galerie',
            href: '/pages/gallery',
        },
    ];

    return (
        <div className={styles.menu}>
            <div id="container" className={styles.container}>
                <Image
                    className={styles.logo}
                    src="/svg/logo2.svg"
                    width={120}
                    height={100}
                    alt="logo"
                    priority
                />
                {navItems.map((data) => {
                    return (
                        <Magnetic key={data.href} ratio={0.5}>
                            <div className={styles.linkContainer}>
                                <Image
                                    className={styles.buttonbg}
                                    src="/svg/buttonbg.svg"
                                    width={140}
                                    height={70}
                                    alt="button background"
                                />
                                <TransitionLink
                                    magnetic={true}
                                    href={data.href}
                                    title={data.title}>
                                    {data.title}
                                </TransitionLink>
                            </div>
                        </Magnetic>
                    );
                })}
            </div>
        </div>
    );
}
