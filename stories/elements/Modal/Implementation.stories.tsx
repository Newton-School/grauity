import React, { useState } from 'react';

import { NSModal } from '../../../ui/elements';
import Button from '../../../ui/elements/Button/Button';

export default {
    title: 'Elements/NSModal',
    component: NSModal,
};

export const Implementation = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
            {isOpen && (
                <NSModal
                    modalSteps={[
                        {
                            banner: {hasBanner: true, image: 'https://via.placeholder.com/200x100'},
                            title: {text: 'Title'},
                            description: 'Description',
                            body: {hasBody: true, text: 'Body'},
                            nextButtonText: 'Go to Step 2',
                            showBackButton: false,
                        },
                        {
                            banner: {hasBanner: true, image: 'https://via.placeholder.com/200x100'},
                            title: {text: 'Title'},
                            description: 'Description',
                            body: {hasBody: true, text: 'Body'},
                            nextButtonText: 'Got it!',
                            showBackButton: true,
                        },
                    ]}
                    shouldHideOnClickAway
                    onHide={() => setIsOpen(false)}
                    onFinalStep={() => console.log('onFinalStep')}
                    mobileBottomFullWidth={false}
                    onStepChange={() => console.log('onStepChange')}
                    showModalButtons
                    showHeader
                    modalPadding="20px"
                    modalBodyMargin="20px"
                    width="500px"
                    height="auto"
                    minHeight="auto"
                    showCloseButton
                />)}
        </div>
    );
};
