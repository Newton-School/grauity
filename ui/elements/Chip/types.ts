import React from 'react';
import { grauityIconName, grauityIconSizeName } from 'ui/core';

import { StyledDivProps } from '../../../common/types';
import { ButtonIconPositions } from '../Button/types';

export type ChipVariants =
    | 'brand'
    | 'success'
    | 'error'
    | 'warning'
    | 'yellow'
    | 'purple'
    | 'disabled'
    | 'action-brand'
    | 'action-success'
    | 'action-error'
    | 'action-warning'
    | 'action-yellow'
    | 'action-purple';

export type ChipSizes = 'small' | 'medium' | 'large' | 'extra-large';

/**
 * Properties for the Chip component.
 */
export interface ChipProps {
    /**
     * Variant of the chip.
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
     * Icon to be displayed in the button.
     * */
    icon?: grauityIconName;

    /**
     * Size of the icon
     * */
    iconSize?: grauityIconSizeName;

    /**
     * Position of the icon
     *
     * Available choices: `left`, `right`
     *
     * Default: `left`
     * */
    iconPosition?: ButtonIconPositions;

    /**
     * Additional styles to be used over the element
     *
     * Default: `{}`
     * */
    style?: React.CSSProperties;
}

export interface StyledChip extends StyledDivProps {
    variant?: ChipVariants;
    size?: ChipSizes;
    hasBorder?: boolean;
    textColor?: string | null;
    backgroundColor?: string | null;
    borderColor?: string | null;
    rounded?: boolean;
    ref?: React.Ref<HTMLDivElement>;
    iconPosition?: 'left' | 'right';
}
