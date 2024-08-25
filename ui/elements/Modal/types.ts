import React, { ReactNode } from 'react';

import { ButtonVariants } from '../Button/types';

interface ModalBanner {
    image?: string | null;
    render?: (() => ReactNode) | null;
}

interface ModalTitle {
    text: string;
}

interface ModalBody {
    text?: string | null;
    image?: string | null;
    render?: () => ReactNode | null;
    width?: string;
}

interface ModalStep {
    banner?: ModalBanner | null;
    title: ModalTitle;
    description?: string | null;
    body?: ModalBody | null;
    nextButtonText?: string;
    showBackButton?: boolean;
    buttonVariant?: ButtonVariants | null;
}
export interface ModalProps {
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
    shouldHideOnClickAway?: boolean;

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
}

export interface StyleData {
    position?: string;
    backgroundColor?: string;
}

// Components interface for ModalWrapper
export interface ModalWrapperProps {
    blurBackground?: boolean;
    children: React.ReactNode;
}

// Components interface for ModalContainer
export interface ModalContainerProps {
    width?: string;
    height?: string;
    minHeight?: string;
    mobileBottomFullWidth?: boolean;
    modalPadding?: string;
    onClick?: (e: Event) => void;
    ref?: React.MutableRefObject<any>;
    children: React.ReactNode;
}

// Components interface for ModalTitle
export interface ModalTitleProps {
    showCloseButton?: boolean;
    marginTop?: boolean;
    showSubBanner?: boolean;
    children: React.ReactNode;
}

// Components interface for ModalBody
export interface ModalBodyProps {
    modalBodyMargin?: string;
    width?: string;
    children: React.ReactNode;
}

// Components interface for ModalBodyMain
export interface ModalBodyMainProps {
    children: React.ReactNode;
}

// Components interface for ModalBannerImage
export interface ModalBannerImageProps {
    src: string;
}

// Components interface for ModalPaginationItemProps
export interface ModalPaginationItemProps {
    key: string;
    active: boolean;
    onClick: () => void;
}

export interface ConfirmationDialogProps {
    cancelText?: string;
    confirmText?: string;
    onCancel: () => void;
    onConfirm: () => void;
    banner?: ModalBanner;
    title?: ModalTitle;
    description?: string;
    body?: ModalBody;
    cancelButtonVariant?: ButtonVariants;
    confirmButtonVariant?: ButtonVariants;
    shouldHideOnClickAway?: boolean;
    blurBackground?: boolean;
}
