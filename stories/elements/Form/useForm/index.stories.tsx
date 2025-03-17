import React from 'react';
import { BaseItemType } from 'ui/elements/DropdownMenu';
import Typography from 'ui/elements/Typography';
import {
    NSFieldName,
    NSFormConfig,
    NSFormFieldType,
    NSUseFormProps,
    useNSForm,
} from 'ui/index';
import { array, object, string } from 'yup';

export default {
    title: 'Elements/Form/useForm',
    component: useNSForm,
};

const TemplateUseForm = (args: NSUseFormProps) => {
    const fieldNames: NSFieldName[] = [
        'first_name',
        'last_name',
        'hobbies',
        'profession',
        'consent',
        'age',
    ];

    const formConfig: NSFormConfig = {
        fieldNames,
        initialState: {
            first_name: '',
            last_name: '',
            hobbies: [],
            profession: null,
            consent: [],
            age: null,
        },
        rows: [
            {
                widths: '1fr 1fr',
                items: [
                    {
                        type: NSFormFieldType.TEXTFIELD,
                        rendererProps: {
                            name: 'first_name',
                            label: 'First Name',
                            placeholder: 'John',
                            isRequired: true,
                        },
                    },
                    {
                        type: NSFormFieldType.TEXTFIELD,
                        rendererProps: {
                            name: 'last_name',
                            label: 'Last Name',
                            placeholder: 'Doe',
                            isRequired: true,
                        },
                    },
                ],
            },
            {
                widths: '2fr 1fr',
                items: [
                    {
                        type: NSFormFieldType.DROPDOWN,
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
                    {
                        type: NSFormFieldType.DROPDOWN,
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
                ],
            },
            {
                widths: '1fr',
                items: [
                    {
                        type: NSFormFieldType.CHECKBOX_GROUP,
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
                ],
            },
            {
                widths: '1fr',
                items: [
                    {
                        type: NSFormFieldType.RADIOBUTTON_GROUP,
                        rendererProps: {
                            name: 'age',
                            label: 'Select Age',
                            isRequired: true,
                            items: [
                                {
                                    label: '< 18',
                                    value: '< 18',
                                },
                                {
                                    label: '18 - 30',
                                    value: '18 - 30',
                                },
                                {
                                    label: '31 - 50',
                                    value: '31 - 50',
                                },
                                {
                                    label: '> 50',
                                    value: '> 50',
                                },
                            ],
                        },
                    },
                ],
            },
        ],
        schema: object({
            first_name: string().required('First Name is required'),
            last_name: string().required('Last Name is required'),
            hobbies: array().min(1, 'Select at least one hobby'),
            profession: object().nullable().required('Select a profession'),
            consent: array().min(1, 'Please agree to the terms and conditions'),
            age: string()
                .required('Select age')
                .equals(
                    ['18 - 30', '31 - 50', '> 50'],
                    'Age must be greater than 18'
                ),
        }),
    };

    const { formData, formRenderer } = useNSForm({
        ...args,
        formConfig,
        rowStyles: {
            padding: '8px',
        },
    });

    return (
        <div style={{ display: 'flex', gap: '12px' }}>
            <div
                style={{
                    flex: 1,
                    maxWidth: '800px',
                    gap: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                {formRenderer}
            </div>
            <div
                style={{
                    padding: '12px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                }}
            >
                <Typography>
                    <pre>{JSON.stringify(formData, null, 2)}</pre>
                </Typography>
            </div>
        </div>
    );
};

export const ExampleUseForm = TemplateUseForm.bind({});

const defaultArgs: NSUseFormProps = {
    formConfig: {
        fieldNames: [],
        initialState: {},
        rows: [],
        schema: undefined,
    },
    rowStyles: {},
    whenToValidate: null,
    isMobileView: false,
    shouldFocusOnFirstError: true,
    shouldSubmitOnEnter: true,
    shouldShowSubmitButton: true,
    onSubmit: () => {},
    submitButtonProps: {},
};

ExampleUseForm.args = {
    ...defaultArgs,
};
