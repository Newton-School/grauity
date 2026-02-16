/* eslint-disable no-console */
import React from 'react';
import LinkButton, {
    LINK_BUTTON_SIZES,
    LinkButtonProps,
} from 'ui/elements/LinkButton';

export default {
    title: 'Elements/LinkButton',
    component: LinkButton,
};

const Template = (args: LinkButtonProps) => <LinkButton {...args} />;

const defaultArgs: LinkButtonProps = {
    size: 'large',
    leftIcon: null,
    rightIcon: null,
    iconSize: '20',
    className: 'my-class',
    disabled: false,
    style: { color: '' },
    onClick: () => {
        console.log('LinkButton clicked!');
    },
    type: 'button',
    children: 'Link',
    ariaLabel: 'link button',
    tooltip: 'link button',
    tabIndex: 0,
    onMouseEnter: () => {
        console.log('Mouse entered link button');
    },
    onMouseLeave: () => {
        console.log('Mouse left link button');
    },
};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};

Component.argTypes = {
    size: {
        control: 'select',
        options: LINK_BUTTON_SIZES,
    },
};
