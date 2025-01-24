// Code written by Lucas Mouette

import Form from "@/components/BookTrip/Form";
import ProtectedWrapper from "@/components/ProtectedWrapper";
import styles from "@/css/BookTrip/form.module.css";

export default function BookTripPage() {
    return (
        <ProtectedWrapper>
            <main className={styles.trip_form}>
                <div className={styles.trip_form__container}>
                    <Form />
                </div>
            </main>
        </ProtectedWrapper>
    );
}