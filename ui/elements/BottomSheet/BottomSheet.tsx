import React, { forwardRef, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

import { useClickAway, useDisableBodyScroll } from '../../../hooks';
import {
    StyledBottomSheet,
    StyledBottomSheetWrapper,
} from './BottomSheet.styles';
import { ANIMATION_DURATION } from './constants';
import { BottomSheetProps } from './types';

const BottomSheet = forwardRef<HTMLDivElement, BottomSheetProps>(
    (props, ref) => {
        const {
            children,
            isOpen = false,
            onClose = () => {},
            fullScreen = false,
            closeOnBackdropClick = true,
            hideCloseButton = false,
            height = '50%',
        } = props;

        const [isClosing, setIsClosing] = useState(false);
        const [shouldRender, setShouldRender] = useState(isOpen);
        const bottomSheetRef = useRef<HTMLDivElement>(null);

        const triggerClose = () => {
            setIsClosing(true);
            setTimeout(() => {
                setIsClosing(false);
                setShouldRender(false);
                onClose();
            }, ANIMATION_DURATION);
        };

        useClickAway(bottomSheetRef, () => {
            if (closeOnBackdropClick) {
                onClose();
            }
        });

        useDisableBodyScroll();

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
            <StyledBottomSheetWrapper ref={ref} $isOpen={isOpen}>
                <StyledBottomSheet
                    ref={bottomSheetRef}
                    $isOpen={isOpen}
                    $height={height}
                    $fullScreen={fullScreen}
                >
                    {children}
                </StyledBottomSheet>
            </StyledBottomSheetWrapper>,
            document.body
        );
    }
);

export default BottomSheet;
