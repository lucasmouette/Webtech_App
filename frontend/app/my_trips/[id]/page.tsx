// Code written by Lucas Mouette
'use client';

import React, { use, useEffect, useState } from "react";
import { load_single_trip } from "@/services/load_single_trip";
import { edit_trip } from "@/services/edit_trip";
import Link from "next/link";
import styles from "@/css/Trips/single_trip_card.module.css"
import Image from "next/image";

interface TripsProps {
    name: string;
    destination_country: string;
    start_date: string;
    end_date: string;
    cities: {
        city_name: string;
        start_date: string;
        end_date: string;
    }[];
    tour_guide: {
        name: string;
        spoken_languages: string[];
    };
}

export default function SingleTripPage({ params }: { params: Promise<{ id: string }>}) {
    const [singleTrip, setSingleTrip] = useState<TripsProps>();
    const [isEditable, setIsEditable] = useState(false);
    const unwrapped = use(params)

    useEffect(() => {
        const loadSingleTrip = async () => {        
            const singleTrip = await load_single_trip(unwrapped.id);
            if(singleTrip) {
                setSingleTrip(singleTrip);
            }
        }
        loadSingleTrip();

    },[]);

    const updateTripData = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (singleTrip) {
            setSingleTrip({
                ...singleTrip,
                [e.target.name]: e.target.value
            });
        }
    };

    const handleSave = () => {
        console.log(singleTrip);
        const saveNewTripData = async () => {
            const updatedTrip: any = await edit_trip(singleTrip);
            if(updatedTrip) {
                setSingleTrip(updatedTrip);
            }
        }
    saveNewTripData();
    };

    const format_date = (date: string): string => {
        const [year, month, day] = date.split("-");
        return `${day}/${month}/${year}`;
    };

    return (
        <div>
            {singleTrip ?
                <main className= {styles.single_trip__container}>
                    <div className={styles.single_trip__back_button}>
                        <Link href="/my_trips"><Image src="/assets/arrow-left-circle.svg" width={64} height={64} alt="Link back to My Trips" /></Link>
                    </div>
                    <div className={styles.single_trip__wrapper}>
                        <h1>Trip Details</h1>
                        {isEditable ? 
                            <form onSubmit={handleSave}>
                                <header>EDIT TRIP</header>
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" onChange={updateTripData} />
                                <button>Save</button>
                                <button type="button" onClick={() => setIsEditable(!isEditable)}>Cancel</button>
                            </form> : 
                            <div className={styles.single_trip__card}>
                                <br />
                                <div className={styles.single_trip__title}>
                                    <h2>{singleTrip.name}</h2>
                                    { isEditable ? null : <button className={styles.single_trip__edit_button} type="button" onClick={() => setIsEditable(!isEditable)}>Edit ✍🏻</button>}
                                    <h3>{singleTrip.destination_country}</h3>
                                </div>
                                <div className={styles.single_trip__date}>
                                    <p>{`${format_date(singleTrip.start_date)} - ${format_date(singleTrip.end_date)}`}</p>
                                </div>
                                <br />
                                <div className={styles.single_trip__cities}>
                                    <h4>Cities</h4>
                                    {singleTrip.cities.map((city, index) => (
                                        <p key={index}>
                                            <span className={styles.single_trip__city_name}>{city.city_name}</span> 
                                            <span className={styles.single_trip__city_date}> ({format_date(city.start_date)} - {format_date(city.end_date)})</span>
                                        </p>
                                    ))}
                                </div>
                                <br />
                                <div className={styles.single_trip__tour_guide}>
                                    <h4>Tour Guide</h4>
                                    <p>{singleTrip.tour_guide.name}</p>
                                    <p>🔉 {singleTrip.tour_guide.spoken_languages.join(', ')}</p>
                                </div>
                            </div>
                            }
                            
                    </div>
                </main> : <span>Loading...</span>
            }
        </div>
    );
};

