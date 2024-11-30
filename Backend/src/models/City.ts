// Code written by Lucas Mouette

export class City {
    city_name: string;
    start_date: string;
    end_date: string;
  
    constructor(name: string, start_date: string, end_date: string) {
      this.city_name = name;
      this.start_date = start_date;
      this.end_date = end_date;
    }
  }