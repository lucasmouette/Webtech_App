// Code written by Lucas Mouette

'use client';

import React, { use, useEffect, useState } from "react";
import { load_single_trip } from "@/services/load_single_trip";
import { edit_trip } from "@/services/edit_trip";
import Link from "next/link";
import styles from "@/css/Trips/single_trip_card.module.css"
import Image from "next/image";
import { OptionInput } from "@/components/BookTrip/FormInputs";
import { load_countries } from "@/services/form/load_countries";
import { load_tour_guides } from "@/services/form/load_tour_guides";

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
    const [isError, setIsError] = useState<boolean>(false)
    const [erroMessage, setErrorMessage] = useState<string>('')
    const [singleTrip, setSingleTrip] = useState<TripsProps>();
    const [isEditable, setIsEditable] = useState(false);
    const [countries, setCountries] = useState<string[]>([]);
    const [tourguides, setTourGuides] = useState<{name: string, spoken_languages: string[]}[]>([]);
    const [tourguideName, setTourGuideName] = useState<string[]>([]);
    const unwrapped = use(params)
    const [cityData, setCityData] = useState({
        city_name: "",
        start_date: "",
        end_date: ""
    });
    
    useEffect(() => {
        const loadSingleTrip = async () => {        
            const singleTrip = await load_single_trip(unwrapped.id);
            if(singleTrip) {
                setSingleTrip(singleTrip);
            }
        }
        loadSingleTrip();

    },[]);

    const updateCitiesData = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const { name, value } = e.target;
        if (singleTrip) {
            const updatedCities = [...singleTrip.cities];
            updatedCities[index] = {
                ...updatedCities[index],
                [name]: value
            };
    
            setSingleTrip({
                ...singleTrip,
                cities: updatedCities
            });
        };
    };

    const deleteCity = (cityName: string) => {
        if (singleTrip) {
            const updatedCities = singleTrip.cities.filter(city => city.city_name !== cityName);
    
            setSingleTrip({
                ...singleTrip,
                cities: updatedCities
            });
        }
    };

    const updateTripData = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        if (singleTrip) {
            setSingleTrip({
                ...singleTrip,
                [e.target.name]: e.target.value
            });
        }
    };

    const updateCountry = (e: React.FormEvent<HTMLSelectElement>) => {
        if (singleTrip) {
            setSingleTrip({
                ...singleTrip,
                [e.currentTarget.name]: e.currentTarget.value
            });
        }
    };

    const handleSave = () => {
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

    const handleCitiesData = (e: React.FormEvent<HTMLInputElement | HTMLSelectElement>) => {
        setCityData({
            ...cityData,
            [e.currentTarget.name]: e.currentTarget.value
        });

    };

    const getCountries = async () => {
        const countriesList = await load_countries();
        if (countriesList) {
            setCountries(countriesList);
     }};
    
    const getTourGuides = async () => {
        const tourGuidesList = await load_tour_guides();
        if (tourGuidesList) {
            setTourGuides(tourGuidesList);
            setTourGuideName(tourGuidesList.map(tourguide => tourguide.name));
    }};

    const handleTourGuideData = (e: React.FormEvent<HTMLSelectElement>) => {
        if (singleTrip) {
            setSingleTrip({
                ...singleTrip,
                tour_guide: {
                    name: e.currentTarget.value,
                    spoken_languages: tourguides.find(tourguide => tourguide.name === e.currentTarget.value)?.spoken_languages || []
                }
            });
        }
    }

    const updateCities = () => {
        console.log(cityData)
        if(cityData.city_name && cityData.end_date && cityData.start_date) {
            setIsError(false)
            if(singleTrip) { setSingleTrip({
                ...singleTrip,
                cities: [
                    ...singleTrip.cities,
                    cityData
                ]
            });
            setCityData({
                ...cityData,
                city_name: "",
                start_date: "",
                end_date: ""
            }) 
        }} else {
                setIsError(true)
                setErrorMessage('Please fill out all fields to add a new city')
        }
        };
    useEffect(() => {       
        getTourGuides();
        getCountries();
    }, []);

    return (
        <div>
            {singleTrip ?
                <main className= {styles.single_trip__container}>
                    {!isEditable && <div className={styles.single_trip__back_button}>
                        <Link href="/my_trips"><Image src="/assets/arrow-left-circle.svg" width={64} height={64} alt="Link back to My Trips" /></Link>
                    </div>}
                    <div className={styles.single_trip__wrapper}>
                        <h1>{isEditable ? 'Edit Trip' : 'Trip Details'}</h1>
                        {isEditable ? 
                            <form onSubmit={handleSave} className={styles.edit_single_trip__container}>
                                <div className={styles.edit_single_trip__wrapper}>
                                    <div className={styles.edit_single_trip__trip_name}>
                                        <label htmlFor="name"><h4>Trip Name:</h4></label>
                                            <input 
                                                type="text" 
                                                id="name" 
                                                name="name" 
                                                onChange={updateTripData} 
                                                placeholder={singleTrip.name}
                                            />
                                    </div>
                                    <div className={styles.edit_single_trip__trip_duration}>
                                        <div className={styles.edit_single_trip__trip_duration_start_date}>
                                            <label htmlFor="start_date"><h4>Start Date:</h4></label>
                                                <input 
                                                    type="date" 
                                                    id="start_date" 
                                                    name="start_date" 
                                                    onChange={updateTripData}
                                                />
                                        </div>
                                        <div className={styles.edit_single_trip__trip_duration_end_date}>
                                            <label htmlFor="end_date"><h4>End Date:</h4></label>
                                                <input 
                                                    type="date" 
                                                    id="end_date"
                                                    name="end_date" 
                                                    onChange={updateTripData} 
                                                />
                                        </div>
                                    </div>
                                    <div className={styles.edit_single_trip__country}>
                                        <OptionInput label="Country" id="destination_country" value={singleTrip.destination_country} options={countries} onChange={updateCountry}/>
                                    </div>
                                    <div className={styles.edit_single_trip__cities}>
                                        <h4>Cities:</h4>
                                        {singleTrip.cities.map((city, index) => (
                                        <div key={index} className={styles.edit_single_trip__history}>
                                            <input
                                                type="text"
                                                name="city_name"
                                                value={city.city_name}
                                                onChange={(e) => updateCitiesData(e, index)}
                                            />
                                            <input
                                                type="date"
                                                name="start_date"
                                                value={city.start_date}
                                                onChange={(e) => updateCitiesData(e, index)}
                                            />
                                            <input
                                                type="date"
                                                name="end_date"
                                                value={city.end_date}
                                                onChange={(e) => updateCitiesData(e, index)}
                                            />
                                            <button style={{zIndex: 10}} onClick={() => deleteCity(city.city_name)} className={styles.edit_single_trip__delete_button}>
                                                <Image src="/assets/trash.svg" alt="Delete Trip" width={24} height={24} />
                                            </button>
                                        </div>
                                    ))}
                                    </div>
                                    <div className={styles.edit_single_trip__city_display}>
                                        <div className={styles.edit_single_trip__city_display_name}>
                                            <label htmlFor="city"><h4>City:</h4></label>
                                                <input 
                                                    type="text" 
                                                    id="city_name" 
                                                    name="city_name" 
                                                    onChange={handleCitiesData} 
                                                    placeholder="City"
                                                />
                                        </div>
                                        <div className={styles.edit_single_trip__city_display_start_date}>
                                            <label htmlFor="start_date"><h4>Start Date:</h4></label>
                                                <input 
                                                    type="date" 
                                                    id="start_date" 
                                                    name="start_date" 
                                                    onChange={handleCitiesData} 
                                                />
                                        </div>
                                        <div className={styles.edit_single_trip__city_display_end_date}>
                                            <label htmlFor="end_date"><h4>End Date:</h4></label>
                                                <input 
                                                    type="date" 
                                                    id="end_date" 
                                                    name="end_date" 
                                                    onChange={handleCitiesData} 
                                                />
                                        </div>
                                        <div className={styles.edit_single_trip__buttons}>
                                            <button type="button" onClick={updateCities}>Add City</button>
                                        </div>
                                    </div>
                                    {isError && 
                                        <span>
                                            {erroMessage}
                                        </span>    
                                    }
                                    <div> 
                                    </div>
                                    <div className={styles.edit_single_trip__tour_guide}>
                                        <OptionInput label="Tour Guide" id="tourguide" options={tourguideName} onChange={handleTourGuideData} value={singleTrip.tour_guide.name}/>
                                    </div>
                                    <div className={styles.edit_single_trip__form_buttons}>
                                        <button type="button" onClick={() => setIsEditable(!isEditable)}>Cancel</button>
                                        <button>Save</button>
                                    </div>
                                </div>
                            </form> : 
                            <div className={styles.single_trip__card}>
                                <br />
                                <div className={styles.single_trip__title}>
                                    <h2>{singleTrip.name}</h2>
                                    { isEditable ? null : 
                                            <Image src="/assets/edit.svg" alt="Edit" width={30} height={30} className={styles.single_trip__edit_button} onClick={() => setIsEditable(!isEditable)}/>}
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