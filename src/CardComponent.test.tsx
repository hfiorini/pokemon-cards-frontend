import React from 'react';
import {render} from '@testing-library/react';
import CardComponent from './CardComponent';
import {Card} from './Card';

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

test('renders CardComponent correctly', () => {
    const {getByAltText} = render(<CardComponent card={card}/>);
    expect(getByAltText('Pikachu')).toBeInTheDocument();
});
