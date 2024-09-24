import React, { forwardRef, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

import { useClickAway, useDisableBodyScroll } from '../../../hooks';
import {
    StyledBottomSheet,
    StyledBottomSheetContent,
    StyledBottomSheetWrapper,
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

        const bottomSheetRef = useRef<HTMLDivElement>(null);

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

        useClickAway(bottomSheetRef, () => {
            if (closeOnBackdropClick) {
                onClose();
            }
        });

        useDisableBodyScroll(shouldRender);

        useEffect(() => {
            if (isOpen) {
                setShouldRender(true);
            } else if (!isClosing) {
                triggerClose();
            }
        }, [isOpen]);

        if (!shouldRender) {
            return null;
        }

        return ReactDOM.createPortal(
            <StyledBottomSheetWrapper ref={ref} $isOpen={isOpen} role="dialog">
                <StyledBottomSheet
                    ref={bottomSheetRef}
                    $isOpen={isOpen}
                    $height={height}
                    $fullScreen={fullScreen}
                    $translateY={translateY}
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
                        $height={!(showDragHandle || closeOnPullDown) && '100%'}
                    >
                        {children}
                    </StyledBottomSheetContent>
                </StyledBottomSheet>
            </StyledBottomSheetWrapper>,
            document.body
        );
    }
);

export default BottomSheet;
