import React from 'react';

import { StyledTextAreaProps } from '../../../../common/types';
import { TextFieldColors } from '../TextField/types';
import { VARIANTS_SIZES } from './constant';

export type VARIANTS = `${VARIANTS_SIZES}`;

export type TextAreaColors = TextFieldColors;

export interface TextAreaProps {
    /**
     * The name of the input field. Required.
     */
    name: string;

    /**
     * The label for the input field.
     */
    label?: string;

    /**
     * variant of the input field.
     * @default 'medium'
     */
    size?: VARIANTS;

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
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;

    /**
     * The function to call when the input field is clicked (focused).
     */
    onClick?: (event: React.MouseEvent<HTMLTextAreaElement>) => void;

    /**
     * The function to call when the input field is blurred (unfocused/clicked away).
     */
    onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;

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
     * @type {boolean}
     * @default false
     */
    autoFocus?: boolean;

    /**
     * The help message to display below the input field.
     */
    helpMessage?: string;

    /**
     * The number of columns for the input field.
     */
    cols?: number;

    /**
     * The number of rows for the input field.
     */
    rows?: number;

    /**
     * The maximum length of the input field.
     * @type {number}
     */
    maxLength?: number;

    /**
     * Color of the textarea input field.
     * @default 'brand'
     */
    color?: TextAreaColors;

    /**
     * Additional className for the TextArea container.
     */
    className?: string;
}

export interface TextAreaComponentProps extends StyledTextAreaProps {
    size?: VARIANTS;
    $color?: TextAreaColors;
}
