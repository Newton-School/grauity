import React, { useState } from 'react';

import { ErrorMessage } from '../ErrorMessage';
import { HelpMessage } from '../HelpMessage';
import { Label } from '../Label';
import {
    StyledTextField,
    StyledTextFieldContainer,
    StyledTextInputFieldContainer,
} from './index.styles';
import { TextFieldProps } from './types';

const TextField = (props: TextFieldProps) => {
    const {
        name,
        value = '',
        label,
        placeholder,
        validationMessage,
        helpMessage,
        errorMessage,
        maxLength,
        isRequired = false,
        isDisabled = false,
        autoFocus = false,
        autoComplete = 'on',
        onChange = () => {},
        onClick = () => {},
        onBlur = () => {},
    } = props;

    const getIsValid = (targetValue: string) => {
        const satisfiesMinLength = isRequired ? targetValue.length > 0 : true;
        const satisfiesMaxLength = maxLength
            ? targetValue.length <= maxLength
            : true;
        return satisfiesMinLength && satisfiesMaxLength;
    };

    const [isInputValid, setIsInputValid] = useState(getIsValid(value));

    const handleInputClick = (event: React.MouseEvent<HTMLInputElement>) => {
        onClick(event);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event);
        const isValid = getIsValid(event.target.value);
        setIsInputValid(isValid);
    };

    const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        onBlur(event);
    };

    return (
        <StyledTextInputFieldContainer>
            {label && (
                <Label name={name} isRequired={isRequired}>
                    {label}
                </Label>
            )}

            <StyledTextFieldContainer tabIndex={0}>
                <StyledTextField
                    disabled={isDisabled}
                    type="text"
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleInputChange}
                    onClick={handleInputClick}
                    onBlur={handleInputBlur}
                    autoComplete={autoComplete}
                    autoFocus={autoFocus}
                    tabIndex={-1}
                />
            </StyledTextFieldContainer>

            <HelpMessage currentLength={value?.length} maxLength={maxLength}>
                {helpMessage}
            </HelpMessage>

            {(!isInputValid || errorMessage) && validationMessage && (
                <ErrorMessage>{errorMessage || validationMessage}</ErrorMessage>
            )}
        </StyledTextInputFieldContainer>
    );
};

export default TextField;
