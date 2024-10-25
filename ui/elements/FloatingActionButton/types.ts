import React from 'react';

import { StyledDivProps } from '../../../common/types';

export type FloatingButtonPosition = 'left' | 'mid' | 'right';

export interface FloatingActionButtonProps {
    /**
     * The element to be rendered as the floating button.
     * @default null
     */
    children?: React.ReactNode;

    /**
     * The position of the floating button.
     * @default 'right'
     */
    position?: FloatingButtonPosition;

    /**
     * Function to be called when the floating button is clicked.
     * @param triggerRef - The reference to the floating button element.
     */
    onClick?: (triggerRef: React.MutableRefObject<HTMLDivElement>) => void;

    /**
     * The offset of the floating button from the side boundaries.
     * @default '10px'
     */
    sideOffset?: string;

    /**
     * The offset of the floating button from the bottom boundary.
     * @default '10px'
     */
    bottomOffset?: string;
}

export interface StyledFloatingButtonProps extends StyledDivProps {
    $position: FloatingButtonPosition;
    $sideOffset: string;
    $bottomOffset: string;
}
