import React, { useState } from 'react';

import { ModalProps, NSModal, NSTable } from '../../../ui/elements';
import Button from '../../../ui/elements/Button/Button';

export default {
    title: 'Elements/NSModal',
    component: NSModal,
};

const Template = (args: ModalProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
            {isOpen && (
                <NSModal
                    modalSteps={args?.modalSteps}
                    shouldHideOnClickAway={args?.shouldHideOnClickAway}
                    onHide={() => {
                        setIsOpen(false);
                        if (args?.onHide) {
                            args?.onHide();
                        }
                    }}
                    onFinalStep={() => {
                        setIsOpen(false);
                        if (args?.onFinalStep) {
                            args?.onFinalStep();
                        }
                    }}
                    showModalStepsPagination={args?.showModalStepsPagination}
                    mobileBottomFullWidth={args?.mobileBottomFullWidth}
                    onStepChange={args?.onStepChange}
                    showModalButtons={args?.showModalButtons}
                    showHeader={args?.showHeader}
                    modalPadding={args?.modalPadding}
                    modalBodyMargin={args?.modalBodyMargin}
                    width={args?.width}
                    height={args?.height}
                    minHeight={args?.minHeight}
                    showCloseButton
                />
            )}
        </div>
    );
};

const args = {
    modalSteps: [
        {
            banner: {
                image: 'https://via.placeholder.com/200x100',
            },
            title: { text: 'Multi-step Modal Step 1' },
            description: 'This is a multi-step modal. Description goes here. \n From top to bottom elements of a Modal are Banner, Title, Description, Body, Pagination, Action Buttons. \n This step does not have modal body.',
            body: null,
            nextButtonText: 'Go to Step 2',
            showBackButton: false,
        },
        {
            banner: null,
            title: { text: 'Multi-step Modal Step 2' },
            description: 'This step doesn\'t have a banner, and has body as an image. Neat innit?',
            body: {
                image: 'https://via.placeholder.com/300x100',
            },
            nextButtonText: 'Go to Step 3',
            showBackButton: true,
        },
        {
            banner: null,
            title: { text: 'Multi-step Modal Step 3' },
            description: 'This step has neither banner nor body. It only has description text.',
            body: null,
            nextButtonText: 'Go tp Step 4',
            showBackButton: true,
        },
        {
            banner: null,
            title: { text: 'Multi-step Modal Step 4' },
            description: null,
            body: {
                image: 'https://via.placeholder.com/300x100',
            },
            nextButtonText: 'Go to Step 5',
            showBackButton: true,
        },
        {
            banner: null,
            title: { text: 'Multi-step Modal Step 5' },
            description: 'This is the final step. It has a custom body render function.',
            body: {
                render: () => (
                    <NSTable
                        config={{
                            columnRows: [
                                {
                                    key: 'column1',
                                    cells: [
                                        {
                                            key: 'cell1',
                                            display: 'Cell 1',
                                        },
                                        {
                                            key: 'cell2',
                                            display: 'Cell 2',
                                        },
                                        {
                                            key: 'cell3',
                                            display: 'Cell 3',
                                        },
                                    ],
                                },
                            ],
                            rows: [
                                {
                                    key: 'row1',
                                    cells: [
                                        {
                                            key: 'cell1',
                                            display: 'Row 1 Cell 1',
                                        },
                                        {
                                            key: 'cell2',
                                            display: 'Row 1 Cell 2',
                                        },
                                        {
                                            key: 'cell3',
                                            display: 'Row 1 Cell 3',
                                        },
                                    ],
                                },
                                {
                                    key: 'row2',
                                    cells: [
                                        {
                                            key: 'cell1',
                                            display: 'Row 2 Cell 1',
                                        },
                                        {
                                            key: 'cell2',
                                            display: 'Row 2 Cell 2',
                                        },
                                        {
                                            key: 'cell3',
                                            display: 'Row 2 Cell 3',
                                        },
                                    ],
                                },
                                {
                                    key: 'row3',
                                    cells: [
                                        {
                                            key: 'cell1',
                                            display: 'Row 3 Cell 1',
                                        },
                                        {
                                            key: 'cell2',
                                            display: 'Row 3 Cell 2',
                                        },
                                        {
                                            key: 'cell3',
                                            display: 'Row 3 Cell 3',
                                        },
                                    ],
                                },
                            ],
                        }}
                        condensed
                        striped
                        borderAround
                        borderWithin
                        capitalizeHeaders
                    />
                ),
            },
            nextButtonText: 'Awesome, Finish!',
            showBackButton: true,
        },
    ],
    showModalStepsPagination: true,
    shouldHideOnClickAway: true,
    onHide: () => console.log('onHide'),
    onFinalStep: () => console.log('onFinalStep'),
    mobileBottomFullWidth: false,
    onStepChange: () => console.log('onStepChange'),
    showModalButtons: true,
    showHeader: true,
    modalPadding: '20px',
    modalBodyMargin: '20px',
    width: '500px',
    height: 'auto',
    minHeight: 'auto',
    showCloseButton: true,
};

export const MultiStepModalImplementation = Template.bind({});
MultiStepModalImplementation.parameters = {
    theme: 'light',
};
MultiStepModalImplementation.args = {
    ...args,
};

export const MultiStepModalImplementationDark = Template.bind({});
MultiStepModalImplementationDark.parameters = {
    theme: 'dark',
};
MultiStepModalImplementationDark.args = {
    ...args,
};
