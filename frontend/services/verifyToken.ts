// Code written by Lucas Mouette

import axios from "axios";

export default async function verifyToken() {
    const token = localStorage.getItem("token");
    console.log('Stored token:', token)

    try { 
        const response = await axios.get("http://localhost:8084/auth", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        console.log("Verifcation was succesful", response.data)
        return true
    } catch (error) {
        console.error("Verification failed")
        return false
    }
}