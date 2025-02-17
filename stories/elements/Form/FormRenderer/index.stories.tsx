import React from 'react';
import { BaseItemType } from 'ui/elements/DropdownMenu';
import Typography from 'ui/elements/Typography';
import {
    NSButton,
    NSFormConfig,
    NSFormFields,
    NSFormFieldType,
    useNSFormHook,
} from 'ui/index';
import { array, string } from 'yup';

export default {
    title: 'Elements/Form/useFormHook',
    component: useNSFormHook,
};

const TemplateUseFormHook = () => {
    const formFields: NSFormFields = {
        first_name: {
            type: NSFormFieldType.TEXTFIELD,
            rendererProps: {
                name: 'first_name',
                label: 'First Name',
                placeholder: 'John',
                isRequired: true,
            },
            schema: string().required('First name is required'),
        },
        last_name: {
            type: NSFormFieldType.TEXTFIELD,
            rendererProps: {
                name: 'last_name',
                label: 'Last Name',
                placeholder: 'Doe',
                isRequired: true,
            },
            schema: string().required('Last name is required'),
        },
        hobbies: {
            type: NSFormFieldType.DROPDOWN_MENU,
            rendererProps: {
                name: 'hobbies',
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
                triggerProps: {
                    label: 'Select Hobbies',
                },
            },
            schema: array().min(1, 'Select at least one hobby'),
        },
        profession: {
            type: NSFormFieldType.DROPDOWN_MENU,
            rendererProps: {
                name: 'profession',
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
                triggerProps: {
                    label: 'Select Profession',
                },
            },
            schema: string().required('Profession is required'),
        },
        consent: {
            type: NSFormFieldType.CHECKBOX,
            rendererProps: {
                name: 'consent',
                label: 'I agree to the terms and conditions',
                value: 'true',
                isRequired: true,
            },
            schema: array().min(1, 'Please agree to the terms and conditions'),
        },
    };
    const formConfig: NSFormConfig = {
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

    const { formData, formRenderer, validateFields } = useNSFormHook({
        initialState: formConfig.initialState,
        formRows: formConfig.rows,
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
                <NSButton
                    fullWidth
                    onClick={() => {
                        validateFields(formFields, formData);
                    }}
                >
                    Submit
                </NSButton>
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

export const ExampleUseFormHook = TemplateUseFormHook.bind({});
