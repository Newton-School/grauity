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

    it('renders with default variant and color', () => {
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
            icon.classList.contains('grauity-icon-message-info')
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
                showCTA
                ctaText="Retry"
                onCTAClick={onCTAClick}
            />
        );
        
        const ctaButton = screen.getByText('Retry');
        expect(ctaButton).toBeInTheDocument();
        
        fireEvent.click(ctaButton);
        expect(onCTAClick).toHaveBeenCalledTimes(1);
    });

    it('renders with different variant levels', () => {
        const { rerender } = render(<Toast {...defaultProps} variant="primary" />);
        expect(screen.getByRole('alert')).toBeInTheDocument();
        
        rerender(<Toast {...defaultProps} variant="secondary" />);
        expect(screen.getByRole('alert')).toBeInTheDocument();
        
        rerender(<Toast {...defaultProps} variant="tertiary" />);
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
                showCTA
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

    describe('placement', () => {
        it('bottom-center centers horizontally with transform', () => {
            render(
                <Toast
                    {...defaultProps}
                    placement="bottom-center"
                    xOffset={16}
                    yOffset={16}
                />
            );
            const toast = screen.getByRole('alert');
            expect(toast).toHaveStyle({
                position: 'fixed',
                left: '50%',
                transform: 'translateX(-50%)',
                bottom: '16px',
            });
        });

        it('top-center centers horizontally with transform', () => {
            render(
                <Toast
                    {...defaultProps}
                    placement="top-center"
                />
            );
            const toast = screen.getByRole('alert');
            expect(toast).toHaveStyle({
                position: 'fixed',
                left: '50%',
                transform: 'translateX(-50%)',
                top: '16px',
            });
        });

        it('rich variant bottom-center is centered (not over-constrained)', () => {
            render(
                <Toast
                    {...defaultProps}
                    type="rich"
                    placement="bottom-center"
                />
            );
            const toast = screen.getByRole('alert');
            expect(toast).toHaveStyle({
                position: 'fixed',
                left: '50%',
                right: 'auto',
                transform: 'translateX(-50%)',
                bottom: '16px',
            });
        });

        it('rich variant bottom-center respects xOffset in width calc', () => {
            render(
                <Toast
                    {...defaultProps}
                    type="rich"
                    placement="bottom-center"
                    xOffset={16}
                />
            );
            const toast = screen.getByRole('alert');
            expect(toast.getAttribute('style')).toContain(
                'max-width: calc(100% - 32px)'
            );
            expect(toast.getAttribute('style')).toContain('min-width: 0');
        });

        it('rich variant respects custom xOffset for side margins', () => {
            render(
                <Toast
                    {...defaultProps}
                    type="rich"
                    placement="bottom-center"
                    xOffset={24}
                />
            );
            const toast = screen.getByRole('alert');
            expect(toast.getAttribute('style')).toContain(
                'max-width: calc(100% - 48px)'
            );
        });

        it('bottom-right anchors to bottom-right', () => {
            render(
                <Toast
                    {...defaultProps}
                    placement="bottom-right"
                />
            );
            const toast = screen.getByRole('alert');
            expect(toast).toHaveStyle({
                position: 'fixed',
                bottom: '16px',
                right: '16px',
                left: 'auto',
            });
        });

        it('bottom-left anchors to bottom-left', () => {
            render(
                <Toast
                    {...defaultProps}
                    placement="bottom-left"
                />
            );
            const toast = screen.getByRole('alert');
            expect(toast).toHaveStyle({
                position: 'fixed',
                bottom: '16px',
                left: '16px',
                right: 'auto',
            });
        });

        it('rich + bottom-center keeps centering for the wide card', () => {
            render(
                <Toast
                    {...defaultProps}
                    type="rich"
                    placement="bottom-center"
                />
            );
            const toast = screen.getByRole('alert');
            expect(toast).toHaveStyle({
                position: 'fixed',
                left: '50%',
                right: 'auto',
                transform: 'translateX(-50%)',
                bottom: '16px',
            });
        });

        it('respects custom x/y offsets for centered placements', () => {
            render(
                <Toast
                    {...defaultProps}
                    placement="bottom-center"
                    xOffset={32}
                    yOffset={48}
                />
            );
            const toast = screen.getByRole('alert');
            expect(toast).toHaveStyle({
                bottom: '48px',
                left: '50%',
                transform: 'translateX(-50%)',
            });
        });
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

    describe('rich type', () => {
        const richProps: ToastProps = {
            type: 'rich',
            title: 'Earn ₹500 on each referral',
            subtitle: 'Invite friends and earn ₹500 on each successful referral',
            color: 'warning',
            variant: 'secondary',
            onClose: jest.fn(),
        };

        it('renders title and subtitle', () => {
            render(<Toast {...richProps} />);
            expect(
                screen.getByText('Earn ₹500 on each referral')
            ).toBeInTheDocument();
            expect(
                screen.getByText(
                    'Invite friends and earn ₹500 on each successful referral'
                )
            ).toBeInTheDocument();
        });

        it('renders custom image when provided', () => {
            render(
                <Toast
                    {...richProps}
                    image={<span data-testid="rich-image">XP</span>}
                />
            );
            expect(screen.getByTestId('rich-image')).toBeInTheDocument();
        });

        it('falls back to default icon when no image is provided', () => {
            render(<Toast {...richProps} color="success" />);
            const icons = screen.getAllByTestId('testid-icon');
            const successIcon = icons.find((icon) =>
                icon.classList.contains('grauity-icon-check-circle')
            );
            expect(successIcon).toBeInTheDocument();
        });

        it('hides leading visual when image is null and showLeftIcon is false', () => {
            render(
                <Toast
                    {...richProps}
                    showLeftIcon={false}
                    color="success"
                />
            );
            const icons = screen.queryAllByTestId('testid-icon');
            const successIcon = icons.find((icon) =>
                icon.classList.contains('grauity-icon-check-circle')
            );
            expect(successIcon).toBeUndefined();
        });

        it('renders primary CTA and handles click', () => {
            const onCTAClick = jest.fn();
            render(
                <Toast
                    {...richProps}
                    showCTA
                    ctaText="Copy Referral Link"
                    onCTAClick={onCTAClick}
                />
            );
            const cta = screen.getByText('Copy Referral Link');
            fireEvent.click(cta);
            expect(onCTAClick).toHaveBeenCalledTimes(1);
        });

        it('renders secondary CTA and handles click', () => {
            const onSecondaryClick = jest.fn();
            render(
                <Toast
                    {...richProps}
                    showCTA
                    ctaText="Copy"
                    secondaryCTA={{
                        icon: 'message-info',
                        onClick: onSecondaryClick,
                        ariaLabel: 'More info',
                    }}
                />
            );
            const secondary = screen.getByLabelText('More info');
            fireEvent.click(secondary);
            expect(onSecondaryClick).toHaveBeenCalledTimes(1);
        });

        it('renders close button and handles click', () => {
            render(<Toast {...richProps} />);
            const closeButton = screen.getByLabelText('Close toast');
            fireEvent.click(closeButton);
            expect(richProps.onClose).toHaveBeenCalledTimes(1);
        });

        it('renders rich layout with CTAs', () => {
            render(
                <Toast
                    {...richProps}
                    showCTA
                    ctaText="Copy"
                    secondaryCTA={{ icon: 'message-info' }}
                />
            );
            expect(screen.getByRole('alert')).toBeInTheDocument();
            expect(screen.getByText('Copy')).toBeInTheDocument();
        });

        it('subtitle stays single-line on wide viewports', () => {
            Object.defineProperty(window, 'innerWidth', {
                writable: true,
                configurable: true,
                value: 1024,
            });
            render(
                <Toast
                    {...richProps}
                    subtitle="Single-line subtitle that should be truncated with an ellipsis when it overflows."
                />
            );
            const subtitle = screen.getByText(/Single-line subtitle/);
            expect(subtitle).toHaveStyle({
                'white-space': 'nowrap',
            });
        });

        it('respects emphasis variants on rich layout', () => {
            const variants = ['primary', 'secondary', 'tertiary'] as const;
            variants.forEach((variant) => {
                render(<Toast {...richProps} variant={variant} />);
                expect(screen.getByRole('alert')).toBeInTheDocument();
                cleanup();
            });
        });
    });
});