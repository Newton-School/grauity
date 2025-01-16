import React from 'react';

import { StyledInputProps } from '../../../../common/types';

export interface OtpInputFieldProps {
    /**
     * The value of the OTP input field.
     * @type string
     */
    value: string;

    /**
     * The total number of OTP input fields.
     * @type number
     */
    length: number;

    /**
     * Callback triggered when the OTP value changes.
     * @param value - The updated OTP value as a string.
     * @type (value: string) => void
     */
    onChange: (value: string) => void;

    /**
     * Inline styles applied to the OTP input fields.
     * @type React.CSSProperties
     */
    style: React.CSSProperties;

    /**
     * Indicates whether the entered OTP is correct.
     * @type boolean
     */
    isOtpCorrect: boolean;

    /**
     * Indicates whether the entered OTP is incorrect.
     * @type boolean
     */
    isOtpWrong: boolean;

    /**
     * Determines whether the OTP input fields are disabled.
     * @type boolean
     */
    isDisabled: boolean;

    /**
     * The error message displayed when OTP validation fails.
     * @type string
     */
    errorMessage: string;

    /**
     * The success message displayed when OTP validation succeeds.
     * @type string
     */
    successMessage: string;
}

export interface StyledOtpInputProps extends StyledInputProps {
    /**
     * Indicates whether the entered OTP is correct.
     * @type boolean
     */
    isOtpCorrect: boolean;

    /**
     * Indicates whether the entered OTP is incorrect.
     * @type boolean
     */
    isOtpWrong: boolean;

    /**
     * Determines whether the OTP input field is disabled.
     * @type boolean
     */
    disabled: boolean;
}
