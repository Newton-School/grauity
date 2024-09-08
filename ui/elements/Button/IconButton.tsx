import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { Icon } from '../Icon';
import { StyledButton } from './Button.styles';
import { BUTTON_SIZES, BUTTON_VARIANTS } from './constants';
import { IconButtonProps } from './types';

/**
 * An IconButton is a button that contains an icon.
 */
const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
    (props, ref) => {
        const {
            variant,
            size,
            icon,
            iconSize,
            className,
            disabled,
            loading,
            style,
            onClick,
            fullWidth,
            type,
            ariaLabel,
            tooltip,
            tabIndex,
            dataTestId,
            onMouseEnter,
            onMouseLeave,
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
                type={type}
                aria-label={ariaLabel || icon}
                title={tooltip}
                tabIndex={tabIndex}
                data-testid={dataTestId}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                isIconButton
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
            </StyledButton>
        );
    }
);

IconButton.propTypes = {
    variant: PropTypes.oneOf(BUTTON_VARIANTS),
    size: PropTypes.oneOf(BUTTON_SIZES),
    icon: PropTypes.any,
    iconSize: PropTypes.any,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    style: PropTypes.object,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    ariaLabel: PropTypes.string,
    tooltip: PropTypes.string,
    tabIndex: PropTypes.number,
    dataTestId: PropTypes.string,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
};

IconButton.defaultProps = {
    variant: 'primary',
    size: 'medium',
    icon: null,
    iconSize: '24',
    className: '',
    disabled: false,
    loading: false,
    style: {},
    onClick: () => {},
    type: 'button',
    ariaLabel: '',
    tooltip: '',
    tabIndex: 0,
    dataTestId: '',
    onMouseEnter: () => {},
    onMouseLeave: () => {},
};

export default IconButton;
