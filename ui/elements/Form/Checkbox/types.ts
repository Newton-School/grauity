import React from 'react';
import { ACTION_COLORS } from 'ui/core';

import { StyledButtonProps } from '../../../../common/types';

export type CheckboxSize = 'small' | 'medium' | 'large';
export type CheckboxState = 'default' | 'error' | 'success';

export type CheckboxColors = `${ACTION_COLORS}`;

export interface CheckboxProps {
    /**
     * The name of the checkbox group.
     */
    name: string;

    /**
     * The label for the checkbox.
     * @default undefined
     */
    label?: string;

    /**
     * Indicates if the checkbox is required.
     * @default false
     */
    isRequired?: boolean;

    /**
     * The size of the checkbox.
     * @default medium
     */
    size?: CheckboxSize;

    /**
     * The state of the checkbox.
     * @deprecated Use color prop instead
     * @default default
     */
    state?: CheckboxState;

    /**
     * The help message for the checkbox.
     * @default undefined
     */
    helpMessage?: string;

    /**
     * The error message for the checkbox.
     * @default undefined
     */
    errorMessage?: string;

    /**
     * The function to call when the checkbox value changes.
     * @default () => {}
     */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

    /**
     * Controls the current checked state of the checkbox.
     *
     * This is a controlled prop. You must manage this value in the parent component,
     * and update it based on user interaction via the `onChange` callback.
     *
     * @default false
     */
    isChecked?: boolean;

    /**
     * Indicates if the checkbox is disabled.
     * @default false
     */
    isDisabled?: boolean;

    /**
     * Indicates if the checkbox is indeterminate. Has precedence over `checked`.
     * @default false
     */
    isIndeterminate?: boolean;

    /**
     * The value of the checkbox.
     * @default undefined
     */
    value?: string | number;

    /**
     * Additional class names to apply to the checkbox.
     * @default undefined
     */
    className?: string;

    /**
     * The color of the checkbox.
     * @default brand
     */
    color?: CheckboxColors;
}

export interface StyledCheckboxInputProps extends StyledButtonProps {
    $size?: CheckboxSize;
    $state?: CheckboxState;
    $checked?: boolean;
    $indeterminate?: boolean;
    $color?: CheckboxColors;
}
