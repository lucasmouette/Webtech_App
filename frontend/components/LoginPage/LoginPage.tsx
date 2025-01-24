// Code written by Lucas Mouette

'use client';

import styles from "@/css/Login/login.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LoginPage() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formData.email || !formData.password) {
            setIsError(true);
            setErrorMessage("Bitte füllen Sie alle Felder aus.");
            return;
        }

        try {
            setIsError(false);
            const response = await axios.post("http://localhost:8084/auth/login", formData);

            console.log("Server response:", response.data);

            const { token } = response.data;

            console.log("Received token:", token);

            localStorage.setItem("token", token);
            alert("Login erfolgreich");
            router.push("/");
        } catch (error) {
            
            console.error("Error during login:", error);

            setIsError(true);
            setErrorMessage("Login fehlgeschlagen. Überprüfen Sie Ihre Daten.");
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <form className={styles.form} onSubmit={handleFormSubmit}>
                    <h1 className={styles.title}>Login</h1>
                    <input 
                        className={styles.input} 
                        type="text" 
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange} 
                        required
                    />
                    <input 
                        className={styles.input} 
                        type="password"
                        name="password"
                        placeholder="Password" 
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                    />
                    {isError && <p className={styles.error}>{errorMessage}</p>}
                    <button className={styles.button} type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}