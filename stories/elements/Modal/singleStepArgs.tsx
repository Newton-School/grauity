import React from 'react';

import { ModalProps, NSTable } from '../../../ui/elements';
import simpleTableArgs from '../Table/simpleArgs';

const singleStepArgs: ModalProps = {
    modalSteps: [
        {
            banner: null,
            title: { text: 'This is a Modal' },
            description:
                'This is the Modal description. Below is an implementation of custom Modal body rendering.',
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
            nextButtonText: 'Got it!',
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
    modalBodyMargin: '',
    width: '500px',
    height: 'auto',
    minHeight: 'auto',
    showCloseButton: true,
};

export default singleStepArgs;
