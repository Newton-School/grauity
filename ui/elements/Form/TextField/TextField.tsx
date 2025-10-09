import React, {
    forwardRef,
    useId,
    useLayoutEffect,
    useRef,
    useState,
} from 'react';

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

const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
    const {
        name,
        value = '',
        label,
        placeholder,
        type = 'text',
        inputMode = 'text',
        pattern,
        helpMessage,
        errorMessage,
        maxLength,
        isRequired = false,
        isDisabled = false,
        isReadOnly = false,
        autoFocus = false,
        autoComplete = 'on',
        onChange = () => {},
        onClick = () => {},
        onBlur = () => {},
        onKeyDown = () => {},
        size = 'medium',
        adornments,
        color = 'brand',
        min,
        max,
        step,
        className,
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

    const handleInputClick = (event: React.MouseEvent<HTMLInputElement>) => {
        onClick(event);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event);
    };

    const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        onBlur(event);
    };

    return (
        <StyledTextInputFieldContainer className={className}>
            {label && (
                <Label
                    name={name}
                    isRequired={isRequired}
                    color={color === 'brand' ? 'primary' : color}
                >
                    {label}
                </Label>
            )}

            <StyledTextFieldContainer
                ref={inputContainerRef}
                $size={size}
                $isDisabled={isDisabled}
            >
                {adornments?.start && (
                    <StyledTextFieldLeftAdornment id={startAdornmentId}>
                        {adornments?.start}
                    </StyledTextFieldLeftAdornment>
                )}
                <StyledTextFieldInput
                    ref={ref}
                    type={type}
                    inputMode={inputMode}
                    pattern={pattern}
                    min={min}
                    max={max}
                    step={step}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    readOnly={isReadOnly}
                    disabled={isDisabled}
                    onChange={handleInputChange}
                    onClick={handleInputClick}
                    onBlur={handleInputBlur}
                    onKeyDown={onKeyDown}
                    autoComplete={autoComplete}
                    autoFocus={autoFocus}
                    $size={size}
                    $adornmentDimensions={adornmentDimensions}
                    $color={color}
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

            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </StyledTextInputFieldContainer>
    );
});

export default TextField;
