import React, { useState } from 'react';
import { NSRadioButtonGroup, RadioButtonGroupProps } from 'ui/index';

export default {
    title: 'Elements/Form/RadioButtonGroup',
    component: NSRadioButtonGroup,
};

const Template = (args: RadioButtonGroupProps) => {
    const [value, setValue] = useState<string | number>(null);

    return (
        <NSRadioButtonGroup
            {...args}
            value={value}
            onChange={(changedValue) => {
                setValue(changedValue);
            }}
        />
    );
};

const defaultArgs: RadioButtonGroupProps = {
    name: 'radio-button',
    label: 'Select an option',
    items: [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
    ],
    value: null,
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
