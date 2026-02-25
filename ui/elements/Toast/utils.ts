import type { CSSProperties } from 'react';

import { grauityIconName } from '../../core';
import {
    TOAST_COLOR_ICON_MAPPING,
    TOAST_COLOR_VARIANT_STYLES_MAPPING,
} from './constants';
import { ToastColor, ToastDevice, ToastPlacement, ToastVariant } from './types';

/**
 * Get the default icon for a toast type
 */
export const getToastIcon = (
    customIcon: grauityIconName | undefined,
    color: ToastColor
): grauityIconName => {
    if (customIcon) {
        return customIcon;
    }
    return TOAST_COLOR_ICON_MAPPING[color];
};

/**
 * Get color scheme for toast based on type and variant
 */
export const getToastColors = (color: ToastColor, variant: ToastVariant) => {
    return TOAST_COLOR_VARIANT_STYLES_MAPPING[color][variant];
};

/**
 * Get CTA button variant and color based on toast type and variant
 */
export const getCTAButtonProps = () => {
    // Always use secondary neutral variant for CTA
    return {
        variant: 'secondary' as const,
        color: 'neutral' as const,
    };
};

/**
 * Get close button variant and color based on toast type and variant
 */
export const getCloseButtonProps = (
    color: ToastColor,
    variant: ToastVariant
): {
    variant: 'tertiary' | 'primary';
    color: 'neutral' | 'brand' | 'warning' | 'success' | 'error';
    style: CSSProperties;
} => {
    if (variant === 'high') {
        // For high variant, use primary variant matching the toast color
        const colorByToastColor: Record<
            ToastColor,
            'neutral' | 'brand' | 'warning' | 'success' | 'error'
        > = {
            warning: 'warning',
            success: 'success',
            error: 'error',
            neutral: 'neutral',
            brand: 'brand',
        };
        return {
            variant: 'primary',
            color: colorByToastColor[color],
            style: {},
        };
    }

    // For low/medium variant, keep subtle tertiary neutral icon button
    return {
        variant: 'tertiary',
        color: 'neutral',
        style: { color: 'var(--text-emphasis-primary-default)' },
    };
};

/**
 * Get placement styles for positioning the toast on screen
 */
export const getPlacementStyles = (
    placement: ToastPlacement | undefined,
    device: ToastDevice,
    xOffset: number,
    yOffset: number
): CSSProperties => {
    if (!placement) {
        return {};
    }

    if (device === 'mobile') {
        return placement === 'top'
            ? {
                position: 'fixed',
                top: `${yOffset}px`,
                bottom: 'auto',
                left: `${xOffset}px`,
                right: `${xOffset}px`,
                width: `calc(100% - ${xOffset * 2}px)`,
                minWidth: 0,
            }
            : {
                position: 'fixed',
                bottom: `${yOffset}px`,
                top: 'auto',
                left: `${xOffset}px`,
                right: `${xOffset}px`,
                width: `calc(100% - ${xOffset * 2}px)`,
                minWidth: 0,
            };
    }

    // Desktop placements
    switch (placement) {
        case 'top-left':
            return {
                position: 'fixed',
                top: `${yOffset}px`,
                bottom: 'auto',
                left: `${xOffset}px`,
                right: 'auto',
                width: `min(440px, calc(100% - ${xOffset * 2}px))`,
                minWidth: 0,
            };
        case 'top-right':
            return {
                position: 'fixed',
                top: `${yOffset}px`,
                bottom: 'auto',
                right: `${xOffset}px`,
                left: 'auto',
                width: `min(440px, calc(100% - ${xOffset * 2}px))`,
                minWidth: 0,
            };
        case 'bottom-left':
            return {
                position: 'fixed',
                bottom: `${yOffset}px`,
                top: 'auto',
                left: `${xOffset}px`,
                right: 'auto',
                width: `min(440px, calc(100% - ${xOffset * 2}px))`,
                minWidth: 0,
            };
        case 'bottom-right':
            return {
                position: 'fixed',
                bottom: `${yOffset}px`,
                top: 'auto',
                right: `${xOffset}px`,
                left: 'auto',
                width: `min(440px, calc(100% - ${xOffset * 2}px))`,
                minWidth: 0,
            };
        default:
            return {};
    }
};
