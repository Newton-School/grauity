/* eslint-disable no-console */
import React from 'react';
import { IconButton, IconButtonProps } from 'ui/elements/Button';

export default {
    title: 'Elements/NSIconButton',
    component: IconButton,
};

const Template = (args: IconButtonProps) => <IconButton {...args} />;

const defaultArgs: IconButtonProps = {
    variant: 'primary',
    size: 'medium',
    icon: 'sparkle',
    iconSize: '24',
    className: 'my-class',
    disabled: false,
    loading: false,
    style: { color: '' },
    onClick: () => {
        console.log('IconButton clicked!');
    },
    fullWidth: false,
    type: 'button',
    ariaLabel: 'sparkle',
    tooltip: 'button',
    tabIndex: 0,
    dataTestId: 'button',
    onMouseEnter: () => {
        console.log('Mouse entered button');
    },
    onMouseLeave: () => {
        console.log('Mouse left button');
    },
};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};
