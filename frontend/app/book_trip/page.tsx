// Code written by Lucas Mouette

import TripForm from "@/components/BookTrip/Form";
import styles from "@/css/form.module.css";

export default function BookTripPage() {
    return (
        <div className={styles.trip_form__container}>
            <h1 className={styles.trip_form__title}>Book a Trip</h1>
            <TripForm />
        </div>
    );
}