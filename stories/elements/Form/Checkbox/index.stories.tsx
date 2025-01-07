import React from 'react';
import Checkbox, { CheckboxProps } from 'ui/elements/Form/Checkbox';

export default {
    title: 'Elements/Form/Checkbox',
    component: Checkbox,
};

const Template = (args: CheckboxProps) => <Checkbox {...args} value={1} />;

const defaultArgs: CheckboxProps = {
    name: 'checkbox',
    value: 1,
    label: 'Checkbox',
    isRequired: false,
    size: 'medium',
    state: 'default',
    helpMessage: '',
    errorMessage: '',
    onChange: () => {},
    checked: false,
    disabled: false,
};

export const Component = Template.bind({});
Component.args = defaultArgs;
