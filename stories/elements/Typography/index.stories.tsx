import React from 'react';

import { TypographyProps, NSTypography } from '../../../ui';

export default {
    title: 'Elements/NSTypography',
    component: NSTypography,
};

const Template = (args: TypographyProps) => <NSTypography {...args} />;

const defaultArgs = {
    children: 'The quick brown fox jumps over the lazy dog!',
    variant: 'heading-semibold-h40',
    as: 'h1',
    color: 'var(--text-primary, #16191d)',
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
