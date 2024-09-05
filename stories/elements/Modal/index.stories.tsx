import React from 'react';
import NSModal, { ModalProps } from 'ui/elements/Modal';

import withEnableBodyScroll from '../../../.storybook/decorators/withEnableBodyScroll';
import withInlineContainer from '../../../.storybook/decorators/withInlineContainer';
import singleStepArgs from './singleStepArgs';


export default {
    title: 'Elements/NSModal',
    component: NSModal,
    decorators: [withEnableBodyScroll, withInlineContainer],
    argTypes: {
        body: {
            options: [
                'Example body with NSTable',
                'Simple example body with text only',
            ],
            mapping: {
                'Example body with NSTable': singleStepArgs.body,
                'Simple example body with text only':
                    'Modal body with simple text',
            },
        },
    },
};

const Template = (args: ModalProps) => <NSModal {...args} />;

export const Component = Template.bind({});

Component.args = {
    ...singleStepArgs,
};
