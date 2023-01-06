import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Icon } from '../../../ui';
import DocPageWithPlayground from '../../helper-components/DocPageWithPlayground';
import exampleSourceCode from './example.source?raw';

export default {
    title: 'Elements/Icon',
    component: Icon,
    argTypes: {
        as: {
            control: {
                disable: true,
            },
        },
        name: {
            control: {
                type: 'select',
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
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => (
    <Icon {...args}>
        <div className="font-size-24">Welcome to Grauity!</div>
        <div className="font-example-container">
            {[12, 16, 20].map((size) => (
                <div key={size} className={`font-size-${size} font-example`}>
                    This is what {size / 16}em will look like.
                </div>
            ))}
        </div>
    </Icon>
);

export const Default = Template.bind({});
Default.args = {
    name: 'code',
};
