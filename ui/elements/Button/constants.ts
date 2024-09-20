import { grauityIconSizeName } from 'ui/core';

import { ButtonSizes, ButtonVariants } from './types';

export enum BUTTON_VARIANTS_ENUM {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    TERTIARY = 'tertiary',
    SUCCESS = 'success',
    DANGER = 'danger',
    WARNING = 'warning',
    PRIMARY_OUTLINED = 'primary-outlined',
    SECONDARY_OUTLINED = 'secondary-outlined',
    TERTIARY_OUTLINED = 'tertiary-outlined',
    SUCCESS_OUTLINED = 'success-outlined',
    DANGER_OUTLINED = 'danger-outlined',
    WARNING_OUTLINED = 'warning-outlined',
}

export enum BUTTON_SIZES_ENUM {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
    EXTRA_LARGE = 'extra-large',
}

export enum BUTTON_ICON_POSITIONS_ENUM {
    LEFT = 'left',
    RIGHT = 'right',
}

export const BUTTON_VARIANTS = [
    BUTTON_VARIANTS_ENUM.PRIMARY,
    BUTTON_VARIANTS_ENUM.SECONDARY,
    BUTTON_VARIANTS_ENUM.TERTIARY,
    BUTTON_VARIANTS_ENUM.SUCCESS,
    BUTTON_VARIANTS_ENUM.DANGER,
    BUTTON_VARIANTS_ENUM.WARNING,
    BUTTON_VARIANTS_ENUM.PRIMARY_OUTLINED,
    BUTTON_VARIANTS_ENUM.SECONDARY_OUTLINED,
    BUTTON_VARIANTS_ENUM.TERTIARY_OUTLINED,
    BUTTON_VARIANTS_ENUM.SUCCESS_OUTLINED,
    BUTTON_VARIANTS_ENUM.DANGER_OUTLINED,
    BUTTON_VARIANTS_ENUM.WARNING_OUTLINED,
];

export const BUTTON_SIZES = [
    BUTTON_SIZES_ENUM.SMALL,
    BUTTON_SIZES_ENUM.MEDIUM,
    BUTTON_SIZES_ENUM.LARGE,
    BUTTON_SIZES_ENUM.EXTRA_LARGE,
];

export const BUTTON_ICON_POSITIONS = [
    BUTTON_ICON_POSITIONS_ENUM.LEFT,
    BUTTON_ICON_POSITIONS_ENUM.RIGHT,
];

export const BUTTON_VARIANT_STYLES_MAPPING: {
    [variant in ButtonVariants]: { [cssSelector: string]: any };
} = {
    [BUTTON_VARIANTS_ENUM.PRIMARY]: {
        background: 'var(--bg-action-brand, #0673f9)',
        color: '#fff',
        border: 'none',
        outline: 'none',
        '&:hover': {
            background: 'var(--bg-action-brand-hover, #2989ff)',
        },
        '&:focus': {
            background: 'var(--bg-action-brand-hover, #2989ff)',
            outline:
                'var(--spacing-3px, 3px) solid var(--border-brand, #94c4ff)',
        },
    },
    [BUTTON_VARIANTS_ENUM.PRIMARY_OUTLINED]: {
        background: 'transparent',
        color: 'var(--text-brand, #0673f9)',
        border: 'none',
        outline: 'none',
        '&:hover': {
            background: 'var(--bg-brand, #e5f1ff)',
        },
        '&:focus': {
            background: 'var(--bg-brand, #e5f1ff)',
            outline:
                'var(--spacing-3px, 3px) solid var(--border-brand, #94c4ff)',
        },
    },
    [BUTTON_VARIANTS_ENUM.SECONDARY]: {
        background: 'var(--bg-invert-primary, #0b0c0e)',
        color: 'var(--text-action2, #ffffff)',
        border: 'none',
        outline: 'none',
        '&:hover': {
            background: 'var(--bg-invert-primary-hover, #16191d)',
        },
        '&:focus': {
            background: 'var(--bg-invert-primary-hover, #16191d)',
            outline: 'var(--spacing-3px, 3px) solid var(--border, #e1e5ea)',
        },
    },
    [BUTTON_VARIANTS_ENUM.SECONDARY_OUTLINED]: {
        background: 'transparent',
        color: 'var(--text-primary, #16191d)',
        border: 'none',
        outline: 'none',
        '&:hover': {
            background: 'var(--bg-secondary, #f6f7f9)',
        },
        '&:focus': {
            background: 'var(--bg-secondary, #f6f7f9)',
            outline: 'var(--spacing-3px, 3px) solid var(--border, #e1e5ea)',
        },
    },
    [BUTTON_VARIANTS_ENUM.TERTIARY]: {
        background: 'var(--bg-primary, #fff)',
        color: 'var(--text-primary, #16191d)',
        outline: 'var(--spacing-1px, 1px) solid var(--border-neutral, #e1e5ea)',
        '&:hover': {
            background: 'var(--bg-primary-hover, #f6f7f9)',
        },
        '&:focus': {
            background: 'var(--bg-primary-hover, #f6f7f9)',
            outline: 'var(--spacing-3px, 3px) solid var(--border, #e1e5ea)',
        },
    },
    [BUTTON_VARIANTS_ENUM.TERTIARY_OUTLINED]: {
        background: 'transparent',
        color: 'var(--text-primary, #16191d)',
        border: 'none',
        outline: 'none',
        '&:hover': {
            background: 'var(--bg-primary-hover, #f6f7f9)',
        },
        '&:focus': {
            background: 'var(--bg-primary-hover, #f6f7f9)',
            outline: 'var(--spacing-3px, 3px) solid var(--border, #e1e5ea)',
        },
    },
    [BUTTON_VARIANTS_ENUM.SUCCESS]: {
        background: 'var(--bg-action-success, #009965)',
        color: 'var(--text-action, #ffffff)',
        border: 'none',
        outline: 'none',
        '&:hover': {
            background: 'var(--bg-action-success-hover, #13b97c)',
        },
        '&:focus': {
            background: 'var(--bg-action-success-hover, #13b97c)',
            outline:
                'var(--spacing-3px, 3px) solid var(--border-success, #acf7d3)',
        },
    },
    [BUTTON_VARIANTS_ENUM.SUCCESS_OUTLINED]: {
        background: 'transparent',
        color: 'var(--text-success, #007a51)',
        border: 'none',
        outline: 'none',
        '&:hover': {
            background: 'var(--bg-success, #d9fced)',
        },
        '&:focus': {
            background: 'var(--bg-success, #d9fced)',
            outline:
                'var(--spacing-3px, 3px) solid var(--border-success, #acf7d3)',
        },
    },
    [BUTTON_VARIANTS_ENUM.DANGER]: {
        background: 'var(--bg-action-error, #d22d3a)',
        color: 'var(--text-action, #ffffff)',
        border: 'none',
        outline: 'none',
        '&:hover': {
            background: 'var(--bg-action-error-hover, #ee3f44)',
        },
        '&:focus': {
            background: 'var(--bg-action-error-hover, #ee3f44)',
            outline:
                'var(--spacing-3px, 3px) solid var(--border-error, #fbbbbf)',
        },
    },
    [BUTTON_VARIANTS_ENUM.DANGER_OUTLINED]: {
        background: 'transparent',
        color: 'var(--text-error, #d22d3a)',
        border: 'none',
        outline: 'none',
        '&:hover': {
            background: 'var(--bg-error, #ffe5e7)',
        },
        '&:focus': {
            background: 'var(--bg-error, #ffe5e7)',
            outline:
                'var(--spacing-3px, 3px) solid var(--border-error, #fbbbbf)',
        },
    },
    [BUTTON_VARIANTS_ENUM.WARNING]: {
        background: 'var(--bg-action-warning, #f37216)',
        color: 'var(--text-action, #ffffff)',
        border: 'none',
        outline: 'none',
        '&:hover': {
            background: 'var(--bg-action-warning-hover, #fd9254)',
        },
        '&:focus': {
            background: 'var(--bg-action-warning-hover, #fd9254)',
            outline:
                'var(--spacing-3px, 3px) solid var(--border-warning, #ffd2ba)',
        },
    },
    [BUTTON_VARIANTS_ENUM.WARNING_OUTLINED]: {
        background: 'transparent',
        color: 'var(--text-warning, #de5a02)',
        border: 'none',
        outline: 'none',
        '&:hover': {
            background: 'var(--bg-warning, #fff1e5)',
        },
        '&:focus': {
            background: 'var(--bg-warning, #fff1e5)',
            outline:
                'var(--spacing-3px, 3px) solid var(--border-warning, #ffd2ba)',
        },
    },
};
export const BUTTON_SIZE_STYLES_MAPPING: {
    [variant in ButtonSizes]: { [cssSelector: string]: any };
} = {
    [BUTTON_SIZES_ENUM.SMALL]: {
        padding: 'var(--spacing-4px, 4px) var(--spacing-8px, 8px)',
        height: 'var(--spacing-32px, 32px)',
        minHeight: 'var(--spacing-32px, 32px)',
        gap: 'var(--spacing-4px, 4px)',
    },
    [BUTTON_SIZES_ENUM.MEDIUM]: {
        padding: 'var(--spacing-8px, 8px) var(--spacing-12px, 12px)',
        height: 'var(--spacing-40px, 40px)',
        minHeight: 'var(--spacing-40px, 40px)',
    },
    [BUTTON_SIZES_ENUM.LARGE]: {
        padding: 'var(--spacing-12px, 12px) var(--spacing-16px, 16px)',
        height: 'var(--spacing-48px, 48px)',
        minHeight: 'var(--spacing-48px, 48px)',
    },
    [BUTTON_SIZES_ENUM.EXTRA_LARGE]: {
        padding: 'var(--spacing-16px, 16px) var(--spacing-20px, 20px)',
        height: 'var(--spacing-56px, 56px)',
        minHeight: 'var(--spacing-56px, 56px)',
    },
};

export const ICON_BUTTON_SIZE_STYLES_MAPPING: {
    [variant in ButtonSizes]: { [cssSelector: string]: any };
} = {
    [BUTTON_SIZES_ENUM.SMALL]: {
        height: 'var(--spacing-32px, 32px)',
        minHeight: 'var(--spacing-32px, 32px)',
        gap: 'var(--spacing-4px, 4px)',
        padding: 'var(--spacing-4px, 4px)',
        width: 'var(--spacing-32px, 32px)',
        minWidth: 'var(--spacing-32px, 32px)',
    },
    [BUTTON_SIZES_ENUM.MEDIUM]: {
        height: 'var(--spacing-40px, 40px)',
        minHeight: 'var(--spacing-40px, 40px)',
        padding: 'var(--spacing-8px, 8px)',
        width: 'var(--spacing-40px, 40px)',
        minWidth: 'var(--spacing-40px, 40px)',
    },
    [BUTTON_SIZES_ENUM.LARGE]: {
        height: 'var(--spacing-48px, 48px)',
        minHeight: 'var(--spacing-48px, 48px)',
        padding: 'var(--spacing-12px, 12px)',
        width: 'var(--spacing-48px, 48px)',
        minWidth: 'var(--spacing-48px, 48px)',
    },
    [BUTTON_SIZES_ENUM.EXTRA_LARGE]: {
        height: 'var(--spacing-56px, 56px)',
        minHeight: 'var(--spacing-56px, 56px)',
        padding: 'var(--spacing-16px, 16px)',
        width: 'var(--spacing-56px, 56px)',
        minWidth: 'var(--spacing-56px, 56px)',
    },
};

export const ICON_BUTTON_SIZE_TO_ICON_SIZE_MAPPING: {
    [variant in ButtonSizes]: grauityIconSizeName;
} = {
    [BUTTON_SIZES_ENUM.SMALL]: '16',
    [BUTTON_SIZES_ENUM.MEDIUM]: '24',
    [BUTTON_SIZES_ENUM.LARGE]: '32',
    [BUTTON_SIZES_ENUM.EXTRA_LARGE]: '40',
};
