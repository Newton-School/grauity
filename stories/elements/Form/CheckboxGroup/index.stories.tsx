import React, { useState } from 'react';
import { CheckboxGroupProps, NSCheckboxGroup } from 'ui/index';

export default {
    title: 'Elements/Form/CheckboxGroup',
    component: NSCheckboxGroup,
};

const Template = (args: CheckboxGroupProps) => {
    const [values, setValues] = useState([]);

    return (
        <NSCheckboxGroup
            {...args}
            value={values}
            onChange={(value) => {
                setValues(value);
            }}
        />
    );
};

const defaultArgs: CheckboxGroupProps = {
    name: 'checkbox',
    label: 'Select an option',
    options: [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
    ],
    value: [],
    onChange: () => {},
    isRequired: false,
    helpMessage: '',
    errorMessage: '',
    className: '',
};

export const Component = Template.bind({});
Component.args = {
    ...defaultArgs,
};
