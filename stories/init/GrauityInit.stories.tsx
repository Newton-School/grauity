import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
    ArgsTable,
    Description,
    Primary,
    PRIMARY_STORY,
    Stories,
    Subtitle,
    Title,
} from '@storybook/addon-docs';
import { Playground } from 'storybook-addon-code-editor';
import { GrauityInit } from '../../ui';

export default {
    title: 'Init/GrauityInit',
    component: GrauityInit,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
    parameters: {
        docs: {
            page: () => (
                <>
                    <Subtitle />
                    <Description />
                    <Primary />
                    <ArgsTable story={PRIMARY_STORY} />
                    <Stories />
                    <Title />
                    <Playground code="const { GrauityInit } = grauity;" />
                </>
            ),
        },
    },
} as ComponentMeta<typeof GrauityInit>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof GrauityInit> = (args) => (
    <GrauityInit {...args}>
        <i className="gui-icon gui-icon-code" />
    </GrauityInit>
);

export const PrimaryX = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PrimaryX.args = {
    multiplier: 1,
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Button',
};
