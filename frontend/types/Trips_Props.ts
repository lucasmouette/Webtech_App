// Code written by Lucas Mouette

export interface Trips_Props {
    id: string;
    name: string;
    destination_country: string;
    start_date: string;
    end_date: string;
    cities: [{city_name: string, start_date: string, end_date: string}];
    tour_guide: {name: string, spoken_languages: string[]};
}