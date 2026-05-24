import React from 'react';

import { StyledDivProps } from '../../../common/types';
import { grauityIconName } from '../../core';
import {
    TOAST_COLORS_ENUM,
    TOAST_PLACEMENT_ENUM,
    TOAST_TYPES_ENUM,
    TOAST_VARIANTS_ENUM,
} from './constants';

export type ToastType = `${TOAST_TYPES_ENUM}`;

export type ToastVariant = `${TOAST_VARIANTS_ENUM}`;

export type ToastColor = `${TOAST_COLORS_ENUM}`;

export type ToastPlacement = `${TOAST_PLACEMENT_ENUM}`;

export interface ToastSecondaryCTA {
    /**
     * Icon to display in the secondary icon button
     */
    icon: grauityIconName;

    /**
     * Click handler for the secondary CTA
     */
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

    /**
     * Aria label for accessibility
     */
    ariaLabel?: string;
}

export interface ToastProps {
    /**
     * Layout type of the toast.
     *
     * - `simple`: single line layout with icon, title and inline actions
     * - `rich`: card-style layout with custom image, title, subtitle and stacked actions
     *
     * Default: `simple`
     */
    type?: ToastType;

    /**
     * Emphasis variant of the toast
     *
     * Available choices: `primary`, `secondary`, `tertiary`
     *
     * Default: `secondary`
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
     * Subtitle/description shown beneath the title.
     *
     * Only rendered for the `rich` toast type.
     */
    subtitle?: React.ReactNode;

    /**
     * Custom 44x44 visual rendered on the leading edge of the toast.
     *
     * Only rendered for the `rich` toast type. When provided, this replaces
     * the default left icon.
     */
    image?: React.ReactNode;

    /**
     * Optional icon to display alongside the CTA text inside the primary
     * CTA button.
     *
     * Only used for the `rich` toast type.
     */
    primaryCTAIcon?: grauityIconName;

    /**
     * Optional secondary icon-only CTA shown next to the primary CTA.
     *
     * Only used for the `rich` toast type.
     */
    secondaryCTA?: ToastSecondaryCTA;

    /**
     * Show/hide the secondary icon-only CTA. Only used for the `rich` toast type.
     *
     * When the `rich` layout is selected this defaults to `true`. Pass `false`
     * to opt out without having to also clear `secondaryCTA`.
     *
     * Default: `true` for `rich`, `false` otherwise
     */
    showSecondaryCTA?: boolean;

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
     *
     * Available: `top-left`, `top-center`, `top-right`, `bottom-left`,
     *            `bottom-center`, `bottom-right`
     *
     * Uses `position: fixed` with offsets from the viewport edges. Centered
     * placements use a `translateX(-50%)` pattern so the toast is visually
     * centered regardless of its width.
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
     * Default: `440px` for simple, `800px` for rich (responsive on narrow viewports)
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
    $type: ToastType;
    $variant: ToastVariant;
    $color: ToastColor;
    $maxWidth: string;
}

export interface StyledToastContentProps extends StyledDivProps {
    $type?: ToastType;
}

export interface StyledToastTitleProps extends StyledDivProps {
    $type?: ToastType;
    id?: string;
}

export interface StyledToastSubtitleProps extends StyledDivProps {}

export interface StyledToastActionsProps extends StyledDivProps {
    $type?: ToastType;
}

export interface StyledToastLeadingProps extends StyledDivProps {}

export interface StyledToastImageProps extends StyledDivProps {}

export interface StyledToastBodyProps extends StyledDivProps {}
