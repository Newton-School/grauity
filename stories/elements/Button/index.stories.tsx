import React from 'react';

import { ButtonProps, NSButton } from '../../../ui';

export default {
    title: 'Elements/NSButton',
    component: NSButton,
};

const Template = (args: ButtonProps) => <NSButton {...args} />;

const defaultArgs = {
    children: 'Click Me!',
    icon: 'sparkle',
    variant: 'primary',
    size: 'medium',
    onClick: () => {
        console.log('NSButton clicked!');
    },
};

export const Default = Template.bind({});

Default.args = {
    ...defaultArgs,
};
