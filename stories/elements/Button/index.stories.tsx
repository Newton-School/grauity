import React from 'react';

import { ButtonProps, NSButton } from '../../../ui';

export default {
    title: 'Elements/NSButton',
    component: NSButton,
};

const Template = (args: ButtonProps) => <NSButton {...args} />;

const defaultArgs = {
    variant: 'primary',
    size: 'medium',
    icon: 'sparkle',
    iconSize: 'medium',
    iconPositon: 'left',
    className: 'my-class',
    disabled: false,
    loading: false,
    style: { color: '' },
    onClick: () => {
        console.log('NSButton clicked!');
    },
    fullWidth: false,
    isIconButton: false,
    children: 'Click Me!',
    type: 'button',
    ariaLabel: 'button',
    tooltip: 'button',
    tabIndex: 1,
    dataTestId: 'button',
    onMouseEnter: () => {
        console.log('Mouse entered button');
    },
    onMouseLeave: () => {
        console.log('Mouse left button');
    },
};

export const Default = Template.bind({});

Default.args = {
    ...defaultArgs,
};
