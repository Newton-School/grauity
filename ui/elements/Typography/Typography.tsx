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
 * `gra.UI.ty Typography`: A typography component that can be used to display text in different styles.
 *
 * Use the `variant` prop to select the style of the text.
 *
 * If you want to use a different HTML tag for the text, use the `as` prop.
 *
 * If `as` is set to `auto`, the component will automatically select the HTML tag based on the `variant` prop.
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
    as: 'h1',
    color: 'var(--text-primary, #16191d)',
    textAlign: null,
    textTransform: null,
    fontSize: null,
    children: 'Enter the text here',
};

export default Typography;
