import React from 'react';
import NSAlertBanner, { AlertBannerProps } from 'ui/elements/AlertBanner';
import NSTypography from 'ui/elements/Typography';

export default {
    title: 'Elements/NSAlertBanner',
    component: NSAlertBanner,
};

const Template = (args: AlertBannerProps) => <NSAlertBanner {...args} />;

const defaultArgs: AlertBannerProps = {
    type: 'default',
    variant: 'primary',
    icon: 'bell',
    top: null,
    bottom: null,
    left: null,
    right: null,
    position: 'static',
    children: (
        <NSTypography variant="paragraph-semibold-label" color="inherit">
            This is a default alert banner
        </NSTypography>
    ),
};

export const Default = Template.bind({});

Default.args = {
    ...defaultArgs,
};
