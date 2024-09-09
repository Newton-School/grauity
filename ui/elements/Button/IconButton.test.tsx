import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import IconButton from './IconButton';
import { IconButtonProps } from './types';

describe('IconButton', () => {
    const defaultProps: IconButtonProps = {
        icon: 'exclamation-circle',
        variant: 'primary',
        size: 'medium',
        onClick: jest.fn(),
    };

    it('renders the icon button', () => {
        render(<IconButton {...defaultProps} />);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('calls onClick when clicked', () => {
        render(<IconButton {...defaultProps} />);
        fireEvent.click(screen.getByRole('button'));
        expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
    });

    it('renders with custom class', () => {
        render(<IconButton {...defaultProps} className="custom-class" />);
        expect(screen.getByRole('button')).toHaveClass('custom-class');
    });

    it('renders with custom icon', () => {
        render(<IconButton {...defaultProps} icon="bell" />);
        const buttonIcon = screen.getByTestId('testid-icon');
        expect(buttonIcon).toBeInTheDocument();
        expect(buttonIcon).toHaveClass('grauity-icon-bell');
    });
});