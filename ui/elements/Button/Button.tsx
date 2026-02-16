import classnames from 'classnames';
import React, { forwardRef, useId } from 'react';

import { Icon } from '../Icon';
import { StyledButton, StyledButtonContent } from './Button.styles';
import { BUTTON_COLORS_ENUM, BUTTON_VARIANTS_ENUM } from './constants';
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
        leftIcon = null,
        rightIcon = null,
        iconSize = '20',
        iconPosition = 'left',
        className = '',
        disabled = false,
        loading = false,
        style = {},
        onClick = () => {},
        fullWidth = false,
        type = 'button',
        ariaLabel = '',
        tooltip = '',
        tabIndex = 0,
        onMouseEnter = () => {},
        onMouseLeave = () => {},
        children = '',
        buttonProps,
        showAnimationOnClick = true,
        ...rest
    } = props;

    const isLinkVariant = variant === BUTTON_VARIANTS_ENUM.LINK;
    const isLoading = isLinkVariant ? false : loading;
    const buttonColor = isLinkVariant ? BUTTON_COLORS_ENUM.BRAND : color;
    const isButtonDisabled = disabled || isLoading;
    const classes = classnames(className);
    const id = useId();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (isButtonDisabled) {
            e.preventDefault();
            return;
        }
        onClick(e);
    };

    const hasLegacyLinkIconFallback = isLinkVariant && !leftIcon && !rightIcon;
    const linkLeftIconName =
        leftIcon ||
        (hasLegacyLinkIconFallback && iconPosition === 'left' ? icon : null);
    const linkRightIconName =
        rightIcon ||
        (hasLegacyLinkIconFallback && iconPosition === 'right' ? icon : null);

    return (
        <StyledButton
            ref={ref}
            onClick={handleClick}
            className={classes}
            style={style}
            isLoading={isLoading}
            disabled={isButtonDisabled}
            variant={variant}
            $color={buttonColor as ButtonColors}
            size={size}
            fullWidth={fullWidth}
            iconPosition={iconPosition}
            type={type}
            title={tooltip}
            tabIndex={tabIndex}
            data-testid="testid-button"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            aria-label={ariaLabel || undefined}
            aria-labelledby={
                ariaLabel || !children ? undefined : `button-content-${id}`
            }
            $showAnimationOnClick={showAnimationOnClick}
            {...buttonProps}
            {...rest}
        >
            {!isLinkVariant && icon && !isLoading && (
                <Icon name={icon} color="inherit" size={iconSize} />
            )}
            {isLinkVariant && linkLeftIconName && (
                <Icon name={linkLeftIconName} color="inherit" size={iconSize} />
            )}
            {isLoading && (
                <Icon
                    name="refresh"
                    color="inherit"
                    size={iconSize}
                    loading={isLoading}
                />
            )}
            {children && (
                <StyledButtonContent
                    id={`button-content-${id}`}
                    $variant={variant}
                    $size={size}
                    $iconPosition={
                        !isLinkVariant && icon ? iconPosition : false
                    }
                >
                    {children}
                </StyledButtonContent>
            )}
            {isLinkVariant && linkRightIconName && (
                <Icon
                    name={linkRightIconName}
                    color="inherit"
                    size={iconSize}
                />
            )}
        </StyledButton>
    );
});

export default Button;
