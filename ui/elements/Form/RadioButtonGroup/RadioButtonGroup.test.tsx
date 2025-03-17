import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import React, { useState } from 'react';

import RadioButtonGroup from './RadioButtonGroup';
import { RadioButtonGroupProps, RadioButtonValue } from './types';

const defaultProps: RadioButtonGroupProps = {
    name: 'radio-button',
    label: 'Radio Button group',
    items: [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ],
};

const ControlledRadioButtonGroup = (props: RadioButtonGroupProps) => {
    const { value = null, onChange } = props;
    const [selected, setSelected] = useState<RadioButtonValue>(value);

    return (
        <RadioButtonGroup
            {...props}
            value={selected}
            onChange={(selectedValue) => {
                if (onChange) {
                    onChange(selectedValue);
                }
                setSelected(selectedValue);
            }}
        />
    );
};

describe('RadioButtonGroup', () => {
    // Rendering
    it('Should render the radio button group', () => {
        render(<RadioButtonGroup {...defaultProps} />);
        expect(screen.getByRole('group')).toBeInTheDocument();
        expect(screen.getByText('Radio Button group')).toBeInTheDocument();
        expect(screen.getByText('Option 1')).toBeInTheDocument();
        expect(screen.getByText('Option 2')).toBeInTheDocument();
    });
    it('Should render the radio button group with help message and error message', () => {
        render(
            <RadioButtonGroup
                {...defaultProps}
                helpMessage="This is a help message"
                errorMessage="This is an error message"
            />
        );
        expect(screen.getByText('This is a help message')).toBeInTheDocument();
        expect(
            screen.getByText('This is an error message')
        ).toBeInTheDocument();
    });

    // Interaction
    it('Should check the options if initial value is given', () => {
        render(
            <ControlledRadioButtonGroup {...defaultProps} value="option1" />
        );
        expect(screen.getByLabelText('Option 1')).toBeChecked();
        expect(screen.getByLabelText('Option 2')).not.toBeChecked();
        expect(screen.getByLabelText('Option 3')).not.toBeChecked();
    });
    it('Should update the selected value when a radio button is clicked', () => {
        const onChange = jest.fn();
        render(
            <ControlledRadioButtonGroup {...defaultProps} onChange={onChange} />
        );

        fireEvent.click(screen.getByLabelText('Option 1'));
        expect(onChange).toHaveBeenCalledWith('option1');
        expect(screen.getByLabelText('Option 1')).toBeChecked();

        onChange.mockClear();
        fireEvent.click(screen.getByLabelText('Option 2'));
        expect(onChange).toHaveBeenCalledWith('option2');
        expect(screen.getByLabelText('Option 1')).not.toBeChecked();
        expect(screen.getByLabelText('Option 2')).toBeChecked();
    });
});
