import React from 'react';
import TextArea, { TextAreaProps } from 'ui/elements/Form/TextArea';

export default {
    title: 'Elements/Form/TextArea',
    component: TextArea,
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
    isReadOnly: false,
};

export const WithErrorMessage = Template.bind({});
WithErrorMessage.args = {
    ...Default.args,
    isRequired: true,
    errorMessage: 'This field is required',
};
