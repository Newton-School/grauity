import React, { useRef, useState } from 'react';

import { ErrorMessage } from '../ErrorMessage';
import { SuccessMessage } from '../SuccessMessage';
import {
    StyledOtpContainer,
    StyledOtpInput,
    StyledOtpInputField,
} from './OtpInputField.styles';
import { OtpInputFieldProps } from './types';

const OtpInputField = ({
    value = '',
    length,
    onChange,
    style,
    isOtpCorrect = false,
    isOtpWrong = false,
    isDisabled = false,
    errorMessage = 'Wrong OTP. Please try again',
    successMessage = 'OTP is correct',
}: OtpInputFieldProps) => {
    const inputRefs = useRef<Array<HTMLInputElement | null>>(
        Array(length).fill(null)
    );
    const [otpValue, setOtpValue] = useState(() => {
        const valueArray = value ? value.split('') : [];
        return valueArray.concat(
            Array(Math.max(0, length - valueArray.length)).fill('')
        );
    });

    const handleChange = (
        event: React.FormEvent<HTMLInputElement>,
        index: number
    ) => {
        const newValue = (event.target as HTMLInputElement).value;
        if (newValue.length > 1 || !/^\d*$/.test(newValue)) {
            return;
        }
        const updatedOtpValue = [...otpValue];
        updatedOtpValue[index] = newValue;
        setOtpValue(updatedOtpValue);
        onChange(updatedOtpValue.join(''));

        if (index < length - 1 && newValue !== '') {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (
        event: React.KeyboardEvent<HTMLInputElement>,
        index: number
    ) => {
        switch (event.key) {
            case 'ArrowUp':
            case 'ArrowDown':
            case ' ':
                event.preventDefault();
                break;
            case 'ArrowLeft':
                event.preventDefault();
                if (index > 0) {
                    inputRefs.current[index - 1]?.focus();
                    inputRefs.current[index - 1]?.select();
                }
                break;
            case 'ArrowRight':
                event.preventDefault();
                if (index < length - 1) {
                    inputRefs.current[index + 1]?.focus();
                    inputRefs.current[index + 1]?.select();
                }
                break;
            case 'Backspace':
                if (!otpValue[index] && index > 0) {
                    inputRefs.current[index - 1]?.focus();
                    inputRefs.current[index - 1]?.select();
                }
                break;
            default:
                break;
        }
    };

    const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
        event.preventDefault();
        const pastedData = event.clipboardData
            .getData('text')
            .replace(/[^0-9]/g, '');
        const otpArray = pastedData.split('');
        const updatedOtpValue = [...otpValue];

        const focusedIndex = inputRefs.current.findIndex(
            (ref) => ref === document.activeElement
        );

        if (focusedIndex !== -1) {
            otpArray.forEach((newValue, index) => {
                const targetIndex = focusedIndex + index;
                if (targetIndex < length) {
                    updatedOtpValue[targetIndex] = newValue;
                    inputRefs.current[targetIndex]?.focus();
                }
            });
        }

        setOtpValue(updatedOtpValue);
        onChange(updatedOtpValue.join(''));
    };

    return (
        <StyledOtpInputField>
            <StyledOtpContainer>
                {Array.from({ length }).map((_, index) => {
                    return (
                        <StyledOtpInput
                            key={`otp-input-field-${index + 1}`}
                            ref={(el) => {
                                inputRefs.current[index] = el;
                            }}
                            as="input"
                            style={style}
                            placeholder="-"
                            value={otpValue[index] || ''}
                            onInput={(e) => handleChange(e, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            maxLength={1}
                            onPaste={(e) => handlePaste(e)}
                            onFocus={(e) => e.target.select()}
                            isOtpCorrect={isOtpCorrect}
                            isOtpWrong={isOtpWrong}
                            disabled={isDisabled}
                        />
                    );
                })}
            </StyledOtpContainer>
            {isOtpWrong && (
                <ErrorMessage iconSize="16">{errorMessage}</ErrorMessage>
            )}
            {isOtpCorrect && (
                <SuccessMessage iconSize="16">{successMessage}</SuccessMessage>
            )}
        </StyledOtpInputField>
    );
};

export default OtpInputField;
