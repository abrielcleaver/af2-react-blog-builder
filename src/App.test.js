import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the header and footer components', () => {
  render(<App />);
  const header = screen.getByText(/QueerPlantMom's Blog Builder/i);
  expect(header).toBeInTheDocument();

  const footer = screen.getByText(/Copyright QueerPlantMom 2021-2022/i);
  expect(footer).toBeInTheDocument();
});
