// Code written by Lucas Mouette

import styles from "@/css/Globals/footer.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className={styles.footer__container}>
            <div>
                <h3>Travel Buddy</h3>
            </div>
            <div className={styles.footer__info}>
                <div className={styles.footer__private}>
                    <h4>Personal information</h4>
                    <p>Lucas Mouette</p>
                    <Link href="mailto:mouette@hm.edu">mouette@hm.edu</Link>
                </div>
                <div className={styles.footer__social}>
                    <h4>Social</h4>
                    <div className={styles.footer__social__icons}>
                        <Link href="https://www.linkedin.com/in/lucas-mouette-65b7b6b3" target="_blank" rel="noopener noreferrer" className={styles.footer__link}>
                            <Image src="/img/linkedIn-logo.webp" width={20} height={20} alt="LinkedIn" />
                        </Link>
                        <Link href="https://github.com/lucasmouette/Webtech_App" target="_blank" rel="noopener noreferrer" className={styles.footer__link}>
                            <Image src="/img/github.webp" width={20} height={20} alt="Github" />
                        </Link>
                    </div>
                </div>
            </div>  
            <p className={styles.footer__text}>
                © 2024 Lucas Mouette
            </p>
        </footer>
    )
}