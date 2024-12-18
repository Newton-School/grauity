import React from 'react';
import TextArea, { TextAreaProps } from 'ui/elements/Form/TextArea';

export default {
    title: 'Elements/Form/TextArea',
    component: TextArea,
    argTypes: {
        name: { control: 'text' },
        value: { control: 'text' },
        label: { control: 'text' },
        isRequired: { control: 'boolean' },
        placeholder: { control: 'text' },
        validationMessage: { control: 'text' },
        helpMessage: { control: 'text' },
        errorMessage: { control: 'text' },
        maxLength: { control: 'number' },
        isDisabled: { control: 'boolean' },
        autoFocus: { control: 'boolean' },
        autoComplete: { control: 'text' },
        onChange: { action: 'onChange' },
        onClick: { action: 'onClick' },
        onBlur: { action: 'onBlur' },
        readOnly: { control: 'boolean' },
        cols: { control: 'number' },
        rows: { control: 'number' },
    },
};

const Template = (args: TextAreaProps) => {
    const [value, setValue] = React.useState('');

    const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(event.target.value);
    };

    return <TextArea {...args} value={value} onChange={onChange} />;
};

export const Default = Template.bind({});
Default.args = {
    name: 'example',
    value: '',
    label: 'Example Label',
    isRequired: false,
    placeholder: 'This is placeholder text...',
    validationMessage: 'This is a validation message',
    helpMessage: 'This is a help message',
    errorMessage: 'This is an error message',
    maxLength: 100,
    isDisabled: false,
    autoFocus: false,
    autoComplete: 'on',
    size: 'medium',
    cols: 4,
    rows: 3,
    onChange: () => {},
    onClick: () => {},
    onBlur: () => {},
    readOnly: false,
};

export const WithErrorMessage = Template.bind({});
WithErrorMessage.args = {
    ...Default.args,
    isRequired: true,
    errorMessage: 'This field is required',
};
