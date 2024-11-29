// Code written by Lucas Mouette

import { Travel } from "../models/travel";
import { travel_list } from "../models/data/travel_list";
import { City } from "../models/city";
import { TourGuide } from "../models/tour_guide";

// Alle Reisen suchen
export const get_all_travels = (): Travel[] => {
    return travel_list;
};

// Reise suchen
export const filter_for_travel_by_id = (id: string): Travel | null => {
    let mytravel: Travel = {id: "", destination_country: "", start_date: "", end_date: "", cities: [], tour_guide: {name: "", spoken_languages: []}};
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
}

// Reise erstellen
export const create_travel = (
    id: string,
    destination_country: string,
    start_date: string,
    end_date: string,
    cities: City[],
    tour_guide: TourGuide
    ): Travel => {
    // Erstellt ein neues Travel-Objekt mit den übergebenen Werten
    const new_travel = new Travel(
        id,
        destination_country,
        start_date,
        end_date,
        cities,
        tour_guide
    );
    
    travel_list.push(new_travel);
    return new_travel;
};

// Reise hinzufügen
export const push_to_travel = (new_travel: Travel): Travel => {
    
    travel_list.push(new_travel);
    return new_travel;
}

// Reise aktualisieren
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

// Alle Reisen löschen
export const delete_all_travels = (): Travel[] => {
    while (travel_list.length > 0) {
        travel_list.pop();
    };
    console.log(travel_list);
    return travel_list;
};

// Reise anhand der id löschen
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