import React from 'react';

import { StyledDivProps } from '../../../common/types';

export interface BottomSheetProps {
    /**
     * The content to be displayed inside the BottomSheet.
     */
    children?: React.ReactNode;

    /**
     * Determines whether the BottomSheet is open or closed.
     * @default false
     */
    isOpen?: boolean;

    /**
     * Callback function to be called when the BottomSheet is requested to be closed.
     * @default () => {}
     */
    onClose?: () => void;

    /**
     * If true, the BottomSheet will take up the full screen.
     * @default false
     */
    fullScreen?: boolean;

    /**
     * If true, the BottomSheet will close when the backdrop is clicked.
     * @default true
     */
    closeOnBackdropClick?: boolean;

    /**
     * The height of the BottomSheet.
     * @default '50%'
     */
    height?: string;

    /**
     * If true, a drag handle will be shown at the top of the BottomSheet.
     * @default true
     */
    showDragHandle?: boolean;

    /**
     * If true, the BottomSheet will close when pulled down.
     * @default true
     */
    closeOnPullDown?: boolean;
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
