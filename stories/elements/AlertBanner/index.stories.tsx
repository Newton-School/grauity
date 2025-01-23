import React from 'react';
import AlertBanner, { AlertBannerProps } from 'ui/elements/AlertBanner';
import Typography from 'ui/elements/Typography';

export default {
    title: 'Elements/AlertBanner',
    component: AlertBanner,
    argTypes: {
        children: {
            options: [
                'Simple example using Typography',
                'Simple example with text only',
            ],
            mapping: {
                'Simple example using Typography': (
                    <Typography
                        variant="paragraph-semibold-label"
                        color="inherit"
                    >
                        An Alert Banner using Typography
                    </Typography>
                ),
                'Simple example with text only':
                    'An Alert Banner using simple text',
            },
        },
        actionButtons: {
            options: ['With action buttons', 'Without action buttons'],
            mapping: {
                'With action buttons': [
                    [
                        {
                            children: 'Button 1',
                            variant: 'primary',
                            color: 'neutral',
                            size: 'small',
                            onClick: () => {
                                alert('Button 1 clicked');
                            },
                        },
                        {
                            children: 'Button 2',
                            variant: 'tertiary',
                            color: 'neutral',
                            size: 'small',
                            onClick: () => {
                                alert('Button 2 clicked');
                            },
                        },
                    ],
                ],
                'Without action buttons': null,
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
    actionButtons: [
        {
            children: 'Button 1',
            variant: 'primary',
            color: 'neutral',
            size: 'small',
            onClick: () => {
                alert('Button 1 clicked');
            },
        },
        {
            children: 'Button 2',
            variant: 'tertiary',
            color: 'neutral',
            size: 'small',
            onClick: () => {
                alert('Button 2 clicked');
            },
        },
    ],
    children: (
        <Typography variant="paragraph-semibold-label" color="inherit">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </Typography>
    ),
};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};
