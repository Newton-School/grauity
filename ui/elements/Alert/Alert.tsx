import PropTypes from 'prop-types';
import React, { forwardRef, useId } from 'react';

import {
    getAlertBannerColors,
    getAlertIconName,
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
import { ALERT_TYPES, ALERT_VARIANTS } from './constants';
import { AlertProps } from './types';

/**
 * An alert component is used to display important messages to the user.
 */
const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
    const {
        type,
        variant,
        icon,
        title,
        description,
        top,
        bottom,
        left,
        right,
        position,
        onClose,
        showCloseButton,
        actionButtons,
        maxWidth,
        inlineButtons,
    } = props;
    const id = useId();
    const iconName = getAlertIconName(icon, variant);
    const { iconColor, textColor, backgroundColor, borderColor } =
        getAlertBannerColors(variant, type);

    const hasButton = !!actionButtons?.length || showCloseButton;

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
                        {actionButtons?.map((button) => (
                            <Button {...button}>{button.children}</Button>
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
                    onClick={onClose}
                    size="small"
                />
            )}
        </StyledAlertContainer>
    );
});

Alert.defaultProps = {
    type: 'default',
    variant: 'primary',
    icon: null,
    title: 'This is an alert',
    description: 'This is a description',
    top: null,
    bottom: null,
    left: null,
    right: null,
    position: 'static',
    onClose: undefined,
    showCloseButton: false,
    actionButtons: [],
    inlineButtons: false,
    maxWidth: '440px',
};

Alert.propTypes = {
    type: PropTypes.oneOf(ALERT_TYPES),
    variant: PropTypes.oneOf(ALERT_VARIANTS),
    icon: PropTypes.any,
    title: PropTypes.string,
    description: PropTypes.string,
    top: PropTypes.string,
    bottom: PropTypes.string,
    left: PropTypes.string,
    right: PropTypes.string,
    position: PropTypes.oneOf(['static', 'fixed', 'absolute', 'relative']),
    onClose: PropTypes.func,
    showCloseButton: PropTypes.bool,
    actionButtons: PropTypes.array,
    inlineButtons: PropTypes.bool,
    maxWidth: PropTypes.string,
};

export default Alert;
