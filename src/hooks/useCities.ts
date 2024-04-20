import { getDistance } from "@/utils/getDistance";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type City = {
  country: string;
  name: string;
  lat: string | number;
  lng: string | number;
};

interface CitiesState {
  cities: City[];
  loadCities: () => void;
  findNearbyCities: (city: City) => void;
  selectCity: (city: City | null) => void;
  selectedCity: City | null;
  nearbyCities: City[];
}

export const useCitiesStore = create(
  persist<CitiesState>(
    (set, get) => ({
      cities: [],
      selectedCity: null,
      nearbyCities: [],

      // Función para cargar las ciudades desde el JSON
      loadCities: async () => {
        try {
          const { default: loadedCities } = await import(
            "../database/cities.json"
          );
          set({ cities: loadedCities });
        } catch (error) {
          console.error("Error loading cities:", error);
        }
      },

      findNearbyCities: (selectedCity) => {
        const allCities = get().cities;
        const distances = allCities.map((city) => ({
          ...city,
          distance: getDistance(
            selectedCity.lat as number,
            selectedCity.lng as number,
            city.lat as number,
            city.lng as number
          ),
        }));

        const sortedByDistance = distances
          .filter((city) => city.name !== selectedCity.name)
          .sort((a, b) => a.distance - b.distance);

        const closestCities = sortedByDistance.slice(0, 4);
        set({ nearbyCities: closestCities });
      },
      selectCity: (city) => {
        set({ selectedCity: city });
        get().findNearbyCities(city as City);
      },
    }),

    {
      name: "cities-store",
      getStorage: () => sessionStorage,
    }
  )
);
