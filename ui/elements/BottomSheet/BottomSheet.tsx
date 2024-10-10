import { AnimatePresence } from 'framer-motion';
import React, { forwardRef, useEffect, useState } from 'react';

import Overlay from '../Overlay';
import {
    StyledBottomSheet,
    StyledBottomSheetContent,
    StyledDragHandle,
    StyledDragHandleContainer,
} from './BottomSheet.styles';
import { ANIMATION_DURATION, SWIPE_THRESHOLD } from './constants';
import { BottomSheetProps } from './types';

const BottomSheet = forwardRef<HTMLDivElement, BottomSheetProps>(
    (props, ref) => {
        const {
            children,
            isOpen = false,
            onClose = () => {},
            fullScreen = false,
            closeOnBackdropClick = true,
            height = '50%',
            showDragHandle = true,
            closeOnPullDown = true,
        } = props;

        const [isClosing, setIsClosing] = useState(false);
        const [shouldRender, setShouldRender] = useState(isOpen);
        const [startY, setStartY] = useState<number | null>(null);
        const [translateY, setTranslateY] = useState(0);

        const triggerClose = () => {
            setIsClosing(true);
            setTimeout(() => {
                setIsClosing(false);
                setShouldRender(false);
                setStartY(null);
                setTranslateY(0);
                onClose();
            }, ANIMATION_DURATION);
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
                    onClose();
                } else {
                    setTranslateY(0);
                }
            }
            setStartY(null);
        };

        useEffect(() => {
            if (isOpen) {
                setShouldRender(true);
            } else if (!isClosing) {
                triggerClose();
            }
        }, [isOpen]);

        const motionProps = {
            initial: 'hidden',
            animate: 'visible',
            exit: 'exit',
            variants: {
                hidden: { y: 0 },
                visible: { y: '-100%' },
                exit: { y: 0 },
            },
            transition: { duration: ANIMATION_DURATION / 1000 },
        };

        return (
            <AnimatePresence>
                {isOpen && (
                    <Overlay
                        shouldDisableScroll={shouldRender}
                        shouldTintOverlay
                        onOverlayClick={() => {
                            if (closeOnBackdropClick) {
                                onClose();
                            }
                        }}
                        animationDuration={ANIMATION_DURATION / 1000}
                        data-testid="testid-bottomsheet-wrapper"
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
