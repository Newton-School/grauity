import { grauityIconSizeName } from 'ui/core';

import { TypographyVariantType } from '../Typography/types';
import { PILL_SIZES_ENUM } from './types';

export const PILL_SIZE_CSS_STYLES_MAPPING = {
    [PILL_SIZES_ENUM.SMALL]: {
        padding: '5px 8px',
    },
    [PILL_SIZES_ENUM.MEDIUM]: {
        padding: '5px 8px',
    },
    [PILL_SIZES_ENUM.LARGE]: {
        padding: '5px 12px',
    },
};

export const PILL_SIZE_STYLES_MAPPING: Record<
    PILL_SIZES_ENUM,
    {
        typographyVariant: TypographyVariantType;
        iconSize: grauityIconSizeName;
        countIndicatorHeight: string;
    }
> = {
    [PILL_SIZES_ENUM.SMALL]: {
        typographyVariant: 'paragraph-md-p4',
        iconSize: '16',
        countIndicatorHeight: '18px',
    },
    [PILL_SIZES_ENUM.MEDIUM]: {
        typographyVariant: 'paragraph-md-p3',
        iconSize: '20',
        countIndicatorHeight: '20px',
    },
    [PILL_SIZES_ENUM.LARGE]: {
        typographyVariant: 'paragraph-md-p2',
        iconSize: '24',
        countIndicatorHeight: '22px',
    },
};
