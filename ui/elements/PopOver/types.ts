import React from 'react';

export type PopOverDirection = 'top' | 'right' | 'bottom' | 'left';

export type PopOverOffset = {
    top?: number;
    left?: number;
    bottom?: number;
    right?: number;
};

export interface PopOverProps {
    trigger: React.ReactNode;
    direction?: PopOverDirection;
    children?: React.ReactNode;
    autoAdjust?: boolean;
    parentRef?: React.RefObject<HTMLDivElement>;
    minimumOffset?: PopOverOffset;
}

export interface StyledDivProps extends React.HTMLAttributes<HTMLDivElement> {
    ref?: React.Ref<HTMLDivElement>;
}

export interface StyledPopOverContainerProps extends StyledDivProps {
    $offset?: PopOverOffset;
}
