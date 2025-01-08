import React from 'react';
import RadioButton, { RadioButtonProps } from 'ui/elements/Form/RadioButton';

export default {
    title: 'Elements/Form/RadioButton',
    component: RadioButton,
};

const Template = (args: RadioButtonProps) => (
    <>
        <RadioButton {...args} value={1} label="Value 1" />
        <RadioButton {...args} value={2} label="Value 2" />
    </>
);

const defaultArgs: RadioButtonProps = {
    name: 'radio',
    value: 1,
    label: 'Radio button',
    isRequired: false,
    size: 'medium',
    state: 'default',
    helpMessage: '',
    errorMessage: '',
    onChange: () => {},
    checked: false,
    isDisabled: false,
};

export const Component = Template.bind({});
Component.args = defaultArgs;
