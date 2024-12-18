import { StoryFn } from '@storybook/react';
import React from 'react';
import Tabs, { TabProps } from 'ui/elements/Tabs';

export default {
    title: 'Elements/Tabs',
    component: Tabs,
    decorators: [
        (Story: StoryFn) => (
            <div
                style={{
                    height: '16px',
                }}
            >
                <Story />
            </div>
        ),
    ],
};

const Template = (args: TabProps) => <Tabs {...args} />;

const defaultArgs: TabProps = {
    tabItems: ['Weekly', 'Monthly'],
};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};
