import React from 'react';
import NSAlertBanner, { AlertBannerProps } from 'ui/elements/AlertBanner';
import NSTypography from 'ui/elements/Typography';

export default {
    title: 'Elements/NSAlertBanner',
    component: NSAlertBanner,
};

const Template = (args: AlertBannerProps) => <NSAlertBanner {...args} />;

const defaultArgs: AlertBannerProps = {
    type: 'outlined',
    variant: 'primary',
    icon: 'bell',
    top: null,
    bottom: null,
    left: null,
    right: null,
    position: 'static',
    justifyContent: 'space-between',
    onClose: null,
    showCloseButton: false,
    actionButtons: [
        {
            children: 'Button 1',
            variant: 'tertiary',
            size: 'small',
        },
        {
            children: 'Button 2',
            variant: 'secondary',
            size: 'small',
        },
        {
            children: 'Disabled Button',
            variant: 'primary',
            size: 'small',
            disabled: true,
        }
    ],
    children: (
        <NSTypography variant="paragraph-semibold-label" color="inherit">
            This is an alert banner with buttons
        </NSTypography>
    ),
};

export const ButtonAlertBanner = Template.bind({});

ButtonAlertBanner.args = {
    ...defaultArgs,
};
