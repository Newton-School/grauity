import React from 'react';
import { ModalProps, NSTable } from '../../../ui/elements';
import simpleTableArgs from '../Table/simpleArgs';

const simpleArgs: ModalProps = {
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
            buttonVariant: 'primary',
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
            buttonVariant: 'secondary',
        },
        {
            banner: null,
            title: { text: 'Multi-step Modal Step 3' },
            description: 'This step has neither banner nor body. It only has description text.',
            body: null,
            nextButtonText: 'Go to Step 4',
            showBackButton: true,
            buttonVariant: 'success',
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
            buttonVariant: 'danger',
        },
        {
            banner: null,
            title: { text: 'Multi-step Modal Step 5' },
            description: 'This is the final step. It has a custom body render function.',
            body: {
                render: () => (
                    <NSTable
                        rows={simpleTableArgs.rows}
                        columns={simpleTableArgs.columns}
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
            buttonVariant: 'warning',
        },
    ],
    shouldHideOnClickAway: false,
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

export default simpleArgs;
