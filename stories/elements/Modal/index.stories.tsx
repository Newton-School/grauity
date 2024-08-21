import React from 'react';

import simpleArgs from './simpleArgs';
import { ModalProps, NSModal } from '../../../ui/elements';

export default {
    title: 'Elements/NSModal',
    component: NSModal,
};

const Template = (args: ModalProps) => <NSModal {...args} />;

export const Simple = Template.bind({});

Simple.args = {
    ...simpleArgs,
};
