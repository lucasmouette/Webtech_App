// Code written by Lucas Mouette

import { TravelPlan_data } from "../models/data/travelplan_data"
import { TravelPlan } from "../models/TravelPlan";

export const add_TravelPlan = (travel_plan: TravelPlan) => {
    TravelPlan_data.push(travel_plan);
}

// export const delete_TravelPlan

// export const update_TravelPlan

// export const show_TravelPlan