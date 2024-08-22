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
    variant: 'primary-outlined',
    size: 'medium',
    onClick: () => {
        console.log('NSButton clicked!');
    },
};

// Button in Light Theme
export const DefaultLight = Template.bind({});
DefaultLight.parameters = {
    theme: 'light',
};
DefaultLight.args = {
    ...defaultArgs,
};


// Buttin in Dark Theme
export const DefaultDark = Template.bind({});
DefaultDark.parameters = {
    theme: 'dark',
};
DefaultDark.args = {
    ...defaultArgs,
};
