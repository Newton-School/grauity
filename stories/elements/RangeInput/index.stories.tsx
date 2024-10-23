import React from 'react';
import RangeInput, { RangeInputProps } from 'ui/elements/RangeInput';

export default {
    title: 'Elements/RangeInput',
    component: RangeInput,
};

const Template = (args: RangeInputProps) => <RangeInput {...args} />;

const defaultArgs: RangeInputProps = {
    minValue: 0,
    maxValue: 100,
    step: 1,
    value: {
        min: 0,
        max: 100,
    },
    onChange: () => {},
    width: '100%',
};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};
