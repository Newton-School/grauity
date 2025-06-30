import { css } from 'styled-components';

import { TypographyAsType, TypographyVariantType } from './types';

export const TYPOGRAPHY_VARIANTS_ENUM: { [x: string]: TypographyVariantType } =
    {
        // Display
        DISPLAY_BD_D1: 'display-bd-d1',
        DISPLAY_BD_D2: 'display-bd-d2',
        DISPLAY_BD_D3: 'display-bd-d3',
        // Heading
        HEADING_SB_H1: 'heading-sb-h1',
        HEADING_SB_H2: 'heading-sb-h2',
        HEADING_SB_H3: 'heading-sb-h3',
        HEADING_SB_H4: 'heading-sb-h4',
        HEADING_SB_H5: 'heading-sb-h5',
        HEADING_SB_H6: 'heading-sb-h6',
        // Pragraph Semibold
        PARAGRAPH_SB_P1: 'paragraph-sb-p1',
        PARAGRAPH_SB_P2: 'paragraph-sb-p2',
        PARAGRAPH_SB_P3: 'paragraph-sb-p3',
        PARAGRAPH_SB_P4: 'paragraph-sb-p4',
        PARAGRAPH_SB_L1: 'paragraph-sb-l1',
        PARAGRAPH_SB_L2: 'paragraph-sb-l2',
        // Paragraph Medium
        PARAGRAPH_MD_P1: 'paragraph-md-p1',
        PARAGRAPH_MD_P2: 'paragraph-md-p2',
        PARAGRAPH_MD_P3: 'paragraph-md-p3',
        PARAGRAPH_MD_P4: 'paragraph-md-p4',
        PARAGRAPH_MD_C1: 'paragraph-md-c1',
        PARAGRAPH_MD_L1: 'paragraph-md-l1',
        PARAGRAPH_MD_L2: 'paragraph-md-l2',
        // Overline
        OVERLINE_SB_OL1: 'overline-sb-ol1',
        OVERLINE_SB_OL2: 'overline-sb-ol2',
        // Action
        ACTION_SB_P1: 'action-sb-p1',
        ACTION_SB_P2: 'action-sb-p2',
        ACTION_SB_LK1: 'action-sb-lk1',
    };

export const TYPOGRAPHY_VARIANTS = Object.freeze(
    Object.values(TYPOGRAPHY_VARIANTS_ENUM)
);

export const TYPOGRAPHY_AS_ENUM: { [x: string]: TypographyAsType } = {
    H1: 'h1',
    H2: 'h2',
    H3: 'h3',
    H4: 'h4',
    H5: 'h5',
    H6: 'h6',
    P: 'p',
    SPAN: 'span',
    DIV: 'div',
    LABEL: 'label',
    CAPTION: 'caption',
    CODE: 'code',
    AUTO: 'auto',
};

export const TYPOGRAPHY_AS_LIST = Object.freeze(
    Object.values(TYPOGRAPHY_AS_ENUM)
);

/**
 * Mapping of Typography `variant` to CSS styles.
 */
export const TYPOGRAPHY_VARIANT_STYLES_MAPPING = {
    // Display
    [TYPOGRAPHY_VARIANTS_ENUM.DISPLAY_BD_D1]: css`
        font-size: var(--font-size-fs-120, 76px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-140, 92px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,
    [TYPOGRAPHY_VARIANTS_ENUM.DISPLAY_BD_D2]: css`
        font-size: var(--font-size-fs-110, 64px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-130, 76px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,
    [TYPOGRAPHY_VARIANTS_ENUM.DISPLAY_BD_D3]: css`
        font-size: var(--font-size-fs-100, 52px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-120, 64px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,
    // Heading
    [TYPOGRAPHY_VARIANTS_ENUM.HEADING_SB_H1]: css`
        font-size: var(--font-size-fs-90, 40px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-110, 48px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,
    [TYPOGRAPHY_VARIANTS_ENUM.HEADING_SB_H2]: css`
        font-size: var(--font-size-fs-80, 36px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-100, 42px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,
    [TYPOGRAPHY_VARIANTS_ENUM.HEADING_SB_H3]: css`
        font-size: var(--font-size-fs-70, 28px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-90, 32px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,
    [TYPOGRAPHY_VARIANTS_ENUM.HEADING_SB_H4]: css`
        font-size: var(--font-size-fs-60, 24px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-80, 28px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,
    [TYPOGRAPHY_VARIANTS_ENUM.HEADING_SB_H5]: css`
        font-size: var(--font-size-fs-50, 20px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-60, 24px);
        letter-spacing: var(--letter-spacing-ls-30, 0.1px);
    `,
    [TYPOGRAPHY_VARIANTS_ENUM.HEADING_SB_H6]: css`
        font-size: var(--font-size-fs-30, 16px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-40, 20px);
        letter-spacing: var(--letter-spacing-ls-30, 0.1px);
    `,
    // Pragraph Semibold
    [TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_SB_P1]: css`
        font-size: var(--font-size-fs-40, 18px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-80, 28px);
        letter-spacing: var(--letter-spacing-ls-20, 0.06px);
    `,
    [TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_SB_P2]: css`
        font-size: var(--font-size-fs-30, 16px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-70, 26px);
        letter-spacing: var(--letter-spacing-ls-20, 0.06px);
    `,
    [TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_SB_P3]: css`
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-50, 22px);
        letter-spacing: var(--letter-spacing-ls-10, 0.016px);
    `,
    [TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_SB_P4]: css`
        font-size: var(--font-size-fs-10, 12px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-30, 18px);
        letter-spacing: var(--letter-spacing-ls-20, 0.06px);
    `,
    [TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_SB_L1]: css`
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-20, 16px);
        letter-spacing: var(--letter-spacing-ls-50, 0.4px);
    `,
    [TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_SB_L2]: css`
        font-size: var(--font-size-fs-10, 12px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-10, 14px);
        letter-spacing: var(--letter-spacing-ls-40, 0.25px);
    `,
    // Paragraph Medium
    [TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_MD_P1]: css`
        font-size: var(--font-size-fs-10, 12px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-10, 14px);
        letter-spacing: var(--letter-spacing-ls-40, 0.25px);
    `,
    [TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_MD_P2]: css`
        font-size: var(--font-size-fs-30, 16px);
        font-weight: var(--font-weight-fw-10, 450);
        line-height: var(--line-height-lh-70, 26px);
        letter-spacing: var(--letter-spacing-ls-30, 0.1px);
    `,
    [TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_MD_P3]: css`
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-10, 450);
        line-height: var(--line-height-lh-50, 22px);
        letter-spacing: var(--letter-spacing-ls-30, 0.1px);
    `,
    [TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_MD_P4]: css`
        font-size: var(--font-size-fs-10, 12px);
        font-weight: var(--font-weight-fw-10, 450);
        line-height: var(--line-height-lh-30, 18px);
        letter-spacing: var(--letter-spacing-ls-30, 0.1px);
    `,
    [TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_MD_C1]: css`
        font-family: 'Fira Code';
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-00, 450);
        line-height: var(--line-height-lh-40, 20px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,
    [TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_MD_L1]: css`
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-10, 450);
        line-height: var(--line-height-lh-20, 16px);
        letter-spacing: var(--letter-spacing-ls-60, 0.5px);
    `,
    [TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_MD_L2]: css`
        font-size: var(--font-size-fs-10, 12px);
        font-weight: var(--font-weight-fw-10, 450);
        line-height: var(--line-height-lh-10, 14px);
        letter-spacing: var(--letter-spacing-ls-50, 0.4px);
    `,
    // Overline
    [TYPOGRAPHY_VARIANTS_ENUM.OVERLINE_SB_OL1]: css`
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-20, 16px);
        letter-spacing: var(--letter-spacing-ls-70, 1.6px);
        text-transform: uppercase;
    `,
    [TYPOGRAPHY_VARIANTS_ENUM.OVERLINE_SB_OL2]: css`
        font-size: var(--font-size-fs-00, 11px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-00, 12px);
        letter-spacing: var(--letter-spacing-ls-80, 2px);
        text-transform: uppercase;
    `,
    // Action
    [TYPOGRAPHY_VARIANTS_ENUM.ACTION_SB_P1]: css`
        font-size: var(--font-size-fs-30, 16px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-70, 26px);
        letter-spacing: var(--letter-spacing-ls-20, 0.06px);
    `,
    [TYPOGRAPHY_VARIANTS_ENUM.ACTION_SB_P2]: css`
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-50, 22px);
        letter-spacing: var(--letter-spacing-ls-50, 0.4px);
    `,
    [TYPOGRAPHY_VARIANTS_ENUM.ACTION_SB_LK1]: css`
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-20, 16px);
        letter-spacing: var(--letter-spacing-ls-80, 2px);
        text-transform: uppercase;
    `,
};

/**
 * Mapping of typography `variant` to `as` type, will be useful when Typography `as` is set to `auto`.
 */
export const TYPOGRAPHY_VARIANT_AS_MAPPING = {
    // Display
    [TYPOGRAPHY_VARIANTS_ENUM.DISPLAY_BD_D1]: TYPOGRAPHY_AS_ENUM.H1,
    [TYPOGRAPHY_VARIANTS_ENUM.DISPLAY_BD_D2]: TYPOGRAPHY_AS_ENUM.H2,
    [TYPOGRAPHY_VARIANTS_ENUM.DISPLAY_BD_D3]: TYPOGRAPHY_AS_ENUM.H3,
    // Heading
    [TYPOGRAPHY_VARIANTS_ENUM.HEADING_SB_H1]: TYPOGRAPHY_AS_ENUM.H1,
    [TYPOGRAPHY_VARIANTS_ENUM.HEADING_SB_H2]: TYPOGRAPHY_AS_ENUM.H2,
    [TYPOGRAPHY_VARIANTS_ENUM.HEADING_SB_H3]: TYPOGRAPHY_AS_ENUM.H3,
    [TYPOGRAPHY_VARIANTS_ENUM.HEADING_SB_H4]: TYPOGRAPHY_AS_ENUM.H4,
    [TYPOGRAPHY_VARIANTS_ENUM.HEADING_SB_H5]: TYPOGRAPHY_AS_ENUM.H5,
    [TYPOGRAPHY_VARIANTS_ENUM.HEADING_SB_H6]: TYPOGRAPHY_AS_ENUM.H6,
    // Pragraph Semibold
    [TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_SB_P1]: TYPOGRAPHY_AS_ENUM.P,
    [TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_SB_P2]: TYPOGRAPHY_AS_ENUM.P,
    [TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_SB_P3]: TYPOGRAPHY_AS_ENUM.P,
    [TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_SB_P4]: TYPOGRAPHY_AS_ENUM.P,
    [TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_SB_L1]: TYPOGRAPHY_AS_ENUM.LABEL,
    [TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_SB_L2]: TYPOGRAPHY_AS_ENUM.LABEL,
    // Paragraph Medium
    [TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_MD_P1]: TYPOGRAPHY_AS_ENUM.P,
    [TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_MD_P2]: TYPOGRAPHY_AS_ENUM.P,
    [TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_MD_P3]: TYPOGRAPHY_AS_ENUM.P,
    [TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_MD_P4]: TYPOGRAPHY_AS_ENUM.P,
    [TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_MD_C1]: TYPOGRAPHY_AS_ENUM.CODE,
    [TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_MD_L1]: TYPOGRAPHY_AS_ENUM.LABEL,
    [TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_MD_L2]: TYPOGRAPHY_AS_ENUM.LABEL,
    // Overline
    [TYPOGRAPHY_VARIANTS_ENUM.OVERLINE_SB_OL1]: TYPOGRAPHY_AS_ENUM.P,
    [TYPOGRAPHY_VARIANTS_ENUM.OVERLINE_SB_OL2]: TYPOGRAPHY_AS_ENUM.P,
    // Action
    [TYPOGRAPHY_VARIANTS_ENUM.ACTION_SB_P1]: TYPOGRAPHY_AS_ENUM.SPAN,
    [TYPOGRAPHY_VARIANTS_ENUM.ACTION_SB_P2]: TYPOGRAPHY_AS_ENUM.SPAN,
    [TYPOGRAPHY_VARIANTS_ENUM.ACTION_SB_LK1]: TYPOGRAPHY_AS_ENUM.SPAN,
};
