// Code written by Lucas Mouette

import axios from 'axios';

export async function load_countries() {
    console.log("Loading countries...");
    try {
        const all_countries = await axios.get('http://localhost:8084/api/countries');
    
        return all_countries.data;
    } catch (error) {
        console.log("ERROR: No countries found", error);
    };
};