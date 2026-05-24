import React, { forwardRef, useEffect, useId, useRef, useState } from 'react';

import Button from '../Button';
import IconButton from '../Button/IconButton';
import { Icon } from '../Icon';
import { TOAST_TYPES_ENUM, TOAST_VARIANTS_ENUM } from './constants';
import {
    StyledToastActions,
    StyledToastBody,
    StyledToastCloseAbsolute,
    StyledToastCloseInActions,
    StyledToastContainer,
    StyledToastContent,
    StyledToastImage,
    StyledToastLeading,
    StyledToastPrimaryCTA,
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

const NARROW_VIEWPORT_QUERY = '(max-width: 600px)';

const useIsNarrowViewport = () => {
    const [isNarrow, setIsNarrow] = useState(false);

    useEffect(() => {
        if (typeof window.matchMedia !== 'function') {
            return;
        }
        const mediaQuery = window.matchMedia(NARROW_VIEWPORT_QUERY);
        const update = () => setIsNarrow(mediaQuery.matches);
        update();
        mediaQuery.addEventListener('change', update);
        return () => mediaQuery.removeEventListener('change', update);
    }, []);

    return isNarrow;
};

/**
 * A Toast component is used to display brief messages to users in a non-intrusive way.
 *
 * Supports two layout types:
 * - `simple` (default): single-line layout with icon, title and inline actions
 * - `rich`: card-style layout with custom 44x44 image, title, subtitle, and stacked
 *   primary + secondary CTAs
 *
 * Both types support the same color and variant emphasis combinations.
 * Layout adapts responsively to the viewport — no device prop required.
 */
const Toast = forwardRef<HTMLDivElement, ToastProps>((props, ref) => {
    const {
        type = TOAST_TYPES_ENUM.SIMPLE,
        variant = TOAST_VARIANTS_ENUM.SECONDARY,
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
    const isNarrowViewport = useIsNarrowViewport();

    const isRich = type === TOAST_TYPES_ENUM.RICH;

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

    const getDefaultMaxWidth = () => (isRich ? '800px' : '440px');
    const computedMaxWidth = maxWidth || getDefaultMaxWidth();

    const placementStyles = getPlacementStyles(
        placement,
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
            hasPrimaryCTA ||
            hasSecondaryCTA ||
            (showCloseIcon && !isNarrowViewport);

        const closeButton = showCloseIcon ? (
            <IconButton
                icon="close"
                variant="tertiary"
                color="neutral"
                size="medium"
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
                $type={type}
                $variant={variant}
                $color={color}
                $maxWidth={computedMaxWidth}
                className={className}
                style={{ ...style, ...placementStyles }}
                role="alert"
                aria-labelledby={title ? `toast-title-${id}` : undefined}
            >
                <StyledToastLeading>
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
                    <StyledToastBody>
                        {titleNode}
                        {subtitle && (
                            <StyledToastSubtitle>
                                {subtitle}
                            </StyledToastSubtitle>
                        )}
                    </StyledToastBody>
                </StyledToastLeading>

                {hasActionsRow && (
                    <StyledToastActions $type={type}>
                        {hasPrimaryCTA && (
                            <StyledToastPrimaryCTA>
                                <Button
                                    variant="primary"
                                    color="neutral"
                                    size="medium"
                                    icon={primaryCTAIcon}
                                    iconPosition="left"
                                    onClick={handleCTAClick}
                                >
                                    {ctaText}
                                </Button>
                            </StyledToastPrimaryCTA>
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
                        {showCloseIcon && !isNarrowViewport && (
                            <StyledToastCloseInActions>
                                {closeButton}
                            </StyledToastCloseInActions>
                        )}
                    </StyledToastActions>
                )}

                {showCloseIcon &&
                    (isNarrowViewport || !hasActionsRow) && (
                    <StyledToastCloseAbsolute>
                        {closeButton}
                    </StyledToastCloseAbsolute>
                )}
            </StyledToastContainer>
        );
    }

    const hasActions = showCTA || showCloseIcon;

    return (
        <StyledToastContainer
            ref={ref}
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
                <StyledToastActions $type={type}>
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
