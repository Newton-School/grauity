import type { CSSProperties } from 'react';

import { grauityIconName } from '../../core';
import {
    TOAST_COLOR_ICON_MAPPING,
    TOAST_COLOR_VARIANT_STYLES_MAPPING,
    TOAST_TYPES_ENUM,
} from './constants';
import {
    ToastColor,
    ToastDevice,
    ToastPlacement,
    ToastType,
    ToastVariant,
} from './types';

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
 * Get placement styles for positioning the toast on screen.
 *
 * The function builds an inline `position: fixed` style block that anchors the
 * toast to the viewport. All placements compute width/height the same way
 * regardless of variant or type — centered placements use a transform-based
 * centering pattern so the toast is visually centered for any width (this
 * fixes the over-constrained `left + right + width` combination that made
 * the mobile rich variant appear left-aligned).
 */
export const getPlacementStyles = (
    placement: ToastPlacement | undefined,
    device: ToastDevice,
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

    if (device === 'mobile') {
        // Mobile placements are always horizontally centered and fluid -
        // they fill the viewport minus the xOffset margin on each side. This
        // applies to both simple and rich variants.
        const widthStyle: CSSProperties = {
            width: safeMaxWidth,
            minWidth: 0,
            maxWidth: safeMaxWidth,
        };

        const verticalStyle: CSSProperties =
            placement === 'top'
                ? { top: `${yOffset}px`, bottom: 'auto' }
                : { bottom: `${yOffset}px`, top: 'auto' };

        return {
            position: 'fixed',
            ...centeredHorizontalStyle,
            ...verticalStyle,
            ...widthStyle,
        };
    }

    // Desktop: width is capped to the variant's max (with safe-area fallback).
    const desktopWidthStyle: CSSProperties = {
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
                ...desktopWidthStyle,
            };
        case 'top-right':
            return {
                position: 'fixed',
                top: `${yOffset}px`,
                bottom: 'auto',
                right: `${xOffset}px`,
                left: 'auto',
                ...desktopWidthStyle,
            };
        case 'top-center':
            return {
                position: 'fixed',
                top: `${yOffset}px`,
                bottom: 'auto',
                ...centeredHorizontalStyle,
                ...desktopWidthStyle,
            };
        case 'bottom-left':
            return {
                position: 'fixed',
                bottom: `${yOffset}px`,
                top: 'auto',
                left: `${xOffset}px`,
                right: 'auto',
                ...desktopWidthStyle,
            };
        case 'bottom-right':
            return {
                position: 'fixed',
                bottom: `${yOffset}px`,
                top: 'auto',
                right: `${xOffset}px`,
                left: 'auto',
                ...desktopWidthStyle,
            };
        case 'bottom-center':
            return {
                position: 'fixed',
                bottom: `${yOffset}px`,
                top: 'auto',
                ...centeredHorizontalStyle,
                ...desktopWidthStyle,
            };
        default:
            return {};
    }
};
