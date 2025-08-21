import type { CSSProperties } from 'react';

import { grauityIconName } from '../../core';
import { TOAST_COLOR_MAPPING, TOAST_TYPE_ICON_MAPPING } from './constants';
import { ToastEmphasis, ToastType } from './types';

/**
 * Get the default icon for a toast type
 */
export const getToastIcon = (
    customIcon: grauityIconName | undefined,
    type: ToastType
): grauityIconName => {
    if (customIcon) {
        return customIcon;
    }
    return TOAST_TYPE_ICON_MAPPING[type];
};

/**
 * Get color scheme for toast based on type and emphasis
 */
export const getToastColors = (type: ToastType, emphasis: ToastEmphasis) => {
    return TOAST_COLOR_MAPPING[type][emphasis];
};

/**
 * Get CTA button variant and color based on toast type and emphasis
 */
export const getCTAButtonProps = () => {
    // Always use secondary neutral variant for CTA
    return {
        variant: 'secondary' as const,
        color: 'neutral' as const,
    };
};

/**
 * Get close button variant and color based on toast type and emphasis
 */
export const getCloseButtonProps = (
    type: ToastType,
    emphasis: ToastEmphasis
): {
    variant: 'tertiary' | 'primary';
    color: 'neutral' | 'brand' | 'warning' | 'success' | 'error';
    style: CSSProperties;
} => {
    if (emphasis === 'high') {
        // For high emphasis, use primary variant matching the toast type
        const colorByType: Record<
            ToastType,
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
            color: colorByType[type],
            style: {},
        };
    }

    // For low/medium emphasis, keep subtle tertiary neutral icon button
    return {
        variant: 'tertiary',
        color: 'neutral',
        style: { color: 'var(--text-emphasis-primary-default)' },
    };
};
