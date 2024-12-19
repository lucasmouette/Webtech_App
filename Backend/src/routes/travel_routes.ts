// Code written by Lucas Mouette

import express, { Request, Response } from "express";
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

const router = express.Router();

// Show all travels
router.get("/api/mytravels", (request: Request, response: Response) => {
    get_travels(response);
});

// Show travel with specific ID
router.get("/api/mytravels/:id", (request: Request, response: Response) => {
    find_travel_by_id(request, response);
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
router.post("/api/mytravels", (request: Request, response: Response) => {
    add_travel(request, response);
});

// Update travel
router.put("/api/mytravels/:id", (request: Request, response: Response) => {
    update_travel(request, response);
});

// Delete all travels
router.delete("/api/mytravels", (request: Request, response: Response) => {
    delete_all_my_travels(request, response);
});

// Delete travel by ID
router.delete("/api/mytravels/:id", (request: Request, response: Response) => {
    delete_travel(request, response);
});

export default router;