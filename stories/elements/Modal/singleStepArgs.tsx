/* eslint-disable no-console */
import React from 'react';
import Button from 'ui/elements/Button';
import { ModalProps } from 'ui/elements/Modal';
import Table from 'ui/elements/Table';

import simpleTableArgs from '../Table/simpleArgs';

const singleStepArgs: ModalProps = {
    isOpen: true,
    banner: null,
    title: 'This is a Modal',
    description:
        'This is the Modal description. Below is an implementation of custom Modal body rendering.',
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
    action: (
        <>
            <Button
                variant="primary"
                onClick={() => console.log('Primary Button Clicked')}
                fullWidth
            >
                Primary Button
            </Button>
            <Button
                variant="secondary"
                onClick={() => console.log('Secondary Button Clicked')}
                fullWidth
            >
                Secondary Button
            </Button>
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
    animatePresence: 'fade',
};

export default singleStepArgs;
