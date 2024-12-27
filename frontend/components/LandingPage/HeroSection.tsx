// Code written by Lucas Mouette

import styles from "@/css/LandingPage/hero_section.module.css";

export default function HeroSection() {
    return (
        <div className={styles.hero__section}>
            <div className={styles.hero__section__text}>
                <h1 className={styles.title}>The world</h1>
                <p className={styles.subtitle}>is waiting for you</p>
            </div>
        </div>
    );
}