import React, { ReactNode } from 'react';

interface ModalBanner {
    hasBanner?: boolean;
    isCustom?: boolean;
    image?: string | null;
    render?: (() => ReactNode) | null;
}

interface ModalTitle {
    text: string;
}

interface ModalBody {
    hasBody?: boolean;
    isCustom?: boolean;
    text?: string | null;
    render?: () => ReactNode;
    width?: string;
}

interface ModalStep {
    banner?: ModalBanner;
    title: ModalTitle;
    description?: string | null;
    body?: ModalBody;
    nextButtonText?: string;
    showBackButton?: boolean;
}
export interface ModalProps {
    /**
     * Modal steps
     * */
    modalSteps: ModalStep[];
    /**
     * Determines if the modal should hide on click away
     * Available choices: true, false
     *
     * Default: `false`
     * */
    shouldHideOnClickAway?: boolean;
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
     * Available choices: true, false
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
}
