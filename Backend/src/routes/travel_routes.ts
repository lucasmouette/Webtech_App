// Code written by Lucas Mouette

import express, { NextFunction, Request, Response } from "express";
import {
    add_travel,
    get_travels,
    find_travel_by_id,
    update_travel,
    delete_all_my_travels,
    delete_travel,
    get_countries,
    get_tour_guides,
} from "../controllers/travel_controller";
import { verifyToken } from "../utils/verifyToken";

const router = express.Router();

// Show all travels from database
router.get("/api/mytravels", verifyToken, async (request: Request, response: Response) => {
    await get_travels(response);
});

// Show travel with specific ID
router.get("/api/mytravels/:id", verifyToken, async (request: Request, response: Response) => {
    await find_travel_by_id(request, response);
});

// Show all countries
router.get("/api/countries", (request: Request, response: Response) => {
    get_countries(response);
});

// Show all Tour Guides
router.get("/api/tourguides", (request: Request, response: Response) => {
    get_tour_guides(response);
});

// Create travel
router.post("/api/mytravels", verifyToken, async (request: Request, response: Response) => {
    console.log("Request Body:", request.body);
    await add_travel(request, response);
});

// Update travel
router.put("/api/mytravels/:id", verifyToken, async (request: Request, response: Response) => {
    await update_travel(request, response);
});

// Delete all travels
router.delete("/api/mytravels", verifyToken, async (request: Request, response: Response) => {
    await delete_all_my_travels(request, response);
});

// Delete travel by ID
router.delete("/api/mytravels/:id", verifyToken, async (request: Request, response: Response) => {
    await delete_travel(request, response);
});

export default router;