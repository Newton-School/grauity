import classnames from 'classnames';
import _ from 'lodash';
import PropTypes from 'prop-types';
import * as React from 'react';

import {
    GRAUITY_ICON_FLIPPED_CHOICES,
    GRAUITY_ICON_ROTATED_CHOICES,
    GRAUITY_ICON_SIZES,
    ICON_TAGS,
} from '../../core';
import {
    getElementTypeFromProps,
    useKeyOnly,
    useValueAndKey,
} from '../../helpers';
import {
    IconProps,
} from './types';

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
    color: PropTypes.string,
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
