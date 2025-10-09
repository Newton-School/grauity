import React from 'react';
import TextField from 'ui/elements/Form/TextField/TextField';
import { TextFieldProps } from 'ui/elements/Form/TextField/types';
import { NSButton, NSIcon } from 'ui/index';

export default {
    title: 'Elements/Form/TextField',
    component: TextField,
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
    isRequired: false,
    placeholder: 'This is placeholder text...',
    helpMessage: 'This is a help message',
    errorMessage: 'This is an error message',
    maxLength: 100,
    isDisabled: false,
    isReadOnly: false,
    autoFocus: false,
    autoComplete: 'on',
    size: 'medium',
    color: 'brand',
};

export const NumberType = Template.bind({});
NumberType.args = {
    ...Default.args,
    placeholder: 'Please enter a number...',
    type: 'number',
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
                <NSButton size="small" variant="primary" color="brand">Save</NSButton>
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
                <NSButton size="small" variant="primary" color="brand">Save</NSButton>
            </>
        ),
    },
};