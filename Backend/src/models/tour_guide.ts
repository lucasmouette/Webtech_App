// Code written by Lucas Mouette

export class TourGuide {
    name: string;
    spoken_languages: string[];
  
    constructor(name: string, spoken_languages: string[]) {
      this.name = name;
      this.spoken_languages = spoken_languages;
    }
  
    // // Gibt den Namen des TourGuides zurück
    // getName(): string {
    //   return this.name;
    // }
  
    // // Gibt die gesprochenen Sprachen des TourGuides zurück
    // getSpokenLanguages(): string[] {
    //   return this.spoken_languages;
    // }
  
    // // Gibt die Details des TourGuides zurück
    // getDetails() {
    //   return {
    //     name: this.getName(),
    //     spoken_languages: this.getSpokenLanguages(),
    //   };
    // }
  }