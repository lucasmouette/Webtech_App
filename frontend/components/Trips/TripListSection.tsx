// Code written by Lucas Mouette

// import styles from 
import { load_trips } from "@/services/load_trips";
import TripCard from "./TripCard";
import { Trips_Props } from "@/types/Trips_Props";
import styles from "@/css/trip_list.module.css";


export default async function TripListSection() {
    let trip_list: Trips_Props[] = await load_trips();
    return (
        <div className={styles.trip__list_container}>
            {trip_list.map((trip, index) => (
                <TripCard key={index} trip={trip} />
            ))}
        </div>
    );
}