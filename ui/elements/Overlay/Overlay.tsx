import React, { forwardRef, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

import { useDisableBodyScroll } from '../../../hooks';
import ThemeScope from '../ThemeScope';
import {
    StyledOverlay,
    StyledOverlayContent,
    StyledOverlayContentChildren,
} from './Overlay.styles';
import { OverlayProps } from './types';

const Overlay = forwardRef<HTMLDivElement, OverlayProps>((props, ref) => {
    const {
        children,
        onOverlayClick = () => {},
        shouldDisableScroll = false,
        shouldTintOverlay = false,
        shouldBlurOverlay = false,
        overlayColor = 'var(--alpha-overlay, rgba(22, 25, 29, 0.8))',
        shouldCenterContent = false,
        animationDuration = 0.5,
        className,
        position = { top: 0, left: 0 },
        shouldFocusOnFirstElement = true,
        ...rest
    } = props;

    const childrenRef = useRef<HTMLDivElement>();

    useDisableBodyScroll(shouldDisableScroll);

    useEffect(() => {
        if (shouldFocusOnFirstElement && childrenRef.current) {
            const firstFocusableElement = childrenRef.current.querySelector(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            ) as HTMLElement;

            if (firstFocusableElement) {
                firstFocusableElement.focus();
            }
        }
    }, []);

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (
            childrenRef.current &&
            childrenRef.current.contains(e.target as Node)
        ) {
            return;
        }
        if (e.currentTarget.contains(e.target as Node)) {
            onOverlayClick();
        }
        e.stopPropagation();
    };

    const motionProps = {
        initial: 'hidden',
        animate: 'visible',
        exit: 'exit',
        variants: {
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
            exit: { opacity: 0 },
        },
        transition: { duration: animationDuration },
    };

    return ReactDOM.createPortal(
        <StyledOverlay
            ref={ref}
            onClick={handleOverlayClick}
            $shouldTintOverlay={shouldTintOverlay}
            $shouldBlurOverlay={shouldBlurOverlay}
            $overlayColor={overlayColor}
            className={className}
            {...rest}
            {...motionProps}
        >
            <ThemeScope as={StyledOverlayContent} asProps={{
                $top: position.top,
                $left: position.left,
                $shouldCenterContent: shouldCenterContent,
            }}>
                <StyledOverlayContentChildren ref={childrenRef}>
                    {children}
                </StyledOverlayContentChildren>
            </ThemeScope>
        </StyledOverlay>,
        document.body
    );
});

export default Overlay;
