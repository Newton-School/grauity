import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import RadioButton from './RadioButton';
import { RadioButtonProps } from './types';

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
        const dummyProps: RadioButtonProps = {
            name: 'radio',
            value: 1,
            label: 'Radio button',
            onChange: jest.fn(),
            checked: false,
        };

        const { rerender } = render(<RadioButton {...dummyProps} />);
        const radioButton = screen.getByRole('radio');
        fireEvent.click(radioButton);

        expect(dummyProps.onChange).toHaveBeenCalledTimes(1);

        const newProps: RadioButtonProps = {
            ...dummyProps,
            checked: true,
        };

        rerender(<RadioButton {...newProps} />);

        expect(radioButton).toBeChecked();
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
            <RadioButton
                name="radio"
                value={1}
                label="Radio button"
                isDisabled
            />
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
