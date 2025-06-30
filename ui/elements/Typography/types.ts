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
    // Display
    | 'display-bd-d1'
    | 'display-bd-d2'
    | 'display-bd-d3'

    // Heading
    | 'heading-sb-h1'
    | 'heading-sb-h2'
    | 'heading-sb-h3'
    | 'heading-sb-h4'
    | 'heading-sb-h5'
    | 'heading-sb-h6'

    // Paragraph Semibold
    | 'paragraph-sb-p1'
    | 'paragraph-sb-p2'
    | 'paragraph-sb-p3'
    | 'paragraph-sb-p4'
    | 'paragraph-sb-l1'
    | 'paragraph-sb-l2'

    // Paragraph Medium
    | 'paragraph-md-p1'
    | 'paragraph-md-p2'
    | 'paragraph-md-p3'
    | 'paragraph-md-p4'
    | 'paragraph-md-c1'
    | 'paragraph-md-l1'
    | 'paragraph-md-l2'

    // Overline
    | 'overline-sb-ol1'
    | 'overline-sb-ol2'

    // Action
    | 'action-sb-p1'
    | 'action-sb-p2'
    | 'action-sb-lk1';

export interface StyledTypographyInterface {
    variant?: TypographyVariantType;
    as?: any;
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
     * Default: 'paragraph-md-p1'
     *
     * Available choices:
     * */
    variant: TypographyVariantType;

    /**
     * Color of the Typography element
     *
     * Default: 'var(--text-emphasis-primary-default, #16191d)'
     * */
    color?: string;

    /**
     * Determines the type of the element rendered
     * Available choices:
     *
     * Default: `auto` (automatically selects the HTML tag based on the variant)
     * */
    as?: any;

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
