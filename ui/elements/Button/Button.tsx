import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { ButtonProps } from './types';
import { StyledButton, StyledButtonText } from './Button.styles';
import { 
    BUTTON_ICON_POSITIONS, 
    BUTTON_ICON_POSITIONS_ENUM, 
    BUTTON_SIZES, 
    BUTTON_SIZES_ENUM, 
    BUTTON_VARIANTS, 
    BUTTON_VARIANTS_ENUM 
} from './constants';
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
    icon,
    iconSize,
    iconPositon,
    className,
    disabled,
    loading,
    style,
    onClick,
    fullWidth,
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
            {icon && (
                <Icon 
                    name={icon}
                    color={getButtonColorFromVariant(variant)}
                    size={iconSize || '24'}
                />
            )}         
            {children && <StyledButtonText>{children}</StyledButtonText>}
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
    children: null,
};

export default Button;
