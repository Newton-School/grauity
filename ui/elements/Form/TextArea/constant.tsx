import { VARIANTS } from './types';

export enum VARIANTS_SIZES {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
    EXTRA_LARGE = 'extra-large',
}

export const TEXT_AREA_SIZE_STYLES_MAPPING: {
    [variant in VARIANTS]: {
        [cssSelector: string]: any;
    };
} = {
    [VARIANTS_SIZES.SMALL]: {
        padding: 'var(--spacing-spacing3, 4px) var(--spacing-spacing5, 8px);',
        minHeight: 'var(--spacing-32px, 32px)',
    },
    [VARIANTS_SIZES.MEDIUM]: {
        padding: 'var(--spacing-spacing5, 8px) var(--spacing-spacing7, 12px)',
        minHeight: 'var(--spacing-40px, 40px)',
    },
    [VARIANTS_SIZES.LARGE]: {
        padding: 'var(--spacing-spacing7, 12px) var(--spacing-spacing9, 16px)',
        minHeight: 'var(--spacing-48px, 48px)',
    },
    [VARIANTS_SIZES.EXTRA_LARGE]: {
        padding: 'var(--spacing-spacing9, 16px)',
        minHeight: 'var(--spacing-56px, 56px)',
    },
};
