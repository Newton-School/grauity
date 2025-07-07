import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import FloatingActionButton from './FloatingActionButton';

describe('FloatingActionButton Component', () => {
    // Rendering
    it('should render the component', () => {
        render(<FloatingActionButton />);
        expect(screen.getByTestId('floating-button')).toBeInTheDocument();
    });
    it('should render the children', () => {
        render(<FloatingActionButton>+</FloatingActionButton>);
        expect(screen.getByText('+')).toBeInTheDocument();
    });

    // Functionality
    it('should call the onClick function when clicked', () => {
        const onClick = jest.fn();
        render(<FloatingActionButton onClick={onClick} />);
        screen.getByTestId('floating-button').click();
        expect(onClick).toHaveBeenCalled();
    });
    it('should pass the triggerRef to the onClick function', () => {
        const onClick = jest.fn();
        render(<FloatingActionButton onClick={onClick} />);
        screen.getByTestId('floating-button').click();
        expect(onClick).toHaveBeenCalledWith(
            expect.objectContaining({ current: expect.any(HTMLDivElement) })
        );
    });

    // Positioning
    it('should render the floating button on the right position', () => {
        render(<FloatingActionButton />);
        expect(screen.getByTestId('floating-button')).toHaveStyle(
            'right: 10px'
        );
    });
    it('should render the floating button on the left position', () => {
        render(<FloatingActionButton position="left" />);
        expect(screen.getByTestId('floating-button')).toHaveStyle('left: 10px');
    });
    it('should render the floating button on the mid position', () => {
        render(<FloatingActionButton position="mid" />);
        expect(screen.getByTestId('floating-button')).toHaveStyle('right: 50%');
    });

    // Sticky Behaviour
    it('should render the floating button sticky at bottom when body is scrolled', () => {
        render(<FloatingActionButton />);
        expect(screen.getByTestId('floating-button')).toHaveStyle(
            'bottom: 10px'
        );
        document.body.style.height = '2000px';
        document.body.style.overflow = 'scroll';
        fireEvent.scroll(window, { target: { scrollY: 1000 } });
        expect(screen.getByTestId('floating-button')).toHaveStyle(
            'bottom: 10px'
        );
    });

    it('applies custom class name', () => {
        render(
            <FloatingActionButton className="custom-class">+</FloatingActionButton>
        );
        expect(screen.getByTestId('floating-button')).toHaveClass('custom-class');
    });
});
