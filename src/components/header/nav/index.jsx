import styles from './style.module.scss';
import Link from 'next/link';
export default function index() {
    const navItems = [
        {
            title: 'Accueil',
            href: '/',
        },
        {
            title: 'Galerie',
            href: '/gallery',
        },
        {
            title: 'Tarifs',
            href: '/pricing',
        },
    ];

    return (
        <div className={styles.menu}>
            <div id="container" className={styles.container}>
                <p className={styles.title}>Doigts de fée</p>
                {navItems.map((data, index) => {
                    return (
                        <Link key={index} href={data.href}>
                            {data.title}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
