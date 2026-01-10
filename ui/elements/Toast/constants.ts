import { grauityIconName } from '../../core';
import { ToastColor } from './types';

export enum TOAST_DEVICE_ENUM {
    DESKTOP = 'desktop',
    MOBILE = 'mobile',
}

export enum TOAST_VARIANTS_ENUM {
    LOW = 'low',
    MEDIUM = 'medium',
    HIGH = 'high',
}

export enum TOAST_COLORS_ENUM {
    WARNING = 'warning',
    BRAND = 'brand',
    NEUTRAL = 'neutral',
    SUCCESS = 'success',
    ERROR = 'error',
}

export enum TOAST_DESKTOP_PLACEMENT_ENUM {
    TOP_LEFT = 'top-left',
    TOP_RIGHT = 'top-right',
    BOTTOM_LEFT = 'bottom-left',
    BOTTOM_RIGHT = 'bottom-right',
}

export enum TOAST_MOBILE_PLACEMENT_ENUM {
    TOP = 'top',
    BOTTOM = 'bottom',
}

export const TOAST_DEVICES = [
    TOAST_DEVICE_ENUM.DESKTOP,
    TOAST_DEVICE_ENUM.MOBILE,
];

export const TOAST_VARIANTS = [
    TOAST_VARIANTS_ENUM.LOW,
    TOAST_VARIANTS_ENUM.MEDIUM,
    TOAST_VARIANTS_ENUM.HIGH,
];

export const TOAST_COLORS = [
    TOAST_COLORS_ENUM.WARNING,
    TOAST_COLORS_ENUM.BRAND,
    TOAST_COLORS_ENUM.NEUTRAL,
    TOAST_COLORS_ENUM.SUCCESS,
    TOAST_COLORS_ENUM.ERROR,
];

// Icon mapping for each toast type
export const TOAST_COLOR_ICON_MAPPING: {
    [key in ToastColor]: grauityIconName;
} = {
    [TOAST_COLORS_ENUM.WARNING]: 'exclamation-triangle',
    [TOAST_COLORS_ENUM.BRAND]: 'info-circle',
    [TOAST_COLORS_ENUM.NEUTRAL]: 'info-circle',
    [TOAST_COLORS_ENUM.SUCCESS]: 'check-circle',
    [TOAST_COLORS_ENUM.ERROR]: 'exclamation-circle',
};

// Color mappings for different toast types and variant levels
export const TOAST_COLOR_VARIANT_STYLES_MAPPING = {
    [TOAST_COLORS_ENUM.WARNING]: {
        [TOAST_VARIANTS_ENUM.LOW]: {
            backgroundColor: 'var(--bg-subtle-primary-default)',
            borderColor: 'var(--border-subtle-primary-default)',
            textColor: 'var(--text-emphasis-primary-default)',
            iconColor: 'var(--text-emphasis-warning-default)',
        },
        [TOAST_VARIANTS_ENUM.MEDIUM]: {
            backgroundColor: 'var(--bg-subtle-warning-default)',
            borderColor: 'var(--border-subtle-warning-default)',
            textColor: 'var(--text-emphasis-warning-default)',
            iconColor: 'var(--text-emphasis-warning-default)',
        },
        [TOAST_VARIANTS_ENUM.HIGH]: {
            backgroundColor: 'var(--bg-emphasis-warning-default)',
            borderColor: 'var(--bg-emphasis-warning-default)',
            textColor: 'var(--text-emphasis-white-default)',
            iconColor: 'var(--text-emphasis-white-default)',
        },
    },
    [TOAST_COLORS_ENUM.BRAND]: {
        [TOAST_VARIANTS_ENUM.LOW]: {
            backgroundColor: 'var(--bg-subtle-primary-default)',
            borderColor: 'var(--border-subtle-primary-default)',
            textColor: 'var(--text-emphasis-primary-default)',
            iconColor: 'var(--text-emphasis-brand-default)',
        },
        [TOAST_VARIANTS_ENUM.MEDIUM]: {
            backgroundColor: 'var(--bg-subtle-brand-default)',
            borderColor: 'var(--border-subtle-brand-default)',
            textColor: 'var(--text-emphasis-brand-default)',
            iconColor: 'var(--text-emphasis-brand-default)',
        },
        [TOAST_VARIANTS_ENUM.HIGH]: {
            backgroundColor: 'var(--bg-emphasis-brand-default)',
            borderColor: 'var(--bg-emphasis-brand-default)',
            textColor: 'var(--text-emphasis-white-default)',
            iconColor: 'var(--text-emphasis-white-default)',
        },
    },
    [TOAST_COLORS_ENUM.NEUTRAL]: {
        [TOAST_VARIANTS_ENUM.LOW]: {
            backgroundColor: 'var(--bg-subtle-primary-default)',
            borderColor: 'var(--border-subtle-primary-default)',
            textColor: 'var(--text-emphasis-primary-default)',
            iconColor: 'var(--text-emphasis-primary-default)',
        },
        [TOAST_VARIANTS_ENUM.MEDIUM]: {
            backgroundColor: 'var(--bg-subtle-secondary-default)',
            borderColor: 'var(--border-subtle-primary-default)',
            textColor: 'var(--text-emphasis-primary-default)',
            iconColor: 'var(--text-emphasis-primary-default)',
        },
        [TOAST_VARIANTS_ENUM.HIGH]: {
            backgroundColor: 'var(--bg-subtle-invert-primary-default)',
            borderColor: 'var(--bg-subtle-invert-primary-default)',
            textColor: 'var(--text-emphasis-invert-primary-default)',
            iconColor: 'var(--text-emphasis-invert-primary-default)',
        },
    },
    [TOAST_COLORS_ENUM.SUCCESS]: {
        [TOAST_VARIANTS_ENUM.LOW]: {
            backgroundColor: 'var(--bg-subtle-primary-default)',
            borderColor: 'var(--border-subtle-primary-default)',
            textColor: 'var(--text-emphasis-primary-default)',
            iconColor: 'var(--text-emphasis-success-default)',
        },
        [TOAST_VARIANTS_ENUM.MEDIUM]: {
            backgroundColor: 'var(--bg-subtle-success-default)',
            borderColor: 'var(--border-subtle-success-default)',
            textColor: 'var(--text-emphasis-success-default)',
            iconColor: 'var(--text-emphasis-success-default)',
        },
        [TOAST_VARIANTS_ENUM.HIGH]: {
            backgroundColor: 'var(--bg-emphasis-success-default)',
            borderColor: 'var(--bg-emphasis-success-default)',
            textColor: 'var(--text-emphasis-white-default)',
            iconColor: 'var(--text-emphasis-white-default)',
        },
    },
    [TOAST_COLORS_ENUM.ERROR]: {
        [TOAST_VARIANTS_ENUM.LOW]: {
            backgroundColor: 'var(--bg-subtle-primary-default)',
            borderColor: 'var(--border-subtle-primary-default)',
            textColor: 'var(--text-emphasis-primary-default)',
            iconColor: 'var(--text-emphasis-error-default)',
        },
        [TOAST_VARIANTS_ENUM.MEDIUM]: {
            backgroundColor: 'var(--bg-subtle-error-default)',
            borderColor: 'var(--border-subtle-error-default)',
            textColor: 'var(--text-emphasis-error-default)',
            iconColor: 'var(--text-emphasis-error-default)',
        },
        [TOAST_VARIANTS_ENUM.HIGH]: {
            backgroundColor: 'var(--bg-emphasis-error-default)',
            borderColor: 'var(--bg-emphasis-error-default)',
            textColor: 'var(--text-emphasis-white-default)',
            iconColor: 'var(--text-emphasis-white-default)',
        },
    },
};

// Device-specific styling
export const TOAST_DEVICE_STYLES_MAPPING = {
    [TOAST_DEVICE_ENUM.DESKTOP]: {
        borderRadius: 'var(--corner-radius-cr-4, 8px)',
        padding: '0',
        gap: '0',
        minHeight: 'var(--spacing-sp-9, 48px)',
        boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.16)',
    },
    [TOAST_DEVICE_ENUM.MOBILE]: {
        borderRadius: 'var(--corner-radius-cr-4, 8px)',
        padding: '0',
        gap: '0',
        minHeight: 'var(--spacing-sp-9, 48px)',
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.12)',
    },
};
