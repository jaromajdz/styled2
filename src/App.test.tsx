import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { updateStyledTheme } from './themes/theme.configuration';

test('renders learn react link', () => {
 // const theme = updateStyledTheme()
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
