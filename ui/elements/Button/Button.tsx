import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { Icon } from '../Icon';
import { TYPOGRAPHY_VARIANTS_ENUM } from '../Typography';
import Typography from '../Typography/Typography';
import { StyledButton } from './Button.styles';
import {
    BUTTON_ICON_POSITIONS,
    BUTTON_ICON_POSITIONS_ENUM,
    BUTTON_SIZES,
    BUTTON_SIZES_ENUM,
    BUTTON_VARIANTS,
    BUTTON_VARIANTS_ENUM,
} from './constants';
import { ButtonProps } from './types';

/**
 * `gra.UI.ty Button`: This button is cute as a button.
 * @component
 * @example
 * <NSButton variant="primary" size="medium" onClick={() => null}>
 *    Click me
 * </NSButton>
 * @returns The Button component.
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
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
            isIconButton,
            type,
            ariaLabel,
            tooltip,
            tabIndex,
            dataTestId,
            onMouseEnter,
            onMouseLeave,
            children,
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
                loading={loading}
                disabled={disabled || loading}
                variant={variant}
                size={size}
                fullWidth={fullWidth}
                iconPosition={iconPosition}
                isIconButton={isIconButton}
                type={type}
                aria-label={ariaLabel}
                title={tooltip}
                tabIndex={tabIndex}
                data-testid={dataTestId}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                {...buttonProps}
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
                        variant={
                            TYPOGRAPHY_VARIANTS_ENUM.ACTION_SEMIBOLD_PRIMARY
                        }
                        color="inherit"
                    >
                        {children}
                    </Typography>
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
    isIconButton: PropTypes.bool,
    children: PropTypes.any,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    ariaLabel: PropTypes.string,
    tooltip: PropTypes.string,
    tabIndex: PropTypes.number,
    dataTestId: PropTypes.string,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
};

Button.defaultProps = {
    variant: BUTTON_VARIANTS_ENUM.PRIMARY,
    size: BUTTON_SIZES_ENUM.MEDIUM,
    icon: null,
    iconSize: '24',
    iconPosition: BUTTON_ICON_POSITIONS_ENUM.LEFT,
    className: '',
    disabled: false,
    loading: false,
    style: {},
    onClick: () => {},
    fullWidth: false,
    isIconButton: false,
    children: '',
    type: 'button',
    ariaLabel: '',
    tooltip: '',
    tabIndex: 0,
    dataTestId: '',
    onMouseEnter: () => {},
    onMouseLeave: () => {},
};

export default Button;
