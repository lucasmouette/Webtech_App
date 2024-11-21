// Code written by Lucas Mouette

import { DestinationCountry } from "./DestinationCountry";

export class TravelDuration {

    private _total_days: number;
    private _days_allocated: number;

    constructor(total_days: number = 0, days_allocated: number = 0) {
        this._total_days = total_days;
        this._days_allocated = days_allocated;
    };

    get total_days(): number {
        return this._total_days;
    };

    get days_allocated(): number {
        return this._days_allocated;
    };

    get remaining_days(): number {
        return this._total_days - this._days_allocated;
    };

    set total_days(total: number) {
        this._total_days = total
    };

    update(country: DestinationCountry): void { 
        let list_length = country.cities.length

        this._days_allocated = 0

        for (let index = 0; index < list_length; index++) {
            let stay_duration = country.cities[index].stay_duration
            this._days_allocated += stay_duration
        };
    };
};