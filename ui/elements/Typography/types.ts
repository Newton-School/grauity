import React from 'react';

export type TypographyAsType =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p'
    | 'span'
    | 'div'
    | 'label'
    | 'caption'
    | 'code'
    | 'auto';

export type TypographyVariantType =
    // <h1> through <h6>
    | 'heading-semibold-h40'
    | 'heading-semibold-h36'
    | 'heading-semibold-h28'
    | 'heading-semibold-h24'
    | 'heading-semibold-h20'
    | 'heading-semibold-h16'

    // <p>
    | 'paragraph-semibold-body1'
    | 'paragraph-semibold-body2'
    | 'paragraph-semibold-body3'
    | 'paragraph-semibold-body4'
    | 'paragraph-semibold-label'
    | 'paragraph-semibold-label2'
    | 'paragraph-semibold-callout'

    // <p>
    | 'paragraph-medium-body1'
    | 'paragraph-medium-body2'
    | 'paragraph-medium-body3'
    | 'paragraph-medium-body4'

    // <label>
    | 'paragraph-medium-label'
    | 'paragraph-medium-label2'
    | 'paragraph-medium-callout'

    // <code>
    | 'paragraph-medium-code'

    // <h6>
    | 'heading-semibold-overline1'
    | 'heading-semibold-overline2'

    // <span>
    | 'action-semibold-primary'
    | 'action-semibold-link'

    // <p>
    | 'blog-semibold-title'
    | 'blog-medium-regular'
    | 'blog-medium-bold'
    | 'blog-medium-italic';

export interface StyledTypographyInterface {
    variant?: TypographyVariantType;
    as?: TypographyAsType;
    color?: string;
    textAlign?: string;
    textTransform?: string;
    fontSize?: string;
    children: React.ReactNode;
}

export interface TypographyProps {
    /**
     * Variant of the Typography element
     *
     * Available choices:
     *
     * Default: `paragraph-medium-body1`
     * */
    variant?: TypographyVariantType;

    /**
     * Color of the Typography element
     * */
    color?: string;

    /**
     * Determines the type of the element rendered
     * Available choices:
     *
     * Default: `auto` (automatically selects the HTML tag based on the variant)
     * */
    as?: TypographyAsType;

    /**
     * Text alignment of the Typography element
     * */
    textAlign?: string;

    /**
     * Text transformation of the Typography element
     * */
    textTransform?: string;

    /**
     * Font size of the Typography element
     * */
    fontSize?: string;

    /**
     * Children of the component
     * */
    children: React.ReactNode;
}
