import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import axios from 'axios';
import CardList from './CardList';
import {Card} from './Card';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const cards: Card[] = [
    {
        id: 1,
        name: 'Pikachu',
        type: 'Electric',
        attack: 55,
        defense: 40,
        hp: 35,
        weaknesses: ['Ground'],
        resistances: ['Flying', 'Steel'],
        imageUrl: 'https://example.com/pikachu'
    },
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

test('renders CardList correctly', async () => {
    mockedAxios.get.mockResolvedValueOnce({data: cards});

    render(<CardList/>);

    await waitFor(() => {
        expect(screen.getByAltText('Pikachu')).toBeInTheDocument();
        expect(screen.getByAltText('Charizard')).toBeInTheDocument();
    });
});


