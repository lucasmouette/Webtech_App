// Code written by Lucas Mouette
import { delete_trip } from "@/services/delete_trip";
import { Trips_Props } from "@/types/Trips_Props";
import styles from "@/css/Trips/trip_card.module.css";
import Link from "next/link";

export default function TripCard({trip, }: {trip: Trips_Props}) {

    const format_date = (date: string): string => {
        const [year, month, day] = date.split("-");
        return `${day}/${month}/${year}`;
    };
    
    const handleClick = () => { delete_trip(trip.id); };

    return (

        <div className={styles.trip_card}>
            <div className={styles.trip_card__image}>
                {/* <img src="" alt="" /> */}
            </div>
            <div className={styles.trip_card__textbox}>
                <div className={styles.trip_card__title}>
                    <h2>{trip.name}</h2>
                    <h3>{trip.destination_country}</h3>
                </div>
                <div className={styles.trip_card__subtitle}>
                    <p>{`${format_date(trip.start_date)} - ${format_date(trip.end_date)}`}</p>
                </div>
                <div className={styles.trip_card__cities}>
                    <ul>
                        {trip.cities.map((city, index) => (
                            <li key={index}>{city.city_name}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.trip_card__guide}>
                    <p>Tour Guide: {trip.tour_guide.name}</p>
                </div>
                <div className={styles.trip__buttons}>
                <Link href={`/my_trips/${trip.id}`} className={styles.trip__info_button}>
                    Info
                </Link>
                    <button className={styles.trip__delete_button} style={{zIndex: 10}} onClick={handleClick}>Delete</button>
                </div>
            </div>
        </div>
    );
}