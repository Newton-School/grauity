import React, { useEffect, useId, useLayoutEffect, useRef, useState } from 'react';

import { ErrorMessage } from '../ErrorMessage';
import { HelpMessage } from '../HelpMessage';
import { Label } from '../Label';
import {
    StyledTextFieldContainer,
    StyledTextFieldInput,
    StyledTextFieldLeftAdornment,
    StyledTextFieldRightAdornment,
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
        required = false,
        disabled = false,
        autoFocus = false,
        autoComplete = 'on',
        onChange = () => {},
        onClick = () => {},
        onBlur = () => {},
        size = 'medium',
        adornments,
    } = props;

    const inputContainerRef = useRef(null);

    const id = useId();

    const startAdornmentId = `start-adornment-${id}`;
    const endAdornmentId = `end-adornment-${id}`;

    const [adornmentDimensions, setAdornmentDimensions] = useState({
        start: 0,
        end: 0,
    });

    useLayoutEffect(() => {
        if (inputContainerRef.current) {
            const startAdornmentElement =
                document.getElementById(startAdornmentId);
            const endAdornmentElement = document.getElementById(endAdornmentId);
            const startAdornmentWidth = startAdornmentElement
                ? startAdornmentElement.offsetWidth
                : 0;
            const endAdornmentWidth = endAdornmentElement
                ? endAdornmentElement.offsetWidth
                : 0;
            setAdornmentDimensions({
                start: startAdornmentWidth,
                end: endAdornmentWidth,
            });
        }
    }, [adornments?.start, adornments?.end]);

    const getIsValid = (targetValue: string) => {
        const satisfiesMinLength = required ? targetValue.length > 0 : true;
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
                <Label name={name} required={required}>
                    {label}
                </Label>
            )}

            <StyledTextFieldContainer
                ref={inputContainerRef}
                $size={size}
                $disabled={disabled}
            >
                {adornments?.start && (
                    <StyledTextFieldLeftAdornment id={startAdornmentId}>
                        {adornments?.start}
                    </StyledTextFieldLeftAdornment>
                )}
                <StyledTextFieldInput
                    disabled={disabled}
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
                    $size={size}
                    $adornmentDimensions={adornmentDimensions}
                />
                {adornments?.end && (
                    <StyledTextFieldRightAdornment id={endAdornmentId}>
                        {adornments?.end}
                    </StyledTextFieldRightAdornment>
                )}
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
