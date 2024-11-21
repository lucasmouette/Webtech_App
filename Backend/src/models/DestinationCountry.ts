// Code written by Lucas Mouette

import { City } from "./City";

export class DestinationCountry {

    private _name: string;
    private _cities: City[];

    constructor(name: string = 'Placeholder', cities: City[] = []) {
        this._name = name;
        this._cities = cities;
    };

    get name(): string {
        return this._name;
    };

    get cities(): City[] {
        return this._cities;
    };

    addCity(city:City): void {
        this._cities.push(city);
    };

    removeCity(city_name: string): void {
        let listlength = this._cities.length

        for (let index = 0; listlength; index++) {
            if (city_name == this._cities [index].name) {
                this._cities.splice(index,1)
            };
        };
    };
};