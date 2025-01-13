/* eslint-disable no-console */
import React from 'react';
import Checkbox, { CheckboxProps } from 'ui/elements/Form/Checkbox';

export default {
    title: 'Elements/Form/Checkbox',
    component: Checkbox,
};

const Template = (args: CheckboxProps) => (
    <Checkbox
        {...args}
        onChange={(e) => {
            console.log('Checkbox changed', { e });
        }}
    />
);

const defaultArgs: CheckboxProps = {
    name: 'checkbox',
    label: 'Checkbox',
    isRequired: false,
    size: 'medium',
    state: 'default',
    helpMessage: '',
    errorMessage: '',
    checked: false,
    isDisabled: false,
    indeterminate: false,
};

export const Component = Template.bind({});
Component.args = defaultArgs;
