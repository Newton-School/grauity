import React, { useState } from 'react';
import NSButton, { BUTTON_VARIANTS_ENUM } from 'ui/elements/Button';
import {
    ConfirmationDialog as NSConfirmationDialog,
    ConfirmationDialogProps,
} from 'ui/elements/Modal';

export const Template = (args: ConfirmationDialogProps) => {
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
