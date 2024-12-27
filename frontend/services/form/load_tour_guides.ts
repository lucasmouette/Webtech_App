// Code written by Lucas Mouette

import axios from 'axios';

export async function load_tour_guides() {
    let tour_guide_list: {name: string, spoken_languages: string[]}[] = []

    try {
        const all_tour_guides = await axios.get('http://localhost:8084/api/tourguides');

        all_tour_guides.data.forEach((tour_guide: {name: string, spoken_languages: string}) => {
            tour_guide_list.push({name: tour_guide.name, spoken_languages: [tour_guide.spoken_languages]});
            console.log(tour_guide_list);
        });
        return tour_guide_list;
    } catch (error) {
        console.error("ERROR: No tour guides found", error);
    };
};