// Code written by Lucas Mouette

import { Travel } from "../travel";

export const travel_list: Travel[] = [
  {
      id: "tour_001",
      destination_country: "Italy",
      start_date: "2024-04-15T00:00:00.000Z",
      end_date: "2024-04-25T00:00:00.000Z",
      cities: [
        { name: "Rome", stay_days: 3 },
        { name: "Florence", stay_days: 2 },
        { name: "Venice", stay_days: 3 },
      ],
      tour_guide: {
        name: "Maria Rossi",
        spoken_languages: ["Italian", "English", "Spanish"],
      },
    },
    {
      id: "tour_002",
      destination_country: "Japan",
      start_date: "2024-05-10T00:00:00.000Z",
      end_date: "2024-05-20T00:00:00.000Z",
      cities: [
        { name: "Tokyo", stay_days: 4 },
        { name: "Kyoto", stay_days: 3 },
        { name: "Osaka", stay_days: 3 },
      ],
      tour_guide: {
        name: "Kenji Tanaka",
        spoken_languages: ["Japanese", "English"],
      },
    },
    {
      id: "tour_003",
      destination_country: "USA",
      start_date: "2024-06-01T00:00:00.000Z",
      end_date: "2024-06-15T00:00:00.000Z",
      cities: [
        { name: "New York", stay_days: 4 },
        { name: "Los Angeles", stay_days: 5 },
        { name: "San Francisco", stay_days: 3 },
      ],
      tour_guide: {
        name: "Alex Johnson",
        spoken_languages: ["English", "Spanish"],
      },
    },
    {
      id: "tour_004",
      destination_country: "France",
      start_date: "2024-07-05T00:00:00.000Z",
      end_date: "2024-07-15T00:00:00.000Z",
      cities: [
        { name: "Paris", stay_days: 4 },
        { name: "Nice", stay_days: 3 },
        { name: "Lyon", stay_days: 3 },
      ],
      tour_guide: {
        name: "Claire Dubois",
        spoken_languages: ["French", "English"],
      },
    },
    {
      id: "tour_005",
      destination_country: "Australia",
      start_date: "2024-08-10T00:00:00.000Z",
      end_date: "2024-08-25T00:00:00.000Z",
      cities: [
        { name: "Sydney", stay_days: 5 },
        { name: "Melbourne", stay_days: 4 },
        { name: "Brisbane", stay_days: 4 },
      ],
      tour_guide: {
        name: "Emily Thompson",
        spoken_languages: ["English"],
      },
    },
]; // Temporäres Array für CRUD