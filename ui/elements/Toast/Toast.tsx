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
import { getCTAButtonProps, getCloseButtonProps, getToastColors, getToastIcon } from './utils';

/**
 * A Toast component is used to display brief messages to users in a non-intrusive way.
 * It supports different devices (desktop/mobile), emphasis levels, types, and optional actions.
 */
const Toast = forwardRef<HTMLDivElement, ToastProps>((props, ref) => {
    const {
        device = 'desktop',
        emphasis = 'medium',
        type = 'neutral',
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
        position = 'static',
        placement,
        top,
        bottom,
        left,
        right,
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
    const handleCTAClick = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        if (onCTAClick) {
            onCTAClick();
        }
    };

    const iconName = getToastIcon(leftIcon, type);
    const { iconColor } = getToastColors(type, emphasis);
    const ctaButtonProps = getCTAButtonProps();
    const closeButtonProps = getCloseButtonProps(type, emphasis);

    // Determine max width based on device if not explicitly set
    const computedMaxWidth =
        maxWidth ||
        (device === 'mobile' ? '336px' : '440px');

    const hasActions = showCTA || showCloseIcon;

    // Map placement to fixed coordinates
    let placementStyles: React.CSSProperties = {};
    if (placement) {
        const offset = 16; // base spacing
        const mobileXPadding = 16;
        if (device === 'mobile') {
            placementStyles =
                placement === 'top'
                    ? ({ position: 'fixed', top: `${offset}px`, bottom: 'auto', left: `${mobileXPadding}px`, right: `${mobileXPadding}px`, width: `calc(100% - ${mobileXPadding * 2}px)`, minWidth: 0 } as React.CSSProperties)
                    : ({ position: 'fixed', bottom: `${offset}px`, top: 'auto', left: `${mobileXPadding}px`, right: `${mobileXPadding}px`, width: `calc(100% - ${mobileXPadding * 2}px)`, minWidth: 0 } as React.CSSProperties);
        } else {
            switch (placement) {
                case 'top-left':
                    placementStyles = { position: 'fixed', top: `${offset}px`, bottom: 'auto', left: `${offset}px`, right: 'auto', width: `min(440px, calc(100% - ${offset * 2}px))`, minWidth: 0 } as React.CSSProperties;
                    break;
                case 'top-right':
                    placementStyles = { position: 'fixed', top: `${offset}px`, bottom: 'auto', right: `${offset}px`, left: 'auto', width: `min(440px, calc(100% - ${offset * 2}px))`, minWidth: 0 } as React.CSSProperties;
                    break;
                case 'bottom-left':
                    placementStyles = { position: 'fixed', bottom: `${offset}px`, top: 'auto', left: `${offset}px`, right: 'auto', width: `min(440px, calc(100% - ${offset * 2}px))`, minWidth: 0 } as React.CSSProperties;
                    break;
                case 'bottom-right':
                    placementStyles = { position: 'fixed', bottom: `${offset}px`, top: 'auto', right: `${offset}px`, left: 'auto', width: `min(440px, calc(100% - ${offset * 2}px))`, minWidth: 0 } as React.CSSProperties;
                    break;
                default:
                    placementStyles = {};
            }
        }
    }

    return (
        <StyledToastContainer
            ref={ref}
            $device={device}
            $emphasis={emphasis}
            $type={type}
            $position={position}
            $top={top}
            $bottom={bottom}
            $left={left}
            $right={right}
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