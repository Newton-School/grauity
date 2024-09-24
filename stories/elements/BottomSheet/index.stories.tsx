import React from 'react';
import BottomSheet, { BottomSheetProps } from 'ui/elements/BottomSheet';

export default {
    title: 'Elements/BottomSheet',
    component: BottomSheet,
};

const Template = (args: BottomSheetProps) => (
    <BottomSheet {...args}>BottomSheet Content Here...</BottomSheet>
);

const defaultArgs: BottomSheetProps = {
    isOpen: true,
    onClose: () => {},
    fullScreen: false,
    hideBackdrop: false,
    hideCloseButton: false,
    botttomOffset: null,
};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};
