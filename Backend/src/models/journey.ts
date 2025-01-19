// Code written by Lucas Mouette

import mongoose from "mongoose";

export interface ICities {
    city_name: string;
    start_date: string;
    end_date: string;
};

export interface IJourney {

    _id: string;
    name: string;
    destination_country: string;
    start_date: string;
    end_date: string;
    cities: ICities[];
    tour_guide: {
        name: string;
        spoken_languages: string[]
    };
};

const journeySchema = new mongoose.Schema<IJourney>({

    name: { type: String, required: true },
    destination_country: { type: String, required: true },
    start_date: { type: String, required: true },
    end_date: { type: String, required: true , validate: { validator: function (value: string) {
        return new Date(value) > new Date(this.start_date);
    }, message: "End date must be after start date" } },
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