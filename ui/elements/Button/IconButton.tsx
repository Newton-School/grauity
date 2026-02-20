import classnames from 'classnames';
import React, { forwardRef } from 'react';

import { Icon } from '../Icon';
import { StyledButton } from './Button.styles';
import { ICON_BUTTON_SIZE_TO_ICON_SIZE_MAPPING } from './constants';
import { IconButtonProps } from './types';

/**
 * An IconButton is a button that contains an icon.
 */
const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
    (
        {
            variant = 'primary',
            color = 'brand',
            size = 'medium',
            icon = null,
            iconSize,
            className = '',
            disabled = false,
            loading = false,
            style = {},
            onClick = () => {},
            fullWidth,
            type = 'button',
            ariaLabel = '',
            tooltip = '',
            tabIndex = 0,
            onMouseEnter = () => {},
            onMouseLeave = () => {},
            buttonProps,
            showAnimationOnClick = true,
        },
        ref
    ) => {
        const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
            if (disabled) {
                e.preventDefault();
                return;
            }
            onClick(e);
        };

        const classes = classnames(className);

        const computedIconSize =
            iconSize || ICON_BUTTON_SIZE_TO_ICON_SIZE_MAPPING[size];

        return (
            <StyledButton
                ref={ref}
                onClick={handleClick}
                className={classes}
                style={style}
                isLoading={loading}
                disabled={disabled || loading}
                variant={variant}
                $color={color}
                size={size}
                fullWidth={fullWidth}
                type={type}
                role="button"
                aria-label={ariaLabel || icon}
                title={tooltip}
                tabIndex={tabIndex}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                isIconButton
                $showAnimationOnClick={showAnimationOnClick}
                {...buttonProps}
                data-testid="testid-iconbutton"
            >
                {icon && !loading && (
                    <Icon name={icon} color="inherit" size={computedIconSize} />
                )}
                {loading && (
                    <Icon
                        name="loading"
                        color="inherit"
                        size={computedIconSize}
                        loading={loading}
                    />
                )}
            </StyledButton>
        );
    }
);

export default IconButton;
