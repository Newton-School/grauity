import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { array, object, string } from 'yup';

import { BaseItemType } from '../../DropdownMenu';
import {
    FieldName,
    FormConfig,
    FormFields,
    FormFieldType,
    useForm,
    UseFormProps,
} from '.';

const fieldNames: FieldName[] = [
    'first_name',
    'last_name',
    'hobbies',
    'profession',
    'consent',
];

const formFields: FormFields = {
    first_name: {
        type: FormFieldType.TEXTFIELD,
        rendererProps: {
            name: 'first_name',
            label: 'First Name',
            placeholder: 'John',
            isRequired: true,
        },
    },
    last_name: {
        type: FormFieldType.TEXTFIELD,
        rendererProps: {
            name: 'last_name',
            label: 'Last Name',
            placeholder: 'Doe',
            isRequired: true,
        },
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
    },
    consent: {
        type: FormFieldType.CHECKBOX_GROUP,
        rendererProps: {
            name: 'consent',
            isRequired: true,
            items: [
                {
                    label: 'I agree to the terms and conditions',
                    value: 'true',
                },
            ],
        },
    },
};

const formConfig: FormConfig = {
    fieldNames,
    initialState: {
        first_name: '',
        last_name: '',
        hobbies: [],
        profession: null,
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
    schema: object({
        first_name: string().required('First name is required'),
        last_name: string().required('Last name is required'),
        hobbies: array().min(1, 'Select at least one hobby'),
        profession: object().nullable().required('Select a profession'),
        consent: array().min(1, 'Please agree to the terms and conditions'),
    }),
};

const TestForm = (props: UseFormProps) => {
    const { formRenderer, formData } = useForm({
        ...props,
    });

    return (
        <>
            <div>{formRenderer}</div>
            <div data-testid="form-data">{JSON.stringify(formData)}</div>
        </>
    );
};

const TestFormWithSubmitButton = (props: UseFormProps) => {
    const { formRenderer, formData, submit } = useForm({
        ...props,
        shouldShowSubmitButton: false,
    });

    return (
        <>
            <div>{formRenderer}</div>
            <button type="button" onClick={submit}>
                Custom Submit Button
            </button>
            <div data-testid="form-data">{JSON.stringify(formData)}</div>
        </>
    );
};

describe('useForm', () => {
    // Rendering
    it('Should render form', () => {
        render(<TestForm formConfig={formConfig} />);

        fieldNames.forEach((key) => {
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
                profession: null,
                consent: [],
            })
        );
    });

    // Form data change
    it('Should change text fields', () => {
        render(<TestForm formConfig={formConfig} />);

        const firstNameInput = screen.getByLabelText('First Name');
        const lastNameInput = screen.getByLabelText('Last Name');

        fireEvent.change(firstNameInput, { target: { value: 'John' } });
        fireEvent.change(lastNameInput, { target: { value: 'Doe' } });

        expect(screen.getByTestId('form-data')).toHaveTextContent(
            JSON.stringify({
                first_name: 'John',
                last_name: 'Doe',
                hobbies: [],
                profession: null,
                consent: [],
            })
        );
    });
    it('Should change dropdown fields', () => {
        render(<TestForm formConfig={formConfig} />);

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
                hobbies: [
                    formFields.hobbies.rendererProps.items[0],
                    formFields.hobbies.rendererProps.items[1],
                ],
                profession: formFields.profession.rendererProps.items[0],
                consent: [],
            })
        );

        fireEvent.click(hobbiesDropdown);
        fireEvent.click(screen.getByText('Reading'));
        fireEvent.click(screen.getByText('Drawing'));
        fireEvent.mouseDown(document.body);

        fireEvent.click(professionDropdown);
        fireEvent.click(screen.getByText('Manager'));

        expect(screen.getByTestId('form-data')).toHaveTextContent(
            JSON.stringify({
                first_name: '',
                last_name: '',
                hobbies: [
                    formFields.hobbies.rendererProps.items[1],
                    formFields.hobbies.rendererProps.items[2],
                ],
                profession: formFields.profession.rendererProps.items[2],
                consent: [],
            })
        );
    });
    it('Should change checkbox fields', () => {
        render(<TestForm formConfig={formConfig} />);

        const consentCheckbox = screen.getByLabelText(
            'I agree to the terms and conditions'
        );
        fireEvent.click(consentCheckbox);

        expect(screen.getByTestId('form-data')).toHaveTextContent(
            JSON.stringify({
                first_name: '',
                last_name: '',
                hobbies: [],
                profession: null,
                consent: ['true'],
            })
        );
    });

    // Validation
    it('Should run validations', () => {
        render(<TestForm formConfig={formConfig} />);

        // Submitting without filling any input
        fireEvent.click(screen.getByText('Submit'));

        expect(screen.getByText('First name is required')).toBeInTheDocument();
        expect(screen.getByText('Last name is required')).toBeInTheDocument();
        expect(
            screen.queryByText('Select at least one hobby')
        ).toBeInTheDocument();
        expect(screen.queryByText('Select a profession')).toBeInTheDocument();
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
        expect(screen.queryByText('Select a profession')).toBeInTheDocument();
        expect(
            screen.queryByText('Please agree to the terms and conditions')
        ).toBeInTheDocument();
    });

    // Custom submit button
    it('Should run validation and submit form with custom submit button', () => {
        render(<TestFormWithSubmitButton formConfig={formConfig} />);

        const submitButton = screen.getByText('Custom Submit Button');
        fireEvent.click(submitButton);

        expect(screen.getByText('First name is required')).toBeInTheDocument();
        expect(screen.getByText('Last name is required')).toBeInTheDocument();
        expect(
            screen.queryByText('Select at least one hobby')
        ).toBeInTheDocument();
        expect(screen.queryByText('Select a profession')).toBeInTheDocument();
        expect(
            screen.queryByText('Please agree to the terms and conditions')
        ).toBeInTheDocument();

        expect(screen.getByTestId('form-data')).toHaveTextContent(
            JSON.stringify({
                first_name: '',
                last_name: '',
                hobbies: [],
                profession: null,
                consent: [],
            })
        );

        // Filling some inputs
        const firstNameInput = screen.getByLabelText('First Name');
        const lastNameInput = screen.getByLabelText('Last Name');
        fireEvent.change(firstNameInput, { target: { value: 'John' } });
        fireEvent.change(lastNameInput, { target: { value: 'Doe' } });

        // Submitting again
        fireEvent.click(submitButton);

        expect(
            screen.queryByText('First name is required')
        ).not.toBeInTheDocument();
        expect(
            screen.queryByText('Last name is required')
        ).not.toBeInTheDocument();
        expect(
            screen.queryByText('Select at least one hobby')
        ).toBeInTheDocument();
        expect(screen.queryByText('Select a profession')).toBeInTheDocument();
        expect(
            screen.queryByText('Please agree to the terms and conditions')
        ).toBeInTheDocument();
    });
});
