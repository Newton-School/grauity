import React from 'react';
import Modal, { ModalProps } from 'ui/elements/Modal';

import withEnableBodyScroll from '../../decorators/withEnableBodyScroll';
import withInlineContainer from '../../decorators/withInlineContainer';
import singleStepArgs from './singleStepArgs';


export default {
    title: 'Elements/Modal',
    component: Modal,
    decorators:  [withEnableBodyScroll, withInlineContainer],
    argTypes: {
        body: {
            options: [
                'Example body with Table',
                'Simple example body with text only',
            ],
            mapping: {
                'Example body with Table': singleStepArgs.body,
                'Simple example body with text only':
                    'Modal body with simple text',
            },
        },
    },
};

const Template = (args: ModalProps) => <Modal {...args} />;

export const Component = Template.bind({});

Component.args = {
    ...singleStepArgs,
};
