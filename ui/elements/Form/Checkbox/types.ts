import React from 'react';

import { StyledButtonProps } from '../../../../common/types';

export type CheckboxSize = 'small' | 'medium' | 'large';
export type CheckboxState = 'default' | 'error' | 'success';

export interface CheckboxProps {
    /**
     * The name of the checkbox button group.
     * @type {string}
     */
    name: string;

    /**
     * The value of the checkbox button.
     * @type {string | number}
     */
    value: string | number;

    /**
     * The label for the checkbox button.
     * @type {string}
     * @default undefined
     */
    label?: string;

    /**
     * Indicates if the checkbox button is required.
     * @type {boolean}
     * @default false
     */
    isRequired?: boolean;

    /**
     * The size of the checkbox button.
     * @type {CheckboxSize}
     * @default medium
     */
    size?: CheckboxSize;

    /**
     * The state of the checkbox button.
     * @type {CheckboxState}
     * @default default
     */
    state?: CheckboxState;

    /**
     * The help message for the checkbox button.
     * @type {string}
     * @default undefined
     */
    helpMessage?: string;

    /**
     * The error message for the checkbox button.
     * @type {string}
     * @default undefined
     */
    errorMessage?: string;

    /**
     * The function to call when the checkbox button value changes.
     * @type {(event: React.ChangeEvent<HTMLInputElement>) => void}
     * @default undefined
     */
    onChange?: (event: React.MouseEvent<HTMLButtonElement>) => void;

    /**
     * Indicates if the checkbox button is checked initially.
     * @type {boolean}
     * @default false
     */
    checked?: boolean;

    /**
     * Indicates if the checkbox button is disabled.
     * @type {boolean}
     * @default false
     */
    disabled?: boolean;
}

export interface StyledCheckboxInputProps extends StyledButtonProps {
    $size?: CheckboxSize;
    $state?: CheckboxState;
    $checked?: boolean;
}
