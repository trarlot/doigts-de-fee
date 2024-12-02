import styles from './style.module.scss';
import Image from 'next/image';

export default function HeadBand() {
    return (
        <div className={styles.headBand}>
            <p className={styles.book}>Pendre rendez-vous</p>

            <a
                className={styles.planity}
                href="https://www.planity.com/doigts-de-fee-91700-sainte-genevieve-des-bois">
                <Image
                    src="/svg/planity.svg"
                    alt="Planity"
                    width={80}
                    height={20}
                />
            </a>
        </div>
    );
}
