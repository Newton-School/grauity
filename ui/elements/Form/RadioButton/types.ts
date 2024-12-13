import React from 'react';

import { StyledInputProps } from '../../../../common/types';

export type RadioButtonSize = 'small' | 'medium' | 'large';
export type RadioButtonState = 'default' | 'error' | 'success';

export interface RadioButtonProps {
    /**
     * The name of the radio button group.
     * @type {string}
     */
    name: string;

    /**
     * The value of the radio button.
     * @type {string | number}
     */
    value: string | number;

    /**
     * The label for the radio button.
     * @type {string}
     * @default undefined
     */
    label?: string;

    /**
     * Indicates if the radio button is required.
     * @type {boolean}
     * @default false
     */
    isRequired?: boolean;

    /**
     * The size of the radio button.
     * @type {RadioButtonSize}
     * @default medium
     */
    size?: RadioButtonSize;

    /**
     * The state of the radio button.
     * @type {RadioButtonState}
     * @default default
     */
    state?: RadioButtonState;

    /**
     * The help message for the radio button.
     * @type {string}
     * @default undefined
     */
    helpMessage?: string;

    /**
     * The error message for the radio button.
     * @type {string}
     * @default undefined
     */
    errorMessage?: string;

    /**
     * The function to call when the radio button value changes.
     * @type {(event: React.ChangeEvent<HTMLInputElement>) => void}
     * @default undefined
     */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

    /**
     * Indicates if the radio button is checked initially.
     * @type {boolean}
     * @default false
     */
    checked?: boolean;

    /**
     * Indicates if the radio button is disabled.
     * @type {boolean}
     * @default false
     */
    disabled?: boolean;
}

export interface StyledRadioButtonInputProps extends StyledInputProps {
    $size?: RadioButtonSize;
    $state?: RadioButtonState;
}
