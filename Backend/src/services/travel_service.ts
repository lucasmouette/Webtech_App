// Code written by Lucas Mouette

import { Travel } from "../models/travel";
import { City } from "../models/city";
import { TourGuide } from "../models/tour_guide";
import { destination_country_list } from "../models/data/country_list";
import { tour_guide_list } from "../models/data/tour_guide_list";
import Journey from "../models/journey";
import { IJourney } from "../models/journey";
import mongoose from "mongoose";

// Show all travels from database
export const get_all_travels = async (): Promise<IJourney[]> => {
    const travels = await Journey.find()
    return travels
} 

// Search for travel in database
export const filter_for_travel_by_id = async (travel_id: string): Promise<IJourney | null> => {
    return await Journey.findById(travel_id)
}

// Show all countries
export const get_all_countries = (): string[] => {
    return destination_country_list;
};

// Show all Tour Guides
export const get_all_tour_guides = (): TourGuide[] => {
    return tour_guide_list;
};

// Create travel for database
export const create_travel = async (
    name: string,
    destination_country: string,
    start_date: string,
    end_date: string,
    cities: City[],
    tour_guide: TourGuide
    ): Promise<IJourney> => {

    const new_travel = new Travel(
        name,
        destination_country,
        start_date,
        end_date,
        cities,
        tour_guide
    );

    const new_journey = new Journey({
        name: new_travel.name,
        destination_country: new_travel.destination_country,
        start_date: new_travel.start_date,
        end_date: new_travel.end_date,
        cities: new_travel.cities,
        tour_guide: new_travel.tour_guide

    })
    
    await new_journey.save();
    return new_journey;
};

// Add travel for database
export const push_to_travel = async (new_travel: Travel): Promise<IJourney> => {
    const new_journey = new Journey({
        name: new_travel.name,
        destination_country: new_travel.destination_country,
        start_date: new_travel.start_date,
        end_date: new_travel.end_date,
        cities: new_travel.cities,
        tour_guide: new_travel.tour_guide,
    });

    const saved_travel = await new_journey.save();
    return saved_travel;
}

// Update travel from database
export const update_travel_by_id = async (
    id: string,
    name: string,
    destination_country: string,
    start_date: string,
    end_date: string,
    cities: City[],
    tour_guide: TourGuide
): Promise<IJourney | null> => {
    const updated_travel = await Journey.findByIdAndUpdate(
        new mongoose.Types.ObjectId(id),
        { $set: {
            name,
            destination_country,
            start_date,
            end_date,
            cities,
            tour_guide
        }}, { new : true}
    );
    return updated_travel
}

// Delete all travels in database
export const delete_all_travels = async (): Promise<void> => {
    await Journey.deleteMany({});
};

// Delete travel by ID from database
export const delete_travel_by_id = async (id: string): Promise<boolean> => {
    const look_for_id = await Journey.deleteOne({ _id: new mongoose.Types.ObjectId(id)});

    return look_for_id.deletedCount > 0
}