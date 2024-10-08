import React from 'react';
import Chip from 'ui/elements/Chip/Chip';
import { ChipProps } from 'ui/elements/Chip/types';

export default {
    title: 'Elements/Chip',
    component: Chip,
};

const Template = (args: ChipProps) => <Chip {...args}>Chip : 01</Chip>;

const defaultArgs: ChipProps = {
    variant: 'brand',
    size: 'medium',
    hasBorder: false,
    textColor: null,
    backgroundColor: null,
    borderColor: null,
    rounded: false,
};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};
