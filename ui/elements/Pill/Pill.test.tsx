import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import Pill from './Pill';

describe('Pill Component', () => {
    // Rendering
    it('renders the pill with default props', () => {
        render(<Pill>Test Pill</Pill>);
        const button = screen.getByRole('button', { name: 'Test Pill' });

        expect(button).toBeInTheDocument();
        expect(screen.getByText('Test Pill')).toBeInTheDocument();
        expect(button).toHaveAttribute('aria-label', 'Test Pill');
    });

    // Icons
    it('renders left and right icons when provided', () => {
        const { container } = render(
            <Pill leftIconName="check" rightIconName="bell">
                Icons
            </Pill>
        );

        expect(container.querySelector('.grauity-icon-check')).toBeInTheDocument();
        expect(container.querySelector('.grauity-icon-bell')).toBeInTheDocument();
        expect(screen.getAllByTestId('testid-icon')).toHaveLength(2);
    });

    // Count indicator
    it('renders count when provided (including 0)', () => {
        render(<Pill count={0}>Count</Pill>);
        expect(screen.getByText('0')).toBeInTheDocument();
    });

    // Button Click
    it('calls onClick when clicked', () => {
        const handleClick = jest.fn();
        render(<Pill onClick={handleClick}>Clickable</Pill>);

        fireEvent.click(screen.getByRole('button', { name: 'Clickable' }));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    // Disabled State
    it('does not call onClick when disabled', () => {
        const handleClick = jest.fn();
        render(
            <Pill isDisabled onClick={handleClick}>
                Disabled
            </Pill>
        );

        const button = screen.getByRole('button', { name: 'Disabled' });
        expect(button).toBeDisabled();
        expect(button).toHaveAttribute('aria-disabled', 'true');

        fireEvent.click(button);
        expect(handleClick).not.toHaveBeenCalled();
    });

    // Read-only State
    it('does not call onClick when read only', () => {
        const handleClick = jest.fn();
        render(
            <Pill isReadOnly onClick={handleClick}>
                Read Only
            </Pill>
        );

        const button = screen.getByRole('button', { name: 'Read Only' });
        expect(button).toBeDisabled();
        expect(button).toHaveAttribute('aria-disabled', 'true');

        fireEvent.click(button);
        expect(handleClick).not.toHaveBeenCalled();
    });

    // Accessibility
    it('uses aria-label from props when provided', () => {
        render(<Pill ariaLabel="Custom Label">Label</Pill>);
        const button = screen.getByRole('button', { name: 'Custom Label' });
        expect(button).toHaveAttribute('aria-label', 'Custom Label');
    });
});
