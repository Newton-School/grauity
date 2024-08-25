import React, { useState } from 'react';

import {
    BUTTON_VARIANTS_ENUM,
    NSButton,
    NSConfirmationDialog,
} from '../../../ui/elements';
import { ConfirmationDialogProps } from '../../../ui/elements/Modal/types';

export default {
    title: 'Elements/NSModal',
    component: NSConfirmationDialog,
};

const Template = (args: ConfirmationDialogProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <NSButton
                onClick={() => setIsOpen(true)}
                variant={BUTTON_VARIANTS_ENUM.DANGER}
                icon="signout"
            >
                Sign out
            </NSButton>
            {isOpen && (
                <NSConfirmationDialog
                    title={args?.title}
                    description={args?.description}
                    onConfirm={() => {
                        setIsOpen(false);
                        args?.onConfirm();
                    }}
                    onCancel={() => {
                        setIsOpen(false);
                        args?.onCancel();
                    }}
                    confirmText={args?.confirmText}
                    cancelText={args?.cancelText}
                    confirmButtonVariant={args?.confirmButtonVariant}
                    cancelButtonVariant={args?.cancelButtonVariant}
                    shouldHideOnClickAway={args?.shouldHideOnClickAway}
                    blurBackground={args?.blurBackground}
                />
            )}
        </div>
    );
};

const defaultArgs = {
    title: { text: 'Are you sure?' },
    description: 'You will need to sign in again to use the platform.',
    onConfirm: () => {},
    onCancel: () => {},
    confirmText: 'Sign out',
    cancelText: 'Stay Signed in',
    confirmButtonVariant: BUTTON_VARIANTS_ENUM.SUCCESS,
    cancelButtonVariant: BUTTON_VARIANTS_ENUM.DANGER,
    shouldHideOnClickAway: false,
};

export const ConfirmationDialog = Template.bind({});

ConfirmationDialog.args = {
    ...defaultArgs,
};
