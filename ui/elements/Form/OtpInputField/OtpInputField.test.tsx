import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import OtpInputField from './OtpInputField';

describe('OtpInputField', () => {
    const defaultProps = {
        length: 4,
        onChange: jest.fn(),
    };

    it('renders with default props', () => {
        render(
            <OtpInputField
                label="Enter OTP"
                style={undefined}
                isOtpCorrect={false}
                isOtpWrong={false}
                isDisabled={false}
                errorMessage=""
                successMessage=""
                {...defaultProps}
            />
        );
        const inputs = screen.getAllByRole('textbox');
        const label = screen.getByText('Enter OTP');

        expect(inputs).toHaveLength(4);
        expect(label).toBeInTheDocument();
    });

    it('handles input changes correctly', () => {
        render(
            <OtpInputField
                label=""
                style={undefined}
                isOtpCorrect={false}
                isOtpWrong={false}
                isDisabled={false}
                errorMessage=""
                successMessage=""
                {...defaultProps}
            />
        );
        const inputs = screen.getAllByRole('textbox');

        fireEvent.input(inputs[0], { target: { value: '1' } });

        expect(inputs[0]).toHaveValue('1');
        expect(defaultProps.onChange).toHaveBeenCalledWith('1');
    });

    it('moves focus to next input after entering a digit', () => {
        render(
            <OtpInputField
                label=""
                style={undefined}
                isOtpCorrect={false}
                isOtpWrong={false}
                isDisabled={false}
                errorMessage=""
                successMessage=""
                {...defaultProps}
            />
        );
        const inputs = screen.getAllByRole('textbox');

        fireEvent.input(inputs[0], { target: { value: '1' } });

        expect(document.activeElement).toBe(inputs[1]);
    });

    it('handles arrow key navigation', () => {
        render(
            <OtpInputField
                label=""
                style={undefined}
                isOtpCorrect={false}
                isOtpWrong={false}
                isDisabled={false}
                errorMessage=""
                successMessage=""
                {...defaultProps}
            />
        );
        const inputs = screen.getAllByRole('textbox');

        // Focus first input
        fireEvent.focus(inputs[0]);

        // Test right arrow
        fireEvent.keyDown(inputs[0], { key: 'ArrowRight' });
        expect(document.activeElement).toBe(inputs[1]);

        // Test left arrow
        fireEvent.keyDown(inputs[1], { key: 'ArrowLeft' });
        expect(document.activeElement).toBe(inputs[0]);
    });

    it('shows error message when OTP is wrong', () => {
        render(
            <OtpInputField
                label=""
                style={undefined}
                isOtpCorrect={false}
                isDisabled={false}
                successMessage=""
                {...defaultProps}
                isOtpWrong
                errorMessage="Custom error message"
            />
        );

        expect(screen.getByText('Custom error message')).toBeInTheDocument();
    });

    it('shows success message when OTP is correct', () => {
        render(
            <OtpInputField
                label=""
                style={undefined}
                isOtpWrong={false}
                isDisabled={false}
                errorMessage=""
                {...defaultProps}
                isOtpCorrect
                successMessage="Custom success message"
            />
        );

        expect(screen.getByText('Custom success message')).toBeInTheDocument();
    });

    it('prevents non-numeric input', () => {
        render(
            <OtpInputField
                label=""
                style={undefined}
                isOtpCorrect={false}
                isOtpWrong={false}
                isDisabled={false}
                errorMessage=""
                successMessage=""
                {...defaultProps}
            />
        );
        const inputs = screen.getAllByRole('textbox');

        fireEvent.input(inputs[0], { target: { value: 'a' } });

        expect(inputs[0]).toHaveValue('');
        expect(defaultProps.onChange).not.toHaveBeenCalled();
    });

    it('disables all inputs when isDisabled is true', () => {
        render(
            <OtpInputField
                label=""
                style={undefined}
                isOtpCorrect={false}
                isOtpWrong={false}
                errorMessage=""
                successMessage=""
                {...defaultProps}
                isDisabled
            />
        );
        const inputs = screen.getAllByRole('textbox');

        inputs.forEach((input) => {
            expect(input).toBeDisabled();
        });
    });
});
