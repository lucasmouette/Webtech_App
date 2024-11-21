// Code written by Lucas Mouette

export class TourGuide {

    private _guide_name: string;
    private _spoken_languages: string[];

    constructor(guide_name: string = 'Placeholder', spoken_languages: string[] = []) {
        this._guide_name = guide_name;
        this._spoken_languages = spoken_languages;
    };

    get name(): string {
        return this._guide_name;
    };

    get spoken_languages(): string[] {
        return this._spoken_languages;
    };

};