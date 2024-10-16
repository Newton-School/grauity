import { StoryFn } from '@storybook/react';
import React from 'react';
import Placeholder, { PlaceholderProps } from 'ui/elements/Placeholder';

export default {
    title: 'Elements/Placeholder',
    component: Placeholder,
    decorators: [
        (Story: StoryFn) => (
            <div style={{ width: '100px', height: '100px' }}>
                <Story />
            </div>
        ),
    ],
};

const Template = (args: PlaceholderProps) => <Placeholder {...args} />;

const defaultArgs: PlaceholderProps = {
    width: '100%',
    height: '100%',
    border: 'none',
    borderRadius: '0px',
    margin: '0px',
    backgroundColor: 'var(--bg-tertiary, #EDEFF3)',
};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};
