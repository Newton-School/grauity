import React, { useState } from 'react';

import { ErrorMessage } from '../ErrorMessage';
import { HelpMessage } from '../HelpMessage';
import { Label } from '../Label';
import { StyledTextArea, StyledTextAreaFieldContainer } from './index.styles';
import { TextAreaProps } from './types';

const TextArea = (props: TextAreaProps) => {
    const {
        name,
        value = '',
        label,
        size = 'medium',
        placeholder,
        validationMessage,
        helpMessage,
        errorMessage,
        maxLength,
        isRequired = false,
        isReadOnly = false,
        isDisabled = false,
        autoFocus = false,
        autoComplete = 'on',
        cols = 4,
        rows = 3,
        onChange = () => {},
        onClick = () => {},
        onBlur = () => {},
        color = 'brand',
    } = props;

    const getIsValid = (targetValue: string) => {
        const satisfiesMinLength = isRequired ? targetValue.length > 0 : true;
        const satisfiesMaxLength = maxLength
            ? targetValue.length <= maxLength
            : true;
        return satisfiesMinLength && satisfiesMaxLength;
    };

    const [isInputValid, setIsInputValid] = useState(getIsValid(value));

    const handleInputClick = (
        event: React.MouseEvent<HTMLTextAreaElement, MouseEvent>
    ) => {
        onClick(event);
    };

    const handleInputChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        onChange(event);
        const isValid = getIsValid(event.target.value);
        setIsInputValid(isValid);
    };

    const handleInputBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => {
        onBlur(event);
    };

    return (
        <StyledTextAreaFieldContainer>
            {label && (
                <Label
                    name={name}
                    isRequired={isRequired}
                    color={color === 'brand' ? 'primary' : color}
                >
                    {label}
                </Label>
            )}
            <StyledTextArea
                id={name}
                name={name}
                placeholder={placeholder}
                value={value}
                disabled={isDisabled}
                readOnly={isReadOnly}
                onClick={handleInputClick}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                autoComplete={autoComplete}
                autoFocus={autoFocus}
                cols={cols}
                rows={rows}
                tabIndex={0}
                $size={size}
                $color={color}
            />
            {helpMessage && (
                <HelpMessage
                    currentLength={value?.length}
                    maxLength={maxLength}
                >
                    {helpMessage}
                </HelpMessage>
            )}
            {!isInputValid && (errorMessage || validationMessage) && (
                <ErrorMessage>{errorMessage || validationMessage}</ErrorMessage>
            )}
        </StyledTextAreaFieldContainer>
    );
};
export default TextArea;
