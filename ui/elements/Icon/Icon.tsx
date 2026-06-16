import classnames from 'classnames';
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

        if (ariaLabel == null) {
            ariaOptions['aria-hidden'] = 'true';
        } else {
            ariaOptions['aria-label'] = ariaLabel;
        }

        if (ariaHidden != null) {
            ariaOptions['aria-hidden'] = ariaHidden;
        }

        return ariaOptions;
    };

    const handleClick = (e?: any) => {
        if (disabled) {
            e.preventDefault();
            return;
        }

        // Faithful inline of lodash `invoke(props, 'onClick', e, props)`:
        // call props.onClick (if present) as a method on `props` so `this`
        // stays bound to props, matching lodash's apply(object, args).
        (props as { onClick?: (...args: any[]) => void }).onClick?.(e, props);
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
