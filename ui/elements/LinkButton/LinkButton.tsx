import classnames from 'classnames';
import React, { forwardRef, useId } from 'react';

import { Icon } from '../Icon';
import { useThemeScope } from '../ThemeScope';
import {
    StyledLinkButton,
    StyledLinkButtonContent,
    StyledLinkButtonIcon,
} from './LinkButton.styles';
import { LinkButtonProps } from './types';

const LinkButton = forwardRef<HTMLButtonElement, LinkButtonProps>(
    (props, ref) => {
        const {
            size = 'large',
            leftIcon = null,
            rightIcon = null,
            iconSize = '20',
            className = '',
            disabled = false,
            style = {},
            onClick = () => {},
            type = 'button',
            children = 'Link',
            ariaLabel = '',
            tooltip = '',
            tabIndex = 0,
            onMouseEnter = () => {},
            onMouseLeave = () => {},
            buttonProps,
            showAnimationOnClick = true,
            ...rest
        } = props;

        const { theme } = useThemeScope();

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
            <StyledLinkButton
                ref={ref}
                onClick={handleClick}
                className={classes}
                style={style}
                disabled={disabled}
                size={size}
                type={type}
                title={tooltip}
                tabIndex={tabIndex}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                aria-label={ariaLabel || undefined}
                aria-labelledby={
                    ariaLabel ? undefined : `link-button-content-${id}`
                }
                data-testid="testid-linkbutton"
                $showAnimationOnClick={showAnimationOnClick}
                $scopedTheme={theme}
                {...buttonProps}
                {...rest}
            >
                {leftIcon && (
                    <StyledLinkButtonIcon>
                        <Icon name={leftIcon} size={iconSize} color="inherit" />
                    </StyledLinkButtonIcon>
                )}
                {children && (
                    <StyledLinkButtonContent
                        id={`link-button-content-${id}`}
                        $size={size}
                    >
                        {children}
                    </StyledLinkButtonContent>
                )}
                {rightIcon && (
                    <StyledLinkButtonIcon>
                        <Icon
                            name={rightIcon}
                            size={iconSize}
                            color="inherit"
                        />
                    </StyledLinkButtonIcon>
                )}
            </StyledLinkButton>
        );
    }
);

export default LinkButton;
