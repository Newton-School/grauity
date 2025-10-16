import { ChipSizes, ChipVariants } from './types';

export enum CHIP_VARIANTS_ENUM {
    BRAND = 'brand',
    SUCCESS = 'success',
    ERROR = 'error',
    WARNING = 'warning',
    YELLOW = 'yellow',
    PURPLE = 'purple',
    DISABLED = 'disabled',
    ACTION_BRAND = 'action-brand',
    ACTION_SUCCESS = 'action-success',
    ACTION_ERROR = 'action-error',
    ACTION_WARNING = 'action-warning',
    ACTION_YELLOW = 'action-yellow',
    ACTION_PURPLE = 'action-purple',
}

export enum CHIP_SIZES_ENUM {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
    EXTRA_LARGE = 'extra-large',
}

export const CHIP_VARIANT_STYLES_MAPPING: {
    [variant in ChipVariants]: { [cssSelector: string]: any };
} = {
    [CHIP_VARIANTS_ENUM.BRAND]: {
        background: 'var(--bg-subtle-brand-default, #e5f1ff)',
        color: 'var(--text-emphasis-brand-default, #0673f9)',
        border: 'var(--border-subtle-brand-default, #61a8ff)',
    },
    [CHIP_VARIANTS_ENUM.SUCCESS]: {
        background: 'var(--bg-subtle-success-default, #d9fced)',
        color: 'var(--text-emphasis-success-default, #007a51)',
        border: 'var(--border-subtle-success-default, #acf7d3)',
    },
    [CHIP_VARIANTS_ENUM.ERROR]: {
        background: 'var(--bg-subtle-error-default, #ffe5e7)',
        color: 'var(--text-emphasis-error-default, #d22d3a)',
        border: 'var(--border-subtle-error-default, #fbbbbf)',
    },
    [CHIP_VARIANTS_ENUM.WARNING]: {
        background: 'var(--bg-subtle-warning-default, #fff1e5)',
        color: 'var(--text-emphasis-warning-default, #de5a02)',
        border: 'var(--border-subtle-warning-default, #ffd2ba)',
    },
    [CHIP_VARIANTS_ENUM.YELLOW]: {
        background: 'var(--bg-subtle-yellow-default, #fff3d6)',
        color: 'var(--text-emphasis-yellow-default, #d17300)',
        border: 'var(--border-subtle-yellow-default, #ffd580)',
    },
    [CHIP_VARIANTS_ENUM.PURPLE]: {
        background: 'var(--bg-subtle-purple-default, #f5e5ff)',
        color: 'var(--text-emphasis-purple-default, #6138d3)',
        border: 'var(--border-subtle-purple-default, #cebcfe)',
    },
    [CHIP_VARIANTS_ENUM.DISABLED]: {
        background: 'var(--bg-subtle-primary-disabled, #edeff3)',
        color: 'var(--text-emphasis-primary-disabled, #8c95a6)',
        border: '',
    },
    [CHIP_VARIANTS_ENUM.ACTION_BRAND]: {
        background: 'var(--bg-emphasis-brand-default, #0673f9)',
        color: 'var(--text-emphasis-white-default, #ffffff)',
        border: 'var(--border-subtle-brand-default, #61a8ff)',
    },
    [CHIP_VARIANTS_ENUM.ACTION_SUCCESS]: {
        background: 'var(--bg-emphasis-success-default, #009965)',
        color: 'var(--text-emphasis-white-default, #ffffff)',
        border: 'var(--border-subtle-success-default, #acf7d3)',
    },
    [CHIP_VARIANTS_ENUM.ACTION_ERROR]: {
        background: 'var(--bg-emphasis-error-default, #d22d3a)',
        color: 'var(--text-emphasis-white-default, #ffffff)',
        border: 'var(--border-subtle-error-default, #fbbbbf)',
    },
    [CHIP_VARIANTS_ENUM.ACTION_WARNING]: {
        background: 'var(--bg-emphasis-warning-default, #f37216)',
        color: 'var(--text-emphasis-white-default, #ffffff)',
        border: 'var(--border-subtle-warning-default, #ffd2ba)',
    },
    [CHIP_VARIANTS_ENUM.ACTION_YELLOW]: {
        background: 'var(--bg-emphasis-yellow-default, #f59700)',
        color: 'var(--text-emphasis-white-default, #ffffff)',
        border: 'var(--border-subtle-yellow-default, #ffd580)',
    },
    [CHIP_VARIANTS_ENUM.ACTION_PURPLE]: {
        background: 'var(--bg-emphasis-purple-default, #6138d3)',
        color: 'var(--text-emphasis-white-default, #ffffff)',
        border: 'var(--border-subtle-purple-default, #cebcfe)',
    },
};

export const CHIP_VARIANTS = [
    CHIP_VARIANTS_ENUM.BRAND,
    CHIP_VARIANTS_ENUM.SUCCESS,
    CHIP_VARIANTS_ENUM.ERROR,
    CHIP_VARIANTS_ENUM.WARNING,
    CHIP_VARIANTS_ENUM.YELLOW,
    CHIP_VARIANTS_ENUM.PURPLE,
    CHIP_VARIANTS_ENUM.DISABLED,
    CHIP_VARIANTS_ENUM.ACTION_BRAND,
    CHIP_VARIANTS_ENUM.ACTION_SUCCESS,
    CHIP_VARIANTS_ENUM.ACTION_ERROR,
    CHIP_VARIANTS_ENUM.ACTION_WARNING,
    CHIP_VARIANTS_ENUM.ACTION_YELLOW,
    CHIP_VARIANTS_ENUM.ACTION_PURPLE,
];

export const CHIP_FONT_SIZE_MAPPING: {
    [size in ChipSizes]: { [cssSelector: string]: any };
} = {
    [CHIP_SIZES_ENUM.SMALL]: { fontSize: '10px', maxHeight: '20px' },
    [CHIP_SIZES_ENUM.MEDIUM]: { fontSize: '12px', maxHeight: '24px' },
    [CHIP_SIZES_ENUM.LARGE]: { fontSize: '14px', maxHeight: '28px' },
    [CHIP_SIZES_ENUM.EXTRA_LARGE]: { fontSize: '16px', maxHeight: '32px' },
};
