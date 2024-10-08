/* eslint-disable import/no-duplicates */
import React from 'react';
import { useState } from 'react';
import Button from 'ui/elements/Button';
import { ConfirmationDialog, ConfirmationDialogProps } from 'ui/elements/Modal';

export default {
    title: 'Elements/ConfirmationDialog/TemplateWithTrigger',
    component: ConfirmationDialog,
    tags: ['!autodocs'],
};

const defaultArgs: ConfirmationDialogProps = {
    isOpen: false,
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
    mobileBottomFullWidth: false,
    animatePresence: 'slide-reverse',
};

export const Template = () => {
    const [isOpen, setIsOpen] = useState(defaultArgs.isOpen);

    return (
        <div>
            <Button
                onClick={() => setIsOpen(true)}
                variant="danger"
                icon="signout"
            >
                Sign out
            </Button>
            <ConfirmationDialog
                isOpen={isOpen}
                banner={defaultArgs?.banner}
                title={defaultArgs?.title}
                description={defaultArgs?.description}
                body={defaultArgs?.body}
                onConfirm={() => {
                    setIsOpen(false);
                    defaultArgs?.onConfirm();
                }}
                onCancel={() => {
                    setIsOpen(false);
                    defaultArgs?.onCancel();
                }}
                confirmText={defaultArgs?.confirmText}
                cancelText={defaultArgs?.cancelText}
                confirmButtonVariant={defaultArgs?.confirmButtonVariant}
                cancelButtonVariant={defaultArgs?.cancelButtonVariant}
                showCloseButton={defaultArgs?.showCloseButton}
                hideOnClickAway={defaultArgs?.hideOnClickAway}
                blurBackground={defaultArgs?.blurBackground}
                mobileBottomFullWidth={defaultArgs?.mobileBottomFullWidth}
                animatePresence={defaultArgs?.animatePresence}
            />
        </div>
    );
};
