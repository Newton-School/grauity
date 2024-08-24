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

export const Default = Template.bind({});

Default.args = {
    ...defaultArgs,
};

