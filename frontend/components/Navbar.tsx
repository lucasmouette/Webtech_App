// Code written by Lucas Mouette

import styles from "@/css/navbar.module.css";

export default function NavBar() {
    return (
        <header className={styles.nav__container}>
            <div className={styles.nav__logo}>
                <a href="/">Travel Buddy</a>
            </div>
            <nav className={styles.nav__links}>
                <a href="/" className={styles.nav__link}>Home</a>
                <a href="/book_trip" className={styles.nav__link}>Book a Trip</a>
                <a href="/my_trips" className={styles.nav__link}>My Trips</a>
                <a href="/about_us" className={styles.nav__link}>About us</a>
            </nav>
        </header>
    );
}
