import React, { forwardRef, useEffect, useId, useRef } from 'react';

import Button from '../Button';
import IconButton from '../Button/IconButton';
import { Icon } from '../Icon';
import { TOAST_TYPES_ENUM } from './constants';
import {
    StyledToastActions,
    StyledToastBody,
    StyledToastCloseAbsolute,
    StyledToastContainer,
    StyledToastContent,
    StyledToastImage,
    StyledToastLeading,
    StyledToastSubtitle,
    StyledToastTitle,
} from './Toast.styles';
import { ToastProps } from './types';
import {
    getCloseButtonProps,
    getCTAButtonProps,
    getPlacementStyles,
    getToastColors,
    getToastIcon,
} from './utils';

/**
 * A Toast component is used to display brief messages to users in a non-intrusive way.
 *
 * Supports two layout types:
 * - `simple` (default): single-line layout with icon, title and inline actions
 * - `rich`: card-style layout with custom 44x44 image, title, subtitle, and stacked
 *   primary + secondary CTAs
 *
 * Both types support the same color and variant emphasis combinations.
 */
const Toast = forwardRef<HTMLDivElement, ToastProps>((props, ref) => {
    const {
        device = 'desktop',
        type = TOAST_TYPES_ENUM.SIMPLE,
        variant = 'medium',
        color = 'neutral',
        showLeftIcon = true,
        leftIcon,
        showCloseIcon = true,
        showCTA: showCTAProp,
        ctaText: ctaTextProp,
        onCTAClick,
        onClose,
        title: titleProp,
        subtitle: subtitleProp,
        image,
        primaryCTAIcon,
        secondaryCTA: secondaryCTAProp,
        showSecondaryCTA: showSecondaryCTAProp,
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

    const isRich = type === TOAST_TYPES_ENUM.RICH;

    // The `rich` layout is opinionated: every slot opts-in by default so a
    // bare `nsToast({ type: 'rich' })` already shows a fully populated card.
    // Each slot can be removed by explicitly passing `false`/`null`.
    const showCTA = showCTAProp ?? isRich;
    const showSecondaryCTA = showSecondaryCTAProp ?? isRich;
    const ctaText = ctaTextProp ?? 'Action';
    const title =
        titleProp !== undefined
            ? titleProp
            : isRich
                ? 'Title goes here'
                : undefined;
    const subtitle =
        subtitleProp !== undefined
            ? subtitleProp
            : isRich
                ? 'Subtitle text — single line, truncated when too long.'
                : undefined;
    const secondaryCTA =
        secondaryCTAProp !== undefined
            ? secondaryCTAProp
            : isRich && showSecondaryCTA
                ? ({
                    icon: 'arrow-right',
                    ariaLabel: 'Open',
                } as ToastProps['secondaryCTA'])
                : undefined;

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

    const clearAutoCloseTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    const handleClose = () => {
        clearAutoCloseTimeout();
        if (onClose) {
            onClose();
        }
    };

    const handleCTAClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        clearAutoCloseTimeout();
        if (onCTAClick) {
            onCTAClick(event);
        }
    };

    const handleSecondaryCTAClick = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        clearAutoCloseTimeout();
        if (secondaryCTA?.onClick) {
            secondaryCTA.onClick(event);
        }
    };

    const iconName = getToastIcon(leftIcon, color);
    const { iconColor } = getToastColors(color, variant);
    const ctaButtonProps = getCTAButtonProps();
    const closeButtonProps = getCloseButtonProps(color, variant);

    const getDefaultMaxWidth = () => {
        if (isRich) {
            // Mobile rich is fluid by default — fills its container with margins
            // controlled by the placement prop's xOffset (or parent layout).
            return device === 'mobile' ? '100%' : '800px';
        }
        return device === 'mobile' ? '336px' : '440px';
    };
    const computedMaxWidth = maxWidth || getDefaultMaxWidth();

    const placementStyles = getPlacementStyles(
        placement,
        device,
        xOffset,
        yOffset,
        type
    );

    const titleNode = title ? (
        <StyledToastTitle id={`toast-title-${id}`} $type={type}>
            {title}
        </StyledToastTitle>
    ) : null;

    if (isRich) {
        const showLeading = !!image || (showLeftIcon && !!iconName);
        const hasPrimaryCTA = showCTA;
        const hasSecondaryCTA = showSecondaryCTA && !!secondaryCTA;
        const hasActionsRow =
            hasPrimaryCTA || hasSecondaryCTA || (showCloseIcon && device !== 'mobile');

        const closeButton = showCloseIcon ? (
            <IconButton
                icon="close"
                variant="tertiary"
                color="neutral"
                size={device === 'mobile' ? 'small' : 'medium'}
                onClick={handleClose}
                ariaLabel="Close toast"
                style={{
                    color: 'var(--text-emphasis-primary-default)',
                }}
            />
        ) : null;

        return (
            <StyledToastContainer
                ref={ref}
                $device={device}
                $type={type}
                $variant={variant}
                $color={color}
                $maxWidth={computedMaxWidth}
                className={className}
                style={{ ...style, ...placementStyles }}
                role="alert"
                aria-labelledby={title ? `toast-title-${id}` : undefined}
            >
                <StyledToastLeading $device={device}>
                    {showLeading && (
                        <StyledToastImage>
                            {image || (
                                <Icon
                                    name={iconName}
                                    color={iconColor}
                                    size="32"
                                />
                            )}
                        </StyledToastImage>
                    )}
                    <StyledToastBody $device={device}>
                        {titleNode}
                        {subtitle && (
                            <StyledToastSubtitle $device={device}>
                                {subtitle}
                            </StyledToastSubtitle>
                        )}
                    </StyledToastBody>
                </StyledToastLeading>

                {hasActionsRow && (
                    <StyledToastActions $device={device} $type={type}>
                        {hasPrimaryCTA && (
                            <Button
                                variant="primary"
                                color="neutral"
                                size="medium"
                                icon={primaryCTAIcon}
                                iconPosition="left"
                                onClick={handleCTAClick}
                                fullWidth={device === 'mobile'}
                            >
                                {ctaText}
                            </Button>
                        )}
                        {hasSecondaryCTA && (
                            <IconButton
                                icon={secondaryCTA!.icon}
                                variant="secondary"
                                color="neutral"
                                size="medium"
                                onClick={handleSecondaryCTAClick}
                                ariaLabel={
                                    secondaryCTA!.ariaLabel ||
                                    'Toast secondary action'
                                }
                            />
                        )}
                        {device !== 'mobile' && closeButton}
                    </StyledToastActions>
                )}

                {showCloseIcon && device === 'mobile' && (
                    <StyledToastCloseAbsolute>
                        {closeButton}
                    </StyledToastCloseAbsolute>
                )}
            </StyledToastContainer>
        );
    }

    // Simple (default) layout
    const hasActions = showCTA || showCloseIcon;

    return (
        <StyledToastContainer
            ref={ref}
            $device={device}
            $type={type}
            $variant={variant}
            $color={color}
            $maxWidth={computedMaxWidth}
            className={className}
            style={{ ...style, ...placementStyles }}
            role="alert"
            aria-labelledby={title ? `toast-title-${id}` : undefined}
        >
            {showLeftIcon && (
                <div style={{ marginLeft: '16px' }}>
                    <Icon name={iconName} color={iconColor} size="20" />
                </div>
            )}

            <StyledToastContent $type={type}>
                {titleNode}
            </StyledToastContent>

            {hasActions && (
                <StyledToastActions $device={device} $type={type}>
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
