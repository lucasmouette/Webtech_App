// Code written by Lucas Mouette

import axios from "axios";

export const edit_trip = async (trip: any) => {  

    try {
        const updated_trip = await axios.put(`http://localhost:8084/api/mytravels/${trip._id}`, trip);
        return updated_trip.data;
        
    } catch (error) {
        console.error("ERROR: No trip found", error);
    };
};