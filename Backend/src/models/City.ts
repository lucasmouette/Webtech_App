// Code written by Lucas Mouette

export class City {

    private _name: string;
    private _stay_duration: number;

    constructor(name: string, stay_duration: number) {
        this._name = name;
        this._stay_duration = stay_duration;
    };

    get name(): string {
        return this._name
    }

    get stay_duration(): number {
        return this._stay_duration
    }

    set days(new_duration_of_stay: number) {
        this._stay_duration = new_duration_of_stay
    }
};