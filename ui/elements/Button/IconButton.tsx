import classnames from 'classnames';
import React, { forwardRef } from 'react';

import { Icon } from '../Icon';
import { StyledButton } from './Button.styles';
import { IconButtonProps } from './types';

/**
 * An IconButton is a button that contains an icon.
 */
const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
    (
        {
            variant = 'primary',
            size = 'medium',
            icon = null,
            iconSize = '24',
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

        return (
            <StyledButton
                ref={ref}
                onClick={handleClick}
                className={classes}
                style={style}
                isLoading={loading}
                disabled={disabled || loading}
                variant={variant}
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
                {...buttonProps}
                data-testid="testid-iconbutton"
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
            </StyledButton>
        );
    }
);

export default IconButton;
