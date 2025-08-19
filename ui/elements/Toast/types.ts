import React from 'react';

import { grauityIconName } from '../../core';

export type ToastDevice = 'desktop' | 'mobile';

export type ToastEmphasis = 'low' | 'medium' | 'high';

export type ToastType = 'warning' | 'brand' | 'neutral' | 'success' | 'error';

export type ToastDesktopPlacement =
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right';
export type ToastMobilePlacement = 'top' | 'bottom';
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
     * Emphasis level of the toast
     *
     * Available choices: `low`, `medium`, `high`
     *
     * Default: `medium`
     */
    emphasis?: ToastEmphasis;

    /**
     * Type/variant of the toast
     *
     * Available choices: `warning`, `brand`, `neutral`, `success`, `error`
     *
     * Default: `neutral`
     */
    type?: ToastType;

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
    onCTAClick?: any;

    /**
     * Close button click handler
     */
    onClose?: any;

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
     * Toast position, useful for fixed positioning
     *
     * Default: `'static'`
     */
    position?: 'static' | 'fixed' | 'absolute' | 'relative';

    /**
     * Preset screen placement for the toast.
     * For desktop: `top-left`, `top-right`, `bottom-left`, `bottom-right`
     * For mobile: `top`, `bottom`
     * When provided, overrides `position`/`top`/`bottom`/`left`/`right` to use `fixed` with sensible offsets.
     */
    placement?: ToastPlacement;

    /**
     * Toast top position, useful for fixed positioning
     */
    top?: string;

    /**
     * Toast bottom position, useful for fixed positioning
     */
    bottom?: string;

    /**
     * Toast left position, useful for fixed positioning
     */
    left?: string;

    /**
     * Toast right position, useful for fixed positioning
     */
    right?: string;

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
    onAutoClose?: any;
}

export interface ToastContainerProps {
    $device: ToastDevice;
    $emphasis: ToastEmphasis;
    $type: ToastType;
    $position: string;
    $top?: string;
    $bottom?: string;
    $left?: string;
    $right?: string;
    $maxWidth: string;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export interface ToastContentProps {
    children: React.ReactNode;
}

export interface ToastTitleProps {
    children: React.ReactNode;
    id?: string;
}

export interface ToastActionsProps {
    $device: ToastDevice;
    children: React.ReactNode;
}
