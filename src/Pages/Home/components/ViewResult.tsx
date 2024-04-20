import { FC, forwardRef, memo } from 'react';
import { FixedSizeList as List } from 'react-window';

import { Typography } from '@/Components'

import { PropsView } from '../types';

export const ViewResult: FC<PropsView> = ({
  selectedCity,
  nearbyCities,
  cities
}) => {
  const Row = memo(forwardRef(({ index, style, data }: {
    index: number;
    style: React.CSSProperties;
    data: {
      name: string;
      distance: number;
    }[];
  }, ref) => {
    const city = data[index];

    return (
      <div
        ref={ref as unknown as React.Ref<HTMLDivElement>}
        style={style} className='flex justify-between items-center p-2 border-b border-gray-300 hover:bg-gray-100'>
        <span>{city.name}</span>
        {city.distance > 0 && (
          <span>{`${city.distance.toFixed(2)} km`}</span>
        )}
      </div>
    )
  }))

  const listData = selectedCity && nearbyCities.length > 0 ? nearbyCities : cities;

  return (
    <div>
      <Typography type="l2" gutterBottom >{selectedCity && nearbyCities.length > 0 ? "Ciudades cercanas" : `Todas las ciudades ${cities.length}`}</Typography>
      <List
        className='mt-8 no-scrollbar'
        useIsScrolling
        height={530}
        width="100%"
        itemSize={35}
        itemCount={listData.length}
        itemData={listData as unknown as { name: string; distance: number }[]}  
      >
        {Row}
      </List>
    </div>
  )
}
