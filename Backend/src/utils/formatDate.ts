// Code written by Lucas Mouette, Abgabe 04

interface CurrentDate {
    day: number;
    month: number;
    year: number;
};

export function getDate(): CurrentDate {

    let today = new Date();
    let current_day: number = Number(today.getDate());
    let current_month: number = Number(today.getMonth()) + 1;
    let current_year: number = Number(today.getFullYear());
    
    return {
        day: current_day,
        month: current_month,
        year: current_year
    };
};