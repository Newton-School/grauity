import React from 'react';
import Typography, { TypographyProps } from 'ui/elements/Typography';

export default {
    title: 'Elements/Typography',
    component: Typography,
};

const Template = (args: TypographyProps) => <Typography {...args} />;

const defaultArgs = {
    children: 'The quick brown fox jumps over the lazy dog!',
    variant: 'heading-semibold-h40',
    as: 'h1',
    color: 'var(--text-primary, #16191d)',
    fontSize: 'var(--font-size-40px, 40px)',
};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};
