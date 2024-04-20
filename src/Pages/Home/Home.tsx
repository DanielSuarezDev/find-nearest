import { FC } from 'react';

import { Divider, Typography } from '@/Components';

import { ViewResult } from './components/ViewResult';
import { ViewSearch } from './components/ViewSearch';

import { PropsHome } from './types';

export const Home:FC<PropsHome> = ({
  cityOptions,
  handleCitySelect,
  selectedOption,
  selectedCity,
  nearbyCities,
  cities
}) => {

  return (
    <div className="container mx-auto p-4">
      <Typography type="h3" otherClasses="mt-4">Find Nearest</Typography>
      <ViewSearch
        cityOptions={cityOptions}
        handleCitySelect={handleCitySelect}
        selectedOption={selectedOption}
      />

      <Divider />

      <ViewResult
        selectedCity={selectedCity}
        nearbyCities={nearbyCities}
        cities={cities}
      />
    </div>
  );
};

