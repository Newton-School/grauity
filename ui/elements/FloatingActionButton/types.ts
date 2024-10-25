import React from 'react';

import { StyledDivProps } from '../../../common/types';

export type FloatingButtonPosition = 'left' | 'mid' | 'right';

export interface FloatingActionButtonProps {
    children?: React.ReactNode;
    position?: FloatingButtonPosition;
    onClick?: (triggerRef: React.MutableRefObject<HTMLDivElement>) => void;
    sideOffset?: string;
    bottomOffset?: string;
}

export interface StyledFloatingButtonProps extends StyledDivProps {
    $position: FloatingButtonPosition;
    $sideOffset: string;
    $bottomOffset: string;
}
