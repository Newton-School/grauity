import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { array, string } from 'yup';

import { BaseItemType } from '../../DropdownMenu';
import { FormConfig, FormFields, FormFieldType, useFormHook } from '.';

const formFields: FormFields = {
    first_name: {
        type: FormFieldType.TEXTFIELD,
        rendererProps: {
            name: 'first_name',
            label: 'First Name',
            placeholder: 'John',
            isRequired: true,
        },
        schema: string().required('First name is required'),
    },
    last_name: {
        type: FormFieldType.TEXTFIELD,
        rendererProps: {
            name: 'last_name',
            label: 'Last Name',
            placeholder: 'Doe',
            isRequired: true,
        },
        schema: string().required('Last name is required'),
    },
    hobbies: {
        type: FormFieldType.DROPDOWN,
        rendererProps: {
            name: 'hobbies',
            label: 'Select Hobbies',
            multiple: true,
            items: [
                {
                    type: BaseItemType.OPTION,
                    label: 'Reading',
                    value: 'reading',
                },
                {
                    type: BaseItemType.OPTION,
                    label: 'Writing',
                    value: 'writing',
                },
                {
                    type: BaseItemType.OPTION,
                    label: 'Drawing',
                    value: 'drawing',
                },
            ],
        },
        schema: array().min(1, 'Select at least one hobby'),
    },
    profession: {
        type: FormFieldType.DROPDOWN,
        rendererProps: {
            name: 'profession',
            label: 'Select Profession',
            multiple: false,
            items: [
                {
                    type: BaseItemType.OPTION,
                    label: 'Developer',
                    value: 'developer',
                },
                {
                    type: BaseItemType.OPTION,
                    label: 'Designer',
                    value: 'designer',
                },
                {
                    type: BaseItemType.OPTION,
                    label: 'Manager',
                    value: 'manager',
                },
                {
                    type: BaseItemType.OPTION,
                    label: 'Tester',
                    value: 'tester',
                },
            ],
        },
        schema: string().required('Profession is required'),
    },
    consent: {
        type: FormFieldType.CHECKBOX,
        rendererProps: {
            name: 'consent',
            label: 'I agree to the terms and conditions',
            value: 'true',
            isRequired: true,
        },
        schema: array().min(1, 'Please agree to the terms and conditions'),
    },
};
const formConfig: FormConfig = {
    fields: formFields,
    initialState: {
        first_name: '',
        last_name: '',
        hobbies: [],
        profession: '',
        consent: [],
    },
    rows: [
        {
            widths: '1fr 1fr',
            items: [formFields.first_name, formFields.last_name],
        },
        {
            widths: '2fr 1fr',
            items: [formFields.hobbies, formFields.profession],
        },
        {
            widths: '1fr',
            items: [formFields.consent],
        },
    ],
};

const TestForm = () => {
    const { formRenderer, formData, validateFields } = useFormHook({
        initialState: formConfig.initialState,
        formRows: formConfig.rows,
        shouldFocusOnFirstError: true,
    });

    const handleSubmit = () => {
        validateFields(formConfig.fields, formData);
    };

    return (
        <>
            <div>{formRenderer}</div>
            <button type="submit" onClick={handleSubmit}>
                Submit
            </button>
            <div data-testid="form-data">{JSON.stringify(formData)}</div>
        </>
    );
};

describe('useFormHook', () => {
    // Rendering
    it('Should render form', () => {
        render(<TestForm />);

        Object.keys(formFields).forEach((key) => {
            const field = formFields[key];
            if (field.rendererProps.label) {
                expect(
                    screen.getByText(field.rendererProps.label)
                ).toBeInTheDocument();
            }
        });

        expect(screen.getByTestId('form-data')).toHaveTextContent(
            JSON.stringify({
                first_name: '',
                last_name: '',
                hobbies: [],
                profession: '',
                consent: [],
            })
        );
    });

    // Form data change
    it('Should change text fields', () => {
        render(<TestForm />);

        const firstNameInput = screen.getByLabelText('First Name');
        const lastNameInput = screen.getByLabelText('Last Name');

        fireEvent.change(firstNameInput, { target: { value: 'John' } });
        fireEvent.change(lastNameInput, { target: { value: 'Doe' } });

        expect(screen.getByTestId('form-data')).toHaveTextContent(
            JSON.stringify({
                first_name: 'John',
                last_name: 'Doe',
                hobbies: [],
                profession: '',
                consent: [],
            })
        );
    });
    it('Should change dropdown fields', () => {
        render(<TestForm />);

        const hobbiesDropdown = screen.getByText('Select Hobbies');
        const professionDropdown = screen.getByText('Select Profession');

        fireEvent.click(hobbiesDropdown);
        fireEvent.click(screen.getByText('Reading'));
        fireEvent.click(screen.getByText('Writing'));
        fireEvent.mouseDown(document.body);

        fireEvent.click(professionDropdown);
        fireEvent.click(screen.getByText('Developer'));

        expect(screen.getByTestId('form-data')).toHaveTextContent(
            JSON.stringify({
                first_name: '',
                last_name: '',
                hobbies: ['reading', 'writing'],
                profession: 'developer',
                consent: [],
            })
        );
    });
    it('Should change checkbox fields', () => {
        render(<TestForm />);

        const consentCheckbox = screen.getByLabelText(
            'I agree to the terms and conditions'
        );
        fireEvent.click(consentCheckbox);

        expect(screen.getByTestId('form-data')).toHaveTextContent(
            JSON.stringify({
                first_name: '',
                last_name: '',
                hobbies: [],
                profession: '',
                consent: ['true'],
            })
        );
    });

    // Validation
    it('Should validate text fields', () => {
        render(<TestForm />);

        // Submitting without filling any input
        fireEvent.click(screen.getByText('Submit'));

        expect(screen.getByText('First name is required')).toBeInTheDocument();
        expect(screen.getByText('Last name is required')).toBeInTheDocument();
        expect(
            screen.queryByText('Select at least one hobby')
        ).toBeInTheDocument();
        expect(
            screen.queryByText('Profession is required')
        ).toBeInTheDocument();
        expect(
            screen.queryByText('Please agree to the terms and conditions')
        ).toBeInTheDocument();

        // Filling some inputs
        const firstNameInput = screen.getByLabelText('First Name');
        const lastNameInput = screen.getByLabelText('Last Name');
        fireEvent.change(firstNameInput, { target: { value: 'John' } });
        fireEvent.change(lastNameInput, { target: { value: 'Doe' } });

        // Submitting again
        fireEvent.click(screen.getByText('Submit'));

        expect(
            screen.queryByText('First name is required')
        ).not.toBeInTheDocument();
        expect(
            screen.queryByText('Last name is required')
        ).not.toBeInTheDocument();
        expect(
            screen.queryByText('Select at least one hobby')
        ).toBeInTheDocument();
        expect(
            screen.queryByText('Profession is required')
        ).toBeInTheDocument();
        expect(
            screen.queryByText('Please agree to the terms and conditions')
        ).toBeInTheDocument();
    });
});
