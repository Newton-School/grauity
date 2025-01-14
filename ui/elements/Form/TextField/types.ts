import React from 'react';

import { StyledDivProps, StyledInputProps } from '../../../../common/types';
import { TEXT_FIELD_SIZES } from './constants';

export type TextFieldSize = `${TEXT_FIELD_SIZES}`;

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
     * @type {string}
     */
    name: string;

    /**
     * The label for the input field.
     * @type {string}
     */
    label?: string;

    /**
     * Whether the input field is required.
     * @type {boolean}
     * @default false
     */
    isRequired?: boolean;

    /**
     * The placeholder text for the input field.
     * @type {string}
     */
    placeholder?: string;

    /**
     * The validation message to display when the input field is invalid.
     * @type {string}
     */
    validationMessage?: string;

    /**
     * The input value.
     * @type {string}
     * @default ''
     */
    value?: string;

    /**
     * Whether to disable the input field.
     * @type {boolean}
     * @default false
     */
    isDisabled?: boolean;

    /**
     * The function to call when the input value is changed.
     * @type {(event: React.ChangeEvent<HTMLInputElement>) => void}
     */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

    /**
     * The function to call when the input field is clicked (focused).
     * @type {(event: React.MouseEvent<HTMLInputElement>) => void}
     */
    onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;

    /**
     * The function to call when the input field is blurred (unfocused/clicked away).
     * @type {(event: React.FocusEvent<HTMLInputElement>) => void}
     */
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;

    /**
     * The error message to display when the input field is invalid.
     * @type {string}
     */
    errorMessage?: string;

    /**
     * The autocomplete attribute for the input field.
     * @type {string}
     * @default 'on'
     */
    autoComplete?: string;

    /**
     * Whether the input field should autofocus.
     * @type {boolean}
     * @default false
     */
    autoFocus?: boolean;

    /**
     * The help message to display below the input field.
     * @type {string}
     */
    helpMessage?: string;

    /**
     * The maximum length of the input field.
     * @type {number}
     */
    maxLength?: number;

    /**
     * The size of the input field.
     * @type {string}
     * @default 'medium'
     */
    size?: TextFieldSize;

    /**
     * The adornments to display on the input field.
     * @type {InputAdornments}
     */
    adornments?: InputAdornments;
}

export interface StyledTextFieldInputProps extends StyledInputProps {
    $size?: TextFieldSize;
    $adornmentDimensions?: {
        start: number;
        end: number;
    };
}

export interface StyledTextFieldContainerProps extends StyledDivProps {
    $size?: TextFieldSize;
    $isDisabled?: boolean;
}
