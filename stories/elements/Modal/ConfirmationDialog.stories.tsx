/* eslint-disable import/no-duplicates */
import React from 'react';
import { ConfirmationDialog, ConfirmationDialogProps } from 'ui/elements/Modal';

import withEnableBodyScroll from '../../../.storybook/decorators/withEnableBodyScroll';
import withInlineContainer from '../../../.storybook/decorators/withInlineContainer';

export default {
    title: 'Elements/Modal/ConfirmationDialog',
    component: ConfirmationDialog,
    decorators: [withEnableBodyScroll, withInlineContainer],
};

const defaultArgs: ConfirmationDialogProps = {
    banner: null,
    title: 'Are you sure?',
    description: 'You will need to sign in again to use the platform.',
    body: null,
    onConfirm: () => {},
    onCancel: () => {},
    confirmText: 'Sign out',
    cancelText: 'Stay Signed in',
    confirmButtonVariant: 'success',
    cancelButtonVariant: 'danger',
    showCloseButton: false,
    hideOnClickAway: false,
    blurBackground: false,
};

const Template = (args: ConfirmationDialogProps) => (
    <ConfirmationDialog {...args} />
);

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};
