export enum TAB_SIZES_ENUM {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
    EXTRA_LARGE = 'extra-large',
}

export enum TAB_ICON_POSITIONS_ENUM {
    LEFT = 'left',
    RIGHT = 'right',
    TOP = 'top',
    BOTTOM = 'bottom',
}

export enum TAB_VARIANT_ENUM {
    BORDER = 'border',
    ROUNDED = 'rounded',
}

export const TAB_SIZE_MAPPING: {
    [key in TAB_SIZES_ENUM]: { [cssSelector: string]: any };
} = {
    [TAB_SIZES_ENUM.SMALL]: {
        padding: '5px var(--spacing-sp-7, 12px)',
        fontSize: 'var(--font-size-fs-20, 14px)',
        lineHeight: 'var(--line-height-lh-50, 22px)',
        letterSpacing: 'var(--letter-spacing-ls-10, 0.016px)',
        height: 'var(--spacing-32px, 32px)',
    },
    [TAB_SIZES_ENUM.MEDIUM]: {
        padding: '9px var(--spacing-sp-7, 12px)',
        fontSize: 'var(--font-size-fs-20, 14px)',
        lineHeight: 'var(--line-height-lh-50, 22px)',
        letterSpacing: 'var(--letter-spacing-ls-10, 0.016px)',
        height: 'var(--spacing-40px, 40px)',
    },
    [TAB_SIZES_ENUM.LARGE]: {
        padding: '11px var(--spacing-sp-9, 16px)',
        fontSize: 'var(--font-size-fs-30, 16px)',
        lineHeight: 'var(--line-height-lh-70, 26px)',
        letterSpacing: 'var(--letter-spacing-ls-20, 0.06px)',
        height: 'var(--spacing-48px, 48px)',
    },
    [TAB_SIZES_ENUM.EXTRA_LARGE]: {
        padding: '15px var(--spacing-sp-9, 16px)',
        fontSize: 'var(--font-size-fs-30, 16px)',
        lineHeight: 'var(--line-height-lh-70, 26px)',
        letterSpacing: 'var(--letter-spacing-ls-20, 0.06px)',
        height: 'var(--spacing-56px, 56px)',
    },
};

export const TAB_SIZE_STYLES_MAPPING: {
    [key in TAB_SIZES_ENUM]: { [cssSelector: string]: any };
} = {
    [TAB_SIZES_ENUM.SMALL]: {
        fontSize: 'var(--font-size-fs-20, 14px)',
        lineHeight: 'var(--line-height-lh-50, 22px)',
        letterSpacing: 'var(--letter-spacing-ls-10, 0.016px)',
    },
    [TAB_SIZES_ENUM.MEDIUM]: {
        fontSize: 'var(--font-size-fs-20, 14px)',
        lineHeight: 'var(--line-height-lh-50, 22px)',
        letterSpacing: 'var(--letter-spacing-ls-10, 0.016px)',
    },
    [TAB_SIZES_ENUM.LARGE]: {
        fontSize: 'var(--font-size-fs-30, 16px)',
        lineHeight: 'var(--line-height-lh-70, 26px)',
        letterSpacing: 'var(--letter-spacing-ls-20, 0.06px)',
    },
    [TAB_SIZES_ENUM.EXTRA_LARGE]: {
        fontSize: 'var(--font-size-fs-30, 16px)',
        lineHeight: 'var(--line-height-lh-70, 26px)',
        letterSpacing: 'var(--letter-spacing-ls-20, 0.06px)',
    },
};

export const ICON_POSITION_STYLES_MAPPING: {
    [key in TAB_ICON_POSITIONS_ENUM]: { [cssSelector: string]: any };
} = {
    [TAB_ICON_POSITIONS_ENUM.LEFT]: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    [TAB_ICON_POSITIONS_ENUM.RIGHT]: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
    },
    [TAB_ICON_POSITIONS_ENUM.TOP]: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    [TAB_ICON_POSITIONS_ENUM.BOTTOM]: {
        flexDirection: 'column-reverse',
        alignItems: 'center',
    },
};

export const TAB_VARIANT_STYLES_MAPPING: {
    [key in TAB_VARIANT_ENUM]: { [cssSelector: string]: any };
} = {
    [TAB_VARIANT_ENUM.BORDER]: {
        borderRadius: '0',
    },
    [TAB_VARIANT_ENUM.ROUNDED]: {
        borderRadius: 'var(--corner-radius-cr-3, 4px)',
        borderBottom: 'none',
    },
};
