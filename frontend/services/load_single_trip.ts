// Code written by Lucas Mouette

import axios from "axios";

export const load_single_trip = async (id: string) => {
    try {
        const single_trip = await axios.get(`http://localhost:8084/api/mytravels/${id}`);
        return single_trip.data;
        
    } catch (error) {
        console.error("ERROR: No trip found", error);
    };
}