import '@testing-library/jest-dom';

import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';

import RadioButton from './RadioButton';

describe('RadioButton', () => {
    // Rendering
    it('should render the radio button', () => {
        render(<RadioButton name="radio" value={1} label="Radio button" />);
        const radioButton = screen.getByRole('radio');
        expect(radioButton).toBeInTheDocument();
    });
    it('should render the label', () => {
        render(<RadioButton name="radio" value={1} label="Radio button" />);
        const label = screen.getByText('Radio button');
        expect(label).toBeInTheDocument();
    });
    it('should render the help message', () => {
        render(
            <RadioButton
                name="radio"
                value={1}
                label="Radio button"
                helpMessage="Help message"
            />
        );
        const helpMessage = screen.getByText('Help message');
        expect(helpMessage).toBeInTheDocument();
    });
    it('should render the error message', () => {
        render(
            <RadioButton
                name="radio"
                value={1}
                label="Radio button"
                errorMessage="Error message"
            />
        );
        const errorMessage = screen.getByText('Error message');
        expect(errorMessage).toBeInTheDocument();
    });

    // Functionality
    it('should call the onChange function correctly', async () => {
        const onChange = jest.fn();
        render(
            <RadioButton
                name="radio"
                value={1}
                label="Radio button"
                onChange={onChange}
            />
        );
        const radioButton = screen.getByRole('radio');
        fireEvent.click(radioButton);
        await waitFor(() => {
            expect(onChange).toHaveBeenCalledTimes(1);
            expect(radioButton).toBeChecked();
        });
    });

    // Checked
    it('should be checked', () => {
        render(
            <RadioButton name="radio" value={1} label="Radio button" checked />
        );
        const radioButton = screen.getByRole('radio');
        expect(radioButton).toBeChecked();
    });
    it('should not be checked by default', () => {
        render(<RadioButton name="radio" value={1} label="Radio button" />);
        const radioButton = screen.getByRole('radio');
        expect(radioButton).not.toBeChecked();
    });

    // Disabled
    it('should disable the radio button', () => {
        render(
            <RadioButton name="radio" value={1} label="Radio button" isDisabled />
        );
        const radioButton = screen.getByRole('radio');
        expect(radioButton).toBeDisabled();
    });
    it('should not be disabled by default', () => {
        render(<RadioButton name="radio" value={1} label="Radio button" />);
        const radioButton = screen.getByRole('radio');
        expect(radioButton).not.toBeDisabled();
    });
});
