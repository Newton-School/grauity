import '@testing-library/jest-dom';

import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import * as React from 'react';

import Toast from './Toast';
import { ToastProps } from './types';

describe('Toast', () => {
    const defaultProps: ToastProps = {
        title: 'Toast Title',
        showCloseIcon: true,
        onClose: jest.fn(),
    };

    afterEach(() => {
        cleanup();
        jest.clearAllMocks();
    });

    it('renders toast title', () => {
        render(<Toast {...defaultProps} />);
        expect(screen.getByText('Toast Title')).toBeInTheDocument();
    });

    it('renders with default device and color', () => {
        render(<Toast {...defaultProps} />);
        const toast = screen.getByRole('alert');
        expect(toast).toBeInTheDocument();
    });

    it('renders left icon by default', () => {
        render(<Toast {...defaultProps} color="success" />);
        const icons = screen.getAllByTestId('testid-icon');
        const successIcon = icons.find(icon => 
            icon.classList.contains('grauity-icon-check-circle')
        );
        expect(successIcon).toBeInTheDocument();
    });

    it('hides left icon when showLeftIcon is false', () => {
        render(<Toast {...defaultProps} showLeftIcon={false} />);
        const icons = screen.queryAllByTestId('testid-icon');
        const infoIcon = icons.find(icon => 
            icon.classList.contains('grauity-icon-info-circle')
        );
        expect(infoIcon).toBeUndefined();
    });

    it('renders custom left icon', () => {
        render(<Toast {...defaultProps} leftIcon="bell" />);
        const icons = screen.getAllByTestId('testid-icon');
        const bellIcon = icons.find(icon => 
            icon.classList.contains('grauity-icon-bell')
        );
        expect(bellIcon).toBeInTheDocument();
    });

    it('renders close button and handles click', () => {
        render(<Toast {...defaultProps} />);
        const closeButton = screen.getByLabelText('Close toast');
        expect(closeButton).toBeInTheDocument();
        
        fireEvent.click(closeButton);
        expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
    });

    it('hides close button when showCloseIcon is false', () => {
        render(<Toast {...defaultProps} showCloseIcon={false} />);
        const closeButton = screen.queryByLabelText('Close toast');
        expect(closeButton).not.toBeInTheDocument();
    });

    it('renders CTA button when showCTA is true', () => {
        const onCTAClick = jest.fn();
        render(
            <Toast
                {...defaultProps}
                showCTA={true}
                ctaText="Retry"
                onCTAClick={onCTAClick}
            />
        );
        
        const ctaButton = screen.getByText('Retry');
        expect(ctaButton).toBeInTheDocument();
        
        fireEvent.click(ctaButton);
        expect(onCTAClick).toHaveBeenCalledTimes(1);
    });

    it('renders with different device variants', () => {
        const { rerender } = render(<Toast {...defaultProps} device="desktop" />);
        expect(screen.getByRole('alert')).toBeInTheDocument();
        
        rerender(<Toast {...defaultProps} device="mobile" />);
        expect(screen.getByRole('alert')).toBeInTheDocument();
    });

    it('renders with different variant levels', () => {
        const { rerender } = render(<Toast {...defaultProps} variant="low" />);
        expect(screen.getByRole('alert')).toBeInTheDocument();
        
        rerender(<Toast {...defaultProps} variant="medium" />);
        expect(screen.getByRole('alert')).toBeInTheDocument();
        
        rerender(<Toast {...defaultProps} variant="high" />);
        expect(screen.getByRole('alert')).toBeInTheDocument();
    });

    it('renders with different colors', () => {
        const colors = ['warning', 'brand', 'neutral', 'success', 'error'] as const;
        
        colors.forEach(color => {
            render(<Toast {...defaultProps} color={color} />);
            expect(screen.getByRole('alert')).toBeInTheDocument();
            cleanup();
        });
    });

    it('auto-closes after specified time', async () => {
        const onAutoClose = jest.fn();
        render(
            <Toast
                {...defaultProps}
                autoClose={100}
                onAutoClose={onAutoClose}
            />
        );
        
        await waitFor(() => {
            expect(onAutoClose).toHaveBeenCalledTimes(1);
        }, { timeout: 200 });
    });

    it('clears auto-close timeout on manual close', async () => {
        const onAutoClose = jest.fn();
        render(
            <Toast
                {...defaultProps}
                autoClose={1000}
                onAutoClose={onAutoClose}
            />
        );
        
        const closeButton = screen.getByLabelText('Close toast');
        fireEvent.click(closeButton);
        
        await waitFor(() => {
            expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
        });
        
        // Wait longer than auto-close time to ensure it doesn't trigger
        await new Promise(resolve => setTimeout(resolve, 1100));
        expect(onAutoClose).not.toHaveBeenCalled();
    });

    it('clears auto-close timeout on CTA click', async () => {
        const onAutoClose = jest.fn();
        const onCTAClick = jest.fn();
        
        render(
            <Toast
                {...defaultProps}
                showCTA={true}
                autoClose={1000}
                onAutoClose={onAutoClose}
                onCTAClick={onCTAClick}
            />
        );
        
        const ctaButton = screen.getByText('Action');
        fireEvent.click(ctaButton);
        
        await waitFor(() => {
            expect(onCTAClick).toHaveBeenCalledTimes(1);
        });
        
        // Wait longer than auto-close time to ensure it doesn't trigger
        await new Promise(resolve => setTimeout(resolve, 1100));
        expect(onAutoClose).not.toHaveBeenCalled();
    });

    it('renders with placement and custom offsets', () => {
        render(
            <Toast
                {...defaultProps}
                placement="top-right"
                xOffset={20}
                yOffset={20}
            />
        );
        expect(screen.getByRole('alert')).toBeInTheDocument();
    });

    it('renders with custom className and style', () => {
        render(
            <Toast
                {...defaultProps}
                className="custom-toast"
                style={{ zIndex: 9999 }}
            />
        );
        const toast = screen.getByRole('alert');
        expect(toast).toHaveClass('custom-toast');
        expect(toast).toHaveStyle({ zIndex: 9999 });
    });
});