import React from 'react';
import { grauityIconName } from 'ui/core';

import { ButtonColors } from '../Button/types';

export enum PILL_SIZES_ENUM {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
}

export type PillSize = `${PILL_SIZES_ENUM}`;

export type PillColor = Exclude<ButtonColors, 'neutral'> | 'purple' | 'yellow';

export interface PillProps {
    /**
     * Pill label.
     */
    children?: React.ReactNode;

    /**
     * Optional count to show in the pill.
     */
    count?: number;

    /**
     * Icon name to be displayed on the left.
     * @default null
     */
    leftIconName?: grauityIconName;

    /**
     * Icon name to be displayed on the right.
     */
    rightIconName?: grauityIconName;

    /**
     * Highlights the pill in brand (blue) state.
     * @default false
     */
    isActive?: boolean;

    /**
     * Disables the pill and applies disabled styles.
     * @default false
     */
    isDisabled?: boolean;

    /**
     * Disables the pill and applies read-only styles.
     * @default false
     */
    isReadOnly?: boolean;

    /**
     * Size of the pill.
     * @default 'medium'
     */
    size?: PillSize;

    /**
     * Color of the pill when active.
     * @default 'brand'
     */
    color?: PillColor;

    /**
     * Additional class name.
     */
    className?: string;

    /**
     * Additional styles.
     */
    style?: React.CSSProperties;

    /**
     * Callback when pill is clicked.
     */
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

    /**
     * Aria label for the pill.
     */
    ariaLabel?: string;
}

export interface StyledPillButtonProps {
    $size: PillSize;
    $isActive?: boolean;
    $isDisabled?: boolean;
    $isReadOnly?: boolean;
    $color?: PillColor;
}

export interface StyledPillLabelProps {
    $isReadOnly?: boolean;
}

export interface StyledPillCountIndicatorProps {
    $isActive?: boolean;
    $isDisabled?: boolean;
    $isReadOnly?: boolean;
    $color?: PillColor;
    $height?: string;
}

export interface StyledPillContentProps {
    $isActive?: boolean;
}
