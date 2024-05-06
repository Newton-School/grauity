import React from 'react';

import { Button, ButtonProps } from '../../../ui';

export default {
    title: 'Elements/Button',
    component: Button,
};

const Template = (args: ButtonProps) => <Button {...args} />;

const defaultArgs = {
    text: 'Click Me!',
    hasIcon: true,
    icon: 'sparkle',
    variant: 'primary',
    size: 'medium',
    onClick: () => {
        console.log('Button clicked!');
    },
};

export const Default = Template.bind({});

Default.args = {
    ...defaultArgs,
};
