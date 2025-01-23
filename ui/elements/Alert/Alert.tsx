import React, { forwardRef, useId } from 'react';

import {
    getAlertBannerColors,
    getAlertIconName,
    getButtonColorFromAlertBannerTypeVariant,
    getButtonVariantFromAlertBannerTypeVariant,
} from '../AlertBanner/utils';
import Button from '../Button';
import ButtonGroup from '../Button/ButtonGroup';
import IconButton from '../Button/IconButton';
import { Icon } from '../Icon';
import {
    StyledAlertBody,
    StyledAlertContainer,
    StyledAlertContent,
    StyledAlertDescription,
    StyledAlertTitle,
} from './Alert.styles';
import { AlertProps } from './types';

/**
 * An alert component is used to display important messages to the user.
 */
const Alert = forwardRef<HTMLDivElement, AlertProps>(({
    type = 'default',
    variant = 'primary',
    icon = null,
    title = 'This is an alert',
    description = 'This is a description',
    top = null,
    bottom = null,
    left = null,
    right = null,
    position = 'static',
    onClose,
    showCloseButton = false,
    actionButtons = [],
    inlineButtons = false,
    maxWidth = '440px',
}, ref) => {
    const id = useId();
    const iconName = getAlertIconName(icon, variant);
    const { iconColor, textColor, backgroundColor, borderColor } =
        getAlertBannerColors(variant, type);

    const hasButton = !!actionButtons.length || showCloseButton;

    return (
        <StyledAlertContainer
            position={position}
            top={top}
            bottom={bottom}
            left={left}
            right={right}
            backgroundColor={backgroundColor}
            borderColor={borderColor}
            ref={ref}
            role="alert"
            aria-labelledby={`alert-title-${id}`}
            aria-describedby={`alert-description-${id}`}
            maxWidth={maxWidth}
        >
            {iconName && (
                <Icon
                    name={iconName}
                    color={iconColor || 'inherit'}
                    size="20"
                />
            )}
            <StyledAlertBody inlineButtons={inlineButtons}>
                <StyledAlertContent>
                    {title && (
                        <StyledAlertTitle
                            textColor={textColor}
                            id={`alert-title-${id}`}
                        >
                            {title}
                        </StyledAlertTitle>
                    )}
                    {description && (
                        <StyledAlertDescription
                            textColor={textColor}
                            id={`alert-description-${id}`}
                        >
                            {description}
                        </StyledAlertDescription>
                    )}
                </StyledAlertContent>
                {hasButton && (
                    <ButtonGroup>
                        {actionButtons.map((button) => (
                            <Button {...button} key={button.variant}>
                                {button.children}
                            </Button>
                        ))}
                    </ButtonGroup>
                )}
            </StyledAlertBody>
            {showCloseButton && (
                <IconButton
                    icon="close"
                    variant={getButtonVariantFromAlertBannerTypeVariant(
                        variant,
                        type
                    )}
                    color={getButtonColorFromAlertBannerTypeVariant(
                        variant,
                        type
                    )}
                    onClick={onClose}
                    size="small"
                />
            )}
        </StyledAlertContainer>
    );
});

export default Alert;
