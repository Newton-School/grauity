/* eslint-disable import/no-duplicates */
import React from 'react';
import { useState } from 'react';
import Button  from 'ui/elements/Button';
import {
    ConfirmationDialog,
    ConfirmationDialogProps,
} from 'ui/elements/Modal';

export default {
    title: 'Elements/ConfirmationDialog/TemplateWithTrigger',
    component: ConfirmationDialog,
    tags: ['!autodocs'],
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
    mobileBottomFullWidth: false,
};

export const Template = (args: ConfirmationDialogProps = defaultArgs) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <Button
                onClick={() => setIsOpen(true)}
                variant="danger"
                icon="signout"
            >
                Sign out
            </Button>
            {isOpen && (
                <ConfirmationDialog
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
