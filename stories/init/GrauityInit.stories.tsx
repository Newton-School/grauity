import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import '../../ui/css/index.scss';
import { GrauityInit } from '../../ui';

export default {
    title: 'Init/GrauityInit',
    component: GrauityInit,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof GrauityInit>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof GrauityInit> = (args) => (
    <GrauityInit {...args}>
        <i className="gui-icon gui-icon-code" />
    </GrauityInit>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    multiplier: 1,
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Button',
};
