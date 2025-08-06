import React from 'react';

import { StyledDivProps } from '../../../common/types';

export interface StyledTabContainerProps extends StyledDivProps {
    backgroundColor?: string;
}

export interface StyledTextProps extends StyledDivProps {
    color?: string;

    /**
     * Additional class name for the tabs container
     * @default ''
     */
    className?: string;
}

export interface StyledTabItemContainerProps
    extends React.HTMLAttributes<HTMLDivElement> {
    isActive?: boolean;
    backgroundColor?: string;
    focusColor?: string;
    color?: string;
    focusBackgroundColor?: string;
}

export interface TabsProps {
    /**
     * An array of tab items to be rendered.
     * Each item can be a React node.
     */
    tabItems: React.ReactNode[];

    /**
     * Callback function that is called when the focused tab changes.
     * @param tabIndex - The index of the newly focused tab.
     */
    onTabFocusChange?: (tabIndex: number) => void;

    /**
     * Background color for the tab component.
     */
    backgroundColor?: string;

    /**
     * The index of the tab that should be initially focused.
     * @default 0
     */
    initialActiveTab?: number;

    /**
     * Focus tab color
     */
    focusBackgroundColor?: string;

    /**
     * Focus tab text color
     */
    focusColor?: string;

    /**
     *  Default Color
     */
    color?: string;

    /**
     * Additional class name for the tabs container
     * @default ''
     */
    className?: string;
}
