import { grauityIconName } from '../../core';
import { ToastColor } from './types';

export enum TOAST_TYPES_ENUM {
    SIMPLE = 'simple',
    RICH = 'rich',
}

export enum TOAST_VARIANTS_ENUM {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    TERTIARY = 'tertiary',
}

export enum TOAST_COLORS_ENUM {
    WARNING = 'warning',
    BRAND = 'brand',
    NEUTRAL = 'neutral',
    SUCCESS = 'success',
    ERROR = 'error',
}

export enum TOAST_PLACEMENT_ENUM {
    TOP_LEFT = 'top-left',
    TOP_CENTER = 'top-center',
    TOP_RIGHT = 'top-right',
    BOTTOM_LEFT = 'bottom-left',
    BOTTOM_CENTER = 'bottom-center',
    BOTTOM_RIGHT = 'bottom-right',
}

export const TOAST_TYPES = [TOAST_TYPES_ENUM.SIMPLE, TOAST_TYPES_ENUM.RICH];

export const TOAST_VARIANTS = [
    TOAST_VARIANTS_ENUM.PRIMARY,
    TOAST_VARIANTS_ENUM.SECONDARY,
    TOAST_VARIANTS_ENUM.TERTIARY,
];

export const TOAST_COLORS = [
    TOAST_COLORS_ENUM.WARNING,
    TOAST_COLORS_ENUM.BRAND,
    TOAST_COLORS_ENUM.NEUTRAL,
    TOAST_COLORS_ENUM.SUCCESS,
    TOAST_COLORS_ENUM.ERROR,
];

export const TOAST_PLACEMENTS = [
    TOAST_PLACEMENT_ENUM.TOP_LEFT,
    TOAST_PLACEMENT_ENUM.TOP_CENTER,
    TOAST_PLACEMENT_ENUM.TOP_RIGHT,
    TOAST_PLACEMENT_ENUM.BOTTOM_LEFT,
    TOAST_PLACEMENT_ENUM.BOTTOM_CENTER,
    TOAST_PLACEMENT_ENUM.BOTTOM_RIGHT,
];

// Icon mapping for each toast type
export const TOAST_COLOR_ICON_MAPPING: {
    [key in ToastColor]: grauityIconName;
} = {
    [TOAST_COLORS_ENUM.WARNING]: 'shield-alert',
    [TOAST_COLORS_ENUM.BRAND]: 'message-info',
    [TOAST_COLORS_ENUM.NEUTRAL]: 'message-info',
    [TOAST_COLORS_ENUM.SUCCESS]: 'check-circle',
    [TOAST_COLORS_ENUM.ERROR]: 'close-circle',
};

// Color mappings for different toast types and variant levels
export const TOAST_COLOR_VARIANT_STYLES_MAPPING = {
    [TOAST_COLORS_ENUM.WARNING]: {
        [TOAST_VARIANTS_ENUM.PRIMARY]: {
            backgroundColor: 'var(--bg-subtle-primary-default)',
            borderColor: 'var(--border-subtle-primary-default)',
            textColor: 'var(--text-emphasis-primary-default)',
            iconColor: 'var(--text-emphasis-warning-default)',
        },
        [TOAST_VARIANTS_ENUM.SECONDARY]: {
            backgroundColor: 'var(--bg-subtle-warning-default)',
            borderColor: 'var(--border-subtle-warning-default)',
            textColor: 'var(--text-emphasis-warning-default)',
            iconColor: 'var(--text-emphasis-warning-default)',
        },
        [TOAST_VARIANTS_ENUM.TERTIARY]: {
            backgroundColor: 'var(--bg-emphasis-warning-default)',
            borderColor: 'var(--bg-emphasis-warning-default)',
            textColor: 'var(--text-emphasis-white-default)',
            iconColor: 'var(--text-emphasis-white-default)',
        },
    },
    [TOAST_COLORS_ENUM.BRAND]: {
        [TOAST_VARIANTS_ENUM.PRIMARY]: {
            backgroundColor: 'var(--bg-subtle-primary-default)',
            borderColor: 'var(--border-subtle-primary-default)',
            textColor: 'var(--text-emphasis-primary-default)',
            iconColor: 'var(--text-emphasis-brand-default)',
        },
        [TOAST_VARIANTS_ENUM.SECONDARY]: {
            backgroundColor: 'var(--bg-subtle-brand-default)',
            borderColor: 'var(--border-subtle-brand-default)',
            textColor: 'var(--text-emphasis-brand-default)',
            iconColor: 'var(--text-emphasis-brand-default)',
        },
        [TOAST_VARIANTS_ENUM.TERTIARY]: {
            backgroundColor: 'var(--bg-emphasis-brand-default)',
            borderColor: 'var(--bg-emphasis-brand-default)',
            textColor: 'var(--text-emphasis-white-default)',
            iconColor: 'var(--text-emphasis-white-default)',
        },
    },
    [TOAST_COLORS_ENUM.NEUTRAL]: {
        [TOAST_VARIANTS_ENUM.PRIMARY]: {
            backgroundColor: 'var(--bg-subtle-primary-default)',
            borderColor: 'var(--border-subtle-primary-default)',
            textColor: 'var(--text-emphasis-primary-default)',
            iconColor: 'var(--text-emphasis-primary-default)',
        },
        [TOAST_VARIANTS_ENUM.SECONDARY]: {
            backgroundColor: 'var(--bg-subtle-secondary-default)',
            borderColor: 'var(--border-subtle-primary-default)',
            textColor: 'var(--text-emphasis-primary-default)',
            iconColor: 'var(--text-emphasis-primary-default)',
        },
        [TOAST_VARIANTS_ENUM.TERTIARY]: {
            backgroundColor: 'var(--bg-subtle-invert-primary-default)',
            borderColor: 'var(--bg-subtle-invert-primary-default)',
            textColor: 'var(--text-emphasis-invert-primary-default)',
            iconColor: 'var(--text-emphasis-invert-primary-default)',
        },
    },
    [TOAST_COLORS_ENUM.SUCCESS]: {
        [TOAST_VARIANTS_ENUM.PRIMARY]: {
            backgroundColor: 'var(--bg-subtle-primary-default)',
            borderColor: 'var(--border-subtle-primary-default)',
            textColor: 'var(--text-emphasis-primary-default)',
            iconColor: 'var(--text-emphasis-success-default)',
        },
        [TOAST_VARIANTS_ENUM.SECONDARY]: {
            backgroundColor: 'var(--bg-subtle-success-default)',
            borderColor: 'var(--border-subtle-success-default)',
            textColor: 'var(--text-emphasis-success-default)',
            iconColor: 'var(--text-emphasis-success-default)',
        },
        [TOAST_VARIANTS_ENUM.TERTIARY]: {
            backgroundColor: 'var(--bg-emphasis-success-default)',
            borderColor: 'var(--bg-emphasis-success-default)',
            textColor: 'var(--text-emphasis-white-default)',
            iconColor: 'var(--text-emphasis-white-default)',
        },
    },
    [TOAST_COLORS_ENUM.ERROR]: {
        [TOAST_VARIANTS_ENUM.PRIMARY]: {
            backgroundColor: 'var(--bg-subtle-primary-default)',
            borderColor: 'var(--border-subtle-primary-default)',
            textColor: 'var(--text-emphasis-primary-default)',
            iconColor: 'var(--text-emphasis-error-default)',
        },
        [TOAST_VARIANTS_ENUM.SECONDARY]: {
            backgroundColor: 'var(--bg-subtle-error-default)',
            borderColor: 'var(--border-subtle-error-default)',
            textColor: 'var(--text-emphasis-error-default)',
            iconColor: 'var(--text-emphasis-error-default)',
        },
        [TOAST_VARIANTS_ENUM.TERTIARY]: {
            backgroundColor: 'var(--bg-emphasis-error-default)',
            borderColor: 'var(--bg-emphasis-error-default)',
            textColor: 'var(--text-emphasis-white-default)',
            iconColor: 'var(--text-emphasis-white-default)',
        },
    },
};
