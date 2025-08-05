import React from 'react';
import { grauityIconName, grauityIconSizeName } from 'ui/core';

import {
    StyledButtonProps,
    StyledDivProps,
    StyledSpanProps,
} from '../../../common/types';
import {
    TAB_ICON_POSITIONS_ENUM,
    TAB_SIZES_ENUM,
    TAB_VARIANT_ENUM,
} from './constants';

export type TabIconPosition = `${TAB_ICON_POSITIONS_ENUM}`;

export type TabSize = `${TAB_SIZES_ENUM}`;

export type TabVariant = `${TAB_VARIANT_ENUM}`;

export interface TabProps {
    /**
     * Unique identifier for the tab, useful for testing or tracking.
     * @default ''
     * @type {string}
     */
    id?: string;
    /**
     * Size of the tab, can be 'small', 'medium', 'large' or 'extra-large'.
     * @default 'medium'
     */
    size: TabSize;
    /**
     * Additional CSS class names to apply to the tab.
     * @default ''
     */
    className?: string;
    /**
     * Inline styles to apply to the tab.
     * @default {}
     */
    style?: React.CSSProperties;
    /**
     * Content to display inside the tab.
     * Can be a string, number, or ReactNode.
     * @default null
     */
    children?: React.ReactNode;
    /**
     * Subtext to display below the main content of the tab.
     * Can be a string or ReactNode.
     * @default ''
     */
    subText?: React.ReactNode;
    /**
     * Icon to display in the tab.
     * Can be a string representing the icon name.
     * @default ''
     */
    icon?: grauityIconName;
    /**
     * Size of the icon
     * @default '20'
     */
    iconSize: grauityIconSizeName;
    /**
     * Position of the icon relative to the text, can be 'left', 'right', 'top', or 'bottom'.
     * @default 'left'
     */
    iconPosition: TabIconPosition;
    /**
     * Variant of the tab, can be 'rounded', 'default', or 'bordered'.
     * @default 'rounded'
     */
    variant: TabVariant;
    /**
     * Whether the tab is currently active.
     * @default false
     */
    isActive?: boolean;
    /**
     * Whether the tab is disabled.
     * @default false
     */
    disabled?: boolean;
    /**
     * Click event handler for the tab.
     * @default () => {}
     */
    onClick?: (e: any) => void;
}

export interface TabComponentProps extends StyledButtonProps {
    $iconPosition?: TabIconPosition | false;
    $size: TabSize;
    $isActive?: boolean;
    $disabled?: boolean;
    $variant: TabVariant;
}

export interface TabContainerProps extends StyledDivProps {}

export interface TabContentProps extends StyledDivProps {
    $iconPosition?: TabIconPosition | false;
    $size: TabSize;
}

export interface TabSubtextProps extends StyledSpanProps {
    $isActive?: boolean;
}
