import React from 'react';
import {
    grauityFlippedChoiceName,
    grauityIconColorName,
    grauityIconName,
    grauityIconSizeName,
    grauityRotatedChoiceName,
} from 'ui/core';

interface IconProps {
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
    color?: grauityIconColorName;

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
    flipped?: grauityFlippedChoiceName;

    /**
     * The colors of the icon can be inverted in case of used with border
     * * */
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
    rotated?: grauityRotatedChoiceName;

    /**
     * Size of the icon
     * */
    size?: grauityIconSizeName;

    /**
     * Additional styles to be used over the element
     * */
    style?: React.CSSProperties;
}

export { IconProps };
