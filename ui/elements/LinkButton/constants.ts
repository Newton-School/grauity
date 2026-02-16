import { css } from 'styled-components';

import { LinkButtonSize } from './types';

export enum LINK_BUTTON_SIZES_ENUM {
    SMALL = 'small',
    LARGE = 'large',
}

export const LINK_BUTTON_SIZES: LinkButtonSize[] = [
    LINK_BUTTON_SIZES_ENUM.SMALL,
    LINK_BUTTON_SIZES_ENUM.LARGE,
];

export const LINK_BUTTON_SIZE_STYLES_MAPPING = {
    [LINK_BUTTON_SIZES_ENUM.SMALL]: css`
        min-height: var(--line-height-lh-50, 22px);
        height: var(--line-height-lh-50, 22px);
    `,
    [LINK_BUTTON_SIZES_ENUM.LARGE]: css`
        min-height: var(--line-height-lh-70, 26px);
        height: var(--line-height-lh-70, 26px);
    `,
} as Record<LinkButtonSize, ReturnType<typeof css>>;

export const LINK_BUTTON_CONTENT_STYLES_MAPPING = {
    [LINK_BUTTON_SIZES_ENUM.SMALL]: css`
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-50, 22px);
        letter-spacing: var(--letter-spacing-ls-50, 0.4px);
    `,
    [LINK_BUTTON_SIZES_ENUM.LARGE]: css`
        font-size: var(--font-size-fs-30, 16px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-70, 26px);
        letter-spacing: var(--letter-spacing-ls-20, 0.06px);
    `,
} as Record<LinkButtonSize, ReturnType<typeof css>>;
