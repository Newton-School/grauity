import React from 'react';

import {
    TYPOGRAPHY_AS_ENUM,
    TYPOGRAPHY_VARIANT_AS_MAPPING,
} from './constants';
import { TypographyProps } from './types';
import { StyledTypography } from './Typography.styles';

/**
 * A typography component can be used to display text in different styles.
 *
 * Use the prop `variant` to select the style of the text.
 *
 * By default, prop `as` is set to `'auto'`, and the component will automatically
 * select the HTML tag based on the prop `variant`.

 * If you want the text to be rendered as a different HTML tag, provide your desired 
 * value to prop `as`, such as `'h1'`, `'h2'`, `'p'`, etc.
 */
const Typography = ({
    variant = 'paragraph-medium-body1',
    as = 'auto',
    color = 'var(--text-primary, #16191d)',
    textAlign = null,
    textTransform = null,
    fontSize = null,
    children = '',
}: TypographyProps) => {
    const asType =
        as === TYPOGRAPHY_AS_ENUM.AUTO
            ? TYPOGRAPHY_VARIANT_AS_MAPPING[variant]
            : as;
    return (
        <StyledTypography
            variant={variant}
            as={asType}
            color={color}
            textAlign={textAlign}
            textTransform={textTransform}
            fontSize={fontSize}
        >
            {children}
        </StyledTypography>
    );
};

export default Typography;
