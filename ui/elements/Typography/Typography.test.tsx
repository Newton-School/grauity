import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import React from 'react';

import Typography from './Typography';

describe('Typography', () => {
    it('applies custom class name', () => {
        render(<Typography className="custom-class">Text</Typography>);
        const text = screen.getByText('Text');
        expect(text).toHaveClass('custom-class');
    });
});
