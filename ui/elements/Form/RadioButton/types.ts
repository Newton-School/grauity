import React from 'react';

import { StyledInputProps } from '../../../../common/types';

export type RadioButtonSize = 'small' | 'medium' | 'large';
export type RadioButtonState = 'default' | 'error' | 'success';

export interface RadioButtonProps {
    /**
     * The name of the radio button group.
     */
    name: string;

    /**
     * The value of the radio button.
     */
    value: string | number;

    /**
     * The label for the radio button.
     * @default undefined
     */
    label?: string;

    /**
     * Indicates if the radio button is required.
     * @default false
     */
    isRequired?: boolean;

    /**
     * The size of the radio button.
     * @default medium
     */
    size?: RadioButtonSize;

    /**
     * The state of the radio button.
     * @default default
     */
    state?: RadioButtonState;

    /**
     * The help message for the radio button.
     * @default undefined
     */
    helpMessage?: string;

    /**
     * The error message for the radio button.
     * @default undefined
     */
    errorMessage?: string;

    /**
     * The function to call when the radio button value changes.
     * @default undefined
     */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

    /**
     * Indicates if the radio button is checked initially.s
     * @default false
     */
    checked?: boolean;

    /**
     * Indicates if the radio button is disabled.
     * @default false
     */
    isDisabled?: boolean;
}

export interface StyledRadioButtonInputProps extends StyledInputProps {
    $size?: RadioButtonSize;
    $state?: RadioButtonState;
}
