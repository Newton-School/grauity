import React from 'react';
import RadioButton, { RadioButtonProps } from 'ui/elements/Form/RadioButton';

export default {
    title: 'Elements/Form/RadioButton',
    component: RadioButton,
};

const Template = (args: RadioButtonProps) => (
    <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
        }}
    >
        <RadioButton {...args} value={1} />
        <RadioButton
            {...args}
            value={2}
            helpMessage="You can change the value of the radio button"
        />
    </div>
);

const defaultArgs: RadioButtonProps = {
    name: 'radio',
    value: 1,
    label: 'Radio Button',
    onChange: (e) => {
        console.log('data:: ', e.target.value);
    },
};

export const Default = Template.bind({});
Default.args = defaultArgs;

export const WithErrorMessage = Template.bind({});
WithErrorMessage.args = {};
