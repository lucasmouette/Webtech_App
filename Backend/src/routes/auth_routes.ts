// Code written by Lucas Mouette

import express, { Request, Response} from "express";
import { 
    user_creation, 
    verify_user
} from "../controllers/auth_controllers";
import { verifyToken } from "../utils/verifyToken";

const router = express.Router();

// Create a new user
router.post("/auth/signup", async (request: Request, response: Response) => {
    await user_creation(response, request);
});

// Authenticate user
router.post("/auth/login", async (request: Request, response: Response) => {
    await verify_user(response, request);
});

// Verify token
router.get("/auth", verifyToken, (request: Request, response: Response) => {
    response.status(200).json({ message: "Token is valid" });
});

export default router;