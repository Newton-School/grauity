/* eslint-disable no-console */
import React from 'react';
import Tab from 'ui/elements/Tab';

import { ExampleTab } from './Example';

export default {
    title: 'Elements/Tab',
    component: Tab,
    argTypes: {
        size: {
            control: {
                type: 'select',
            },
            defaultValue: 'medium',
        },
        iconPosition: {
            control: {
                type: 'select',
            },
            defaultValue: 'left',
        },
    },
};

const Template = (args: any) => <Tab {...args} />;

const args = {
    id: 'tab1',
    icon: 'label-filled',
    iconPosition: 'left',
    iconSize: '20',
    isActive: false,
    disabled: false,
    size: 'small',
    children: 'Tab Content',
    subText: '2',
    onClick: (id: string) => {
        console.log('tab Clicked::', id);
    },
};

export const Component = Template.bind({});
Component.args = { ...args };

export const Example = ExampleTab.bind({});
