// Code written by Lucas Mouette

import { Request, Response } from "express";
import { 
    authenticate_user,
    create_user,
} from "../services/auth_services";

// Create a new user
export const user_creation = async (response: Response, request: Request) => {

    if (!request.body) {
        response.status(400).json({ message: "No body in request" });
    } else {
        const email = request.body.email;
        const password = request.body.password;
        const new_user = await create_user(email, password);
        if (!new_user) {
            response.status(400).json({ message: "User not created" });
        } else {
            response.status(201).json({ message: "User created" });
        };
    }
};

// Authenticate user
export const verify_user = async (response: Response, request: Request) => {
    console.log("Request Body:", request.body);

    if (!request.body) {
        response.status(400).json({ message: "No body in request" });
        return;
    }

    const { email, password } = request.body;

    console.log("Email:", email);
    console.log("Password:", password);

    const token = await authenticate_user(email, password);

    if (!token) {
        response.status(401).json({ message: "Invalid email or password" });
    } else {
        response.status(200).json({ token });
    }
};
