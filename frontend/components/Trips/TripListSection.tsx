// Code written by Lucas Mouette

'use client'

import React, { useState, useEffect }  from "react";
import { load_trips } from "@/services/load_trips";
import TripCard from "./TripCard";
import { Trips_Props } from "@/types/Trips_Props";
import styles from "@/css/Trips/trip_list.module.css";

export default function TripListSection() {

   const [trip_list, setTripList] = useState<Trips_Props[]>([]);

    useEffect(() => {

        const loadTrips = async () => {
            const trip_list_data: Trips_Props[] = await load_trips();
            if(trip_list_data) {
                setTripList(trip_list_data);
            }
        };
        
        loadTrips();

    }, [load_trips, trip_list]);

    return (
        <div className={styles.trip__list_container}>
            {trip_list ? (trip_list.map((trip, index) => (
                <TripCard key={index} trip={trip}/>
            ))): <span>Loading…</span>}
        </div>
    );
}