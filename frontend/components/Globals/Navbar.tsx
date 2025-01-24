// Code written by Lucas Mouette
import styles from "@/css/Globals/navbar.module.css";
import Link from "next/link";

export default function NavBar() {

    return (
        <header className={styles.nav__container}>
            <div className={styles.nav__logo}>
                <Link href="/">Travel Buddy</Link>
            </div>
            <nav className={styles.nav__links}>
                <Link href="/" className={styles.nav__link}>Home</Link>
                <Link href="/book_trip" className={styles.nav__link}>Book a Trip</Link>
                <Link href="/my_trips" className={styles.nav__link}>My Trips</Link>
                <Link href="/about_us" className={styles.nav__link}>About us</Link>
                <Link href="/login" className={styles.nav__link}>Login</Link>
            </nav>
        </header>
    );
}
