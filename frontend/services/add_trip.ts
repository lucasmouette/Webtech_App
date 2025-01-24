// Code written by Lucas Mouette

import axios from "axios";

export const add_trip = async (trip: any) => {
    try {
        const new_trip = await axios.post("http://localhost:8084/api/mytravels",
            trip,
           { headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }});
        return new_trip.data;
        
    } catch (error) {
        console.error("ERROR: Trip could not be created", error);
    };
}