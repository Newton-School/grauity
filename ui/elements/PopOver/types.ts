import React from 'react';

export type PopOverDirection =
    | 'topLeft'
    | 'top'
    | 'topRight'
    | 'right'
    | 'bottomRight'
    | 'bottom'
    | 'bottomLeft'
    | 'left';

export type PopOverOffset = {
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
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
    $direction?: PopOverDirection;
    $offset?: PopOverOffset;
}
