export enum TAB_LIST_VARIANT_ENUM {
    BORDER = 'border',
    ROUNDED = 'rounded',
}

export const TAB_LIST_VARIANT_STYLES_MAPPING: {
    [key in TAB_LIST_VARIANT_ENUM]: { [cssSelector: string]: any };
} = {
    [TAB_LIST_VARIANT_ENUM.BORDER]: {
        borderBottom: '1px solid var(--border-subtle-primary-default, #e0e3e8)',
    },
    [TAB_LIST_VARIANT_ENUM.ROUNDED]: {
        padding: 'var(--spacing-sp-3, 4px)',
        background: 'var(--bg-subtle-tertiary-default, #EDEFF3)',
        borderRadius: 'var(--corner-radius-cr-4, 8px)',
    },
};
