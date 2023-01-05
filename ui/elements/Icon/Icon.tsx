import * as React from 'react';
import PropTypes from 'prop-types';
import { guiIconName, ICON_TAGS } from '../../core';

export interface IconProps {
    ariaHidden?: string;
    ariaLabel?: string;
    as?: React.ElementType;
    bordered?: boolean;
    circular?: boolean;
    className?: string;
    disabled?: boolean;
    fitted?: boolean;
    flipped?: 'horizontally' | 'vertically';
    inverted?: boolean;
    link?: boolean;
    loading?: boolean;
    name: guiIconName;
    rotated?: 'clockwise' | 'counterclockwise';
    style?: React.CSSProperties;
}

function Icon({
    ariaHidden,
    ariaLabel,
    as,
    bordered,
    circular,
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
    return <div />;
}

Icon.propTypes = {
    /** Icon can have an aria label. */
    ariaHidden: PropTypes.string,

    /** Icon can have an aria label. */
    ariaLabel: PropTypes.string,

    /** An element type to render as (string or function). */
    as: PropTypes.elementType,

    /** Formatted to appear bordered. */
    bordered: PropTypes.bool,

    /** Icon can format to appear circular. */
    circular: PropTypes.bool,

    /** Additional classes. */
    className: PropTypes.string,

    /** Show that the icon is inactive. */
    disabled: PropTypes.bool,

    /** Fitted, without space to left or right of Icon. */
    fitted: PropTypes.bool,

    /** Icon can be flipped. */
    flipped: PropTypes.oneOf(['horizontally', 'vertically']),

    /** Formatted to have its colors inverted for contrast. */
    inverted: PropTypes.bool,

    /** Icon can be formatted as a link. */
    link: PropTypes.bool,

    /** Icon can be used as a simple loader. */
    loading: PropTypes.bool,

    /** Name of the icon */
    name: PropTypes.oneOf(Object.keys(ICON_TAGS)).isRequired,

    /** Icon can rotate. */
    rotated: PropTypes.oneOf(['clockwise', 'counterclockwise']),

    /** Additional styles */
    style: PropTypes.object,
};

Icon.defaultProps = {
    ariaHidden: 'true',
    ariaLabel: undefined,
    as: 'i',
    bordered: false,
    circular: false,
    className: undefined,
    disabled: false,
    fitted: false,
    flipped: undefined,
    inverted: false,
    link: false,
    loading: false,
    rotated: undefined,
    style: undefined,
};

export default Icon;
