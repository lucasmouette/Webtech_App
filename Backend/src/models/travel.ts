// Code written by Lucas Mouette

import { City } from "./city";
import { TourGuide } from "./tour_guide";

export class Travel {
  id: string;
  destination_country: string;
  start_date: string;
  end_date: string;
  cities: City[];
  tour_guide: TourGuide;

  constructor(
    id: string,
    destination_country: string,
    start_date: string,
    end_date: string,
    cities: City[],
    tour_guide: TourGuide
  ) {
    this.id = id;
    this.destination_country = destination_country;
    this.start_date = start_date;
    this.end_date = end_date;
    this.cities = cities;
    this.tour_guide = tour_guide;
  }

  // Gibt alle Details der Reise zurück
  // getDetails() {
  //   const cityDetails = [];
  
  //   for (let i = 0; i < this.cities.length; i++) {
  //     const city = this.cities[i];
  //     // cityDetails.push(city.getDetails());
  //   }
  
    // return {
    //   id: this.id,
    //   destination_country: this.destination_country,
    //   start_date: this.start_date,
    //   end_date: this.end_date,
    //   cities: cityDetails,
    //   // tour_guide: this.tour_guide.getDetails(),
    // };
  // }
}