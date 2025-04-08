import React from 'react';
import RadioButton, { RadioButtonProps } from 'ui/elements/Form/RadioButton';

export default {
    title: 'Elements/Form/RadioButton',
    component: RadioButton,
};

const Template = (args: RadioButtonProps) => {
    const [checkedValue, setCheckedValue] = React.useState<number>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckedValue(parseInt(event.target.value, 10));
    };

    return (
        <>
            <RadioButton
                {...args}
                value={1}
                label="Value 1"
                checked={checkedValue === 1}
                onChange={handleChange}
            />
            <RadioButton
                {...args}
                value={2}
                label="Value 2"
                checked={checkedValue === 2}
                onChange={handleChange}
            />
            <RadioButton
                {...args}
                value={3}
                label="Value 3"
                checked={checkedValue === 3}
                onChange={handleChange}
            />
        </>
    );
};

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
    className: null,
};

export const Component = Template.bind({});
Component.args = defaultArgs;
