import React, { useState } from 'react';

import { NSButton, NSConfirmationDialog, BUTTON_VARIANTS_ENUM, Icon } from '../../../ui/elements';

export default {
    title: 'Elements/NSModal',
    component: NSConfirmationDialog,
};

export const ConfirmationDialog = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <NSButton onClick={() => setIsOpen(true)} variant={BUTTON_VARIANTS_ENUM.DANGER} icon="signout">
                Sign out
            </NSButton>
            {isOpen && (
                <NSConfirmationDialog
                    title={{ text: 'Are you sure?' }}
                    description="This action cannot be undone."
                    onConfirm={() => {
                        console.log('Confirmed!');
                        setIsOpen(false);
                    }}
                    onCancel={() => {setIsOpen(false);}}
                />
            )}
        </div>
    );
};
