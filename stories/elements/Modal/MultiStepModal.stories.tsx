import React from 'react';
import NSMultiStepModal, {
    MultiStepModalProps,
} from 'ui/elements/Modal/MultiStepModal';

import withEnableBodyScroll from '../../../.storybook/decorators/withEnableBodyScroll';
import withInlineContainer from '../../../.storybook/decorators/withInlineContainer';
import multiStepArgs from './multiStepArgs';

export default {
    title: 'Elements/NSModal/MultiStepModal',
    component: NSMultiStepModal,
    decorators: [withEnableBodyScroll, withInlineContainer],
};

const Template = (args: MultiStepModalProps) => <NSMultiStepModal {...args} />;

export const MultiStepModal = Template.bind({});

MultiStepModal.args = {
    ...multiStepArgs,
};
