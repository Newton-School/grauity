import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import AlertBanner from './AlertBanner';

describe('AlertBanner', () => {
    it('renders the alert banner text', () => {
        render(<AlertBanner>Test Title</AlertBanner>);
        expect(screen.getByText('Test Title')).toBeInTheDocument();
    });

    it('renders the alert banner action buttons', () => {
        render(
            <AlertBanner
                actionButtons={[
                    { children: 'Button 1', variant: 'primary', size: 'small' },
                ]}
            >
                Test Title
            </AlertBanner>
        );
        expect(screen.getByText('Test Title')).toBeInTheDocument();
        expect(screen.getByText('Button 1')).toBeInTheDocument();
    });

    it('renders the alert banner close button', () => {
        const onClose = jest.fn();
        render(
            <AlertBanner showCloseButton onClose={onClose}>
                Test Title
            </AlertBanner>
        );
        expect(screen.getByText('Test Title')).toBeInTheDocument();
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('renders with different types and variants', () => {
        render(
            <AlertBanner type="outlined" variant="success">
                Success Alert
            </AlertBanner>
        );
        expect(screen.getByText('Success Alert')).toBeInTheDocument();
    });

    it('renders with a custom icon', () => {
        render(<AlertBanner icon="bell">Alert with Custom Icon</AlertBanner>);
        expect(screen.getByText('Alert with Custom Icon')).toBeInTheDocument();
        expect(screen.getByTestId('testid-icon')).toBeInTheDocument();
    });

    it('renders without icon when stated explicitly', () => {
        render(<AlertBanner icon={null}>Alert without Icon</AlertBanner>);
        expect(screen.getByText('Alert without Icon')).toBeInTheDocument();
        expect(screen.queryByTestId('testid-icon')).not.toBeInTheDocument();
    });

    it('calls onClose when close button is clicked', () => {
        const onClose = jest.fn();
        render(
            <AlertBanner showCloseButton onClose={onClose}>
                Closable Alert
            </AlertBanner>
        );
        fireEvent.click(screen.getByRole('button'));
        expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('applies custom class name', () => {
        render(<AlertBanner className="custom-class">Banner</AlertBanner>);
        expect(screen.getByRole('alert')).toHaveClass('custom-class');
    });

    // Regression: passing an unknown variant (e.g. typo "information") used to
    // crash the component because `ALERT_BANNER_COLOR_MAPPINGS[type][variant]`
    // returned undefined and the consumer destructured it. The util now falls
    // back to a safe variant + type and the banner renders.
    it('does not crash on an unknown variant — falls back to primary', () => {
        const warn = jest
            .spyOn(console, 'warn')
            .mockImplementation(() => {});
        render(
            <AlertBanner variant={'information' as never}>
                Banner with unknown variant
            </AlertBanner>
        );
        expect(
            screen.getByText('Banner with unknown variant')
        ).toBeInTheDocument();
        warn.mockRestore();
    });

    it('does not crash on an unknown type — falls back to default', () => {
        const warn = jest
            .spyOn(console, 'warn')
            .mockImplementation(() => {});
        render(
            <AlertBanner type={'fancy' as never}>
                Banner with unknown type
            </AlertBanner>
        );
        expect(
            screen.getByText('Banner with unknown type')
        ).toBeInTheDocument();
        warn.mockRestore();
    });
});
