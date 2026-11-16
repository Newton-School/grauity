import { StoryFn } from '@storybook/react';
import React from 'react';
import Tabs, { TabsProps } from 'ui/elements/Tabs';

export default {
    title: 'Elements/Tabs',
    component: Tabs,
    decorators: [
        (Story: StoryFn) => (
            <div
                style={{
                    width: '200px',
                }}
            >
                <Story />
            </div>
        ),
    ],
};

const Template = (args: TabsProps) => <Tabs {...args} />;

const defaultArgs: TabsProps = {
    tabItems: ['Weekly', 'Monthly'],
};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};

// Keyboard-navigable: Tab into the strip, then Arrow Left/Right/Home/End to
// move focus and Enter/Space to select. `ariaLabel` names the tablist for
// assistive tech. Use the Accessibility (a11y) panel to verify.
export const KeyboardNavigation = Template.bind({});

KeyboardNavigation.args = {
    tabItems: ['Overview', 'Activity', 'Settings', 'Members'],
    ariaLabel: 'Project sections',
};
