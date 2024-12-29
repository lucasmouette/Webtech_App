// Code written by Lucas Mouette

'use client';

import { useEffect, useState } from "react";
import { DoubleDateInput, OptionInput } from "./FormInputs";
import { load_countries } from "@/services/form/load_countries";
import { load_tour_guides } from "@/services/form/load_tour_guides";
import { add_trip } from "@/services/add_trip";
import styles from "@/css/BookTrip/form.module.css"

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

export default function Form() {
    const [isError, setIsError] = useState<boolean>(false)
    const [erroMessage, setErrorMessage] = useState<string>('')
    const [countries, setCountries] = useState<string[]>([]);
    const [tourguides, setTourGuides] = useState<{name: string, spoken_languages: string[]}[]>([]);
    const [tourguideName, setTourGuideName] = useState<string[]>([]);
    const [formData, setFormData] = useState<TripsProps>({
        name: "",
        destination_country: "",
        start_date: "",
        end_date: "",
        cities: [],
        tour_guide: {
            name: "",
            spoken_languages: []
        }
    });

    const [cityData, setCityData] = useState({
        city_name: "",
        start_date: "",
        end_date: ""
    });

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

    const updateCities = () => {
        if(cityData.city_name && cityData.end_date && cityData.start_date) {
            setIsError(false)
            setFormData({
                ...formData,
                cities: [
                    ...formData.cities,
                    cityData
                ]
            });

            setCityData({
                ...cityData,
                city_name: "",
                start_date: "",
                end_date: ""
            }) 
        } else {
            setIsError(true)
            setErrorMessage('Please fill out all fields to add a new city')
        }
        };

    useEffect(() => {       
        getTourGuides();
        getCountries();
    }, []);

    const handleCitysData = (e: React.FormEvent<HTMLInputElement | HTMLSelectElement>) => {
        setCityData({
            ...cityData,
            [e.currentTarget.name]: e.currentTarget.value
        });
    };

    const handleTourGuideData = (e: React.FormEvent<HTMLSelectElement>) => {
        setFormData({
            ...formData,
            tour_guide: {
                name: e.currentTarget.value,
                spoken_languages: tourguides.find(tourguide => tourguide.name === e.currentTarget.value)?.spoken_languages || []
            }
        });
    }

    const handleFormData = (e: React.FormEvent<HTMLInputElement | HTMLSelectElement > ) => {
        e.preventDefault();
        setFormData({
            ...formData,
            [e.currentTarget.name]: e.currentTarget.value
        });
    }

    const handleFormSubmit = async (e: any) => {
        e.preventDefault();
        if(formData.cities.length){
            setIsError(false)
            const success = await add_trip(formData);
            if (success) {
                alert("Trip added successfully");
            } else {
                alert("An error occured");
            }
            setFormData({
                name: "",
                destination_country: "",
                start_date: "",
                end_date: "",
                cities: [],
                tour_guide: {
                    name: "",
                    spoken_languages: []
                }
            });
        } else {
            setIsError(true)
            setErrorMessage('Please add at least one city to continue')
        }
    };

    const handleDeleteCity = (index: number) => {
        const updatedCities = [...formData.cities];
        updatedCities.splice(index, 1);
        setFormData({
        ...formData,
        cities: updatedCities
    });
    }

    const format_date = (date: string): string => {
        const [year, month, day] = date.split("-");
        return `${day}/${month}/${year}`;
    };

    return (
        <form onSubmit={handleFormSubmit} className={styles.form__wrapper}>
            <div className={styles.form__header}>
                <header>Book a Trip</header>
            </div>
            <div className={`${styles.form__trip_name} ${styles.input_wrapper}`}>
                <label htmlFor="name"><h3>Trip:</h3></label>
                <input type="text" id="name" name="name" onChange={handleFormData} required placeholder="Name your Trip"/>
            </div>
            <div className={`${styles.form__trip_duration} ${styles.input_wrapper}`}>
                <label htmlFor="trip_duration"><h3>Trip Duration:</h3></label>
                <DoubleDateInput required start_date={formData.start_date} end_date={formData.end_date}onChange={handleFormData}/>
            </div>
            <div className={`${styles.form__country} ${styles.input_wrapper}`}>
                <OptionInput label="Country" id="destination_country" options={countries} onChange={handleFormData}/>
            </div>
            <div className={`${styles.form__cities} ${styles.input_wrapper}`}>
                <div className={styles.form__city_selector}>
                    <label htmlFor="city_name"><h3>City:</h3></label>
                    <DoubleDateInput isError={isError} start_date={cityData.start_date} end_date={cityData.end_date} onChange={handleCitysData}/>
                        <input style={isError && !cityData.city_name ? {border: '2px solid red'} : {}} type="text" id="city_name" name="city_name" value={cityData.city_name} onChange={handleCitysData} placeholder="City"/>
                    <button type="button" onClick={updateCities}>Add City</button>
                </div>
                {isError &&  <span style={{color: 'red'}}>* {erroMessage}</span>}
                <div className={styles.form__city_display}>
                    <h3>Cities:</h3>
                    {formData.cities.map((city, index) => {
                        return (
                            <div key={index} style={{display: 'flex'}}>
                                <p>{city.city_name}</p>
                                <p>{`(${format_date(city.start_date)} - ${format_date(city.end_date)})`}</p>
                                <button type="button"  onClick={() => handleDeleteCity(index)}>delete</button>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={`${styles.form__tour_guide} ${styles.input_wrapper}`}>
                <OptionInput label="Tour Guide" id="tourguide" options={tourguideName} onChange={handleTourGuideData}/>
            </div>
            <div className={styles.form__save_button}>
                <button>Save</button>
            </div>
        </form>
    )
};