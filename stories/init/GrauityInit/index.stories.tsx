import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { GrauityInit } from '../../../ui';
import DocPageWithPlayground from '../../helper-components/DocPageWithPlayground';
import exampleSourceCode from './example.source?raw';

import './index.css';

export default {
    title: 'Init/GrauityInit',
    component: GrauityInit,
    argTypes: {
        children: {
            control: {
                disable: true,
            },
        },
        as: {
            control: {
                disable: true,
            },
        },
    },
    parameters: {
        docs: {
            page: () => (
                <DocPageWithPlayground exampleSourceCode={exampleSourceCode} />
            ),
        },
    },
} as ComponentMeta<typeof GrauityInit>;

const Template: ComponentStory<typeof GrauityInit> = (args) => (
    <GrauityInit {...args}>
        <div className="font-size-24">Welcome to Grauity!</div>
        <div className="font-example-container">
            {[12, 16, 20].map((size) => (
                <div key={size} className={`font-size-${size} font-example`}>
                    This is what {size / 16}em will look like.
                </div>
            ))}
        </div>
    </GrauityInit>
);

export const Default = Template.bind({});
Default.args = {
    multiplier: 1,
    fontSize: '16px',
};
