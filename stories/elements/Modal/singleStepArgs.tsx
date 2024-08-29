/* eslint-disable no-console */
import React from 'react';
import NSButton from 'ui/elements/Button';
import { ModalProps } from 'ui/elements/Modal';
import NSTable from 'ui/elements/Table';

import simpleTableArgs from '../Table/simpleArgs';

const singleStepArgs: ModalProps = {
    banner: null,
    title: 'This is a Modal',
    description:
        'This is the Modal description. Below is an implementation of custom Modal body rendering.',
    body: (
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
    action: (
        <>
            <NSButton
                variant="primary"
                onClick={() => console.log('Primary Button Clicked')}
                fullWidth
            >
                Primary Button
            </NSButton>
            <NSButton
                variant="secondary"
                onClick={() => console.log('Secondary Button Clicked')}
                fullWidth
            >
                Secondary Button
            </NSButton>
        </>
    ),
    hideOnClickAway: true,
    blurBackground: false,
    onHide: () => console.log('onHide'),
    mobileBottomFullWidth: false,
    modalPadding: '20px',
    modalBodyMargin: '',
    width: '500px',
    height: 'auto',
    minHeight: 'auto',
    showCloseButton: true,
};

export default singleStepArgs;
