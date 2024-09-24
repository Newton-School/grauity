import React from 'react';

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
     */
    variant?: ChipVariants;

    /**
     * Size of the chip.
     */
    size?: ChipSizes;

    /**
     * Flag to determine if the chip should have a border.
     */
    hasBorder?: boolean;

    /**
     * Text color of the chip.
     */
    textColor?: string;

    /**
     * Background color of the chip.
     */
    backgroundColor?: string;

    /**
     * Border color of the chip.
     */
    borderColor?: string;

    /**
     * Content to be displayed inside the chip.
     */
    children?: React.ReactNode;
}

export interface StyledChip extends React.HTMLAttributes<HTMLDivElement> {
    variant?: ChipVariants;
    size?: ChipSizes;
    hasBorder?: boolean;
    textColor?: string | null;
    backgroundColor?: string | null;
    borderColor?: string | null;
    ref?: React.Ref<HTMLDivElement>;
}

export interface ChipFontSize {
    fontSize: string;
}
