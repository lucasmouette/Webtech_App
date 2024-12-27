// Code written by Lucas Mouette

import styles from "@/css/Globals/footer.module.css";

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
                    <a href="mailto:mouette@hm.edu">mouette@hm.edu</a>
                </div>
                <div className={styles.footer__social}>
                    <h4>Social</h4>
                    <div className={styles.footer__social__icons}>
                        <a href="https://www.linkedin.com/in/lucas-mouette-65b7b6b3" target="_blank" rel="noopener noreferrer" className={styles.footer__link}><img src="/img/linkedIn-logo.webp" width={20} height={20} alt="LinkedIn" /></a>
                        <a href="https://github.com/lucasmouette/Webtech_App" target="_blank" rel="noopener noreferrer" className={styles.footer__link}><img src="/img/github.webp" width={20} height={20} alt="Github" /></a>
                    </div>
                </div>
            </div>  
            <p className={styles.footer__text}>
                © 2024 Lucas Mouette
            </p>
        </footer>
    )
}