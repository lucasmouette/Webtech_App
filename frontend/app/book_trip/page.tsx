// Code written by Lucas Mouette

import Form from "@/components/BookTrip/Form";

import styles from "@/css/BookTrip/form.module.css";

export default function BookTripPage() {
    return (
        <div className={styles.trip_form__container}>
            <Form />
        </div>
    );
}