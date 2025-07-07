import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import * as React from 'react';

import { ButtonProps } from '../Button';
import Alert from './Alert';
import { AlertProps } from './types';

describe('Alert', () => {
    const defaultProps: AlertProps = {
        type: 'default',
        variant: 'primary',
        title: 'This is an alert',
        description: 'This is a description',
        showCloseButton: true,
        onClose: jest.fn(),
    };

    it('renders the alert title and description', () => {
        render(<Alert {...defaultProps} />);
        expect(screen.getByText('This is an alert')).toBeInTheDocument();
        expect(screen.getByText('This is a description')).toBeInTheDocument();
    });

    it('renders the alert close button', () => {
        render(<Alert {...defaultProps} />);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('calls onClose when close button is clicked', () => {
        render(<Alert {...defaultProps} />);
        fireEvent.click(screen.getByRole('button'));
        expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
    });

    it('renders with different types and variants', () => {
        render(<Alert {...defaultProps} type="outlined" variant="success" />);
        expect(screen.getByText('This is an alert')).toBeInTheDocument();
    });

    it('renders with a custom icon', () => {
        render(<Alert {...defaultProps} icon="bell" />);
        const customIcon = screen.queryAllByTestId('testid-icon');
        const targetIcon = customIcon.filter(
            (icon) => icon.classList.contains('grauity-icon-bell')
        );
        expect(targetIcon.length).toBe(1);
    });

    it('renders without icon when stated explicitly', () => {
        render(<Alert {...defaultProps} icon={null} />);
        const icons = screen.queryAllByTestId('testid-icon');
        const nonCloseIcons = icons.filter(
            (icon) => !icon.classList.contains('grauity-icon-close')
        );
        expect(nonCloseIcons.length).toBe(0);
    });

    it('renders action buttons', () => {
        const actionButtons: ButtonProps[] = [
            { children: 'Button 1', variant: 'primary', size: 'small' },
        ];
        render(<Alert {...defaultProps} actionButtons={actionButtons} />);
        expect(screen.getByText('Button 1')).toBeInTheDocument();
    });

    it('calls action button onClick', () => {
        const actionButtons: ButtonProps[] = [
            {
                children: 'Button 1',
                variant: 'primary',
                size: 'small',
                onClick: jest.fn(),
            },
        ];
        render(<Alert {...defaultProps} actionButtons={actionButtons} />);
        fireEvent.click(screen.getByText('Button 1'));
        expect(actionButtons[0].onClick).toHaveBeenCalledTimes(1);
    });

    it('applies custom class name', () => {
        render(<Alert {...defaultProps} className="custom-class" />);
        expect(screen.getByRole('alert')).toHaveClass('custom-class');
    });
});
