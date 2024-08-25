import React from 'react';

import { withVisibilityToggle } from '../../../.storybook/decorators';
import { ModalProps, NSModal, NSTable } from '../../../ui/elements';
import simpleArgs from '../Table/simpleArgs';

export default {
    title: 'Elements/NSModal',
    component: NSModal,
    decorators: [withVisibilityToggle],
};

const Template = (args: ModalProps) => <NSModal {...args} />;

const args = {
    modalSteps: [
        {
            banner: null,
            title: { text: 'This is a Modal' },
            description:
                'This is the Modal description. Below is an implementation of custom Modal body rendering.',
            body: {
                render: () => (
                    <NSTable
                        rows={simpleArgs.rows}
                        columns={simpleArgs.columns}
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
    modalPadding: '',
    modalBodyMargin: '',
    width: '500px',
    height: 'auto',
    minHeight: 'auto',
    showCloseButton: true,
};

export const ModalExample = Template.bind({});

ModalExample.args = {
    ...args,
};
