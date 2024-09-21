import classnames from 'classnames';
import _ from 'lodash';
import * as React from 'react';

import { useKeyOnly, useValueAndKey } from '../../helpers';
import { StyledIcon } from './Icon.styles';
import { IconProps } from './types';

/**
 * An icon is a glyph used to represent something else.
 */
function Icon({
    ariaHidden = 'true',
    ariaLabel,
    as = 'i',
    bordered = false,
    circular = false,
    color = 'grey',
    className,
    disabled = false,
    fitted = false,
    flipped,
    inverted = false,
    link = false,
    loading = false,
    name,
    rotated,
    size = '24',
    style,
    ...props
}: IconProps) {
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
        <StyledIcon
            as={as}
            name={name}
            size={size}
            onClick={handleClick}
            color={color}
            {...ariaOptions}
            className={classes}
            style={style}
            data-testid="testid-icon"
        />
    );
}

export default Icon;
