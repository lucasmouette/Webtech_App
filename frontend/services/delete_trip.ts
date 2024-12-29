// Code written by Lucas Mouette

import axios from "axios";

export async function delete_trip(id: string) {
    try {
        await axios.delete(`http://localhost:8084/api/mytravels/${id}`);
        console.log("Trip deleted successfully");
        
    } catch (error) {
        console.error("ERROR: Trip not found", error);
    };
}