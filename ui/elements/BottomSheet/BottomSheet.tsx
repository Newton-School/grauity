import { AnimatePresence } from 'framer-motion';
import React, { forwardRef, useState } from 'react';

import Overlay from '../Overlay';
import {
    StyledBottomSheet,
    StyledBottomSheetContent,
    StyledDragHandle,
    StyledDragHandleContainer,
} from './BottomSheet.styles';
import {
    ANIMATION_DURATION_IN_MILLISECONDS,
    SWIPE_THRESHOLD,
} from './constants';
import { BottomSheetProps } from './types';

const BottomSheet = forwardRef<HTMLDivElement, BottomSheetProps>(
    (props, ref) => {
        const {
            children,
            isOpen = false,
            onClose = () => {},
            fullScreen = false,
            closeOnBackdropClick = true,
            height = '50vh',
            showDragHandle = true,
            closeOnPullDown = true,
            className,
            shouldDisableScroll = true,
            shouldFocusOnFirstElement = true,
        } = props;

        const [startY, setStartY] = useState<number | null>(null);
        const [translateY, setTranslateY] = useState(0);

        const handleClose = () => {
            setTranslateY(0);
            onClose();
        };

        const handleTouchStart = (e: React.TouchEvent) => {
            if (!closeOnPullDown) {
                return;
            }
            setStartY(e.touches[0].clientY);
        };

        const handleTouchMove = (e: React.TouchEvent) => {
            if (!closeOnPullDown) {
                return;
            }
            const translate = e.touches[0].clientY - startY;
            window.requestAnimationFrame(() => {
                setTranslateY(translate >= 0 ? translate : 0);
            });
        };

        const handleTouchEnd = () => {
            if (!closeOnPullDown) {
                return;
            }
            if (startY !== null) {
                if (translateY > SWIPE_THRESHOLD) {
                    handleClose();
                } else {
                    setTranslateY(0);
                }
            }
            setStartY(null);
        };

        const motionProps = {
            initial: 'hidden',
            animate: 'visible',
            exit: 'exit',
            variants: {
                hidden: { y: 0 },
                visible: { y: '-100%' },
                exit: { y: 0 },
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
                        data-testid="testid-bottomsheet-wrapper"
                        className={className}
                    >
                        <StyledBottomSheet
                            ref={ref}
                            $isOpen={isOpen}
                            $height={height}
                            $fullScreen={fullScreen}
                            $translateY={translateY}
                            role="dialog"
                            {...motionProps}
                        >
                            {(showDragHandle || closeOnPullDown) && (
                                <StyledDragHandleContainer
                                    onTouchStart={handleTouchStart}
                                    onTouchMove={handleTouchMove}
                                    onTouchEnd={handleTouchEnd}
                                >
                                    <StyledDragHandle />
                                </StyledDragHandleContainer>
                            )}
                            <StyledBottomSheetContent
                                $height={
                                    !(showDragHandle || closeOnPullDown) &&
                                    '100%'
                                }
                            >
                                {children}
                            </StyledBottomSheetContent>
                        </StyledBottomSheet>
                    </Overlay>
                )}
            </AnimatePresence>
        );
    }
);

export default BottomSheet;
