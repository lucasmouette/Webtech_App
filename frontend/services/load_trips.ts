// Code written by Lucas Mouette

import axios from "axios";

export async function load_trips() {

    try {
        const all_trips = await axios.get("http://localhost:8084/api/mytravels");
        return all_trips.data;
        
    } catch (error) {
        console.error("ERROR: No trips found", error);
    };
};