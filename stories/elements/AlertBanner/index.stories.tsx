import React from 'react';
import AlertBanner, { AlertBannerProps } from 'ui/elements/AlertBanner';
import NSTypography from 'ui/elements/Typography';

export default {
    title: 'Elements/AlertBanner',
    component: AlertBanner,
    argTypes: {
        children: {
            options: [
                'Simple example using NSTypography',
                'Simple example with text only',
            ],
            mapping: {
                'Simple example using NSTypography': (
                    <NSTypography
                        variant="paragraph-semibold-label"
                        color="inherit"
                    >
                        An Alert Banner using NSTypography
                    </NSTypography>
                ),
                'Simple example with text only':
                    'An Alert Banner using simple text',
            },
        },
    },
};

const Template = (args: AlertBannerProps) => <AlertBanner {...args} />;

const defaultArgs: AlertBannerProps = {
    type: 'outlined',
    variant: 'primary',
    icon: 'bell',
    top: null,
    bottom: null,
    left: null,
    right: null,
    position: 'static',
    justifyContent: 'center',
    onClose: null,
    showCloseButton: false,
    children: (
        <NSTypography variant="paragraph-semibold-label" color="inherit">
            This is a default alert banner
        </NSTypography>
    ),
};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};
