import React, { forwardRef, useEffect, useId, useRef } from 'react';

import Button from '../Button';
import IconButton from '../Button/IconButton';
import { Icon } from '../Icon';
import {
    StyledToastActions,
    StyledToastContainer,
    StyledToastContent,
    StyledToastTitle,
} from './Toast.styles';
import { ToastProps } from './types';
import { getCTAButtonProps, getCloseButtonProps, getPlacementStyles, getToastColors, getToastIcon } from './utils';

/**
 * A Toast component is used to display brief messages to users in a non-intrusive way.
 * It supports different devices (desktop/mobile), variants, colors, and optional actions.
 */
const Toast = forwardRef<HTMLDivElement, ToastProps>((props, ref) => {
    const {
        device = 'desktop',
        variant = 'medium',
        color = 'neutral',
        showLeftIcon = true,
        leftIcon,
        showCloseIcon = true,
        showCTA = false,
        ctaText = 'Action',
        onCTAClick,
        onClose,
        title,
        className = '',
        style = {},
        placement,
        xOffset = 16,
        yOffset = 16,
        maxWidth,
        autoClose = null,
        onAutoClose,
    } = props;

    const id = useId();
    const timeoutRef = useRef<NodeJS.Timeout>();

    // Auto close functionality
    useEffect(() => {
        if (autoClose && autoClose > 0) {
            timeoutRef.current = setTimeout(() => {
                if (onAutoClose) {
                    onAutoClose();
                } else if (onClose) {
                    onClose();
                }
            }, autoClose);
        }

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [autoClose, onAutoClose, onClose]);

    // Clear timeout on manual close
    const handleClose = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        if (onClose) {
            onClose();
        }
    };

    // Clear timeout on CTA click
    const handleCTAClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        if (onCTAClick) {
            onCTAClick(event);
        }
    };

    const iconName = getToastIcon(leftIcon, color);
    const { iconColor } = getToastColors(color, variant);
    const ctaButtonProps = getCTAButtonProps();
    const closeButtonProps = getCloseButtonProps(color, variant);

    // Determine max width based on device if not explicitly set
    const computedMaxWidth =
        maxWidth ||
        (device === 'mobile' ? '336px' : '440px');

    const hasActions = showCTA || showCloseIcon;
    const placementStyles = getPlacementStyles(placement, device, xOffset, yOffset);

    return (
        <StyledToastContainer
            ref={ref}
            $device={device}
            $variant={variant}
            $color={color}
            $maxWidth={computedMaxWidth}
            className={className}
            style={{ ...style, ...placementStyles }}
            role="alert"
            aria-labelledby={title ? `toast-title-${id}` : undefined}
        >
            {/* Left Icon */}
            {showLeftIcon && (
                <div style={{ marginLeft: '16px' }}>
                    <Icon
                        name={iconName}
                        color={iconColor}
                        size="20"
                    />
                </div>
            )}

            {/* Content */}
            <StyledToastContent>
                {title && (
                    <StyledToastTitle id={`toast-title-${id}`}>
                        {title}
                    </StyledToastTitle>
                )}
            </StyledToastContent>

            {/* Actions */}
            {hasActions && (
                <StyledToastActions $device={device}>
                    {showCTA && (
                        <Button
                            variant={ctaButtonProps.variant}
                            color={ctaButtonProps.color}
                            size="small"
                            onClick={handleCTAClick}
                            style={{ marginRight: '8px' }}
                        >
                            {ctaText}
                        </Button>
                    )}
                    {showCloseIcon && (
                        <div style={{ marginRight: '14px' }}>
                            <IconButton
                                icon="close"
                                variant={closeButtonProps.variant}
                                color={closeButtonProps.color}
                                size="small"
                                onClick={handleClose}
                                ariaLabel="Close toast"
                                style={closeButtonProps.style}
                            />
                        </div>
                    )}
                </StyledToastActions>
            )}
        </StyledToastContainer>
    );
});

Toast.displayName = 'Toast';

export default Toast;