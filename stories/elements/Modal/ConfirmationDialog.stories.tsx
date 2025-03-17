/* eslint-disable import/no-duplicates */
import React from 'react';
import { ConfirmationDialog, ConfirmationDialogProps } from 'ui/elements/Modal';

import withEnableBodyScroll from '../../decorators/withEnableBodyScroll';
import withInlineContainer from '../../decorators/withInlineContainer';

export default {
    title: 'Elements/ConfirmationDialog',
    component: ConfirmationDialog,
    decorators: [withEnableBodyScroll, withInlineContainer],
};

const defaultArgs: ConfirmationDialogProps = {
    isOpen: true,
    banner: null,
    title: 'Are you sure?',
    description: 'You will need to sign in again to use the platform.',
    body: null,
    onConfirm: () => {},
    onCancel: () => {},
    confirmText: 'Sign out',
    cancelText: 'Stay Signed in',
    confirmButtonVariant: 'primary',
    confirmButtonColor: 'success',
    cancelButtonVariant: 'primary',
    cancelButtonColor: 'error',
    showCloseButton: false,
    hideOnClickAway: false,
    blurBackground: false,
    animatePresence: 'fade',
};

const Template = (args: ConfirmationDialogProps) => (
    <ConfirmationDialog {...args} />
);

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};
