export enum TEXT_FIELD_SIZES {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
    EXTRA_LARGE = 'extra-large',
}

export const TEXT_FIELD_SIZE_STYLE_MAPPING = {
    [TEXT_FIELD_SIZES.SMALL]: {
        padding: '4px 8px',
        fontSize: '14px',
        minHeight: '32px',
    },
    [TEXT_FIELD_SIZES.MEDIUM]: {
        padding: '8px 12px',
        fontSize: '14px',
        minHeight: '40px',
    },
    [TEXT_FIELD_SIZES.LARGE]: {
        padding: '12px 16px',
        fontSize: '16px',
        minHeight: '48px',
    },
    [TEXT_FIELD_SIZES.EXTRA_LARGE]: {
        padding: '16px',
        fontSize: '16px',
        minHeight: '56px',
    },
};
