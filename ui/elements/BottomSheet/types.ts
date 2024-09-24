import React from 'react';

export interface BottomSheetProps {
    children?: React.ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    fullScreen?: boolean;
    closeOnBackdropClick?: boolean;
    height?: string;
    showDragHandle?: boolean;
    closeOnPullDown?: boolean;
}

export interface StyledDivProps extends React.HTMLAttributes<HTMLDivElement> {
    ref?: React.Ref<HTMLDivElement>;
}

export interface StyledBottomSheetWrapperProps extends StyledDivProps {
    $isOpen?: boolean;
}

export interface StyledBottomSheetProps extends StyledDivProps {
    $isOpen?: boolean;
    $height: string;
    $fullScreen?: boolean;
    $translateY?: number;
}

export interface StyledBottomSheetContentProps extends StyledDivProps {
    $height?: string;
}
