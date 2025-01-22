/* eslint-disable no-console */
import React from 'react';
import Checkbox, { CheckboxProps } from 'ui/elements/Form/Checkbox';

export default {
    title: 'Elements/Form/Checkbox',
    component: Checkbox,
};

const Template = (args: CheckboxProps) => {
    const [checked, setChecked] = React.useState(false);

    return (
        <Checkbox
            {...args}
            onChange={(e) => {
                console.log('Checkbox changed', { e });
                setChecked(e.target.checked);
            }}
            isChecked={checked}
        />
    );
};

const defaultArgs: CheckboxProps = {
    name: 'checkbox',
    label: 'Checkbox',
    isRequired: false,
    size: 'medium',
    state: 'default',
    helpMessage: '',
    errorMessage: '',
    isChecked: false,
    isDisabled: false,
    isIndeterminate: false,
    value: 'any_value',
    className: null,
};

export const Component = Template.bind({});
Component.args = defaultArgs;
