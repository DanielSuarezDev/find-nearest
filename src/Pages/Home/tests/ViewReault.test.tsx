/**
 * @vitest-environment jsdom
 */


import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ViewResult } from '../components/ViewResult';

describe('ViewResult', () => {
  const mockCities = [
    { name: 'City A', distance: 10, country: 'Country', lat: '0', lng: '0' },
    { name: 'City B', distance: 20, country: 'Country', lat: '0', lng: '0' },
    { name: 'City C', distance: 30, country: 'Country', lat: '0', lng: '0' },
  ];

  const mockNearbyCities = [
    { name: 'Nearby City 1', country: 'Country', lat: '0', lng: '0' },
    { name: 'Nearby City 2', country: 'Country', lat: '0', lng: '0' },
    { name: 'Nearby City 3', country: 'Country', lat: '0', lng: '0' },
  ];

  const mockSelectedCity = { name: 'Selected City', country: 'Country', lat: '0', lng: '0' };

  it('renders the list with all cities if no city is selected', () => {
    render(<ViewResult selectedCity={null} nearbyCities={[]} cities={mockCities} />);
    
    mockCities.forEach(city => {
      expect(screen.getByText(city.name)).toBeInTheDocument();
    });
    
    expect(screen.getByText(`Todas las ciudades ${mockCities.length}`)).toBeInTheDocument();
  });

  it('renders the list with nearby cities if a city is selected', () => {
    render(<ViewResult selectedCity={mockSelectedCity} nearbyCities={mockNearbyCities} cities={mockCities} />);
    
    mockNearbyCities.forEach(city => {
      expect(screen.getByText(city.name)).toBeInTheDocument();
    });
    
    expect(screen.getByText('Ciudades cercanas')).toBeInTheDocument();
  });
});
