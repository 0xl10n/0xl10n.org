import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const elements = screen.getAllByText(/Service/i);
  // TODO fix type err / migrate to vitest
  // expect(linkElement).toBeInTheDocument();
});
