import * as React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classnames from 'classnames';

import {
    getElementTypeFromProps,
    useKeyOnly,
    useValueAndKey,
} from '../../helpers';
import {
    GRAUITY_ICON_COLORS,
    GRAUITY_ICON_FLIPPED_CHOICES,
    GRAUITY_ICON_ROTATED_CHOICES,
    GRAUITY_ICON_SIZES,
    grauityFlippedChoiceName,
    grauityIconColorName,
    grauityIconName,
    grauityIconSizeName,
    grauityRotatedChoiceName,
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
    size,
    style,
    ...props
}: IconProps) {
    const Element = getElementTypeFromProps({ as });

    const getIconAriaOptions = () => {
        const ariaOptions: {
            'aria-hidden'?: string;
            'aria-label'?: string;
        } = {};

        if (_.isNil(ariaLabel)) {
            ariaOptions['aria-hidden'] = 'true';
        } else {
            ariaOptions['aria-label'] = ariaLabel;
        }

        if (!_.isNil(ariaHidden)) {
            ariaOptions['aria-hidden'] = ariaHidden;
        }

        return ariaOptions;
    };

    const handleClick = (e?: any) => {
        if (disabled) {
            e.preventDefault();
            return;
        }

        _.invoke(props, 'onClick', e, props);
    };

    const ariaOptions = getIconAriaOptions();

    const classes = classnames(
        'grauity-icon',
        `grauity-icon-${name}`,
        `size-${size}`,
        useKeyOnly(color, color),
        useKeyOnly(bordered, 'bordered'),
        useKeyOnly(circular, 'circular'),
        useKeyOnly(disabled, 'disabled'),
        useKeyOnly(fitted, 'fitted'),
        useKeyOnly(inverted, 'inverted'),
        useKeyOnly(link, 'link'),
        useKeyOnly(loading, 'loading'),
        useValueAndKey(flipped, 'flipped'),
        useValueAndKey(rotated, 'rotated'),
        className
    );

    return (
        <Element
            onClick={handleClick}
            {...ariaOptions}
            className={classes}
            style={style}
        />
    );
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
    flipped: PropTypes.oneOf(GRAUITY_ICON_FLIPPED_CHOICES),
    inverted: PropTypes.bool,
    link: PropTypes.bool,
    loading: PropTypes.bool,
    name: PropTypes.oneOf(Object.keys(ICON_TAGS)).isRequired,
    rotated: PropTypes.oneOf(GRAUITY_ICON_ROTATED_CHOICES),
    size: PropTypes.oneOf(GRAUITY_ICON_SIZES),
    style: PropTypes.object,
};

Icon.defaultProps = {
    ariaHidden: 'true',
    ariaLabel: undefined,
    as: 'i',
    bordered: false,
    circular: false,
    color: 'grey',
    className: undefined,
    disabled: false,
    fitted: false,
    flipped: undefined,
    inverted: false,
    link: false,
    loading: false,
    rotated: undefined,
    size: '16',
    style: undefined,
};

export default Icon;
