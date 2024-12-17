import React from 'react';

import { StyledTextAreaProps } from '../../../../common/types';
import { VARIANTS_SIZES } from './constant';

export type VARIANTS = `${VARIANTS_SIZES}`;

export interface TextAreaProps {
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
     * variant of the input field.
     * @type {VARIANTS}
     */
    size?: VARIANTS;

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
     * @type {(event: React.ChangeEvent<HTMLTextAreaElement>) => void}
     */
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;

    /**
     * The function to call when the input field is clicked (focused).
     * @type {(event: React.MouseEvent<HTMLTextAreaElement>) => void}
     */
    onClick?: (event: React.MouseEvent<HTMLTextAreaElement>) => void;

    /**
     * The function to call when the input field is blurred (unfocused/clicked away).
     * @type {(event: React.FocusEvent<HTMLTextAreaElement>) => void}
     */
    onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;

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
     * The number of columns for the input field.
     * @type {number}
     */
    cols?: number;

    /**
     * The number of rows for the input field.
     * @type {number}
     */
    rows?: number;

    /**
     * The maximum length of the input field.
     * @type {number}
     */
    maxLength?: number;

    /**
     * Whether the input field is read-only.
     * @type {boolean}
     * @default false
     */
    readOnly?: boolean;
}

export interface TextAreaComponentProps extends StyledTextAreaProps {
    size?: VARIANTS;
}
