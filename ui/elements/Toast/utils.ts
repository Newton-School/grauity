import type { CSSProperties } from 'react';

import { grauityIconName } from '../../core';
import {
    TOAST_COLOR_ICON_MAPPING,
    TOAST_COLOR_VARIANT_STYLES_MAPPING,
    TOAST_TYPES_ENUM,
    TOAST_VARIANTS_ENUM,
} from './constants';
import { ToastColor, ToastPlacement, ToastType, ToastVariant } from './types';

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
    if (variant === TOAST_VARIANTS_ENUM.TERTIARY) {
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

    return {
        variant: 'tertiary',
        color: 'neutral',
        style: { color: 'var(--text-emphasis-primary-default)' },
    };
};

/**
 * Get placement styles for positioning the toast on screen.
 */
export const getPlacementStyles = (
    placement: ToastPlacement | undefined,
    xOffset: number,
    yOffset: number,
    type?: ToastType
): CSSProperties => {
    if (!placement) {
        return {};
    }

    const isRich = type === TOAST_TYPES_ENUM.RICH;
    const desktopMaxWidth = isRich ? 800 : 440;
    const safeMaxWidth = `calc(100% - ${xOffset * 2}px)`;

    const centeredHorizontalStyle: CSSProperties = {
        left: '50%',
        right: 'auto',
        transform: 'translateX(-50%)',
    };

    const widthStyle: CSSProperties = {
        width: `min(${desktopMaxWidth}px, ${safeMaxWidth})`,
        maxWidth: safeMaxWidth,
        minWidth: 0,
    };

    switch (placement) {
        case 'top-left':
            return {
                position: 'fixed',
                top: `${yOffset}px`,
                bottom: 'auto',
                left: `${xOffset}px`,
                right: 'auto',
                ...widthStyle,
            };
        case 'top-right':
            return {
                position: 'fixed',
                top: `${yOffset}px`,
                bottom: 'auto',
                right: `${xOffset}px`,
                left: 'auto',
                ...widthStyle,
            };
        case 'top-center':
            return {
                position: 'fixed',
                top: `${yOffset}px`,
                bottom: 'auto',
                ...centeredHorizontalStyle,
                ...widthStyle,
            };
        case 'bottom-left':
            return {
                position: 'fixed',
                bottom: `${yOffset}px`,
                top: 'auto',
                left: `${xOffset}px`,
                right: 'auto',
                ...widthStyle,
            };
        case 'bottom-right':
            return {
                position: 'fixed',
                bottom: `${yOffset}px`,
                top: 'auto',
                right: `${xOffset}px`,
                left: 'auto',
                ...widthStyle,
            };
        case 'bottom-center':
            return {
                position: 'fixed',
                bottom: `${yOffset}px`,
                top: 'auto',
                ...centeredHorizontalStyle,
                ...widthStyle,
            };
        default:
            return {};
    }
};
