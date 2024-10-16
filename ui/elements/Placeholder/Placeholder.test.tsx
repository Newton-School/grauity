import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import React from 'react';

import Placeholder from './Placeholder';

describe('Placeholder Component', () => {
    it('renders with default props', () => {
        render(<Placeholder />);
        expect(
            screen.getByTestId('data-testid-placeholder')
        ).toBeInTheDocument();
    });

    it('renders with custom props', () => {
        render(
            <Placeholder
                width="50%"
                height="50%"
                borderRadius="10px"
                margin="10px"
                backgroundColor="red"
            />
        );
        const placeholder = screen.getByTestId('data-testid-placeholder');
        expect(placeholder).toHaveStyle('width: 50%');
        expect(placeholder).toHaveStyle('height: 50%');
        expect(placeholder).toHaveStyle('border-radius: 10px');
        expect(placeholder).toHaveStyle('margin: 10px');
        expect(placeholder).toHaveStyle('background-color: red');
    });
});
