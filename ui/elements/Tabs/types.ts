import React from 'react';

import { StyledDivProps } from '../../../common/types';

export interface TabContainerProps extends StyledDivProps {
    backgroundColor?: string;
}

export interface TabItemContainerProps
    extends React.HTMLAttributes<HTMLDivElement> {
    isActive?: boolean;
    backgroundColor?: string;
    children: React.ReactNode;
}

export interface TabProps {
    tabItems: [React.ReactNode, React.ReactNode];
    onTabFocusChange?: (tabIndex: number) => void;
    backgroundColor?: string;
}
