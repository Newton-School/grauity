import { AnimatePresence } from 'framer-motion';
import React, { forwardRef } from 'react';

import Overlay from '../Overlay';
import { ANIMATION_DURATION_IN_MILLISECONDS } from './constants';
import { StyledDrawer, StyledDrawerContent } from './Drawer.styles';
import { DrawerProps } from './types';

const Drawer = forwardRef<HTMLDivElement, DrawerProps>((props, ref) => {
    const {
        children,
        isOpen = false,
        onClose = () => {},
        fullScreen = false,
        closeOnBackdropClick = true,
        width = '30%',
        side = 'left',
        className,
        shouldDisableScroll = true,
        shouldFocusOnFirstElement = true,
    } = props;

    const handleClose = () => {
        onClose();
    };

    const motionProps = {
        initial: 'hidden',
        animate: 'visible',
        exit: 'exit',
        variants: {
            hidden: { x: side === 'left' ? '-100%' : '100%' },
            visible: { x: '0%' },
            exit: { x: side === 'left' ? '-100%' : '100%' },
        },
        transition: { duration: ANIMATION_DURATION_IN_MILLISECONDS / 1000 },
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <Overlay
                    shouldFocusOnFirstElement={shouldFocusOnFirstElement}
                    shouldDisableScroll={isOpen && shouldDisableScroll}
                    shouldTintOverlay
                    onOverlayClick={() => {
                        if (closeOnBackdropClick) {
                            handleClose();
                        }
                    }}
                    animationDuration={
                        ANIMATION_DURATION_IN_MILLISECONDS / 1000
                    }
                    data-testid="testid-drawer-wrapper"
                    className={className}
                >
                    <StyledDrawer
                        ref={ref}
                        $isOpen={isOpen}
                        $width={width}
                        $fullScreen={fullScreen}
                        $side={side}
                        role="dialog"
                        {...motionProps}
                    >
                        <StyledDrawerContent>{children}</StyledDrawerContent>
                    </StyledDrawer>
                </Overlay>
            )}
        </AnimatePresence>
    );
});

export default Drawer;
