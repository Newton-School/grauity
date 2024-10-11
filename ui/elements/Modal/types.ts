import React from 'react';

import { StyledDivProps } from '../../../common/types';
import { ButtonVariants } from '../Button/types';

type ModalContentType = React.ReactNode;

export type ModalAnimationType =
    | false
    | 'slide'
    | 'slide-reverse'
    | 'fade'
    | 'emanate';

interface ModalStep {
    /**
     * Banner for the modal, can be a valid React node
     * */
    banner?: ModalContentType;

    /**
     * Title for the modal, can be a valid React node
     * */
    title: ModalContentType;

    /**
     * Description for the modal, can be a string
     * */
    description?: string | null;

    /**
     * Body for the modal, can be a valid React node
     * */
    body?: ModalContentType;

    /**
     * Text for the next button
     * */
    nextButtonText?: string;

    /**
     * Determines if the back button should be shown
     * Available choices: `true`, `false`
     *
     * Default: `false`
     * */
    showBackButton?: boolean;

    /**
     * Variant for the button
     * */
    buttonVariant?: ButtonVariants | null;
}

export interface ModalProps {
    /**
     * Determines if the modal is open.
     * Available choices: `true`, `false`. Default is `false`
     * */
    isOpen: boolean;
    /**
     * Banner for the modal, can be a valid React node
     * */
    banner?: ModalContentType;

    /**
     * Title for the modal, can be a valid React node
     * */
    title?: ModalContentType;

    /**
     * Description for the modal, can be a string
     * */
    description?: string;

    /**
     * Body for the modal, can be a valid React node
     * */
    body?: ModalContentType;

    /**
     * Action for the modal, can be a valid React node
     * */
    action?: ModalContentType;

    /**
     * Determines if the modal should hide on click away.
     * Available choices: `true`, `false`
     *
     * Default: `false`
     * */
    hideOnClickAway: boolean;

    /**
     * Determines if the modal should blur the background.
     * Available choices: `true`, `false`
     *
     * Default: `false`
     * */
    blurBackground?: boolean;

    /**
     * Callback function to be called when the modal is hidden
     * */
    onHide?: () => void;

    /**
     * Determines if the modal should be full width on mobile.
     * Available choices: `true`, `false`
     *
     * Default: `false`
     * */
    mobileBottomFullWidth?: boolean;

    /**
     * Padding for the modal
     * */
    modalPadding?: string;

    /**
     * Margin for the modal body
     * */
    modalBodyMargin?: string;

    /**
     * Width of the modal
     * */
    width?: string;

    /**
     * Height of the modal
     * */
    height?: string;

    /**
     * Minimum height of the modal
     * */
    minHeight?: string;

    /**
     * Determines if the close button should be shown.
     *
     * Available choices: `true`, `false`
     *
     * Default: `false`
     * */
    showCloseButton?: boolean;

    /**
     * Determines if the modal should animate its opening and closing
     *
     * Available choices: `false`, `'slide'` `'slide-reverse'`, `'fade', 'emanate'`
     *
     * Default: `'fade'`
     * */
    animatePresence?: ModalAnimationType;

    /**
     * Click even object, to be passed by the onClick event for use with `emanate` modal animation
     * */
    clickEvent?: any;
}

export interface MultiStepModalProps {
    /**
     * Determines if the modal is open
     * Available choices: true, false
     *
     * Default: `false`
     * */
    isOpen?: boolean;

    /**
     * Modal steps
     * */
    modalSteps: ModalStep[];

    /**
     * Determines if the modal should show pagination if there are multiple modal steps
     * Available choices: true, false
     *
     * Default: `true`
     * */
    showModalStepsPagination?: boolean;

    /**
     * Determines if the modal should hide on click away
     * Available choices: true, false
     *
     * Default: `false`
     * */
    hideOnClickAway?: boolean;

    /**
     * Determines if the modal should blur the background
     * Available choices: true, false
     *
     * Default: `false`
     * */
    blurBackground?: boolean;

    /**
     * Callback function to be called when the modal is hidden
     * */
    onHide?: () => void;

    /**
     * Callback function to be called when the final step is reached
     * */
    onFinalStep?: () => void;

    /**
     * Determines if the modal should be full width on mobile
     * Available choices: true, false
     *
     * Default: `false`
     * */
    mobileBottomFullWidth?: boolean;

    /**
     * Callback function to be called when the step changes
     * */
    onStepChange?: () => void;

    /**
     * Determines if the modal buttons should be shown
     * Available choices: true, false
     *
     * Default: `true`
     * */
    showModalButtons?: boolean;

    /**
     * Determines if the modal header should be shown
     * Available choices: true, false
     *
     * Default: `true`
     * */
    showHeader?: boolean;

    /**
     * Padding for the modal
     * */
    modalPadding?: string;

    /**
     * Margin for the modal body
     * */
    modalBodyMargin?: string;

    /**
     * Width of the modal
     * */
    width?: string;

    /**
     * Height of the modal
     * */
    height?: string;

    /**
     * Minimum height of the modal
     * */
    minHeight?: string;

    /**
     * Determines if the close button should be shown
     *
     * Available choices: true, false
     *
     * NOTE: If Modal has a banner, the close button will be hidden by default
     *
     * Default: `false`
     * */
    showCloseButton?: boolean;

    /**
     * Ref for the modal
     * */
    modalRef?: React.MutableRefObject<any>;

    /**
     * Value of `animatePresence` prop to be passed to the Modal component
     *
     * Available choices: `false`, `'slide'` `'slide-reverse'`, `'fade'`
     *
     * Default: `'fade'`
     * */
    animatePresence?: ModalAnimationType;
}

export interface StyleData {
    position?: string;
    backgroundColor?: string;
}

// Components interface for ModalContainer
export interface ModalContainerProps extends StyledDivProps {
    width?: string;
    height?: string;
    minHeight?: string;
    mobileBottomFullWidth?: boolean;
    modalPadding?: string;
    ref?: React.MutableRefObject<any>;
    children: React.ReactNode;
}

// Components interface for ModalTitle
export interface ModalTitleProps {
    id: string;
    children: React.ReactNode;
}

// Components interface for ModalDescription
export interface ModalDescriptionProps {
    id: string;
    children: React.ReactNode;
}

// Components interface for ModalBody
export interface ModalBodyProps {
    modalBodyMargin?: string;
    children: React.ReactNode;
}

// Components interface for ModalBodyMain
export interface ModalBodyMainProps {
    children: React.ReactNode;
}

// Components interface for ModalPaginationItemProps
export interface ModalPaginationItemProps {
    key: string | number;
    active: boolean;
    onClick: () => void;
}

export interface ConfirmationDialogProps {
    /**
     * Determines if the modal is open
     * */
    isOpen: boolean;

    /**
     * Text for the cancel button
     * */
    cancelText?: string;

    /**
     * Text for the confirm button
     * */
    confirmText?: string;

    /**
     * Callback function to be called when the cancel button is clicked
     * */
    onCancel: () => void;

    /**
     * Callback function to be called when the confirm button is clicked
     * */
    onConfirm: () => void;

    /**
     * Banner for the modal, can be a valid React node
     * */
    banner?: ModalContentType;

    /**
     * Title for the modal, can be a valid React node
     * */
    title?: ModalContentType;

    /**
     * Description for the modal, can be a string
     * */
    description?: string;

    /**
     * Body for the modal, can be a valid React node
     * */
    body?: ModalContentType;

    /**
     * Variant for the cancel button
     * */
    cancelButtonVariant?: ButtonVariants;

    /**
     * Variant for the confirm button
     * */
    confirmButtonVariant?: ButtonVariants;

    /**
     * Determines if the close button should be shown
     * Available choices: `true`, `false`
     *
     * Default: `false`
     * */
    showCloseButton?: boolean;

    /**
     * Determines if the modal should hide on click away
     * Available choices: `true`, `false`
     *
     * Default: `false`
     * */
    hideOnClickAway?: boolean;

    /**
     * Determines if the modal should blur the background
     * Available choices: `true`, `false`
     *
     * Default: `false`
     * */
    blurBackground?: boolean;

    /**
     * Determines if the modal should be at bottom with full width on mobile
     * Available choices: `true`, `false`
     *
     * Default: `false`
     * */
    mobileBottomFullWidth?: boolean;

    /**
     * Determines if the modal should animate its opening and closing
     *
     * Available choices: `false`, `'slide'` `'slide-reverse'`, `'fade'`
     *
     * Default: `'fade'`
     * */
    animatePresence?: ModalAnimationType;

    /**
     * Click event
     * */
    clickEvent?: any;
}
