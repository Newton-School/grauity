import { AnimatePresence } from 'framer-motion';
import React, { forwardRef } from 'react';

import { IconButton } from '../Button';
import Overlay from '../Overlay';
import {
    StyledDrawer,
    StyledDrawerContent,
    StyledDrawerHeader,
    StyledDrawerSubtitle,
    StyledDrawerTitle,
} from './Drawer.styles';
import {
    DRAWER_ANIMATION_DURATION_IN_MILLISECONDS,
} from './constants';
import { DrawerProps } from './types';

const Drawer = forwardRef<HTMLDivElement, DrawerProps>((props, ref) => {
    const {
        isOpen = false,
        onClose = () => {},
        side = 'right',
        closeOnBackdropClick = true,
        fullScreen = false,
        width = '400px',
        height = '50%',
        showCloseButton = true,
        title = null,
        subtitle = null,
        children,
        className,
        shouldDisableScroll = true,
        shouldFocusOnFirstElement = true,
    } = props;

    const motionProps = {
        initial: 'hidden',
        animate: 'visible',
        exit: 'exit',
        variants: {
            left: { hidden: { x: '-100%' }, visible: { x: 0 }, exit: { x: '-100%' } },
            right: { hidden: { x: '100%' }, visible: { x: 0 }, exit: { x: '100%' } },
            top: { hidden: { y: '-100%' }, visible: { y: 0 }, exit: { y: '-100%' } },
            bottom: { hidden: { y: '100%' }, visible: { y: 0 }, exit: { y: '100%' } },
        }[side],
        transition: { duration: DRAWER_ANIMATION_DURATION_IN_MILLISECONDS / 1000 },
    };

    const handleOverlayClick = () => {
        if (closeOnBackdropClick) {
            onClose();
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <Overlay
                    shouldFocusOnFirstElement={shouldFocusOnFirstElement}
                    shouldDisableScroll={isOpen && shouldDisableScroll}
                    shouldTintOverlay
                    onOverlayClick={handleOverlayClick}
                    animationDuration={
                        DRAWER_ANIMATION_DURATION_IN_MILLISECONDS / 1000
                    }
                    data-testid="testid-drawer-wrapper"
                    className={className}
                >
                    <StyledDrawer
                        ref={ref}
                        $side={side}
                        $fullScreen={fullScreen}
                        $width={width}
                        $height={height}
                        role="dialog"
                        {...motionProps}
                    >
                        {(title || subtitle || showCloseButton) && (
                            <StyledDrawerHeader>
                                <div>
                                    {title && <StyledDrawerTitle>{title}</StyledDrawerTitle>}
                                    {subtitle && (
                                        <StyledDrawerSubtitle>{subtitle}</StyledDrawerSubtitle>
                                    )}
                                </div>
                                {showCloseButton && (
                                    <IconButton
                                        icon="close"
                                        variant="tertiary"
                                        color="neutral"
                                        size="small"
                                        onClick={onClose}
                                        ariaLabel="Close"
                                    />
                                )}
                            </StyledDrawerHeader>
                        )}
                        <StyledDrawerContent>{children}</StyledDrawerContent>
                    </StyledDrawer>
                </Overlay>
            )}
        </AnimatePresence>
    );
});

export { type DrawerProps };
export default Drawer;
