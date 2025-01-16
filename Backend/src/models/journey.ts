// Code written by Lucas Mouette

import mongoose, { Schema } from "mongoose";

export interface IJourney {

    _id: string;
    name: string;
    destination_country: string;
    start_date: string;
    end_date: string;
    cities: {
        city_name: string;
        start_date: string;
        end_date: string;
    };
    tour_guide: {
        name: string;
        spoken_languages: string[]
    };
}

const journeySchema = new mongoose.Schema<IJourney>({

    name: { type: String, required: true },
    destination_country: { type: String, required: true },
    start_date: { type: String, required: true },
    end_date: { type: String, required: true },
    cities: [
        {
          city_name: { type: String, required: true },
          start_date: { type: String, required: true },
          end_date: { type: String, required: true },
        },
    ],
    tour_guide: {
        name: { type: String, required: true },
        spoken_languages: { type: [String], required: true },
    },
});

const Journey = mongoose.model<IJourney>("Journey", journeySchema);
export default Journey;