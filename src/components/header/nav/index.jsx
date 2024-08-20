import styles from './style.module.scss';
import { usePathname } from 'next/navigation';
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
        {
            title: 'Tarifs',
            href: '/pages/pricing',
        },
    ];

    return (
        <div className={styles.menu}>
            <div id="container" className={styles.container}>
                {navItems.map((data, index) => {
                    return (
                        <TransitionLink
                            key={index}
                            href={data.href}
                            title={data.title}>
                            {data.title}
                        </TransitionLink>
                    );
                })}
            </div>
        </div>
    );
}
