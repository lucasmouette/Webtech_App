// Code written by Lucas Mouette

export class City {
    name: string;
    stay_days: number;
  
    constructor(name: string, stay_days: number) {
      this.name = name;
      this.stay_days = stay_days;
    }
  
    // // Gibt die Details der Stadt zurück
    // getDetails() {
    //   return {
    //     name: this.name,
    //     stay_days: this.stay_days,
    //   };
    // }
  }