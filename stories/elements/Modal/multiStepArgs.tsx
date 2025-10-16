/* eslint-disable no-console */
import React from 'react';
import Table from 'ui/elements/Table';
import Typography from 'ui/elements/Typography';

import { MultiStepModalProps } from '../../../ui/elements/Modal/types';
import simpleTableArgs from '../Table/simpleArgs';

const multiStepArgs: MultiStepModalProps = {
    isOpen: true,
    modalSteps: [
        {
            banner: (
                <img src="https://via.placeholder.com/300x100" alt="Banner" />
            ),
            title: 'Multi-step Modal Step 1',
            description:
                'This is a multi-step modal. Description goes here. \n From top to bottom elements of a Modal are Banner, Title, Description, Body, Pagination, Action Buttons. \n This step does not have modal body.',
            body: null,
            nextButtonText: 'Go to Step 2',
            showBackButton: false,
            buttonVariant: 'primary',
            buttonColor: 'brand',
        },
        {
            banner: null,
            title: (
                <Typography variant="heading-sb-h4">
                    Multi-step Modal Step 2 (with custom title)
                </Typography>
            ),
            description:
                'This step does not have a banner, and has body as an image. Neat innit?',
            body: (
                <img src="https://via.placeholder.com/300x100" alt="Banner" />
            ),
            nextButtonText: 'Go to Step 3',
            showBackButton: true,
            buttonVariant: 'primary',
            buttonColor: 'neutral',
        },
        {
            banner: null,
            title: 'Multi-step Modal Step 3',
            description:
                'This step has neither banner nor body. It only has description text.',
            body: null,
            nextButtonText: 'Go to Step 4',
            showBackButton: true,
            buttonVariant: 'primary',
            buttonColor: 'error',
        },
        {
            banner: null,
            title: 'Multi-step Modal Step 4',
            description: null,
            body: (
                <img src="https://via.placeholder.com/300x100" alt="Banner" />
            ),
            nextButtonText: 'Go to Step 5',
            showBackButton: true,
            buttonVariant: 'primary',
            buttonColor: 'warning',
        },
        {
            banner: null,
            title: 'Multi-step Modal Step 5',
            description:
                'This is the final step. It has a custom body render function.',
            body: (
                <Table
                    rows={simpleTableArgs.rows}
                    columns={simpleTableArgs.columns}
                    condensed
                    striped
                    borderAround
                    borderWithin
                    capitalizeHeaders
                />
            ),
            nextButtonText: 'Awesome, Finish!',
            showBackButton: true,
            buttonVariant: 'primary',
            buttonColor: 'success',
        },
    ],
    hideOnClickAway: false,
    blurBackground: false,
    onClose: () => console.log('onClose'),
    onFinalStep: () => console.log('onFinalStep'),
    mobileBottomFullWidth: false,
    onStepChange: () => console.log('onStepChange'),
    showModalButtons: true,
    showHeader: true,
    modalPadding: '20px',
    modalBodyMargin: '20px 0 12px 0',
    showCloseButton: true,
    animatePresence: 'fade',
};

export default multiStepArgs;
