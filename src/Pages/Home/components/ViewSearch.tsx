/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Button, SelectLabels } from '@/Components';
import { FC } from 'react';
import { PropsViewSearch } from '../types';

export const ViewSearch: FC<PropsViewSearch> = ({
  cityOptions,
  handleCitySelect,
  selectedOption
}) => {
  return (
    <div className='flex justify-center items-center'>
      <SelectLabels
        label="Selecciona una ciudad"
        options={cityOptions}
        //@ts-ignore
        onChange={handleCitySelect}
        placeHolder="Selecciona una ciudad..."
        isSearchable={true}
        showDefaultOptions={false}
        value={selectedOption as any}
      />
      <Button
        onClick={() => {
          handleCitySelect(null);
        }}
        height='h-9'
        otherClass='mt-3 ml-3'
        width='w-24'
      >
        Limpiar
      </Button>
    </div>
  )
}
