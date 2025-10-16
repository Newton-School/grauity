import React from 'react';
import Typography, { TypographyProps } from 'ui/elements/Typography';

export default {
    title: 'Elements/Typography',
    component: Typography,
};

const Template = (args: TypographyProps) => <Typography {...args} />;

const defaultArgs: TypographyProps = {
    children: 'The quick brown fox jumps over the lazy dog!',
    variant: 'paragraph-md-p1',
    as: 'auto',
    color: 'var(--text-emphasis-primary-default, #16191d)',
};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};
