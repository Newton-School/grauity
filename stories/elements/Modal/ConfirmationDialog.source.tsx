import React, { useState } from 'react';
import Button, { BUTTON_VARIANTS_ENUM } from 'ui/elements/Button';
import { BUTTON_COLORS_ENUM } from 'ui/elements/Button/constants';
import {
    ConfirmationDialog,
    ConfirmationDialogProps,
} from 'ui/elements/Modal';

export const Template = (args: ConfirmationDialogProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <Button
                onClick={() => setIsOpen(true)}
                variant={BUTTON_VARIANTS_ENUM.PRIMARY}
                color={BUTTON_COLORS_ENUM.ERROR}
                icon="signout"
            >
                Sign out
            </Button>
            <ConfirmationDialog
                isOpen={isOpen}
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
                confirmButtonColor={args?.confirmButtonColor}
                cancelButtonVariant={args?.cancelButtonVariant}
                cancelButtonColor={args?.cancelButtonColor}
                showCloseButton={args?.showCloseButton}
                hideOnClickAway={args?.hideOnClickAway}
                blurBackground={args?.blurBackground}
                animatePresence={args?.animatePresence}
            />
        </div>
    );
};
