// Code written by Lucas Mouette

'use client';

import { useEffect, useState } from "react";
import { DoubleDateInput, OptionInput } from "./FormInputs";
import { load_countries } from "@/services/form/load_countries";
import { load_tour_guides } from "@/services/form/load_tour_guides";
import { add_trip } from "@/services/add_trip";

interface FormProps {
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

const Form = () => {
    const [countries, setCountries] = useState<string[]>([]);
    const [tourguides, setTourGuides] = useState<{name: string, spoken_languages: string[]}[]>([]);
    const [tourguideName, setTourGuideName] = useState<string[]>([]);
    const [formData, setFormData] = useState<FormProps>({
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

        const updateCitys = () => {
        
            setFormData({
                ...formData,
                cities: [
                    ...formData.cities,
                    cityData
                ]
            });
            
        
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

    };

    const handleDeleteCity = (index: number) => {
        formData.cities.splice(index, 1);
    }
    return (
        <form
        style={{color: 'white'}}
        onSubmit={handleFormSubmit}
        >

            <header style={{color: 'white'}}>Book a Trip</header>

            <label htmlFor="name">Trip</label>
            <input type="text" id="name" name="name" onChange={handleFormData} required placeholder="Name your Trip"/>

            <OptionInput label="Country" id="destination_country" options={countries} onChange={handleFormData}/>
            <DoubleDateInput onChange={handleFormData}/>
            <div>
                <h3>Cities</h3>
                {formData.cities.map((city, index) => {
                    return (
                        <div key={index} style={{display: 'flex'}}>
                            <p>{city.city_name}</p>
                            <p>{city.start_date}</p>
                            <p>{city.end_date}</p>
                            <button type="button"  onClick={() => handleDeleteCity(index)}>delete</button>
                        </div>
                    )
                })}
            </div>
            <label htmlFor="city_name">City</label>
            <input type="text" id="city_name" name="city_name" onChange={handleCitysData} required placeholder="City"/>
            <DoubleDateInput onChange={handleCitysData}/>

            <button type="button" onClick={updateCitys}>Add City</button>
            <OptionInput label="Tour Guide: " id="tourguide" options={tourguideName} onChange={handleTourGuideData}/>
        <button>save</button>

        </form>
    )
};

export default Form;