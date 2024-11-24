// Code written by Lucas Mouette

import { Request, Response } from "express";
import { Travel } from "../models/travel";
import { travel_list } from "../models/data/travel_list";
import { filter_for_travel_by_id, push_to_travel, update_travel_by_id, delete_all_travels, delete_travel_by_id } from "../services/travel_service"

// Alle Reisen aus travel_list.ts anzeigen
export const get_travels = (_request: Request): Travel[] => {
    return travel_list;
};

//Reise anhand der ID finden
export const find_travel_by_id = (request: Request, response: Response) => {
    const my_id = request.params.id;
    const travel_found = filter_for_travel_by_id(my_id);

    console.log(travel_found);

    if (travel_found) {
        response.status(200).json(travel_found);
    } else {
        response.status(404).json('travel not found');
    };
};

// Reisen anlegen
export const add_travel = (request: Request, response: Response) => {

    const new_travel_created = new Travel(request.body.id, request.body.destination_country, request.body.start_date, request.body.end_date, request.body.cities, request.body.tour_guide);
    const add_to_my_travels =  push_to_travel(new_travel_created);

    if(add_to_my_travels) {
        response.status(200).json({message: 'New travel was added'});
    } else {
        response.status(500).json({error: 'Error adding new travel'});
    };
};

// Reise aktualisieren
export const update_travel = (request: Request, response: Response) => {

    const temp_id: string = request.params.id;
    const data = request.body; 
    const update_travel = update_travel_by_id(temp_id, data);

    if(update_travel) {
        response.status(200).json({message: 'travel was updated'});
    } else {
        response.status(500).json({error: 'Error updating travel'});
    };
};

// Alle Reisen löschen
export const delete_all_my_travels = (request: Request, response: Response): void => {
    
    const remaining_travels = delete_all_travels();

    if(remaining_travels.length === 0) {
        response.status(200).json({message: 'All travels were deleted'});
    } else {
        response.status(500).json({error: 'Error deleting all travels'});
    };
};

// Reise anhand der ID löschen
export const delete_travel = (request: Request, response: Response) => {

    const temp_id: string = request.params.id;
    const delete_travel = delete_travel_by_id(temp_id)

    if (delete_travel) {
        response.status(200).json({message: 'Travel was deleted'});
    } else {
        response.status(500).json({error: 'Error deleting travel'});
    };
};