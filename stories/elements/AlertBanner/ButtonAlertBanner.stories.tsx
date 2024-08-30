import React from 'react';
import NSAlertBanner, { AlertBannerProps } from 'ui/elements/AlertBanner';
import NSButton from 'ui/elements/Button';
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
    justifyContent: 'space-between',
    children: (
        <>
            <NSTypography variant="paragraph-semibold-label" color="inherit">
                This is an alert banner with buttons
            </NSTypography>
            <NSAlertBanner.ButtonGroup>
                <NSButton variant="tertiary" size="small">Button 1</NSButton>
                <NSButton variant="secondary" size="small">Button 2</NSButton>
            </NSAlertBanner.ButtonGroup>
        </>
    ),
};

export const ButtonAlertBanner = Template.bind({});

ButtonAlertBanner.args = {
    ...defaultArgs,
};
