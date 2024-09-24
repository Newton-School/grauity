import React, { forwardRef, useRef } from 'react';
import ReactDOM from 'react-dom';

import { useClickAway, useDisableBodyScroll } from '../../../hooks';
import {
    StyledBottomSheet,
    StyledBottomSheetWrapper,
} from './BottomSheet.styles';
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

        const bottomSheetRef = useRef<HTMLDivElement>(null);

        useClickAway(bottomSheetRef, () => {
            if (closeOnBackdropClick) {
                onClose();
            }
        });

        useDisableBodyScroll();

        if (!isOpen) {
            return null;
        }

        return ReactDOM.createPortal(
            <StyledBottomSheetWrapper ref={ref}>
                <StyledBottomSheet
                    ref={bottomSheetRef}
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
