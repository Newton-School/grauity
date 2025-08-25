import { ReactNode } from 'react';

import { StyledDivProps } from '../../../common/types';
import { TabSize, TabVariant } from '../Tab/types';

export interface TabListProps {
    /**
     * Children elements to be rendered inside the TabList.
     */
    children?: ReactNode;
    /**
     * Index of the currently active tab.
     */
    activeIndex?: number;
    /**
     * Callback function to handle tab change.
     * @param index - Index of the tab that was clicked.
     */
    onChange?: (index: number) => void;
    /**
     * Variant of the TabList, can be 'bordered' or 'rounded'.
     * @default 'bordered'
     */
    variant?: TabVariant;
    /**
     * Additional CSS class names to apply to the TabList.
     */
    className?: string;
    /**
     * ARIA label for the TabList.
     * @default 'Tab list'
     */
    ariaLabel?: string;
    /**
     * Size of the tab, can be 'small', 'medium', 'large' or 'extra-large'.
     * @default 'medium'
     */
    size?: TabSize;
}

export interface StyledTabListProps extends StyledDivProps {
    $variant: TabVariant;
}
