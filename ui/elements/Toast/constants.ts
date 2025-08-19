import { grauityIconName } from '../../core';
import { ToastType } from './types';

export enum TOAST_DEVICE_ENUM {
    DESKTOP = 'desktop',
    MOBILE = 'mobile',
}

export enum TOAST_EMPHASIS_ENUM {
    LOW = 'low',
    MEDIUM = 'medium',
    HIGH = 'high',
}

export enum TOAST_TYPE_ENUM {
    WARNING = 'warning',
    BRAND = 'brand',
    NEUTRAL = 'neutral',
    SUCCESS = 'success',
    ERROR = 'error',
}

export const TOAST_DEVICES = [
    TOAST_DEVICE_ENUM.DESKTOP,
    TOAST_DEVICE_ENUM.MOBILE,
];

export const TOAST_EMPHASIS = [
    TOAST_EMPHASIS_ENUM.LOW,
    TOAST_EMPHASIS_ENUM.MEDIUM,
    TOAST_EMPHASIS_ENUM.HIGH,
];

export const TOAST_TYPES = [
    TOAST_TYPE_ENUM.WARNING,
    TOAST_TYPE_ENUM.BRAND,
    TOAST_TYPE_ENUM.NEUTRAL,
    TOAST_TYPE_ENUM.SUCCESS,
    TOAST_TYPE_ENUM.ERROR,
];

// Icon mapping for each toast type
export const TOAST_TYPE_ICON_MAPPING: {
    [key in ToastType]: grauityIconName;
} = {
    [TOAST_TYPE_ENUM.WARNING]: 'exclamation-triangle',
    [TOAST_TYPE_ENUM.BRAND]: 'info-circle',
    [TOAST_TYPE_ENUM.NEUTRAL]: 'info-circle',
    [TOAST_TYPE_ENUM.SUCCESS]: 'check-circle',
    [TOAST_TYPE_ENUM.ERROR]: 'exclamation-circle',
};

// Color mappings for different toast types and emphasis levels
export const TOAST_COLOR_MAPPING = {
    [TOAST_TYPE_ENUM.WARNING]: {
        [TOAST_EMPHASIS_ENUM.LOW]: {
            backgroundColor: 'var(--bg-subtle-primary-default)',
            borderColor: 'var(--border-subtle-primary-default)',
            textColor: 'var(--text-emphasis-primary-default)',
            iconColor: 'var(--text-emphasis-warning-default)',
        },
        [TOAST_EMPHASIS_ENUM.MEDIUM]: {
            backgroundColor: 'var(--bg-subtle-warning-default)',
            borderColor: 'var(--border-subtle-warning-default)',
            textColor: 'var(--text-emphasis-warning-default)',
            iconColor: 'var(--text-emphasis-warning-default)',
        },
        [TOAST_EMPHASIS_ENUM.HIGH]: {
            backgroundColor: 'var(--bg-emphasis-warning-default)',
            borderColor: 'var(--bg-emphasis-warning-default)',
            textColor: 'var(--text-emphasis-white-default)',
            iconColor: 'var(--text-emphasis-white-default)',
        },
    },
    [TOAST_TYPE_ENUM.BRAND]: {
        [TOAST_EMPHASIS_ENUM.LOW]: {
            backgroundColor: 'var(--bg-subtle-primary-default)',
            borderColor: 'var(--border-subtle-primary-default)',
            textColor: 'var(--text-emphasis-primary-default)',
            iconColor: 'var(--text-emphasis-brand-default)',
        },
        [TOAST_EMPHASIS_ENUM.MEDIUM]: {
            backgroundColor: 'var(--bg-subtle-brand-default)',
            borderColor: 'var(--border-subtle-brand-default)',
            textColor: 'var(--text-emphasis-brand-default)',
            iconColor: 'var(--text-emphasis-brand-default)',
        },
        [TOAST_EMPHASIS_ENUM.HIGH]: {
            backgroundColor: 'var(--bg-emphasis-brand-default)',
            borderColor: 'var(--bg-emphasis-brand-default)',
            textColor: 'var(--text-emphasis-white-default)',
            iconColor: 'var(--text-emphasis-white-default)',
        },
    },
    [TOAST_TYPE_ENUM.NEUTRAL]: {
        [TOAST_EMPHASIS_ENUM.LOW]: {
            backgroundColor: 'var(--bg-subtle-primary-default)',
            borderColor: 'var(--border-subtle-primary-default)',
            textColor: 'var(--text-emphasis-primary-default)',
            iconColor: 'var(--text-emphasis-primary-default)',
        },
        [TOAST_EMPHASIS_ENUM.MEDIUM]: {
            backgroundColor: 'var(--bg-subtle-secondary-default)',
            borderColor: 'var(--border-subtle-primary-default)',
            textColor: 'var(--text-emphasis-primary-default)',
            iconColor: 'var(--text-emphasis-primary-default)',
        },
        [TOAST_EMPHASIS_ENUM.HIGH]: {
            backgroundColor: 'var(--bg-subtle-invert-primary-default)',
            borderColor: 'var(--bg-subtle-invert-primary-default)',
            textColor: 'var(--text-emphasis-invert-primary-default)',
            iconColor: 'var(--text-emphasis-invert-primary-default)',
        },
    },
    [TOAST_TYPE_ENUM.SUCCESS]: {
        [TOAST_EMPHASIS_ENUM.LOW]: {
            backgroundColor: 'var(--bg-subtle-primary-default)',
            borderColor: 'var(--border-subtle-primary-default)',
            textColor: 'var(--text-emphasis-primary-default)',
            iconColor: 'var(--text-emphasis-success-default)',
        },
        [TOAST_EMPHASIS_ENUM.MEDIUM]: {
            backgroundColor: 'var(--bg-subtle-success-default)',
            borderColor: 'var(--border-subtle-success-default)',
            textColor: 'var(--text-emphasis-success-default)',
            iconColor: 'var(--text-emphasis-success-default)',
        },
        [TOAST_EMPHASIS_ENUM.HIGH]: {
            backgroundColor: 'var(--bg-emphasis-success-default)',
            borderColor: 'var(--bg-emphasis-success-default)',
            textColor: 'var(--text-emphasis-white-default)',
            iconColor: 'var(--text-emphasis-white-default)',
        },
    },
    [TOAST_TYPE_ENUM.ERROR]: {
        [TOAST_EMPHASIS_ENUM.LOW]: {
            backgroundColor: 'var(--bg-subtle-primary-default)',
            borderColor: 'var(--border-subtle-primary-default)',
            textColor: 'var(--text-emphasis-primary-default)',
            iconColor: 'var(--text-emphasis-error-default)',
        },
        [TOAST_EMPHASIS_ENUM.MEDIUM]: {
            backgroundColor: 'var(--bg-subtle-error-default)',
            borderColor: 'var(--border-subtle-error-default)',
            textColor: 'var(--text-emphasis-error-default)',
            iconColor: 'var(--text-emphasis-error-default)',
        },
        [TOAST_EMPHASIS_ENUM.HIGH]: {
            backgroundColor: 'var(--bg-emphasis-error-default)',
            borderColor: 'var(--bg-emphasis-error-default)',
            textColor: 'var(--text-emphasis-white-default)',
            iconColor: 'var(--text-emphasis-white-default)',
        },
    },
};

// Device-specific styling
export const TOAST_DEVICE_STYLES = {
    [TOAST_DEVICE_ENUM.DESKTOP]: {
        borderRadius: 'var(--corner-radius-cr-4, 8px)',
        padding: '0',
        gap: '0',
        minHeight: 'var(--spacing-sp-9, 48px)',
        boxShadow: 'var(--elevation-shadow-level-3)',
    },
    [TOAST_DEVICE_ENUM.MOBILE]: {
        borderRadius: 'var(--corner-radius-cr-4, 8px)',
        padding: '0',
        gap: '0',
        minHeight: 'var(--spacing-sp-9, 48px)',
        boxShadow: 'var(--elevation-shadow-level-2)',
    },
};
