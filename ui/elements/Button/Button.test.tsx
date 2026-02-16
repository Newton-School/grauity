import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import ThemeScope from '../ThemeScope';
import Button from './Button';
import { ButtonProps } from './types';

const LINK_SIZE_EXPECTATIONS: Array<
    [NonNullable<ButtonProps['size']>, string, string, string, string]
> = [
    ['extra-small', '20px', '12px', '20px', '0.25px'],
    ['small', '22px', '14px', '22px', '0.4px'],
    ['medium', '24px', '14px', '24px', '0.1px'],
    ['large', '26px', '16px', '26px', '0.06px'],
    ['extra-large', '28px', '18px', '28px', '0.06px'],
];

describe('Button', () => {
    it('renders link variant with transparent background and 4px radius', () => {
        render(<Button variant="link">Link</Button>);
        const button = screen.getByRole('button', { name: 'Link' });

        expect(button).toHaveStyle('background: transparent');
        expect(button).toHaveStyle(
            'border-radius: var(--corner-radius-4px, 4px)'
        );
    });

    it.each(LINK_SIZE_EXPECTATIONS)(
        'applies link size styles for %s',
        (size, height, fontSize, lineHeight, letterSpacing) => {
            render(<Button variant="link" size={size}>Link</Button>);

            const button = screen.getByRole('button', { name: 'Link' });
            const content = screen.getByText('Link');

            expect(button).toHaveStyle(`height: ${height}`);
            expect(button).toHaveStyle(`min-height: ${height}`);
            expect(content).toHaveStyle(`font-size: ${fontSize}`);
            expect(content).toHaveStyle(`line-height: ${lineHeight}`);
            expect(content).toHaveStyle(`letter-spacing: ${letterSpacing}`);
        }
    );

    it('ignores non-brand color for link variant', () => {
        const { rerender } = render(
            <Button variant="link" color="error">
                Link
            </Button>
        );

        const errorColorClassName = screen.getByRole('button', {
            name: 'Link',
        }).className;

        rerender(
            <Button variant="link" color="brand">
                Link
            </Button>
        );

        const brandColorClassName = screen.getByRole('button', {
            name: 'Link',
        }).className;

        expect(errorColorClassName).toBe(brandColorClassName);
    });

    it('applies exact disabled color token in light theme for link variant', () => {
        render(
            <Button variant="link" disabled>
                Link
            </Button>
        );
        const button = screen.getByRole('button', { name: 'Link' });
        expect(button).toHaveStyle('color: #94c4ff');
    });

    it('applies exact disabled color token in dark theme for link variant', () => {
        render(
            <ThemeScope applyTheme="dark">
                <Button variant="link" disabled>
                    Link
                </Button>
            </ThemeScope>
        );
        const button = screen.getByRole('button', { name: 'Link' });
        expect(button).toHaveStyle('color: #004599');
    });

    it('renders left and right icons simultaneously for link variant', () => {
        render(
            <Button variant="link" leftIcon="check" rightIcon="arrow-right">
                Link
            </Button>
        );
        const icons = screen.getAllByTestId('testid-icon');
        expect(icons).toHaveLength(2);
        expect(icons[0]).toHaveClass('grauity-icon-check');
        expect(icons[1]).toHaveClass('grauity-icon-arrow-right');
    });

    it('uses legacy icon + iconPosition fallback for link variant', () => {
        render(
            <Button variant="link" icon="check" iconPosition="right">
                Link
            </Button>
        );
        const button = screen.getByRole('button', { name: 'Link' });
        const icons = screen.getAllByTestId('testid-icon');

        expect(icons).toHaveLength(1);
        expect(icons[0]).toHaveClass('grauity-icon-check');
        expect(button.lastElementChild).toBe(icons[0]);
    });

    it('ignores loading behavior for link variant', () => {
        const handleClick = jest.fn();
        render(
            <Button variant="link" loading onClick={handleClick}>
                Link
            </Button>
        );
        const button = screen.getByRole('button', { name: 'Link' });

        fireEvent.click(button);

        expect(handleClick).toHaveBeenCalledTimes(1);
        expect(button).not.toBeDisabled();
        expect(document.querySelector('.grauity-icon-refresh')).toBeNull();
    });

    it('renders with default props', () => {
        render(<Button>Click Me</Button>);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent('Click Me');
    });

    it('calls onClick handler when clicked', () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>Click Me</Button>);
        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('does not call onClick handler when disabled', () => {
        const handleClick = jest.fn();
        render(
            <Button onClick={handleClick} disabled>
                Click Me
            </Button>
        );
        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(handleClick).not.toHaveBeenCalled();
    });

    it('does not call onClick handler when loading', () => {
        const handleClick = jest.fn();
        render(
            <Button onClick={handleClick} loading>
                Click Me
            </Button>
        );
        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(handleClick).not.toHaveBeenCalled();
    });

    it('shows loading icon when loading is true', () => {
        render(<Button loading>Click Me</Button>);
        const loadingIcon = screen.getByTestId('testid-icon');
        expect(loadingIcon).toBeInTheDocument();
        expect(loadingIcon).toHaveClass('grauity-icon-refresh');
    });

    it('displays the correct icon', () => {
        render(<Button icon="check">Click Me</Button>);
        const icon = screen.getByTestId('testid-icon');
        expect(icon).toHaveClass('grauity-icon');
        expect(icon).toHaveClass('grauity-icon-check');
    });

    it('applies fullWidth style correctly', () => {
        render(<Button fullWidth>Click Me</Button>);
        const button = screen.getByRole('button');
        expect(button).toHaveStyle('width: 100%');
    });

    it('displays tooltip correctly', () => {
        render(<Button tooltip="Tooltip Text">Click Me</Button>);
        const button = screen.getByRole('button');
        expect(button).toHaveAttribute('title', 'Tooltip Text');
    });

    it('applies custom class correctly', () => {
        render(<Button className="custom-class">Click Me</Button>);
        const button = screen.getByRole('button');
        expect(button).toHaveClass('custom-class');
    });
});
