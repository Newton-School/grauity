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
                            banner: 'https://via.placeholder.com/150',
                            title: 'Title',
                            description: 'Description',
                            body: 'Body',
                            nextButtonText: 'Go to Step 2',
                            showBackButton: false,
                        },
                        {
                            banner: 'https://via.placeholder.com/150',
                            title: 'Title',
                            description: 'Description',
                            body: 'Body',
                            nextButtonText: 'Next',
                            showBackButton: true,
                        },
                    ]}
                    shouldHideOnClickAway={false}
                    onHide={() => setIsOpen(false)}
                    onFinalStep={() => console.log('onFinalStep')}
                    mobileBottomFullWidth={false}
                    onStepChange={() => console.log('onStepChange')}
                    showModalButtons
                    showHeader
                    modalPadding="20px"
                    modalBodyMargin="20px"
                    width="500px"
                    height="500px"
                    minHeight="500px"
                    showCloseButton
                />)}
        </div>
    );
};
