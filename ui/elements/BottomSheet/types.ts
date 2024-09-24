import React from 'react';

export interface BottomSheetProps {
    children?: React.ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    fullScreen?: boolean;
    closeOnBackdropClick?: boolean;
    hideCloseButton?: boolean;
    height?: string;
}

export interface StyledDivProps extends React.HTMLAttributes<HTMLDivElement> {
    ref?: React.Ref<HTMLDivElement>;
}

export interface StyledBottomSheetProps extends StyledDivProps {
    $height: string;
    $fullScreen?: boolean;
}
