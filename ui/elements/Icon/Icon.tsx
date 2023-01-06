import * as React from 'react';
import PropTypes from 'prop-types';

import getElementTypeFromProps from '../../helpers';
import {
    GRAUITY_COLOR,
    GRAUITY_ICON_COLORS,
    GRAUITY_ICON_SIZES,
    GRAUITY_SIZE,
    grauityIconColorName,
    grauityIconName,
    grauityIconSizeName,
    ICON_TAGS,
} from '../../core';

export interface IconProps {
    /**
     * Icon can have the aria hidden attribute
     * */
    ariaHidden?: string;

    /**
     * Icon can have the aria label attribute
     * */
    ariaLabel?: string;

    /**
     * An element type to render as (string or function).
     * */
    as?: React.ElementType;

    /**
     * Format the icon to appear bordered
     * */
    bordered?: boolean;

    /**
     * Format the icon to appear circular
     * */
    circular?: boolean;

    /**
     * Color of the icon
     * */
    color: grauityIconColorName;

    /**
     * Additional classes to be added to the component
     * */
    className?: string;

    /**
     * Show that the icon is inactive
     * */
    disabled?: boolean;

    /**
     * Fitted, without space to left or right of Icon
     * */
    fitted?: boolean;

    /**
     * Icon can be flipped
     * */
    flipped?: 'horizontally' | 'vertically';

    /**
     * Formatted to have its colors inverted for contrast
     * */
    inverted?: boolean;

    /**
     * Icon can be formatted as a link
     * */
    link?: boolean;

    /**
     * Icon can be used as a simple loader
     * */
    loading?: boolean;

    /**
     * Name of the icon
     * */
    name: grauityIconName;

    /**
     * Icon can be rotated
     * */
    rotated?: 'clockwise' | 'counterclockwise';

    /**
     * Size of the icon
     * */
    size: grauityIconSizeName;

    /**
     * Additional styles to be used over the element
     * */
    style?: React.CSSProperties;
}

function Icon({
    ariaHidden,
    ariaLabel,
    as,
    bordered,
    circular,
    color,
    className,
    disabled,
    fitted,
    flipped,
    inverted,
    link,
    loading,
    name,
    rotated,
    style,
}: IconProps) {
    const Element = getElementTypeFromProps({ as });

    return <Element />;
}

Icon.propTypes = {
    ariaHidden: PropTypes.string,
    ariaLabel: PropTypes.string,
    as: PropTypes.elementType,
    bordered: PropTypes.bool,
    circular: PropTypes.bool,
    color: PropTypes.oneOf(GRAUITY_ICON_COLORS),
    className: PropTypes.string,
    disabled: PropTypes.bool,
    fitted: PropTypes.bool,
    flipped: PropTypes.oneOf(['horizontally', 'vertically']),
    inverted: PropTypes.bool,
    link: PropTypes.bool,
    loading: PropTypes.bool,
    name: PropTypes.oneOf(Object.keys(ICON_TAGS)).isRequired,
    rotated: PropTypes.oneOf(['clockwise', 'counterclockwise']),
    size: PropTypes.oneOf(GRAUITY_ICON_SIZES),
    style: PropTypes.object,
};

Icon.defaultProps = {
    ariaHidden: 'true',
    ariaLabel: undefined,
    as: 'i',
    bordered: false,
    circular: false,
    color: GRAUITY_COLOR.GREY,
    className: undefined,
    disabled: false,
    fitted: false,
    flipped: undefined,
    inverted: false,
    link: false,
    loading: false,
    rotated: undefined,
    size: GRAUITY_SIZE.SIXTEEN,
    style: undefined,
};

export default Icon;
