// Code written by Lucas Mouette, Abgabe 04

export function formatNumber(time:number): string {
    let output: string = ''

    if (time < 10) {
        output += '0' + time
    }
    else {
        output += time
    }
    return output;
};