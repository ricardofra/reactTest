import React from 'react';
import { render } from '@testing-library/react';
import HeaderNav from './HeaderNav';

describe('render links', () => {
  test('renders Home link', () => {
    const { getByText } = render(<HeaderNav />);
    const linkElement = getByText(/Home/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders GitHub reository link', () => {
    const { getByText } = render(<HeaderNav />);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders learn react link', () => {
    const { getByText } = render(<HeaderNav />);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});


