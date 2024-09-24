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
        background: 'var(--bg-brand, #E5F1FF)',
        color: 'var(--text-brand, #0673F9)',
        border: 'var(--border-brand, #94C4FF)',
    },
    [CHIP_VARIANTS_ENUM.SUCCESS]: {
        background: 'var(--bg-success, #D9FCED)',
        color: 'var(--text-success, #007A51)',
        border: 'var(--border-success, #ACF7D3)',
    },
    [CHIP_VARIANTS_ENUM.ERROR]: {
        background: 'var(--bg-error, #FFE5E7)',
        color: 'var(--text-error, #D22D3A)',
        border: 'var(--border-error, #FBBBBF)',
    },
    [CHIP_VARIANTS_ENUM.WARNING]: {
        background: 'var(--bg-warning, #FFF1E5)',
        color: 'var(--text-warning, #DE5A02)',
        border: 'var(--border-warning, #FFD2BA)',
    },
    [CHIP_VARIANTS_ENUM.YELLOW]: {
        background: 'var(--bg-yellow, #FFF3D6)',
        color: 'var(--text-yellow, #F59700)',
        border: 'var(--border-yellow, #FFD580)',
    },
    [CHIP_VARIANTS_ENUM.PURPLE]: {
        background: 'var(--bg-purple, #F5E5FF)',
        color: 'var(--text-purple, #7B55EE)',
        border: 'var(--border-purple, #CEBCFE)',
    },
    [CHIP_VARIANTS_ENUM.DISABLED]: {
        background: 'var(--bg-disabled, #EDEFF3)',
        color: 'var(--text-disabled, #8C95A6)',
        border: '',
    },
    [CHIP_VARIANTS_ENUM.ACTION_BRAND]: {
        background: 'var(--bg-action-brand, #0673f9)',
        color: 'var(--text-action, #fff)',
        border: 'var(--border-brand, #94C4FF)',
    },
    [CHIP_VARIANTS_ENUM.ACTION_SUCCESS]: {
        background: 'var(--bg-action-success, #009965)',
        color: 'var(--text-action, #fff)',
        border: 'var(--border-success, #ACF7D3)',
    },
    [CHIP_VARIANTS_ENUM.ACTION_ERROR]: {
        background: 'var(--bg-action-error, #d22d3a)',
        color: 'var(--text-action, #fff)',
        border: 'var(--border-error, #FBBBBF)',
    },
    [CHIP_VARIANTS_ENUM.ACTION_WARNING]: {
        background: 'var(--bg-action-warning, #f37216)',
        color: 'var(--text-action, #fff)',
        border: 'var(--border-warning, #FFD2BA)',
    },
    [CHIP_VARIANTS_ENUM.ACTION_YELLOW]: {
        background: 'var(--bg-action-yellow, #f59700)',
        color: 'var(--text-action, #fff)',
        border: 'var(--border-yellow, #FFD580)',
    },
    [CHIP_VARIANTS_ENUM.ACTION_PURPLE]: {
        background: 'var(--bg-action-purple, #6138d3)',
        color: 'var(--text-action, #fff)',
        border: 'var(--border-purple, #CEBCFE)',
    },
};

export const CHIP_FONT_SIZE_MAPPING: {
    [size in ChipSizes]: { [cssSelector: string]: any };
} = {
    [CHIP_SIZES_ENUM.SMALL]: { fontSize: '10px', maxHeight: '20px' },
    [CHIP_SIZES_ENUM.MEDIUM]: { fontSize: '12px', maxHeight: '24px' },
    [CHIP_SIZES_ENUM.LARGE]: { fontSize: '14px', maxHeight: '28px' },
    [CHIP_SIZES_ENUM.EXTRA_LARGE]: { fontSize: '16px', maxHeight: '32px' },
};
