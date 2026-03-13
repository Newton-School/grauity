import React from 'react';
import { grauityIconName, grauityIconSizeName } from 'ui/core';

import { StyledDivProps } from '../../../common/types';
import { ButtonIconPositions } from '../Button/types';

type LegacyCompatibleString = string & Record<never, never>;

export type ChipTypes =
    | 'brand'
    | 'success'
    | 'error'
    | 'warning'
    | 'yellow'
    | 'purple'
    | 'neutral';

export type ChipStates = 'default' | 'filled';

/**
 * Deprecated: use `type` + `state` instead.
 * Kept broad intentionally for backward compatibility with existing variants.
 */
export type ChipVariants = LegacyCompatibleString;

/**
 * Design supports `small` and `medium`.
 * Kept broad intentionally for backward compatibility.
 */
export type ChipSizes = 'small' | 'medium' | LegacyCompatibleString;

/**
 * Properties for the Chip component.
 */
export interface ChipProps {
    /**
     * Type of the chip.
     * @default 'brand'
     */
    type?: ChipTypes;

    /**
     * State of the chip.
     * @default 'default'
     */
    state?: ChipStates;

    /**
     * Renders the darker background variant.
     * @default false
     */
    darkerbg?: boolean;

    /**
     * Adds border around chip.
     * @default false
     */
    withborder?: boolean;

    /**
     * Deprecated: use `type` + `state` instead.
     * @default 'brand'
     */
    variant?: ChipVariants;

    /**
     * Size of the chip.
     * @default 'medium'
     */
    size?: ChipSizes;

    /**
     * Flag to determine if the chip should have a border.
     * @default false
     */
    hasBorder?: boolean;

    /**
     * Text color of the chip.
     * @default null
     */
    textColor?: string;

    /**
     * Background color of the chip.
     * @default null
     */
    backgroundColor?: string;

    /**
     * Border color of the chip.
     * @default null
     */
    borderColor?: string;

    /**
     * Flag to determine if the chip should be rounded.
     * @default false
     * */
    rounded?: boolean;

    /**
     * Content to be displayed inside the chip.
     */
    children?: React.ReactNode;

    /**
     * Icon to be displayed in the Chip.
     * @default null
     * */
    icon?: grauityIconName;

    /**
     * Size of the icon
     * @default '12'
     * */
    iconSize?: grauityIconSizeName;

    /**
     * Position of the icon
     * @default 'left'
     * */
    iconPosition?: ButtonIconPositions;

    /**
     * Color of the icon
     * @default 'inherit'
     * */
    iconColor?: string;

    /**
     * Additional styles to be used over the element
     * @default {}
     * */
    style?: React.CSSProperties;

    /**
     * Additional className to be passed to the chip
     * @default ''
     */
    className?: string;
}

export interface StyledChip extends StyledDivProps {
    $size?: ChipSizes;
    $withborder?: boolean;
    $baseTextColor?: string;
    $baseBackgroundColor?: string;
    $baseBorderColor?: string;
    $textColor?: string | null;
    $backgroundColor?: string | null;
    $borderColor?: string | null;
    $rounded?: boolean;
    ref?: React.Ref<HTMLDivElement>;
    $iconPosition?: ButtonIconPositions;
}

export interface StyledChipTextProps {
    $iconPosition?: ButtonIconPositions;
}
