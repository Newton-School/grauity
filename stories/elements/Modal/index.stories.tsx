import React from 'react';

import withInlineContainer from '../../../.storybook/decorators/withInlineContainer';
import { ModalProps, NSModal } from '../../../ui/elements';
import multiStepArgs from './multiStepArgs';
import singleStepArgs from './singleStepArgs';

export default {
    title: 'Elements/NSModal',
    component: NSModal,
    decorators: [withInlineContainer],
};

const Template = (args: ModalProps) => <NSModal {...args} />;

export const Modal = Template.bind({});

Modal.args = {
    ...singleStepArgs,
};

export const MultiStepModal = Template.bind({});

MultiStepModal.args = {
    ...multiStepArgs,
};
