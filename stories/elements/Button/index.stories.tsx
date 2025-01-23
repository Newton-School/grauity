/* eslint-disable no-console */
import React from 'react';
import Button, { ButtonProps } from 'ui/elements/Button';

export default {
    title: 'Elements/Button',
    component: Button,
};

const Template = (args: ButtonProps) => <Button {...args} />;

const defaultArgs: ButtonProps = {
    variant: 'primary',
    color: 'brand',
    size: 'medium',
    icon: 'sparkle',
    iconSize: '24',
    iconPosition: 'left',
    className: 'my-class',
    disabled: false,
    loading: false,
    style: { color: '' },
    onClick: () => {
        console.log('Button clicked!');
    },
    fullWidth: false,
    children: 'Click Me!',
    type: 'button',
    ariaLabel: 'button',
    tooltip: 'button',
    tabIndex: 0,
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
