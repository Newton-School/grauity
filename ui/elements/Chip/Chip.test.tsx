import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import React from 'react';

import Chip from './Chip';
import { resolveChipVariantStyles } from './constants';
import { ChipTypes } from './types';

describe('Chip Component', () => {
    const getChipContainer = () =>
        screen.getByText('Test Chip').closest('div') as HTMLElement;

    it('renders the correct children', () => {
        render(<Chip>Test Chip</Chip>);
        expect(screen.getByText('Test Chip')).toBeInTheDocument();
    });

    const types: ChipTypes[] = [
        'brand',
        'error',
        'neutral',
        'purple',
        'success',
        'warning',
        'yellow',
    ];

    types.forEach((type) => {
        it(`renders with correct default-state styles for type: ${type}`, () => {
            render(<Chip type={type}>Test Chip</Chip>);
            const chipElement = getChipContainer();
            const { styles } = resolveChipVariantStyles({ type });

            expect(chipElement).toHaveStyle(`background: ${styles.background}`);
            expect(chipElement).toHaveStyle(`color: ${styles.color}`);
        });
    });

    it('supports filled state and darker background variants', () => {
        render(
            <Chip type="brand" state="filled" darkerbg>
                Test Chip
            </Chip>
        );

        const chipElement = getChipContainer();
        const { styles } = resolveChipVariantStyles({
            type: 'brand',
            state: 'filled',
            darkerbg: true,
        });

        expect(chipElement).toHaveStyle(`background: ${styles.background}`);
        expect(chipElement).toHaveStyle(`color: ${styles.color}`);
    });

    it('renders border when withborder is true', () => {
        render(
            <Chip type="success" withborder>
                Test Chip
            </Chip>
        );

        const chipElement = getChipContainer();
        const { styles } = resolveChipVariantStyles({ type: 'success' });

        expect(chipElement).toHaveStyle('border-style: solid');
        expect(chipElement).toHaveStyle(`border-color: ${styles.border}`);
    });

    it('keeps legacy hasBorder alias working', () => {
        render(
            <Chip type="warning" hasBorder>
                Test Chip
            </Chip>
        );

        expect(getChipContainer()).toHaveStyle('border-style: solid');
    });

    it('keeps legacy variant mapping working', () => {
        render(<Chip variant="action-brand">Test Chip</Chip>);

        const chipElement = getChipContainer();
        const { styles } = resolveChipVariantStyles({
            variant: 'action-brand',
        });

        expect(chipElement).toHaveStyle(`background: ${styles.background}`);
        expect(chipElement).toHaveStyle(`color: ${styles.color}`);
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
