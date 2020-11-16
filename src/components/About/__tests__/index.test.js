import React from 'react';
import { render, cleanup } from '@testing-library/react'; // import testing library
import '@testing-library/jest-dom/extend-expect'; // import jest library
import About from '..'; // import component we are testing


afterEach(cleanup);  // ensures no leftover memory data that could give false results

describe('About component', () => {  // baseline test
    // first test
    it('renders', () => {
        render(<About />);
    });
    // second test 
    it('matches snapshot DOM node structure', () => {
        // render About
        const { asFragment } = render(<About />); // asFragment returns a snapshot of the component
        expect(asFragment()).toMatchSnapshot(); // toMatchSnapshot is a matcher
    });

    describe('links are visible', () => {
        it('inserts text into the links', () => {
          // Arrange
          // Assert
        });
      })
})