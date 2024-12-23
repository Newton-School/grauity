import React from 'react';
import TextField from 'ui/elements/Form/TextField/TextField';
import { TextFieldProps } from 'ui/elements/Form/TextField/types';
import { NSButton, NSIcon } from 'ui/index';

export default {
    title: 'Elements/Form/TextField',
    component: TextField,
    argTypes: {
        name: { control: 'text' },
        value: { control: 'text' },
        label: { control: 'text' },
        required: { control: 'boolean' },
        placeholder: { control: 'text' },
        validationMessage: { control: 'text' },
        helpMessage: { control: 'text' },
        errorMessage: { control: 'text' },
        maxLength: { control: 'number' },
        disabled: { control: 'boolean' },
        autoFocus: { control: 'boolean' },
        autoComplete: { control: 'text' },
        onChange: { action: 'onChange' },
        onClick: { action: 'onClick' },
        onBlur: { action: 'onBlur' },
        size: {
            control: {
                type: 'radio',
            },
            options: ['small', 'medium', 'large', 'extra-large'],
        },
    },
};

const Template = (args: TextFieldProps) => {
    const [value, setValue] = React.useState('');

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return <TextField {...args} value={value} onChange={onChange} />;
};

export const Default = Template.bind({});
Default.args = {
    name: 'example',
    value: '',
    label: 'Example Label',
    required: false,
    placeholder: 'This is placeholder text...',
    validationMessage: 'This is a validation message',
    helpMessage: 'This is a help message',
    errorMessage: 'This is an error message',
    maxLength: 100,
    disabled: false,
    autoFocus: false,
    autoComplete: 'on',
    size: 'medium',
};

export const WithErrorMessage = Template.bind({});
WithErrorMessage.args = {
    ...Default.args,
    isRequired: true,
    errorMessage: 'This field is required',
};

export const WithLeftAdornment = Template.bind({});
WithLeftAdornment.args = {
    ...Default.args,
    adornments: {
        start: (
            <>
                <NSIcon name="call-end" color="currentColor" />
                +91
            </>
        ),
    },
};

export const WithRightAdornment = Template.bind({});
WithRightAdornment.args = {
    ...Default.args,
    adornments: {
        end: (
            <>
                @gmail.com
                <NSIcon name="check-circle" color="currentColor" />
                <NSButton size="small" variant="primary-outlined">Save</NSButton>
            </>
        ),
    },
};

export const WithLeftAndRightAdornment = Template.bind({});
WithLeftAndRightAdornment.args = {
    ...Default.args,
    adornments: {
        start: (
            <>
                <NSIcon name="call-end" color="currentColor" />
                +91
            </>
        ),
        end: (
            <>
                @gmail.com
                <NSIcon name="check-circle" color="currentColor" />
                <NSButton size="small" variant="primary-outlined">Save</NSButton>
            </>
        ),
    },
};