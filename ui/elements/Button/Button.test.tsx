import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import Button from './Button';

describe('Button', () => {
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
