import React from 'react';

import { StyledButtonProps } from '../../../../common/types';

export type CheckboxSize = 'small' | 'medium' | 'large';
export type CheckboxState = 'default' | 'error' | 'success';

export interface CheckboxProps {
    /**
     * The name of the checkbox group.
     * @type {string}
     */
    name: string;

    /**
     * The label for the checkbox.
     * @type {string}
     * @default undefined
     */
    label?: string;

    /**
     * Indicates if the checkbox is required.
     * @type {boolean}
     * @default false
     */
    isRequired?: boolean;

    /**
     * The size of the checkbox.
     * @type {CheckboxSize}
     * @default medium
     */
    size?: CheckboxSize;

    /**
     * The state of the checkbox.
     * @type {CheckboxState}
     * @default default
     */
    state?: CheckboxState;

    /**
     * The help message for the checkbox.
     * @type {string}
     * @default undefined
     */
    helpMessage?: string;

    /**
     * The error message for the checkbox.
     * @type {string}
     * @default undefined
     */
    errorMessage?: string;

    /**
     * The function to call when the checkbox value changes.
     * @type {(event: React.ChangeEvent<HTMLInputElement>) => void}
     * @default undefined
     */
    onChange?: (event: React.MouseEvent<HTMLElement>) => void;

    /**
     * Indicates if the checkbox is checked initially.
     * @type {boolean}
     * @default false
     */
    checked?: boolean;

    /**
     * Indicates if the checkbox is disabled.
     * @type {boolean}
     * @default false
     */
    isDisabled?: boolean;

    /**
     * Indicates if the checkbox is indeterminate.
     * @type {boolean}
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
