import React, { useId } from 'react';

import { ErrorMessage } from '../ErrorMessage';
import { HelpMessage } from '../HelpMessage';
import {
    StyledRadioButton,
    StyledRadioButtonInput,
    StyledRadioButtonLabel,
    StyledRadioButtonWithMessage,
} from './RadioButton.styles';
import { RadioButtonProps } from './types';

const RadioButton = (props: RadioButtonProps) => {
    const {
        name,
        value,
        label,
        isRequired = false,
        size = 'medium',
        state = 'default',
        helpMessage,
        errorMessage,
        onChange = () => {},
        checked = false,
        isDisabled = false,
        className,
        color='brand',
    } = props;

    const id = useId();

    return (
        <StyledRadioButtonWithMessage>
            <StyledRadioButton className={className}>
                <StyledRadioButtonInput
                    aria-label={label}
                    aria-checked={checked}
                    id={`radio-button-${id}`}
                    $size={size}
                    $state={state}
                    type="radio"
                    name={name}
                    value={value}
                    onChange={(e) => {
                        onChange(e);
                    }}
                    disabled={isDisabled}
                    defaultChecked={checked}
                    $color={color}
                />
                {label && (
                    <StyledRadioButtonLabel
                        name={`radio-button-${id}`}
                        isRequired={isRequired}
                        isDisabled={isDisabled}
                        $size={size}
                        color={color === 'brand' ? 'primary' : color}
                    >
                        {label}
                    </StyledRadioButtonLabel>
                )}
            </StyledRadioButton>
            {helpMessage && <HelpMessage>{helpMessage}</HelpMessage>}
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </StyledRadioButtonWithMessage>
    );
};

export default RadioButton;
