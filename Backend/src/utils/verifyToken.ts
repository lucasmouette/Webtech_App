// Code written by Lucas Mouette

import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function verifyToken(request: Request, response: Response, next: NextFunction): void {
    const authHeader = request.headers.authorization;

    console.log("Authorization Header:", authHeader);

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        console.error("No token provided or invalid format");
        response.status(401).json({ message: "No token provided" });
        return;
    }

    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET || "tokentest");
        console.log("Decoded Token:", decoded);
        (request as any).user = decoded; 
        next(); 
    } catch (error) {
        console.error("Token Verification Error:", error);
        response.status(401).json({ message: "Invalid or expired token. Please log in again." });
        return;
    }
}