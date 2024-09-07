import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { forwardRef, useId } from 'react';

import { Icon } from '../Icon';
import { StyledButton, StyledButtonContent } from './Button.styles';
import {
    BUTTON_ICON_POSITIONS,
    BUTTON_SIZES,
    BUTTON_VARIANTS,
} from './constants';
import { ButtonProps } from './types';

/**
 * A Button is a component that is used to trigger an action.
 * It can contain text and an icon, or only text.
 * 
 * To create an icon button, checkout the IconButton component.
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (props, ref) => {
        const {
            variant,
            size,
            icon,
            iconSize,
            iconPosition,
            className,
            disabled,
            loading,
            style,
            onClick,
            fullWidth,
            type,
            tooltip,
            tabIndex,
            dataTestId,
            onMouseEnter,
            onMouseLeave,
            children,
            buttonProps,
        } = props;
        const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
            if (disabled) {
                e.preventDefault();
                return;
            }
            onClick(e);
        };

        const classes = classnames(className);

        const id = useId();

        return (
            <StyledButton
                ref={ref}
                onClick={handleClick}
                className={classes}
                style={style}
                loading={loading}
                disabled={disabled || loading}
                variant={variant}
                size={size}
                fullWidth={fullWidth}
                iconPosition={iconPosition}
                type={type}
                title={tooltip}
                tabIndex={tabIndex}
                data-testid={dataTestId}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                {...buttonProps}
                aria-labelledby={`button-content-${id}`}
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
                    <StyledButtonContent id={`button-content-${id}`}>{children}</StyledButtonContent>
                )}
            </StyledButton>
        );
    }
);

Button.propTypes = {
    variant: PropTypes.oneOf(BUTTON_VARIANTS),
    size: PropTypes.oneOf(BUTTON_SIZES),
    icon: PropTypes.any,
    iconSize: PropTypes.any,
    iconPosition: PropTypes.oneOf(BUTTON_ICON_POSITIONS),
    className: PropTypes.string,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    style: PropTypes.object,
    onClick: PropTypes.func,
    fullWidth: PropTypes.bool,
    children: PropTypes.any,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    tooltip: PropTypes.string,
    tabIndex: PropTypes.number,
    dataTestId: PropTypes.string,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
};

Button.defaultProps = {
    variant: 'primary',
    size: 'medium',
    icon: null,
    iconSize: '24',
    iconPosition: 'left',
    className: '',
    disabled: false,
    loading: false,
    style: {},
    onClick: () => {},
    fullWidth: false,
    children: '',
    type: 'button',
    tooltip: '',
    tabIndex: 0,
    dataTestId: '',
    onMouseEnter: () => {},
    onMouseLeave: () => {},
};

export default Button;
