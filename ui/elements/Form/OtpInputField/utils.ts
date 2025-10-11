/**
 * Splits the OTP value into an array of individual digits.
 * @param value - The OTP value as a string.
 * @param length - The desired length of the OTP input fields.
 * @returns An array of individual OTP digits or empty strings.
 *
 * @example
 * getSplitOtpValue('1234', 4) -> ['1', '2', '3', '4']
 *
 * @example
 * getSplitOtpValue('12', 4) -> ['1', '2', '', '']
 *
 * @example
 * getSplitOtpValue('', 4) -> ['', '', '', '']
 */
export const getSplitOtpValue = (value: string, length: number) =>
    value ? value.split?.('').slice?.(0, length) : Array(length).fill('');
