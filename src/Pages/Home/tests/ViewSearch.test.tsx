/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ViewSearch } from '../components/ViewSearch';
import '@testing-library/jest-dom';


describe('ViewSearch', () => {
  const mockOptions = [
    { label: 'City A', value: 'city-a' },
    { label: 'City B', value: 'city-b' },
    { label: 'City C', value: 'city-c' },
  ];

  const mockHandleCitySelect = vi.fn();

  it('calls handleCitySelect with null when the clear button is clicked', () => {
    render(<ViewSearch cityOptions={mockOptions} handleCitySelect={mockHandleCitySelect} selectedOption={
      mockOptions[0]
    } />);
    
    fireEvent.click(screen.getByText('Limpiar'));
    
    expect(mockHandleCitySelect).toHaveBeenCalledWith(null);
  });
});
