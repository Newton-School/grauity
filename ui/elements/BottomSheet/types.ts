import React from 'react';

export interface BottomSheetProps {
    children?: React.ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    fullScreen?: boolean;
    hideBackdrop?: boolean;
    hideCloseButton?: boolean;
    botttomOffset?: number;
}
