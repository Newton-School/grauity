import React from 'react';
import Alert, { AlertProps } from 'ui/elements/Alert';
import Typography from 'ui/elements/Typography';

export default {
    title: 'Elements/Alert',
    component: Alert,
    argTypes: {
        title: {
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
                        An Alert title using Typography
                    </Typography>
                ),
                'Simple example with text only':
                    'Alert title using simple text',
            },
        },
        actionButtons: {
            options: ['With action buttons', 'Without action buttons'],
            mapping: {
                'With action buttons': [
                    {
                        children: 'Button 1',
                        variant: 'tertiary',
                        size: 'small',
                        onClick: () => {
                            alert('Button 1 clicked');
                        },
                    },
                    {
                        children: 'Button 2',
                        variant: 'secondary',
                        size: 'small',
                        onClick: () => {
                            alert('Button 2 clicked');
                        },
                    },
                ],
                'Without action buttons': null,
            },
        },
    },
};

const Template = (args: AlertProps) => <Alert {...args} />;

const defaultArgs: AlertProps = {
    type: 'filled',
    variant: 'primary',
    icon: 'auto',
    top: null,
    bottom: null,
    left: null,
    right: null,
    position: 'static',
    onClose: null,
    showCloseButton: true,
    actionButtons: [
        {
            children: 'Button',
            variant: 'secondary',
            size: 'small',
        },
        {
            children: 'Button',
            variant: 'tertiary',
            size: 'small',
        },
    ],
    inlineButtons: false,
    title: (
        <Typography variant="paragraph-semibold-label" color="inherit">
            This is a default alert banner
        </Typography>
    ),
    description: (
        <Typography variant="paragraph-medium-body3" color="inherit">
            We all step into this design world full of passion and
            enthusiasm.But over time, something changes without us even
            noticing.
        </Typography>
    ),
};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};
