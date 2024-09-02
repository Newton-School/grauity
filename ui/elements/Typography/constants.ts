import { TypographyAsType, TypographyVariantType } from './types';

export const TYPOGRAPHY_VARIANTS_ENUM: { [x: string]: TypographyVariantType } =
    {
        HEADING_SEMIBOLD_H40: 'heading-semibold-h40',
        HEADING_SEMIBOLD_H36: 'heading-semibold-h36',
        HEADING_SEMIBOLD_H28: 'heading-semibold-h28',
        HEADING_SEMIBOLD_H24: 'heading-semibold-h24',
        HEADING_SEMIBOLD_H20: 'heading-semibold-h20',
        HEADING_SEMIBOLD_H16: 'heading-semibold-h16',

        PARAGRAPH_SEMIBOLD_BODY1: 'paragraph-semibold-body1',
        PARAGRAPH_SEMIBOLD_BODY2: 'paragraph-semibold-body2',
        PARAGRAPH_SEMIBOLD_BODY3: 'paragraph-semibold-body3',
        PARAGRAPH_SEMIBOLD_BODY4: 'paragraph-semibold-body4',
        PARAGRAPH_SEMIBOLD_LABEL: 'paragraph-semibold-label',
        PARAGRAPH_SEMIBOLD_LABEL2: 'paragraph-semibold-label2',
        PARAGRAPH_SEMIBOLD_CALLOUT: 'paragraph-semibold-callout',

        PARAGRAPH_MEDIUM_BODY1: 'paragraph-medium-body1',
        PARAGRAPH_MEDIUM_BODY2: 'paragraph-medium-body2',
        PARAGRAPH_MEDIUM_BODY3: 'paragraph-medium-body3',
        PARAGRAPH_MEDIUM_BODY4: 'paragraph-medium-body4',

        PARAGRAPH_MEDIUM_LABEL: 'paragraph-medium-label',
        PARAGRAPH_MEDIUM_LABEL2: 'paragraph-medium-label2',
        PARAGRAPH_MEDIUM_CALLOUT: 'paragraph-medium-callout',

        PARAGRAPH_MEDIUM_CODE: 'paragraph-medium-code',

        HEADING_SEMIBOLD_OVERLINE1: 'heading-semibold-overline1',
        HEADING_SEMIBOLD_OVERLINE2: 'heading-semibold-overline2',

        ACTION_SEMIBOLD_PRIMARY: 'action-semibold-primary',
        ACTION_SEMIBOLD_LINK: 'action-semibold-link',

        BLOG_SEMIBOLD_TITLE: 'blog-semibold-title',
        BLOG_MEDIUM_REGULAR: 'blog-medium-regular',
        BLOG_MEDIUM_BOLD: 'blog-medium-bold',
        BLOG_MEDIUM_ITALIC: 'blog-medium-italic',
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
    [TYPOGRAPHY_VARIANTS_ENUM.HEADING_SEMIBOLD_H40]: `
        font-size: var(--font-size-40px, 40px);
        font-weight: var(--font-weight-semibold, 600);
        line-height: 120%;
    `,
    [TYPOGRAPHY_VARIANTS_ENUM.HEADING_SEMIBOLD_H36]: `
        font-size: var(--font-size-36px, 36px);
        font-weight: var(--font-weight-semibold, 600);
        line-height: 120%;
    `,
    [TYPOGRAPHY_VARIANTS_ENUM.HEADING_SEMIBOLD_H28]: `
        font-size: var(--font-size-28px, 28px);
        font-weight: var(--font-weight-semibold, 600);
        line-height: 120%;
    `,
    [TYPOGRAPHY_VARIANTS_ENUM.HEADING_SEMIBOLD_H24]: `
        font-size: var(--font-size-24px, 24px);
        font-weight: var(--font-weight-semibold, 600);
        line-height: 120%;
    `,
    [TYPOGRAPHY_VARIANTS_ENUM.HEADING_SEMIBOLD_H20]: `
        font-size: var(--font-size-20px, 20px);
        font-weight: var(--font-weight-semibold, 600);
        line-height: 120%;
        letter-spacing: 0.25px;
    `,
    [TYPOGRAPHY_VARIANTS_ENUM.HEADING_SEMIBOLD_H16]: `
        font-size: var(--font-size-16px, 16px);
        font-weight: var(--font-weight-semibold, 600);
        line-height: 120%;
        letter-spacing: 0.25px;
    `,
    [TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_SEMIBOLD_BODY1]: `
        font-size: var(--font-size-18px, 18px);
        font-weight: var(--font-weight-semibold, 600);
        line-height: 160%;
        letter-spacing: 0.1px;
    `,
    [TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_SEMIBOLD_BODY2]: `
        font-size: var(--font-size-16px, 16px);
        font-weight: var(--font-weight-semibold, 600);
        line-height: 160%;
        letter-spacing: 0.1px;
    `,
    [TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_SEMIBOLD_BODY3]: `
        font-size: var(--font-size-14px, 14px);
        font-weight: var(--font-weight-semibold, 600);
        line-height: 160%;
        letter-spacing: 0.1px;
    `,
    [TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_SEMIBOLD_BODY4]: `
        font-size: var(--font-size-12px, 12px);
        font-weight: var(--font-weight-semibold, 600);
        line-height: 160%;
        letter-spacing: 0.1px;
    `,
    [TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_SEMIBOLD_LABEL]: `
        font-size: var(--font-size-14px, 14px);
        font-weight: var(--font-weight-semibold, 600);
        line-height: 120%;
        letter-spacing: 0.5px;
    `,
    [TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_SEMIBOLD_LABEL2]: `
        font-size: var(--font-size-12px, 12px);
        font-weight: var(--font-weight-semibold, 600);
        line-height: 120%;
        letter-spacing: 0.4px;
    `,
    [TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_SEMIBOLD_CALLOUT]: `
        font-size: var(--font-size-14px, 14px);
        font-weight: var(--font-weight-semibold, 600);
        line-height: 120%;
        letter-spacing: 0.15px;
    `,
    [TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_MEDIUM_BODY1]: `
        font-size: var(--font-size-18px, 18px);
        font-weight: var(--font-weight-medium, 500);
        line-height: 160%;
        letter-spacing: 0.1px;
    `,
    [TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_MEDIUM_BODY2]: `
        font-size: var(--font-size-16px, 16px);
        font-weight: var(--font-weight-medium, 500);
        line-height: 160%;
        letter-spacing: 0.1px;
    `,
    [TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_MEDIUM_BODY3]: `
        font-size: var(--font-size-14px, 14px);
        font-weight: var(--font-weight-medium, 500);
        line-height: 160%;
        letter-spacing: 0.1px;
    `,
    [TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_MEDIUM_BODY4]: `
        font-size: var(--font-size-12px, 12px);
        font-weight: var(--font-weight-medium, 500);
        line-height: 160%;
        letter-spacing: 0.1px;
    `,
    [TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_MEDIUM_LABEL]: `
        font-size: var(--font-size-14px, 14px);
        font-weight: var(--font-weight-medium, 500);
        line-height: 120%;
        letter-spacing: 0.5px;
    `,
    [TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_MEDIUM_LABEL2]: `
        font-size: var(--font-size-12px, 12px);
        font-weight: var(--font-weight-medium, 500);
        line-height: 120%;
        letter-spacing: 0.4px;
    `,
    [TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_MEDIUM_CALLOUT]: `
        font-size: var(--font-size-14px, 14px);
        font-weight: var(--font-weight-medium, 500);
        line-height: 120%;
        letter-spacing: 0.15px;
    `,
    [TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_MEDIUM_CODE]: `
        font-family: var(--font-family-code, 'Fira Code');
        font-size: var(--font-size-14px, 14px);
        font-weight: var(--font-weight-medium, 500);
        line-height: 16px;
    `,
    [TYPOGRAPHY_VARIANTS_ENUM.HEADING_SEMIBOLD_OVERLINE1]: `
        font-size: var(--font-size-14px, 14px);
        font-weight: var(--font-weight-650, 650);
        line-height: 120%;
        letter-spacing: 1.6px;
        text-transform: uppercase;
    `,
    [TYPOGRAPHY_VARIANTS_ENUM.HEADING_SEMIBOLD_OVERLINE2]: `
        font-size: var(--font-size-11px, 11px);
        font-weight: var(--font-weight-650, 650);
        line-height: 120%;
        letter-spacing: 2px;
        text-transform: uppercase;
    `,
    [TYPOGRAPHY_VARIANTS_ENUM.ACTION_SEMIBOLD_PRIMARY]: `
        font-size: var(--font-size-14px, 14px);
        font-weight: var(--font-weight-semibold, 600);
        line-height: 160%;
        letter-spacing: 0.4px;
    `,
    [TYPOGRAPHY_VARIANTS_ENUM.ACTION_SEMIBOLD_LINK]: `
        font-size: var(--font-size-14px, 14px);
        font-weight: var(--font-weight-semibold, 600);
        line-height: 120%;
        letter-spacing: 2px;
        text-decoration: underline;
    `,
    [TYPOGRAPHY_VARIANTS_ENUM.BLOG_SEMIBOLD_TITLE]: `
        font-size: var(--font-size-48px, 48px);
        font-weight: var(--font-weight-semibold, 600);
        line-height: 120%;
        letter-spacing: 0.4px;
    `,
    [TYPOGRAPHY_VARIANTS_ENUM.BLOG_MEDIUM_REGULAR]: `
        font-size: var(--font-size-18px, 18px);
        font-weight: var(--font-weight-medium, 500);
        line-height: 32px;
        letter-spacing: 0.2px;
    `,
    [TYPOGRAPHY_VARIANTS_ENUM.BLOG_MEDIUM_BOLD]: `
        font-size: var(--font-size-18px, 18px);
        font-weight: var(--font-weight-semibold, 600);
        line-height: 32px;
        letter-spacing: 0.2px;
    `,
    [TYPOGRAPHY_VARIANTS_ENUM.BLOG_MEDIUM_ITALIC]: `
        font-size: var(--font-size-18px, 18px);
        font-weight: var(--font-weight-medium, 500);
        line-height: 32px;
        letter-spacing: 0.2px;
        font-style: italic;
    `,
};

/**
 * Mapping of typography `variant` to `as` type, will be useful when Typography `as` is set to `auto`.
 */
export const TYPOGRAPHY_VARIANT_AS_MAPPING = {
    [TYPOGRAPHY_VARIANTS_ENUM.HEADING_SEMIBOLD_H40]: TYPOGRAPHY_AS_ENUM.H1,
    [TYPOGRAPHY_VARIANTS_ENUM.HEADING_SEMIBOLD_H36]: TYPOGRAPHY_AS_ENUM.H2,
    [TYPOGRAPHY_VARIANTS_ENUM.HEADING_SEMIBOLD_H28]: TYPOGRAPHY_AS_ENUM.H3,
    [TYPOGRAPHY_VARIANTS_ENUM.HEADING_SEMIBOLD_H24]: TYPOGRAPHY_AS_ENUM.H4,
    [TYPOGRAPHY_VARIANTS_ENUM.HEADING_SEMIBOLD_H20]: TYPOGRAPHY_AS_ENUM.H5,
    [TYPOGRAPHY_VARIANTS_ENUM.HEADING_SEMIBOLD_H16]: TYPOGRAPHY_AS_ENUM.H6,

    [TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_SEMIBOLD_BODY1]: TYPOGRAPHY_AS_ENUM.P,
    [TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_SEMIBOLD_BODY2]: TYPOGRAPHY_AS_ENUM.P,
    [TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_SEMIBOLD_BODY3]: TYPOGRAPHY_AS_ENUM.P,
    [TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_SEMIBOLD_BODY4]: TYPOGRAPHY_AS_ENUM.P,
    [TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_SEMIBOLD_LABEL]:
        TYPOGRAPHY_AS_ENUM.LABEL,
    [TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_SEMIBOLD_LABEL2]:
        TYPOGRAPHY_AS_ENUM.LABEL,
    [TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_SEMIBOLD_CALLOUT]: TYPOGRAPHY_AS_ENUM.P,

    [TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_MEDIUM_BODY1]: TYPOGRAPHY_AS_ENUM.P,
    [TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_MEDIUM_BODY2]: TYPOGRAPHY_AS_ENUM.P,
    [TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_MEDIUM_BODY3]: TYPOGRAPHY_AS_ENUM.P,
    [TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_MEDIUM_BODY4]: TYPOGRAPHY_AS_ENUM.P,

    [TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_MEDIUM_LABEL]: TYPOGRAPHY_AS_ENUM.LABEL,
    [TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_MEDIUM_LABEL2]:
        TYPOGRAPHY_AS_ENUM.LABEL,
    [TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_MEDIUM_CALLOUT]: TYPOGRAPHY_AS_ENUM.P,

    [TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_MEDIUM_CODE]: TYPOGRAPHY_AS_ENUM.CODE,

    [TYPOGRAPHY_VARIANTS_ENUM.HEADING_SEMIBOLD_OVERLINE1]:
        TYPOGRAPHY_AS_ENUM.H6,
    [TYPOGRAPHY_VARIANTS_ENUM.HEADING_SEMIBOLD_OVERLINE2]:
        TYPOGRAPHY_AS_ENUM.H6,

    [TYPOGRAPHY_VARIANTS_ENUM.ACTION_SEMIBOLD_PRIMARY]: TYPOGRAPHY_AS_ENUM.SPAN,
    [TYPOGRAPHY_VARIANTS_ENUM.ACTION_SEMIBOLD_LINK]: TYPOGRAPHY_AS_ENUM.SPAN,

    [TYPOGRAPHY_VARIANTS_ENUM.BLOG_SEMIBOLD_TITLE]: TYPOGRAPHY_AS_ENUM.H1,
    [TYPOGRAPHY_VARIANTS_ENUM.BLOG_MEDIUM_REGULAR]: TYPOGRAPHY_AS_ENUM.P,
    [TYPOGRAPHY_VARIANTS_ENUM.BLOG_MEDIUM_BOLD]: TYPOGRAPHY_AS_ENUM.P,
    [TYPOGRAPHY_VARIANTS_ENUM.BLOG_MEDIUM_ITALIC]: TYPOGRAPHY_AS_ENUM.P,
};
