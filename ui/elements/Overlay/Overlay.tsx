import React, { forwardRef, useRef } from 'react';
import ReactDOM from 'react-dom';

import { useDisableBodyScroll } from '../../../hooks';
import { StyledOverlay } from './Overlay.styles';
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
        ...rest
    } = props;

    const childrenRef = useRef<HTMLDivElement>();

    useDisableBodyScroll(shouldDisableScroll);

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
            $shouldCenterContent={shouldCenterContent}
            {...rest}
            {...motionProps}
        >
            <div ref={childrenRef}>{children}</div>
        </StyledOverlay>,
        document.body
    );
});

export default Overlay;
