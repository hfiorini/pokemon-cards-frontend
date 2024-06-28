import React from 'react';
import {render} from '@testing-library/react';
import App from './App';

test('renders image container', () => {
    render(<App/>);
    const container = document.querySelector('#imgContainer')
    expect(container).toBeInTheDocument();
});

test('renders image container', () => {
    render(<App/>);
    const container = document.querySelector('#imgContainer')
    expect(container).toBeInTheDocument();
});
