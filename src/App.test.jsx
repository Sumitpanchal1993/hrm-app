import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { AppProvider } from './Context Store/store';

test('renders the application navigation', () => {
  render(
    <AppProvider>
      <App />
    </AppProvider>
  );

  expect(screen.getByText('APP LOGO')).toBeInTheDocument();
});
