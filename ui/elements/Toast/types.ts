import React from 'react';

import { StyledDivProps } from '../../../common/types';
import { grauityIconName } from '../../core';
import {
    TOAST_COLORS_ENUM,
    TOAST_DESKTOP_PLACEMENT_ENUM,
    TOAST_DEVICE_ENUM,
    TOAST_MOBILE_PLACEMENT_ENUM,
    TOAST_VARIANTS_ENUM,
} from './constants';

export type ToastDevice = `${TOAST_DEVICE_ENUM}`;

export type ToastVariant = `${TOAST_VARIANTS_ENUM}`;

export type ToastColor = `${TOAST_COLORS_ENUM}`;

export type ToastDesktopPlacement = `${TOAST_DESKTOP_PLACEMENT_ENUM}`;
export type ToastMobilePlacement = `${TOAST_MOBILE_PLACEMENT_ENUM}`;
export type ToastPlacement = ToastDesktopPlacement | ToastMobilePlacement;

export interface ToastProps {
    /**
     * Device variant of the toast
     *
     * Available choices: `desktop`, `mobile`
     *
     * Default: `desktop`
     */
    device?: ToastDevice;

    /**
     * Variant of the toast
     *
     * Available choices: `low`, `medium`, `high`
     *
     * Default: `medium`
     */
    variant?: ToastVariant;

    /**
     * Color of the toast
     *
     * Available choices: `warning`, `brand`, `neutral`, `success`, `error`
     *
     * Default: `neutral`
     */
    color?: ToastColor;

    /**
     * Show/hide left icon
     *
     * Default: `true`
     */
    showLeftIcon?: boolean;

    /**
     * Custom left icon to override default type-based icon
     */
    leftIcon?: grauityIconName;

    /**
     * Show/hide close icon
     *
     * Default: `true`
     */
    showCloseIcon?: boolean;

    /**
     * Show/hide CTA button
     *
     * Default: `false`
     */
    showCTA?: boolean;

    /**
     * CTA button text
     */
    ctaText?: string;

    /**
     * CTA button click handler
     */
    onCTAClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

    /**
     * Close button click handler
     */
    onClose?: () => void;

    /**
     * Toast title/main message
     */
    title?: React.ReactNode;

    /**
     * Additional class name for the toast container
     */
    className?: string;

    /**
     * Additional styles to be used over the element
     */
    style?: React.CSSProperties;

    /**
     * Preset screen placement for the toast.
     * For desktop: `top-left`, `top-right`, `bottom-left`, `bottom-right`
     * For mobile: `top`, `bottom`
     * Uses fixed positioning with offsets from screen edges.
     */
    placement?: ToastPlacement;

    /**
     * Horizontal offset from screen edge when using `placement` prop.
     *
     * Default: `16`
     */
    xOffset?: number;

    /**
     * Vertical offset from screen edge when using `placement` prop.
     *
     * Default: `16`
     */
    yOffset?: number;

    /**
     * Maximum width of the toast
     *
     * Default: `'440px'` for desktop, `'100%'` for mobile
     */
    maxWidth?: string;

    /**
     * Auto dismiss timeout in milliseconds
     * Set to 0 or null to disable auto dismiss
     */
    autoClose?: number | null;

    /**
     * Callback fired when toast auto-closes
     */
    onAutoClose?: () => void;
}

export interface StyledToastContainerProps extends StyledDivProps {
    $device: ToastDevice;
    $variant: ToastVariant;
    $color: ToastColor;
    $maxWidth: string;
}

export interface StyledToastContentProps extends StyledDivProps {}

export interface StyledToastTitleProps extends StyledDivProps {
    id?: string;
}

export interface StyledToastActionsProps extends StyledDivProps {
    $device: ToastDevice;
}
