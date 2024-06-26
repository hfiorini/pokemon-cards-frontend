import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import CardDetail from './CardDetail';
import { Card } from './Card';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const card: Card = {
  id: 1,
  name: 'Pikachu',
  type: 'Electric',
  attack: 55,
  defense: 40,
  hp: 35,
  weaknesses: ['Ground'],
  resistances: ['Flying', 'Steel'],
  imageUrl: 'https://example.com/pikachu'
};

const opponents: Card[] = [
  {
    id: 2,
    name: 'Charizard',
    type: 'Fire',
    attack: 84,
    defense: 78,
    hp: 78,
    weaknesses: ['Water', 'Electric'],
    resistances: ['Fighting', 'Bug'],
    imageUrl: 'https://example.com/charizard'
  }
];

test('renders CardDetail correctly', async () => {
  mockedAxios.get.mockResolvedValueOnce({ data: card });
  mockedAxios.get.mockResolvedValueOnce({ data: opponents });

  const handleClose = jest.fn();

  render(<CardDetail id={1} onClose={handleClose} />);

  await waitFor(() => {
    expect(screen.getByText('Pikachu')).toBeInTheDocument();
  });
});


