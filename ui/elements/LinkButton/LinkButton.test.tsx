import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import ThemeScope from '../ThemeScope';
import LinkButton from './LinkButton';

describe('LinkButton', () => {
    it('renders with default props', () => {
        render(<LinkButton>Link</LinkButton>);

        const button = screen.getByRole('button', { name: 'Link' });
        expect(button).toBeInTheDocument();
    });

    it('calls onClick handler when clicked', () => {
        const handleClick = jest.fn();
        render(<LinkButton onClick={handleClick}>Link</LinkButton>);

        fireEvent.click(screen.getByRole('button', { name: 'Link' }));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('does not call onClick handler when disabled', () => {
        const handleClick = jest.fn();
        render(
            <LinkButton onClick={handleClick} disabled>
                Link
            </LinkButton>
        );

        fireEvent.click(screen.getByRole('button', { name: 'Link' }));
        expect(handleClick).not.toHaveBeenCalled();
    });

    it('renders left and right icons', () => {
        render(
            <LinkButton leftIcon="check" rightIcon="arrow-right">
                Link
            </LinkButton>
        );

        const icons = screen.getAllByTestId('testid-icon');
        expect(icons).toHaveLength(2);
        expect(icons[0]).toHaveClass('grauity-icon-check');
        expect(icons[1]).toHaveClass('grauity-icon-arrow-right');
    });

    it('applies small size typography styles', () => {
        render(<LinkButton size="small">Link</LinkButton>);

        const button = screen.getByRole('button', { name: 'Link' });
        const content = screen.getByText('Link');

        expect(button).toHaveStyle('height: var(--line-height-lh-50, 22px)');
        expect(content).toHaveStyle('font-size: var(--font-size-fs-20, 14px)');
    });

    it('uses the exact figma dark disabled color token', () => {
        render(
            <ThemeScope applyTheme="dark">
                <LinkButton disabled>Link</LinkButton>
            </ThemeScope>
        );

        const button = screen.getByRole('button', { name: 'Link' });
        expect(button).toHaveStyle('color: #004599');
    });

    it('prefers aria-label over aria-labelledby when provided', () => {
        render(<LinkButton ariaLabel="custom link label">Link</LinkButton>);

        const button = screen.getByRole('button', { name: 'custom link label' });
        expect(button).toHaveAttribute('aria-label', 'custom link label');
        expect(button).not.toHaveAttribute('aria-labelledby');
    });
});
