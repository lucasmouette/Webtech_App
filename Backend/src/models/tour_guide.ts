// Code written by Lucas Mouette

export class TourGuide {
    name: string;
    spoken_languages: string[];
  
    constructor(name: string, spoken_languages: string[]) {
      this.name = name;
      this.spoken_languages = spoken_languages;
    }
  }