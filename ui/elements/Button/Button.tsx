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
        iconSize = '20',
        iconPosition = 'left',
        className = '',
        disabled = false,
        loading = false,
        style = {},
        onClick = () => {},
        fullWidth = false,
        type = 'button',
        ariaLabel = undefined,
        tooltip = '',
        tabIndex = 0,
        onMouseEnter = () => {},
        onMouseLeave = () => {},
        children = '',
        buttonProps,
        showAnimationOnClick = true,
        ...rest
    } = props;

    const isButtonDisabled = disabled || loading;
    const classes = classnames(className);
    const id = useId();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (isButtonDisabled) {
            e.preventDefault();
            return;
        }
        onClick(e);
    };

    return (
        <StyledButton
            ref={ref}
            onClick={handleClick}
            className={classes}
            style={style}
            isLoading={loading}
            disabled={isButtonDisabled}
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
            aria-label={ariaLabel}
            aria-labelledby={
                !ariaLabel && children ? `button-content-${id}` : undefined
            }
            $showAnimationOnClick={showAnimationOnClick}
            {...buttonProps}
            {...rest}
        >
            {icon && !loading && (
                <Icon name={icon} color="inherit" size={iconSize} />
            )}
            {loading && (
                <Icon
                    name="refresh"
                    color="inherit"
                    size={iconSize}
                    loading={loading}
                />
            )}
            {children && (
                <StyledButtonContent
                    id={`button-content-${id}`}
                    $iconPosition={icon ? iconPosition : false}
                    variant={variant}
                >
                    {children}
                </StyledButtonContent>
            )}
        </StyledButton>
    );
});

export default Button;
