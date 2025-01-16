// Code written by Lucas Mouette

import { Travel } from "../travel";

export const travel_list: Travel[] = [
  {
    name: "Sakura Odyssey",
    destination_country: "Japan",
    start_date: "2024-08-01",
    end_date: "2024-08-15",
    cities: [
      {
        city_name: "Tokyo",
        start_date: "2024-08-01",
        end_date: "n"
      },
      {
        city_name: "Kyoto",
        start_date: "2024-08-07",
        end_date: "2024-08-12"
      },
      {
        city_name: "Osaka",
        start_date: "2024-08-12",
        end_date: "2024-08-15"
      }
    ],
    tour_guide: {
      name: "Hiro Tanaka 🇯🇵",
      spoken_languages: ["Japanese", "English"]
    }
  },
  {
    name: "La Dolce Vita",
    destination_country: "Italy",
    start_date: "2024-05-10",
    end_date: "2024-05-25",
    cities: [
      {
        city_name: "Rome",
        start_date: "2024-05-10",
        end_date: "2024-05-15"
      },
      {
        city_name: "Florence",
        start_date: "2024-05-15",
        end_date: "2024-05-20"
      },
      {
        city_name: "Venice",
        start_date: "2024-05-20",
        end_date: "2024-05-25"
      }
    ],
    tour_guide: {
      name: "Sophia Rossi 🇮🇹",
      spoken_languages: ["Italian", "English"]
    }
  },
  {
    name: "Down Under",
    destination_country: "Australia",
    start_date: "2024-11-01",
    end_date: "2024-11-20",
    cities: [
      {
        city_name: "Sydney",
        start_date: "2024-11-01",
        end_date: "2024-11-06"
      },
      {
        city_name: "Melbourne",
        start_date: "2024-11-06",
        end_date: "2024-11-12"
      },
      {
        city_name: "Brisbane",
        start_date: "2024-11-12",
        end_date: "2024-11-20"
      }
    ],
    tour_guide: {
      name: "John Smith 🇬🇧",
      spoken_languages: ["English"]
    }
  },
  {
    name: "Great White North",
    destination_country: "Canada",
    start_date: "2024-09-01",
    end_date: "2024-09-15",
    cities: [
      {
        city_name: "Toronto",
        start_date: "2024-09-01",
        end_date: "2024-09-05"
      },
      {
        city_name: "Montreal",
        start_date: "2024-09-05",
        end_date: "2024-09-10"
      },
      {
        city_name: "Vancouver",
        start_date: "2024-09-10",
        end_date: "2024-09-15"
      }
    ],
    tour_guide: {
      name: "Lucas Mouette 🇫🇷",
      spoken_languages: ["English", "French"]
    }
  },
  {
    name: "Samba & Sun",
    destination_country: "Brazil",
    start_date: "2024-03-01",
    end_date: "2024-03-14",
    cities: [
      {
        city_name: "Rio de Janeiro",
        start_date: "2024-03-01",
        end_date: "2024-03-06"
      },
      {
        city_name: "São Paulo",
        start_date: "2024-03-06",
        end_date: "2024-03-10"
      },
      {
        city_name: "Salvador",
        start_date: "2024-03-10",
        end_date: "2024-03-14"
      }
    ],
    tour_guide: {
      name: "Carlos Silva 🇵🇹",
      spoken_languages: ["Portuguese", "English"]
    }
  }
]; // Mock data for testing CRUD operations