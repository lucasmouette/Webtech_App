// Code written by Lucas Mouette

import { Travel } from "../models/travel";
import { travel_list } from "../models/data/travel_list";
import { City } from "../models/city";
import { TourGuide } from "../models/tour_guide";
import { destination_country_list } from "../models/data/country_list";
import { tour_guide_list } from "../models/data/tour_guide_list";

// Show all travels from travel_list.ts
export const get_all_travels = (): Travel[] => {
    return travel_list;
};

// Search for travel
export const filter_for_travel_by_id = (id: string): Travel | null => {
    let mytravel: Travel = {id: "", name: "", destination_country: "", start_date: "", end_date: "", cities: [], tour_guide: {name: "", spoken_languages: []}};
    travel_list.map((el) => {
        if (el.id === id) {
            console.log(el);
            mytravel = el;
     }
    });
    if (mytravel.id !== "") {
        return mytravel;
    }
    return null;
};

// Show all countries
export const get_all_countries = (): string[] => {
    return destination_country_list;
};

// Show all Tour Guides
export const get_all_tour_guides = (): TourGuide[] => {
    return tour_guide_list;
};

// Create travel
export const create_travel = (
    id: string,
    name: string,
    destination_country: string,
    start_date: string,
    end_date: string,
    cities: City[],
    tour_guide: TourGuide
    ): Travel => {
        // Create a new Travel object with the given values
    const new_travel = new Travel(
        id,
        name,
        destination_country,
        start_date,
        end_date,
        cities,
        tour_guide
    );
    
    travel_list.push(new_travel);
    return new_travel;
};

// Add travel
export const push_to_travel = (new_travel: Travel): Travel => {
    
    travel_list.push(new_travel);
    return new_travel;
};

// Update travel
export const update_travel_by_id = (id: string, data: Travel ) => {
    const updated_travel = travel_list.find((el: Travel) => {
        if(el.id === id) {
            travel_list[travel_list.indexOf(el)] = data;
            return el;
        };
    }
);
    if(updated_travel) {
        return updated_travel;
    } else {
        return null;
    };
};

// Delete all travels
export const delete_all_travels = (): Travel[] => {
    while (travel_list.length > 0) {
        travel_list.pop();
    };
    console.log(travel_list);
    return travel_list;
};

// Delete travel by ID
export const delete_travel_by_id = (id: string): Travel | null => {
    const look_for_id = travel_list.find((el: Travel) => {
        if(el.id === id) {
            const deleted_travel = travel_list.splice(travel_list.indexOf(el), 1);
            console.log(`Deleted travel:`, deleted_travel);
            return el;
        };
    }
);
    if(look_for_id) {
        return look_for_id;
    } else {
        console.log(`Travel with id: ${id} not found`);
        return null;
    };
};