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

const router = express.Router();

// Alle Reisen anzeigen
router.get("/api/mytravels", (request: Request, response: Response) => {
    get_travels(response);
});

// Reise anhand der ID anzeigen
router.get("/api/mytravels/:id", (request: Request, response: Response) => {
    find_travel_by_id(request, response);
});

// Reisen anlegen
router.post("/api/mytravels", (request: Request, response: Response) => {
    add_travel(request, response);
});

// Reise aktualisieren
router.put("/api/mytravels/:id", (request: Request, response: Response) => {
    update_travel(request, response);
});

// Alle Reisen löschen
router.delete("/api/mytravels", (request: Request, response: Response) => {
    delete_all_my_travels(request, response);
});

// Reise anhand der ID löschen
router.delete("/api/mytravels/:id", (request: Request, response: Response) => {
    delete_travel(request, response);
});

export default router;