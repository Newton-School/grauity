import { StoryFn } from '@storybook/react';
import React from 'react';
import Button from 'ui/elements/Button';
import PopOver, { PopOverProps } from 'ui/elements/PopOver';

export default {
    title: 'Elements/PopOver',
    component: PopOver,
    decorators: [
        (Story: StoryFn) => (
            <div style={{ width: '100%', height: '400px' }}>
                <Story />
            </div>
        ),
    ],
};

const Template = (args: PopOverProps) => (
    <PopOver {...args}>
        <div style={{ width: '400px', height: '200px' }}>
            <p>This is some popover content.</p>
            <p>This component is for demonstration purpose only.</p>
        </div>
    </PopOver>
);

const defaultArgs: PopOverProps = {
    direction: 'top',
    trigger: <Button>Trigger</Button>,
    autoAdjust: true,
    minimumOffset: { top: 40, left: 40, right: 40, bottom: 40 },
};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};
