import React from 'react';
import NSMultiStepModal, {
    MultiStepModalProps,
} from 'ui/elements/Modal/MultiStepModal';

import withInlineContainer from '../../../.storybook/decorators/withInlineContainer';
import multiStepArgs from './multiStepArgs';

export default {
    title: 'Elements/NSModal',
    component: NSMultiStepModal,
    decorators: [withInlineContainer],
};

const Template = (args: MultiStepModalProps) => <NSMultiStepModal {...args} />;

export const MultiStepModal = Template.bind({});

MultiStepModal.args = {
    ...multiStepArgs,
};
