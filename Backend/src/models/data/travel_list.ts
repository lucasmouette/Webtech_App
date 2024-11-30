// Code written by Lucas Mouette

import { Travel } from "../travel";

export const travel_list: Travel[] = [
  {
    id: "0",
    destination_country: "Japan",
    start_date: "2024-08-01",
    end_date: "2024-08-15",
    cities: [
      {
        name: "Tokyo",
        start_date: "2024-08-01",
        end_date: "2024-08-07"
      },
      {
        name: "Kyoto",
        start_date: "2024-08-07",
        end_date: "2024-08-12"
      },
      {
        name: "Osaka",
        start_date: "2024-08-12",
        end_date: "2024-08-15"
      }
    ],
    tour_guide: {
      name: "Hiro Tanaka",
      spoken_languages: ["Japanese", "English"]
    }
  },
  {
    id: "1",
    destination_country: "Italy",
    start_date: "2024-05-10",
    end_date: "2024-05-25",
    cities: [
      {
        name: "Rome",
        start_date: "2024-05-10",
        end_date: "2024-05-15"
      },
      {
        name: "Florence",
        start_date: "2024-05-15",
        end_date: "2024-05-20"
      },
      {
        name: "Venice",
        start_date: "2024-05-20",
        end_date: "2024-05-25"
      }
    ],
    tour_guide: {
      name: "Luca Rossi",
      spoken_languages: ["Italian", "English"]
    }
  },
  {
    id: "2",
    destination_country: "Australia",
    start_date: "2024-11-01",
    end_date: "2024-11-20",
    cities: [
      {
        name: "Sydney",
        start_date: "2024-11-01",
        end_date: "2024-11-06"
      },
      {
        name: "Melbourne",
        start_date: "2024-11-06",
        end_date: "2024-11-12"
      },
      {
        name: "Brisbane",
        start_date: "2024-11-12",
        end_date: "2024-11-20"
      }
    ],
    tour_guide: {
      name: "Emma Wilson",
      spoken_languages: ["English"]
    }
  },
  {
    id: "3",
    destination_country: "Canada",
    start_date: "2024-09-01",
    end_date: "2024-09-15",
    cities: [
      {
        name: "Toronto",
        start_date: "2024-09-01",
        end_date: "2024-09-05"
      },
      {
        name: "Montreal",
        start_date: "2024-09-05",
        end_date: "2024-09-10"
      },
      {
        name: "Vancouver",
        start_date: "2024-09-10",
        end_date: "2024-09-15"
      }
    ],
    tour_guide: {
      name: "Alex Johnson",
      spoken_languages: ["English", "French"]
    }
  },
  {
    id: "4",
    destination_country: "Brazil",
    start_date: "2024-03-01",
    end_date: "2024-03-14",
    cities: [
      {
        name: "Rio de Janeiro",
        start_date: "2024-03-01",
        end_date: "2024-03-06"
      },
      {
        name: "São Paulo",
        start_date: "2024-03-06",
        end_date: "2024-03-10"
      },
      {
        name: "Salvador",
        start_date: "2024-03-10",
        end_date: "2024-03-14"
      }
    ],
    tour_guide: {
      name: "Carlos Silva",
      spoken_languages: ["Portuguese", "English"]
    }
  }
]; // Mock data for testing CRUD operations