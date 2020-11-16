import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup); // release memory allocation between tests

const categories = [
    { name: 'portraits', email: 'Portraits of people in my life', message: "hello world" }
]
const mockSetNameSelected = jest.fn();

describe('Nav component', () => {
    // baseline test
    it('renders', () => {
        render(<Contact 
            
          />);
    });

    // it('matches snapshot', () => {
    //     const { asFragment } = render(<Contact currentCategory={portrait} />)
    //     expect(asFragment()).toMatchSnapshot()
    // })

    // it('renders', () => {
    //     const { getByTestId } = render(<Contact ContactForm={portrait} />)
    //     expect(getByTestId('h1tag')).toHaveTextContent('Contact Me')
    // })

})