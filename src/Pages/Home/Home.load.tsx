import { useEffect, useMemo, useState } from 'react';

import { useCitiesStore } from '@/hooks/useCities';

import { Home } from './Home';

export const HomeLoad = () => {
  const { cities, selectedCity, loadCities, selectCity, nearbyCities } = useCitiesStore((state) => ({
    cities: state.cities,
    nearbyCities: state.nearbyCities,
    selectedCity: state.selectedCity,
    loadCities: state.loadCities,
    selectCity: state.selectCity,
  }));

  const [selectedOption, setSelectedOption] = useState<{
    label: string;
    value: string;
  }>({
    label: selectedCity?.name as string,
    value: selectedCity?.name as string
  });

  const handleCitySelect = (option: {
    label: string;
    value: string;
  } | null) => {
    console.log("option", option)
    if (option) {
      const city = cities.find((c) => c.name === option.value);
      if (city) {
        selectCity(city);
        setSelectedOption(option);
      }
    } else {
      selectCity(null);
      selectCity(null);
      setSelectedOption({
        label: "",
        value: ""
      });
    }
  };

  const cityOptions = useMemo(() => {
    return cities.map(city => ({
      label: city.name,
      value: city.name
    }));
  }, [cities]);

  useEffect(() => {
    loadCities();
  }
    , [loadCities]);

  return (
    <div className="container mx-auto p-4">
      <Home
        cityOptions={cityOptions}
        handleCitySelect={handleCitySelect}
        selectedOption={selectedOption}
        selectedCity={selectedCity}
        nearbyCities={nearbyCities}
        cities={cities}
      />
    </div>
  );
};

