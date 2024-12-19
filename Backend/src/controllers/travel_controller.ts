// Code written by Lucas Mouette

import { Request, Response } from "express";
import { Travel } from "../models/travel";
import { 
    filter_for_travel_by_id, 
    push_to_travel, 
    update_travel_by_id, 
    delete_all_travels, 
    delete_travel_by_id, 
    get_all_travels, 
    get_all_countries,
    get_all_tour_guides
} from "../services/travel_service"
import { id_counter } from "../utils/id_counter";
import { travel_list } from "../models/data/travel_list";

// Show all travels from travel_list.ts
export const get_travels = (response: Response) => {
    const all_travels = get_all_travels();

    if(all_travels.length > 0) {
        response.status(200).json(all_travels);
    } else {
        response.status(404).json('No travels found');
    };
};

// Show travel with specific ID
export const find_travel_by_id = (request: Request, response: Response) => {
    const my_id = request.params.id;
    const travel_found = filter_for_travel_by_id(my_id);

    console.log(travel_found);

    if (travel_found) {
        response.status(200).json(travel_found);
    } else {
        response.status(404).json('Travel not found');
    };
};

// Show all countries
export const get_countries = (response: Response) => {
    const all_countries = get_all_countries();

    if (all_countries.length > 0) {
        response.status(200).json(all_countries);
    } else {
        response.status(404).json('No countries found');
    };
};

// Show all Tour Guides
export const get_tour_guides = (response: Response) => {
    const all_tour_guides = get_all_tour_guides();

    if (all_tour_guides.length > 0) {
        response.status(200).json(all_tour_guides);
    } else {
        response.status(404).json('No tour guides found');
    };
};

// Create travel
export const add_travel = (request: Request, response: Response) => {
    console.log(typeof(request.body));

    const new_id = id_counter(travel_list.length).toString();
    const name = request.body.name;
    const destination_country = request.body.destination_country;
    const start_date = request.body.start_date;
    const end_date = request.body.end_date;
    const cities = request.body.cities;
    const tour_guide = request.body.tour_guide;
    const new_travel_created = new Travel(new_id, name, destination_country, start_date, end_date, cities, tour_guide);
    console.log(new_travel_created);
    const add_to_my_travels =  push_to_travel(new_travel_created);

    if(add_to_my_travels) {
        response.status(200).json({message: 'New travel was added'});
    } else {
        response.status(500).json({error: 'Error adding new travel'});
    };
};

// Update travel
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

// Delete all travels
export const delete_all_my_travels = (request: Request, response: Response): void => {
    
    const remaining_travels = delete_all_travels();

    if(remaining_travels.length === 0) {
        response.status(200).json({message: 'All travels were deleted'});
    } else {
        response.status(500).json({error: 'Error deleting all travels'});
    };
};

// Delete travel by ID
export const delete_travel = (request: Request, response: Response) => {

    const temp_id: string = request.params.id;
    const delete_travel = delete_travel_by_id(temp_id)

    if (delete_travel) {
        response.status(200).json({message: 'Travel was deleted'});
    } else {
        response.status(500).json({error: 'Error deleting travel'});
    };
};