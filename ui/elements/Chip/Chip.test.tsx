import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import React from 'react';

import Chip from './Chip';
import { CHIP_VARIANT_STYLES_MAPPING } from './constants';
import { ChipVariants } from './types';

describe('Chip Component', () => {
    // Component Rendering
    it('renders the correct children', () => {
        render(<Chip>Test Chip</Chip>);
        expect(screen.getByText('Test Chip')).toBeInTheDocument();
    });

    it('uses a stable displayName for tooling', () => {
        expect(Chip.displayName).toBe('Chip');
    });

    // Variant Styles
    const variants: ChipVariants[] = [
        'brand',
        'success',
        'error',
        'warning',
        'yellow',
        'purple',
        'disabled',
        'action-brand',
        'action-success',
        'action-error',
        'action-warning',
        'action-yellow',
        'action-purple',
    ];

    variants.forEach((variant) => {
        it(`renders with correct styles for variant: ${variant}`, () => {
            render(<Chip variant={variant}>Test Chip</Chip>);
            const chipElement = screen.getByText('Test Chip');
            const styles = CHIP_VARIANT_STYLES_MAPPING[variant];

            expect(chipElement).toHaveStyle(`background: ${styles.background}`);
            expect(chipElement).toHaveStyle(`color: ${styles.color}`);
            if (styles.border) {
                expect(chipElement).toHaveStyle(`border: ${styles.border}`);
            }
        });
    });

    it('applies visual alignment padding correctly based on icon position', () => {
        const { rerender } = render(
            <Chip icon="check" iconPosition="left">
                Test Chip
            </Chip>
        );
        let chipText = screen.getByText('Test Chip');
        expect(chipText).toHaveStyle('padding-right: var(--alignment-padding)');

        rerender(
            <Chip icon="check" iconPosition="right">
                Test Chip
            </Chip>
        );
        chipText = screen.getByText('Test Chip');
        expect(chipText).toHaveStyle('padding-left: var(--alignment-padding)');
    });
});
