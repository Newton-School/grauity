import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import React, { useState } from 'react';

import CheckboxGroup from './CheckboxGroup';
import { CheckboxGroupProps, CheckBoxValue } from './types';

const defaultProps: CheckboxGroupProps = {
    name: 'checkbox',
    label: 'Checkbox group',
    options: [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ],
};

const ControlledCheckboxGroup = (props: CheckboxGroupProps) => {
    const { value = [], onChange } = props;
    const [selected, setSelected] = useState<CheckBoxValue[]>(value);

    return (
        <CheckboxGroup
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

describe('CheckboxGroup', () => {
    // Rendering
    it('Should render the checkbox group', () => {
        render(<CheckboxGroup {...defaultProps} />);
        expect(screen.getByRole('group')).toBeInTheDocument();
        expect(screen.getByText('Checkbox group')).toBeInTheDocument();
        expect(screen.getByText('Option 1')).toBeInTheDocument();
        expect(screen.getByText('Option 2')).toBeInTheDocument();
    });
    it('Should render the checkbox group with help message and error message', () => {
        render(
            <CheckboxGroup
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
            <ControlledCheckboxGroup
                {...defaultProps}
                value={['option1', 'option3']}
            />
        );
        expect(screen.getByLabelText('Option 1')).toBeChecked();
        expect(screen.getByLabelText('Option 2')).not.toBeChecked();
        expect(screen.getByLabelText('Option 3')).toBeChecked();
    });
    it('Should update the selected values when a checkbox is clicked', () => {
        const onChange = jest.fn();
        render(
            <ControlledCheckboxGroup {...defaultProps} onChange={onChange} />
        );

        fireEvent.click(screen.getByLabelText('Option 1'));
        expect(onChange).toHaveBeenCalledWith(['option1']);
        expect(screen.getByLabelText('Option 1')).toBeChecked();

        onChange.mockClear();
        fireEvent.click(screen.getByLabelText('Option 2'));
        expect(onChange).toHaveBeenCalledWith(['option1', 'option2']);
        expect(screen.getByLabelText('Option 2')).toBeChecked();

        onChange.mockClear();
        fireEvent.click(screen.getByLabelText('Option 1'));
        expect(onChange).toHaveBeenCalledWith(['option2']);
        expect(screen.getByLabelText('Option 1')).not.toBeChecked();

        onChange.mockClear();
        fireEvent.click(screen.getByLabelText('Option 3'));
        expect(onChange).toHaveBeenCalledWith(['option2', 'option3']);
        expect(screen.getByLabelText('Option 3')).toBeChecked();
    });
    it('Should not update the selected values when a disabled checkbox is clicked', () => {
        const onChange = jest.fn();
        render(
            <ControlledCheckboxGroup
                {...defaultProps}
                options={[
                    ...defaultProps.options,
                    { value: 'option4', label: 'Option 4', isDisabled: true },
                ]}
                onChange={onChange}
            />
        );

        fireEvent.click(screen.getByLabelText('Option 4'));
        expect(onChange).not.toHaveBeenCalled();
    });
});
