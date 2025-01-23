import classnames from 'classnames';
import React, { forwardRef, useId } from 'react';

import { Icon } from '../Icon';
import { StyledButton, StyledButtonContent } from './Button.styles';
import { ButtonColors, ButtonProps } from './types';

/**
 * A Button is a component that is used to trigger an action.
 * It can contain text and an icon, or only text.
 *
 * To create an icon button, checkout the IconButton component.
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const {
        variant = 'primary',
        color = 'brand',
        size = 'medium',
        icon = null,
        iconSize = '24',
        iconPosition = 'left',
        className = '',
        disabled = false,
        loading = false,
        style = {},
        onClick = () => {},
        fullWidth = false,
        type = 'button',
        tooltip = '',
        tabIndex = 0,
        onMouseEnter = () => {},
        onMouseLeave = () => {},
        children = '',
        buttonProps,
        ...rest
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
            isLoading={loading}
            disabled={disabled || loading}
            variant={variant}
            $color={color as ButtonColors}
            size={size}
            fullWidth={fullWidth}
            iconPosition={iconPosition}
            type={type}
            title={tooltip}
            tabIndex={tabIndex}
            data-testid="testid-button"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            aria-labelledby={`button-content-${id}`}
            {...buttonProps}
            {...rest}
        >
            {icon && !loading && (
                <Icon name={icon} color="inherit" size={iconSize || '24'} />
            )}
            {loading && (
                <Icon
                    name="refresh"
                    color="inherit"
                    size={iconSize || '24'}
                    loading={loading}
                />
            )}
            {children && (
                <StyledButtonContent
                    id={`button-content-${id}`}
                    $iconPosition={icon ? iconPosition : false}
                >
                    {children}
                </StyledButtonContent>
            )}
        </StyledButton>
    );
});

export default Button;
