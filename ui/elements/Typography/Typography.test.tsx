import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import React from 'react';

import Typography from './Typography';

describe('Typography', () => {
    it('applies custom class name', () => {
        render(
            <Typography
                variant="paragraph-md-p1"
                className="custom-class"
            >
                Text
            </Typography>
        );
        const text = screen.getByText('Text');
        expect(text).toHaveClass('custom-class');
    });
    it('renders title attribute when provided', () => {
        render(
            <Typography variant="paragraph-md-p1" title="Hello tooltip">
                Text
            </Typography>
        );
        expect(screen.getByText('Text')).toHaveAttribute(
            'title',
            'Hello tooltip'
        );
    });
    it('does not render title attribute when omitted', () => {
        render(<Typography variant="paragraph-md-p1">Text</Typography>);
        expect(screen.getByText('Text')).not.toHaveAttribute('title');
    });

    it('uses auto as mapping for a heading variant', () => {
        render(
            <Typography variant="heading-sb-h2" as="auto">
                Heading
            </Typography>
        );
        expect(screen.getByText('Heading').tagName).toBe('H2');
    });

    it('respects explicit as override', () => {
        render(
            <Typography variant="heading-sb-h2" as="p">
                Heading
            </Typography>
        );
        expect(screen.getByText('Heading').tagName).toBe('P');
    });
});
