import React, { HTMLInputTypeAttribute } from 'react';
import { ACTION_COLORS } from 'ui/core';

import { StyledDivProps, StyledInputProps } from '../../../../common/types';
import { TEXT_FIELD_SIZES } from './constants';

export type TextFieldSize = `${TEXT_FIELD_SIZES}`;

export type TextFieldColors = `${ACTION_COLORS}`;

export type InputAdornmentType = React.ReactNode;

export interface InputAdornments {
    /**
     * The start adornment for the input field.
     * @type {InputAdornmentType}
     * */
    start?: InputAdornmentType;

    /**
     * The end adornment for the input field.
     * @type {InputAdornmentType}
     * */
    end?: InputAdornmentType;
}

export interface TextFieldProps {
    /**
     * The name of the input field. Required.
     */
    name: string;

    /**
     * The label for the input field.
     */
    label?: string;

    /**
     * Whether the input field is required.
     * @default false
     */
    isRequired?: boolean;

    /**
     * The placeholder text for the input field.
     */
    placeholder?: string;

    /**
     * The type of the input field.
     * @default 'text'
     */
    type?: HTMLInputTypeAttribute;

    /**
     * The input mode for the input field.
     * @default 'text'
     */
    inputMode?:
        | 'none'
        | 'text'
        | 'search'
        | 'email'
        | 'tel'
        | 'url'
        | 'numeric'
        | 'decimal'
        | undefined;

    /**
     * The pattern for the input field.
     */
    pattern?: string;

    /**
     * The minimum value for the input field.
     */
    min?: number;

    /**
     * The maximum value for the input field.
     */
    max?: number;

    /**
     * The step value for the input field.
     */
    step?: number;

    /**
     * The validation message to display when the input field is invalid.
     */
    validationMessage?: string;

    /**
     * The input value.
     * @default ''
     */
    value?: string;

    /**
     * Whether to disable the input field.
     * @default false
     */
    isDisabled?: boolean;

    /**
     * Whether the input field is read-only.
     * @default false
     */
    isReadOnly?: boolean;

    /**
     * The function to call when the input value is changed.
     */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

    /**
     * The function to call when the input field is clicked (focused).
     */
    onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;

    /**
     * The function to call when the input field is blurred (unfocused/clicked away).
     */
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;

    /**
     * The error message to display when the input field is invalid.
     */
    errorMessage?: string;

    /**
     * The autocomplete attribute for the input field.
     * @default 'on'
     */
    autoComplete?: string;

    /**
     * Whether the input field should autofocus.
     * @default false
     */
    autoFocus?: boolean;

    /**
     * The help message to display below the input field.
     */
    helpMessage?: string;

    /**
     * The maximum length of the input field.
     */
    maxLength?: number;

    /**
     * The size of the input field.
     * @default 'medium'
     */
    size?: TextFieldSize;

    /**
     * The adornments to display on the input field.
     */
    adornments?: InputAdornments;

    /**
     * The color of the input field.
     */
    color?: TextFieldColors;
}

export interface StyledTextFieldInputProps extends StyledInputProps {
    $size?: TextFieldSize;
    $adornmentDimensions?: {
        start: number;
        end: number;
    };
    $color?: TextFieldColors;
}

export interface StyledTextFieldContainerProps extends StyledDivProps {
    $size?: TextFieldSize;
    $isDisabled?: boolean;
}
