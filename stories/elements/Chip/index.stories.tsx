import React from 'react';
import Chip from 'ui/elements/Chip/Chip';
import { ChipProps } from 'ui/elements/Chip/types';

export default {
    title: 'Elements/Chip',
    component: Chip,
};

const Template = (args: ChipProps) => <Chip {...args}>This is a chip</Chip>;

const defaultArgs: ChipProps = {
    variant: 'brand',
    size: 'medium',
    hasBorder: false,
    textColor: null,
    backgroundColor: null,
    borderColor: null,
    rounded: false,
    icon: null,
    iconSize: '12',
    iconPosition: 'left',
    iconColor: 'inherit',
    buttonIcon: 'close',
    onButtonClick: null,
    style: {},
};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};
