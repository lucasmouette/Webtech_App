// Code written by Lucas Mouette

import { City } from "./city";
import { TourGuide } from "./tour_guide";

export class Travel {
  name: string;
  destination_country: string;
  start_date: string;
  end_date: string;
  cities: City[];
  tour_guide: TourGuide;

  constructor(
    name: string,
    destination_country: string,
    start_date: string,
    end_date: string,
    cities: City[],
    tour_guide: TourGuide
  ) {
    this.name = name;
    this.destination_country = destination_country;
    this.start_date = start_date;
    this.end_date = end_date;
    this.cities = cities;
    this.tour_guide = tour_guide;
  }
}