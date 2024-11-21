// Code written by Lucas Mouette

import { TravelDuration } from "./TravelDuration";
import { DestinationCountry } from "./DestinationCountry";
import { TourGuide } from "./TourGuide";

export class TravelPlan {

    private _travel_name: string;
    private _travel_duration: TravelDuration;    
    private _destination_country: DestinationCountry;
    private _assigned_tour_guide: TourGuide;

    constructor(travel_name: string = 'New Adventure') {
        this._travel_name = travel_name;
        this._travel_duration = new TravelDuration();
        this._destination_country = new DestinationCountry();
        this._assigned_tour_guide = new TourGuide();
    };

    get name(): string {
        return this._travel_name;
    };

    get duration(): TravelDuration {
        return this._travel_duration;
    };

    get country(): DestinationCountry {
        return this._destination_country;
    };

    get assigned_tour_guide(): TourGuide {
        return this._assigned_tour_guide
    };

    set name(travel_name: string) {
        this._travel_name = travel_name
    };

    set country(destination_country: DestinationCountry) {
        this._destination_country = destination_country
    }

    set assigned_tour_guide(assigned_tour_guide: TourGuide) {
        this._assigned_tour_guide = assigned_tour_guide
    }

}