// Code written by Lucas Mouette

import { delete_trip } from "@/services/delete_trip";
import { Trips_Props } from "@/types/Trips_Props";
import styles from "@/css/Trips/trip_card.module.css";
import Link from "next/link";
import Image from "next/image";

export default function TripCard({trip, }: {trip: Trips_Props}) {

    const format_date = (date: string): string => {
        const [year, month, day] = date.split("-");
        return `${day}/${month}/${year}`;
    };
    
    const handleClick = () => { delete_trip(trip.id); };

    return (

        <div className={styles.trip_card}>
            <div className={styles.trip_card__textbox}>
                <div className={styles.trip_card__title}>
                    <h2>{trip.name}</h2>
                    <h3>{trip.destination_country}</h3>
                </div>
                <div className={styles.trip_card__subtitle}>
                    <p>{`${format_date(trip.start_date)} - ${format_date(trip.end_date)}`}</p>
                </div>
                <div className={styles.trip__buttons}>
                    <Link href={`/my_trips/${trip.id}`} className={styles.trip__info_button}>
                        <Image src="/assets/info.svg" alt="More Info" width={24} height={24} />
                    </Link>
                    <Image src="/assets/trash.svg" alt="Delete Trip" width={24} height={24} className={styles.trip__delete_button} onClick={handleClick}/>
                </div>
            </div>
        </div>
    );
}