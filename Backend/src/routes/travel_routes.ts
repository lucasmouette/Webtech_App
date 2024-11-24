// Code written by Lucas Mouette

import express, { Request, Response } from "express";
import {
    add_travel,
    get_travels,
    find_travel_by_id,
    update_travel,
    delete_all_my_travels,
    delete_travel
} from "../controllers/travel_controller";
import { travel_list } from "../models/data/travel_list";

const router = express.Router();

// Home route
router.get("/", (request: Request, response: Response) => {
    response.send("Welcome to Travel Buddy!");
});

// Reise anhand der ID anzeigen
router.get("/mytravels/:id", (request: Request, response: Response) => {
    find_travel_by_id(request, response);
});

// Alle Reisen anzeigen
router.get("/mytravels", (request: Request, response: Response) => {
    const travels = get_travels(request);
    response.json(travels);
});

// Reisen anlegen
router.post("/mytravels", (request: Request, response: Response) => {
    add_travel(request, response);
});

// Reise aktualisieren
router.put("/mytravels/:id", (request: Request, response: Response) => {
    update_travel(request, response);
});

// Alle Reisen löschen
router.delete("/mytravels", (request: Request, response: Response) => {
    delete_all_my_travels(request, response);
});

// Reise anhand der ID löschen
router.delete("/mytravels/:id", (request: Request, response: Response) => {
    delete_travel(request, response);
});

export default router;