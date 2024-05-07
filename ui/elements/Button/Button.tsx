import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { ButtonProps } from './types';
import { StyledButton, StyledButtonText } from './Button.styles';
import { BUTTON_ICON_POSITIONS, BUTTON_SIZES, BUTTON_VARIANTS } from './constants';
import { Icon } from '../Icon';
import getButtonColorFromVariant from './utils';

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
    text,
    hasIcon,
    icon,
    iconPositon,
    className,
    disabled,
    loading,
    style,
    onClick,
    fullWidth,
    ...props
}: ButtonProps) => {
    const handleClick = (e?: any) => {
        if (disabled) {
            e.preventDefault();
            return;
        }
        onClick(e);
    };

    const classes = classnames(
        className
    );

    return (
        <StyledButton
            onClick={handleClick}
            className={classes}
            style={style}
            disabled={disabled}
            variant={variant}
            size={size}
            fullWidth={fullWidth}
            iconPositon={iconPositon}
        >
            {hasIcon && icon && (
                <Icon 
                    name={icon}
                    color={getButtonColorFromVariant(variant)}
                    size='24'
                />
            )}         
            <StyledButtonText>{text}</StyledButtonText>
        </StyledButton>
    );
};

Button.propTypes = {
    variant: PropTypes.oneOf(BUTTON_VARIANTS),
    size: PropTypes.oneOf(BUTTON_SIZES),
    text: PropTypes.string,
    hasIcon: PropTypes.bool,
    icon: PropTypes.string,
    iconPositon: PropTypes.oneOf(BUTTON_ICON_POSITIONS),
    className: PropTypes.string,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    style: PropTypes.object,
    onClick: PropTypes.func,
    fullWidth: PropTypes.bool,
};

Button.defaultProps = {
    variant: 'primary',
    size: 'medium',
    text: '',
    hasIcon: false,
    icon: '',
    iconPositon: 'left',
    className: '',
    disabled: false,
    loading: false,
    style: {},
    onClick: () => {},
    fullWidth: false,
};

export default Button;
