import React from 'react';
import MultiStepModal, {
    MultiStepModalProps,
} from 'ui/elements/Modal/MultiStepModal';

import withEnableBodyScroll from '../../../.storybook/decorators/withEnableBodyScroll';
import withInlineContainer from '../../../.storybook/decorators/withInlineContainer';
import multiStepArgs from './multiStepArgs';

export default {
    title: 'Elements/MultiStepModal',
    component: MultiStepModal,
    decorators: [withEnableBodyScroll, withInlineContainer],
};

const Template = (args: MultiStepModalProps) => <MultiStepModal {...args} />;

export const Component = Template.bind({});

Component.args = {
    ...multiStepArgs,
};
