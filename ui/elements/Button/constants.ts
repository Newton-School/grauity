import { grauityIconSizeName } from 'ui/core';

import { ButtonSizes } from './types';

export enum BUTTON_VARIANTS_ENUM {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    TERTIARY = 'tertiary',
    LINK = 'link',
}

export enum BUTTON_COLORS_ENUM {
    BRAND = 'brand',
    NEUTRAL = 'neutral',
    ERROR = 'error',
    SUCCESS = 'success',
    WARNING = 'warning',
}

export enum BUTTON_SIZES_ENUM {
    EXTRA_SMALL = 'extra-small',
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
    BUTTON_VARIANTS_ENUM.LINK,
];

export const BUTTON_COLORS = [
    BUTTON_COLORS_ENUM.BRAND,
    BUTTON_COLORS_ENUM.NEUTRAL,
    BUTTON_COLORS_ENUM.ERROR,
    BUTTON_COLORS_ENUM.SUCCESS,
    BUTTON_COLORS_ENUM.WARNING,
];

export const BUTTON_SIZES = [
    BUTTON_SIZES_ENUM.EXTRA_SMALL,
    BUTTON_SIZES_ENUM.SMALL,
    BUTTON_SIZES_ENUM.MEDIUM,
    BUTTON_SIZES_ENUM.LARGE,
    BUTTON_SIZES_ENUM.EXTRA_LARGE,
];

export const BUTTON_ICON_POSITIONS = [
    BUTTON_ICON_POSITIONS_ENUM.LEFT,
    BUTTON_ICON_POSITIONS_ENUM.RIGHT,
];

export const BUTTON_SIZE_STYLES_MAPPING: {
    [variant in ButtonSizes]: { [cssSelector: string]: any };
} = {
    [BUTTON_SIZES_ENUM.EXTRA_SMALL]: {
        padding: 'var(--spacing-2px, 2px) var(--spacing-4px, 4px)',
        height: 'var(--spacing-24px, 24px)',
        minHeight: 'var(--spacing-24px, 24px)',
        gap: 'var(--spacing-2px, 2px)',
    },
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

export const BUTTON_LINK_SIZE_STYLES_MAPPING: {
    [variant in ButtonSizes]: { [cssSelector: string]: any };
} = {
    [BUTTON_SIZES_ENUM.EXTRA_SMALL]: {
        height: '20px',
        minHeight: '20px',
        padding: '0',
        gap: '8px',
    },
    [BUTTON_SIZES_ENUM.SMALL]: {
        height: '22px',
        minHeight: '22px',
        padding: '0',
        gap: '8px',
    },
    [BUTTON_SIZES_ENUM.MEDIUM]: {
        height: '24px',
        minHeight: '24px',
        padding: '0',
        gap: '8px',
    },
    [BUTTON_SIZES_ENUM.LARGE]: {
        height: '26px',
        minHeight: '26px',
        padding: '0',
        gap: '8px',
    },
    [BUTTON_SIZES_ENUM.EXTRA_LARGE]: {
        height: '28px',
        minHeight: '28px',
        padding: '0',
        gap: '8px',
    },
};

export const BUTTON_LINK_CONTENT_STYLES_MAPPING: {
    [variant in ButtonSizes]: { [cssSelector: string]: any };
} = {
    [BUTTON_SIZES_ENUM.EXTRA_SMALL]: {
        fontSize: '12px',
        lineHeight: '20px',
        letterSpacing: '0.25px',
        fontWeight: 'var(--font-weight-fw-20, 550)',
    },
    [BUTTON_SIZES_ENUM.SMALL]: {
        fontSize: '14px',
        lineHeight: '22px',
        letterSpacing: '0.4px',
        fontWeight: 'var(--font-weight-fw-20, 550)',
    },
    [BUTTON_SIZES_ENUM.MEDIUM]: {
        fontSize: '14px',
        lineHeight: '24px',
        letterSpacing: '0.1px',
        fontWeight: 'var(--font-weight-fw-20, 550)',
    },
    [BUTTON_SIZES_ENUM.LARGE]: {
        fontSize: '16px',
        lineHeight: '26px',
        letterSpacing: '0.06px',
        fontWeight: 'var(--font-weight-fw-20, 550)',
    },
    [BUTTON_SIZES_ENUM.EXTRA_LARGE]: {
        fontSize: '18px',
        lineHeight: '28px',
        letterSpacing: '0.06px',
        fontWeight: 'var(--font-weight-fw-20, 550)',
    },
};

export const ICON_BUTTON_SIZE_STYLES_MAPPING: {
    [variant in ButtonSizes]: { [cssSelector: string]: any };
} = {
    [BUTTON_SIZES_ENUM.EXTRA_SMALL]: {
        height: 'var(--spacing-16px, 16px)',
        minHeight: 'var(--spacing-16px, 16px)',
        gap: 'var(--spacing-2px, 2px)',
        padding: 'var(--spacing-0px, 0px)',
        width: 'var(--spacing-16px, 16px)',
        minWidth: 'var(--spacing-16px, 16px)',
        borderRadius: 'var(--corner-radius-4px, 4px)',
    },
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
    [BUTTON_SIZES_ENUM.EXTRA_SMALL]: '16',
    [BUTTON_SIZES_ENUM.SMALL]: '24',
    [BUTTON_SIZES_ENUM.MEDIUM]: '24',
    [BUTTON_SIZES_ENUM.LARGE]: '32',
    [BUTTON_SIZES_ENUM.EXTRA_LARGE]: '40',
};
