import React from 'react';

import { StyledInputProps } from '../../../../common/types';
import { TextFieldColors } from '../TextField/types';

export type OtpFieldColors = TextFieldColors;

export interface OtpInputFieldProps {
    /**
     * The initial value of the OTP input fields.
     * @default ''
     * @type string
     */
    value?: string;

    /**
     * The label displayed above the OTP input fields.
     * @type string
     */
    label?: string;

    /**
     * The value of the OTP input fields.
     * @type string
     */
    name: string;

    /**
     * The total number of OTP input fields.
     * @type number
     * @default 4
     */
    length?: number;

    /**
     * Callback triggered when the OTP value changes.
     * @param event - The event object containing the updated OTP value.
     * @type (event: { target: { name: string; value: string } }) => void
     */
    onChange: (event: { target: { name: string; value: string } }) => void;

    /**
     * Callback triggered when the whole OTP input field loses focus.
     * @param event - The event object containing the updated OTP value.
     * @type (event: { target: { name: string; value: string } }) => void
     */
    onBlur?: (event: { target: { name: string; value: string } }) => void;

    /**
     * Inline styles applied to the OTP input fields.
     * @type React.CSSProperties
     */
    style?: React.CSSProperties;

    /**
     * Indicates whether the entered OTP is correct.
     * @type boolean
     * @default false
     */
    isOtpCorrect?: boolean;

    /**
     * Indicates whether the entered OTP is incorrect.
     * @type boolean
     * @default false
     */
    isOtpWrong?: boolean;

    /**
     * Determines whether the OTP input fields are disabled.
     * @type boolean
     * @default false
     */
    isDisabled?: boolean;

    /**
     * The error message displayed when OTP validation fails.
     * @type string
     * @default 'Wrong OTP. Please try again'
     */
    errorMessage?: string;

    /**
     * The success message displayed when OTP validation succeeds.
     * @type string
     * @default 'OTP is correct'
     */
    successMessage?: string;

    /**
     * The color of the OTP input fields.
     * @default 'brand'
     */
    color?: OtpFieldColors;

    /**
     * Additional className for the OTP input field container.
     */
    className?: string;

    /**
     * The type attribute for the OTP input fields.
     * @default 'tel'
     * @type string
     */
    type?: string;
}

export interface StyledOtpInputProps extends StyledInputProps {
    /**
     * Indicates whether the entered OTP is correct.
     * @type boolean
     */
    $isOtpCorrect: boolean;

    /**
     * Indicates whether the entered OTP is incorrect.
     * @type boolean
     */
    $isOtpWrong: boolean;

    /**
     * The color of the OTP input fields.
     * @type OtpFieldColors
     */
    $color?: OtpFieldColors;
}
