import PropTypes from 'prop-types';
import React from 'react';

import {
    TYPOGRAPHY_AS_ENUM,
    TYPOGRAPHY_VARIANT_AS_MAPPING,
    TYPOGRAPHY_VARIANTS,
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
 * 
 * @component
 */
const Typography = ({
    variant,
    as,
    color,
    textAlign,
    textTransform,
    fontSize,
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

Typography.propTypes = {
    variant: PropTypes.oneOf(TYPOGRAPHY_VARIANTS),
    as: PropTypes.string,
    color: PropTypes.string,
    textAlign: PropTypes.string,
    textTransform: PropTypes.string,
    fontSize: PropTypes.string,
    children: PropTypes.any,
};

Typography.defaultProps = {
    variant: 'heading-semibold-h40',
    as: 'auto',
    color: 'var(--text-primary, #16191d)',
    textAlign: null,
    textTransform: null,
    fontSize: null,
    children: 'Enter the text here',
};

export default Typography;
