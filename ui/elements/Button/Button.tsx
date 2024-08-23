import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { ButtonProps } from './types';
import { StyledButton } from './Button.styles';
import {
    BUTTON_ICON_POSITIONS,
    BUTTON_ICON_POSITIONS_ENUM,
    BUTTON_SIZES,
    BUTTON_SIZES_ENUM,
    BUTTON_VARIANTS,
    BUTTON_VARIANTS_ENUM,
} from './constants';
import { Icon } from '../Icon';
import Typography from '../Typography/Typography';
import { TYPOGRAPHY_VARIANTS_ENUM } from '../Typography';

/**
 * `gra.UI.ty Button`: This button is cute as a button.
 * @component
 * @example
 * <Button variant="primary" size="medium" text="Click me" onClick={() => console.log('Button clicked')} />
 * @returns The Button component.
 */
const Button = ({
    variant,
    size,
    icon,
    iconSize,
    iconPositon,
    className,
    disabled,
    loading,
    style,
    onClick,
    fullWidth,
    isIconButton,
    children = '',
    ...props
}: ButtonProps) => {
    const handleClick = (e?: any) => {
        if (disabled) {
            e.preventDefault();
            return;
        }
        onClick(e);
    };

    const classes = classnames(className);

    return (
        <StyledButton
            onClick={handleClick}
            className={classes}
            style={style}
            loading={loading}
            disabled={disabled || loading}
            variant={variant}
            size={size}
            fullWidth={fullWidth}
            iconPositon={iconPositon}
            isIconButton={isIconButton}
        >
            {icon && !loading && (
                <Icon name={icon} color="inherit" size={iconSize || '24'} />
            )}
            {loading && (
                <Icon
                    name="load"
                    color="inherit"
                    size={iconSize || '24'}
                    loading={loading}
                />
            )}
            {children && (
                <Typography
                    variant={TYPOGRAPHY_VARIANTS_ENUM.ACTION_SEMIBOLD_PRIMARY}
                    color="inherit"
                >
                    {children}
                </Typography>
            )}
        </StyledButton>
    );
};

Button.propTypes = {
    variant: PropTypes.oneOf(BUTTON_VARIANTS),
    size: PropTypes.oneOf(BUTTON_SIZES),
    icon: PropTypes.string || PropTypes.number,
    iconSize: PropTypes.string,
    iconPositon: PropTypes.oneOf(BUTTON_ICON_POSITIONS),
    className: PropTypes.string,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    style: PropTypes.object,
    onClick: PropTypes.func,
    fullWidth: PropTypes.bool,
    isIconButton: PropTypes.bool,
    children: PropTypes.any,
};

Button.defaultProps = {
    variant: BUTTON_VARIANTS_ENUM.PRIMARY,
    size: BUTTON_SIZES_ENUM.MEDIUM,
    icon: '',
    iconSize: '24',
    iconPositon: BUTTON_ICON_POSITIONS_ENUM.LEFT,
    className: '',
    disabled: false,
    loading: false,
    style: {},
    onClick: () => {},
    fullWidth: false,
    isIconButton: false,
    children: null,
};

export default Button;
