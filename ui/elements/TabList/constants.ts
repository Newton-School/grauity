import { TAB_VARIANT_ENUM } from '../Tab/constants';

export const TAB_LIST_VARIANT_STYLES_MAPPING: {
    [key in TAB_VARIANT_ENUM]: { [cssSelector: string]: any };
} = {
    [TAB_VARIANT_ENUM.BORDER]: {},
    [TAB_VARIANT_ENUM.ROUNDED]: {
        padding: 'var(--spacing-sp-3, 4px)',
        background: 'var(--bg-subtle-tertiary-default, #EDEFF3)',
        borderRadius: 'var(--corner-radius-cr-4, 8px)',
    },
};
