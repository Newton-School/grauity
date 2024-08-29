import React, { useState } from 'react';
import NSButton, { BUTTON_VARIANTS_ENUM } from 'ui/elements/Button';
import NSConfirmationDialog, {
    ConfirmationDialogProps,
} from 'ui/elements/Modal/ConfirmationDialog';

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
                    banner={args?.banner}
                    title={args?.title}
                    description={args?.description}
                    body={args?.body}
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
                    showCloseButton={args?.showCloseButton}
                    hideOnClickAway={args?.hideOnClickAway}
                    blurBackground={args?.blurBackground}
                />
            )}
        </div>
    );
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
    confirmButtonVariant: BUTTON_VARIANTS_ENUM.SUCCESS,
    cancelButtonVariant: BUTTON_VARIANTS_ENUM.DANGER,
    showCloseButton: false,
    hideOnClickAway: false,
    blurBackground: false,
};

export const ConfirmationDialog = Template.bind({});

ConfirmationDialog.args = {
    ...defaultArgs,
};
