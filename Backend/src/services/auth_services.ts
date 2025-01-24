// Code written by Lucas Mouette

import { HydratedDocument } from "mongoose";
import User, { IUser } from "../models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Create a new user
export const create_user = async (email: string, password: string): Promise<IUser> => {
    const user = new User({
        email,
        password
    });

    const is_created = await user.save();
    return is_created;
}

// Authenticate user
export const authenticate_user = async (email: string, password: string): Promise<string | null> => {
    try {
        console.log("Authenticating user:", email); 

        const user: HydratedDocument<IUser> | null = await User.findOne({ email: email });
        if (!user) {
            console.error("User not found");
            return null;
        }

        console.log("User found:", user);

        const is_verified = await bcrypt.compare(password, user.password);
        if (!is_verified) {
            console.error("Password does not match");
            return null; 
        }

        console.log("Password verified");

        const token: string = jwt.sign(
            { _id: user._id },
            process.env.TOKEN_SECRET || "tokentest",
            { expiresIn: process.env.JWT_EXPIRES_IN || "1h" }
        );

        console.log("Generated token:", token);

        return token;
    } catch (error) {
        console.error("Error in authenticate_user:", error);
        return null;
    }
};