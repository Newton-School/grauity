import React, { forwardRef } from 'react';

import Button from '../Button';
import ButtonGroup from '../Button/ButtonGroup';
import IconButton from '../Button/IconButton';
import { Icon } from '../Icon';
import {
    StyledAlertBannerContainer,
    StyledAlertBannerContent,
} from './AlertBanner.styles';
import { AlertBannerProps } from './types';
import {
    getAlertBannerColors,
    getAlertIconName,
    getButtonVariantFromAlertBannerTypeVariant,
} from './utils';

/**
 * An alert banner is a component that is used to typically display
 * important messages to the user. It is normally shown at the top of the page.
 */
const AlertBanner = forwardRef<HTMLDivElement, AlertBannerProps>(
    (
        {
            type = 'default',
            variant = 'primary',
            icon = null,
            padding = 'var(--spacing-8px, 8px)',
            top = null,
            bottom = null,
            left = null,
            right = null,
            position = 'static',
            children = null,
            justifyContent = 'center',
            onClose,
            showCloseButton = false,
            actionButtons = [],
        },
        ref
    ) => {
        const iconName = getAlertIconName(icon, variant);
        const { iconColor, textColor, backgroundColor, borderColor } =
            getAlertBannerColors(variant, type);

        const hasButton = !!actionButtons.length || showCloseButton;

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
                textColor={textColor}
                backgroundColor={backgroundColor}
                borderColor={borderColor}
                justifyContent={justifyContent}
                role="alert"
            >
                <StyledAlertBannerContent color={textColor}>
                    {iconName && (
                        <Icon
                            name={iconName}
                            color={iconColor || 'inherit'}
                            size="20"
                        />
                    )}
                    {children}
                </StyledAlertBannerContent>

                {hasButton && (
                    <ButtonGroup>
                        {actionButtons.map((button) => (
                            <Button {...button} key={button.variant}>
                                {button.children}
                            </Button>
                        ))}
                        {showCloseButton && (
                            <IconButton
                                variant={getButtonVariantFromAlertBannerTypeVariant(
                                    variant,
                                    type
                                )}
                                icon="close"
                                onClick={onClose}
                                size="small"
                            />
                        )}
                    </ButtonGroup>
                )}
            </StyledAlertBannerContainer>
        );
    }
);

export default AlertBanner;
