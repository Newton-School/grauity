import React from 'react';

import { StyledButtonProps } from '../../../../common/types';

export type CheckboxSize = 'small' | 'medium' | 'large';
export type CheckboxState = 'default' | 'error' | 'success';

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
     * @default undefined
     */
    onChange?: (event: React.MouseEvent<HTMLElement>) => void;

    /**
     * Indicates if the checkbox is checked initially.
     * @default false
     */
    checked?: boolean;

    /**
     * Indicates if the checkbox is disabled.
     * @default false
     */
    isDisabled?: boolean;

    /**
     * Indicates if the checkbox is indeterminate. Has precedence over `checked`.
     * @default false
     */
    indeterminate?: boolean;
}

export interface StyledCheckboxInputProps extends StyledButtonProps {
    $size?: CheckboxSize;
    $state?: CheckboxState;
    $checked?: boolean;
    $indeterminate?: boolean;
}
