import '../../page.module.scss';
import styles from './page.module.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
    return (
        <section className={styles.pricing}>
            <p>Hello</p>
        </section>
    );
}
