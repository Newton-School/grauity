import React from 'react';
import NSModal, { ModalProps } from 'ui/elements/Modal';

import withEnableBodyScroll from '../../../.storybook/decorators/withEnableBodyScroll';
import withInlineContainer from '../../../.storybook/decorators/withInlineContainer';
import singleStepArgs from './singleStepArgs';

export default {
    title: 'Elements/NSModal',
    component: NSModal,
    decorators: [withEnableBodyScroll, withInlineContainer],
};

const Template = (args: ModalProps) => <NSModal {...args} />;

export const Modal = Template.bind({});

Modal.args = {
    ...singleStepArgs,
};
