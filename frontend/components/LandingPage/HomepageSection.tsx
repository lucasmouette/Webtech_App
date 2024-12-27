// Code written by Lucas Mouette

import styles from "@/css/LandingPage/homepage_section.module.css"
import Image from "next/image";

export default function HomepageSection() {
    return (
        <div className={styles.homepage__section__container}>
            {/* <div className={styles.homepage__section__divider}>
                <p>
                    ---------- WHY CHOOSE US
                </p>
            </div> */}
            <div className={styles.homepage__section}>
                <div className={styles.homepage__section__image}>
                    <Image loading="lazy" width={200} height={200} src="/img/japanese-mountain.webp" alt="Japanese Mountain" />
                </div>
                <div className={styles.homepage__section__text}>
                    <h1 className={styles.title}>
                        Explore a wide range of destinations and book an unforgettable experience
                    </h1>
                    <br />
                    <ol>
                        <li>
                            <h3>Easy Booking</h3>
                            <p>Book your dream vacation in just a few clicks</p>
                        </li>
                        <li>
                            <h3>Unforgettable journeys</h3>
                            <p>We craft personalized travel itineraries to match your preferences, ensuring every trip feels uniquely yours.</p>
                        </li>
                        <li>
                            <h3>Expert Guides</h3>
                            <p>Get the best advice from our experienced travel experts</p>
                        </li>
                        <li>
                            <h3>Safe and stress-free adventures</h3>
                            <p>Enjoy peace of mind with robust safety measures and 24/7 customer support wherever you go.</p>
                        </li>
                        <li>
                            <h3>A story worth telling</h3>
                            <p>Rely on our seasoned travel team to create magical experiences you’ll cherish forever.</p>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
}