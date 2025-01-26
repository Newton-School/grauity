import { grauityIconSizeName } from 'ui/core';

import { ButtonColors, ButtonSizes, ButtonVariants } from './types';

export enum BUTTON_VARIANTS_ENUM {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    TERTIARY = 'tertiary',
}

export enum BUTTON_COLORS_ENUM {
    BRAND = 'brand',
    NEUTRAL = 'neutral',
    ERROR = 'error',
    SUCCESS = 'success',
    WARNING = 'warning',
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
];

export const BUTTON_COLORS = [
    BUTTON_COLORS_ENUM.BRAND,
    BUTTON_COLORS_ENUM.NEUTRAL,
    BUTTON_COLORS_ENUM.ERROR,
    BUTTON_COLORS_ENUM.SUCCESS,
    BUTTON_COLORS_ENUM.WARNING,
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
    [variant in ButtonVariants]: {
        [color in ButtonColors]: {
            [cssSelector: string]: any;
        };
    };
} = {
    [BUTTON_VARIANTS_ENUM.PRIMARY]: {
        [BUTTON_COLORS_ENUM.BRAND]: {
            background: 'var(--bg-emphasis-brand-default, #0673f9)',
            color: 'var(--text-emphasis-white-default, #ffffff)',
            border: 'none',
            outline: 'none',
            '&:hover:not([disabled])': {
                background: 'var(--bg-emphasis-brand-hover, #2989FF)',
            },
            '&:focus': {
                outline: 'none',
            },
            '&:focus-visible': {
                outline:
                    '3px solid var(--border-subtle-brand-default, #61A8FF)',
            },
            '&:disabled': {
                background: 'var(--bg-emphasis-brand-disabled, #94C4FF)',
                color: 'var(--text-emphasis-white-disabled, #F6F7F9)',
            },
        },
        [BUTTON_COLORS_ENUM.NEUTRAL]: {
            background: 'var(--bg-subtle-invert-primary-default, #0B0C0E)',
            color: 'var(--text-emphasis-invert-primary-default, #FFF)',
            border: 'none',
            outline: 'none',
            '&:hover:not([disabled])': {
                background: 'var(--bg-subtle-invert-primary-hover, #16191D)',
            },
            '&:focus': {
                outline: 'none',
            },
            '&:focus-visible': {
                outline:
                    '3px solid var(--border-subtle-primary-default, #E1E5EA)',
            },
            '&:disabled': {
                background: 'var(--bg-subtle-invert-primary-disabled, #B2B9C7)',
                color: 'var(--text-emphasis-white-disabled, #F6F7F9)',
            },
        },
        [BUTTON_COLORS_ENUM.ERROR]: {
            background: 'var(--bg-emphasis-error-default, #D22D3A)',
            color: 'var(--text-emphasis-white-default, #ffffff)',
            border: 'none',
            outline: 'none',
            '&:hover:not([disabled])': {
                background: 'var(--bg-emphasis-error-hover, #EE3F44)',
            },
            '&:focus': {
                outline: 'none',
            },
            '&:focus-visible': {
                outline:
                    '3px solid var(--border-subtle-error-default, #FBBBBF)',
            },
            '&:disabled': {
                background: 'var(--bg-emphasis-error-disabled, #FA9499)',
                color: 'var(--text-emphasis-white-disabled, #F6F7F9)',
            },
        },
        [BUTTON_COLORS_ENUM.SUCCESS]: {
            background: 'var(--bg-emphasis-success-default, #009965)',
            color: 'var(--text-emphasis-white-default, #ffffff)',
            border: 'none',
            outline: 'none',
            '&:hover:not([disabled])': {
                background: 'var(--bg-emphasis-success-hover, #13B97C)',
            },
            '&:focus': {
                outline: 'none',
            },
            '&:focus-visible': {
                outline:
                    '3px solid var(--border-subtle-success-default, #ACF7D3)',
            },
            '&:disabled': {
                background: 'var(--bg-emphasis-success-disabled, #7EE7B8)',
                color: 'var(--text-emphasis-white-disabled, #F6F7F9)',
            },
        },
        [BUTTON_COLORS_ENUM.WARNING]: {
            background: 'var(--bg-emphasis-warning-default, #F37216)',
            color: 'var(--text-emphasis-white-default, #ffffff)',
            border: 'none',
            outline: 'none',
            '&:hover:not([disabled])': {
                background: 'var(--bg-emphasis-warning-hover, #FD9254)',
            },
            '&:focus': {
                outline: 'none',
            },
            '&:focus-visible': {
                outline:
                    '3px solid var(--border-subtle-warning-default, #FFD2BA)',
            },
            '&:disabled': {
                background: 'var(--bg-emphasis-warning-disabled, #FFB286)',
                color: 'var(--text-emphasis-white-disabled, #F6F7F9)',
            },
        },
    },
    [BUTTON_VARIANTS_ENUM.SECONDARY]: {
        [BUTTON_COLORS_ENUM.BRAND]: {
            color: 'var(--text-emphasis-brand-default, #0673F9)',
            border: '1px solid var(--border-emphasis-brand-default, #0673F9)',
            outline: 'none',
            background: 'var(--bg-subtle-primary-default, #ffffff)',
            '&:hover:not([disabled])': {
                background: 'var(--bg-subtle-brand-default, #e5f1ff)',
            },
            '&:focus': {
                outline: 'none',
            },
            '&:focus-visible': {
                outline:
                    '3px solid var(--border-subtle-brand-default, #61A8FF)',
            },
            '&:disabled': {
                border: '1px solid var(--border-subtle-brand-disabled, #C2DDFF)',
                color: 'var(--text-emphasis-brand-disabled, #94C4FF)',
            },
        },
        [BUTTON_COLORS_ENUM.NEUTRAL]: {
            color: 'var(--text-emphasis-primary-default, #16191D)',
            border: '1px solid var(--border-emphasis-invert-primary-default, #16191D)',
            outline: 'none',
            background: 'var(--bg-subtle-primary-default, #E5F1FF)',
            '&:hover:not([disabled])': {
                background: 'var(--bg-subtle-primary-hover, #f6f7f9)',
            },
            '&:focus': {
                outline: 'none',
            },
            '&:focus-visible': {
                outline:
                    '3px solid var(--border-subtle-primary-default, #E1E5EA)',
            },
            '&:disabled': {
                border: '1px solid var(--border-subtle-primary-disabled, #EDEFF3)',
                color: 'var(--text-emphasis-invert-primary-disabled, #B2B9C7)',
            },
        },
        [BUTTON_COLORS_ENUM.ERROR]: {
            color: 'var(--text-emphasis-error-default, #D22D3A)',
            border: '1px solid var(--border-emphasis-error-default, #D22D3A)',
            outline: 'none',
            background: 'var(--bg-subtle-primary-default, #E5F1FF)',
            '&:hover:not([disabled])': {
                background: 'var(--bg-subtle-error-default, #FFE5E7)',
            },
            '&:focus': {
                outline: 'none',
            },
            '&:focus-visible': {
                outline:
                    '3px solid var(--border-subtle-error-default, #FBBBBF)',
            },
            '&:disabled': {
                border: '1px solid var(--border-subtle-error-disabled, #FBBBBF)',
                color: 'var(--text-emphasis-error-disabled, #FA9499)',
            },
        },
        [BUTTON_COLORS_ENUM.SUCCESS]: {
            color: 'var(--text-emphasis-success-default, #007A51)',
            border: '1px solid var(--border-emphasis-success-default, #009965)',
            outline: 'none',
            background: 'var(--bg-subtle-primary-default, #E5F1FF)',
            '&:hover:not([disabled])': {
                background: 'var(--bg-subtle-success-default, #D9FCED)',
            },
            '&:focus': {
                outline: 'none',
            },
            '&:focus-visible': {
                outline:
                    '3px solid var(--border-subtle-success-default, #ACF7D3)',
            },
            '&:disabled': {
                border: '1px solid var(--border-subtle-success-disabled, #ACF7D3)',
                color: 'var(--text-emphasis-success-disabled, #7EE7B8)',
            },
        },
        [BUTTON_COLORS_ENUM.WARNING]: {
            color: 'var(--text-emphasis-warning-default, #DE5A02)',
            border: '1px solid var(--border-emphasis-warning-default, #DE5A02)',
            outline: 'none',
            background: 'var(--bg-subtle-primary-default, #E5F1FF)',
            '&:hover:not([disabled])': {
                background: 'var(--bg-subtle-warning-default, #FFF1E5)',
            },
            '&:focus': {
                outline: 'none',
            },
            '&:focus-visible': {
                outline:
                    '3px solid var(--border-subtle-warning-default, #FFD2BA)',
            },
            '&:disabled': {
                border: '1px solid var(--border-subtle-warning-disabled, #FFD2BA)',
                color: 'var(--text-emphasis-warning-disabled, #FFB286)',
            },
        },
    },
    [BUTTON_VARIANTS_ENUM.TERTIARY]: {
        [BUTTON_COLORS_ENUM.BRAND]: {
            color: 'var(--text-emphasis-brand-default, #0673F9)',
            border: 'none',
            outline: 'none',
            background: 'var(--bg-subtle-primary-default, #E5F1FF)',
            '&:hover:not([disabled])': {
                background: 'var(--bg-subtle-brand-default, #e5f1ff)',
            },
            '&:focus': {
                outline: 'none',
            },
            '&:focus-visible': {
                outline:
                    '3px solid var(--border-subtle-brand-default, #61A8FF)',
            },
            '&:disabled': {
                color: 'var(--text-emphasis-brand-disabled, #94C4FF)',
            },
        },
        [BUTTON_COLORS_ENUM.NEUTRAL]: {
            color: 'var(--text-emphasis-primary-default, #16191D)',
            border: 'none',
            outline: 'none',
            background: 'var(--bg-subtle-primary-default, #E5F1FF)',
            '&:hover:not([disabled])': {
                background: 'var(--bg-subtle-primary-hover, #f6f7f9)',
            },
            '&:focus': {
                outline: 'none',
            },
            '&:focus-visible': {
                outline:
                    '3px solid var(--border-subtle-primary-default, #E1E5EA)',
            },
            '&:disabled': {
                color: 'var(--text-emphasis-invert-primary-disabled, #B2B9C7)',
            },
        },
        [BUTTON_COLORS_ENUM.ERROR]: {
            color: 'var(--text-emphasis-error-default, #D22D3A)',
            border: 'none',
            outline: 'none',
            background: 'var(--bg-subtle-primary-default, #E5F1FF)',
            '&:hover:not([disabled])': {
                background: 'var(--bg-subtle-error-default, #FFE5E7)',
            },
            '&:focus': {
                outline: 'none',
            },
            '&:focus-visible': {
                outline:
                    '3px solid var(--border-subtle-error-default, #FBBBBF)',
            },
            '&:disabled': {
                color: 'var(--text-emphasis-error-disabled, #FA9499)',
            },
        },
        [BUTTON_COLORS_ENUM.SUCCESS]: {
            color: 'var(--text-emphasis-success-default, #007A51)',
            border: 'none',
            outline: 'none',
            background: 'var(--bg-subtle-primary-default, #E5F1FF)',
            '&:hover:not([disabled])': {
                background: 'var(--bg-subtle-success-default, #D9FCED)',
            },
            '&:focus': {
                outline: 'none',
            },
            '&:focus-visible': {
                outline:
                    '3px solid var(--border-subtle-success-default, #ACF7D3)',
            },
            '&:disabled': {
                color: 'var(--text-emphasis-success-disabled, #7EE7B8)',
            },
        },
        [BUTTON_COLORS_ENUM.WARNING]: {
            color: 'var(--text-emphasis-warning-default, #DE5A02)',
            border: 'none',
            outline: 'none',
            background: 'var(--bg-subtle-primary-default, #E5F1FF)',
            '&:hover:not([disabled])': {
                background: 'var(--bg-subtle-warning-default, #FFF1E5)',
            },
            '&:focus': {
                outline: 'none',
            },
            '&:focus-visible': {
                outline:
                    '3px solid var(--border-subtle-warning-default, #FFD2BA)',
            },
            '&:disabled': {
                color: 'var(--text-emphasis-warning-disabled, #FFB286)',
            },
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
