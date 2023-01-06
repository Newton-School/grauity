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

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
    name: 'code',
};
