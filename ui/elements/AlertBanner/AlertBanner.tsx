import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import NSButton from 'ui/elements/Button';
import { NSButtonGroup } from 'ui/index';

import { Icon } from '../Icon';
import {
    StyledAlertBannerContainer,
    StyledAlertBannerContent,
} from './AlertBanner.styles';
import {
    ALERT_BANNER_TYPES,
    ALERT_BANNER_TYPES_ENUM,
    ALERT_BANNER_VARIANTS,
    ALERT_BANNER_VARIANTS_ENUM,
} from './constants';
import { AlertBannerProps } from './types';
import { getAlertBannerColors, getAlertIconName } from './utils';

const AlertBanner = forwardRef<HTMLDivElement, AlertBannerProps>(
    (
        {
            type,
            variant,
            icon,
            padding,
            top,
            bottom,
            left,
            right,
            position,
            children,
            justifyContent,
            onClose,
            showCloseButton,
            actionButtons,
        },
        ref
    ) => {
        const iconName = getAlertIconName(icon, variant);
        const { iconColor, textColor, backgroundColor, borderColor } =
            getAlertBannerColors(variant, type);

        const hasButton = !!actionButtons?.length || showCloseButton;

        return (
            <StyledAlertBannerContainer
                type={type}
                variant={variant}
                padding={
                    padding || hasButton
                        ? 'var(--spacing-4px, 4px) var(--spacing-8px, 8px)'
                        : 'var(--spacing-8px, 8px)'
                }
                top={top}
                bottom={bottom}
                left={left}
                right={right}
                position={position}
                ref={ref}
                iconColor={iconColor}
                textColor={textColor}
                backgroundColor={backgroundColor}
                borderColor={borderColor}
                justifyContent={justifyContent}
            >
                <StyledAlertBannerContent
                    color={textColor}
                >
                    {iconName && <Icon name={iconName} color="inherit" />}
                    {children}
                </StyledAlertBannerContent>

                {hasButton && (
                    <NSButtonGroup>
                        {actionButtons.map((button) => (
                            <NSButton {...button}>{button.children}</NSButton>
                        ))}
                        {showCloseButton && (
                            <NSButton
                                variant="tertiary-outlined"
                                icon="close"
                                onClick={onClose}
                                isIconButton
                                size="small"
                            />
                        )}
                    </NSButtonGroup>
                )}
            </StyledAlertBannerContainer>
        );
    }
);

AlertBanner.defaultProps = {
    type: ALERT_BANNER_TYPES_ENUM.DEFAULT,
    variant: ALERT_BANNER_VARIANTS_ENUM.PRIMARY,
    icon: null,
    padding: 'var(--spacing-8px, 8px)',
    top: null,
    bottom: null,
    left: null,
    right: null,
    position: 'static',
    children: null,
    justifyContent: 'center',
    onClose: undefined,
    showCloseButton: false,
    actionButtons: [],
};

AlertBanner.propTypes = {
    type: PropTypes.oneOf(ALERT_BANNER_TYPES),
    variant: PropTypes.oneOf(ALERT_BANNER_VARIANTS),
    padding: PropTypes.string,
    icon: PropTypes.any,
    top: PropTypes.string,
    bottom: PropTypes.string,
    left: PropTypes.string,
    right: PropTypes.string,
    position: PropTypes.string,
    children: PropTypes.node,
    justifyContent: PropTypes.string,
    onClose: PropTypes.func,
    showCloseButton: PropTypes.bool,
    actionButtons: PropTypes.array,
};

export default AlertBanner;
