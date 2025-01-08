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
    } = props;

    const id = useId();

    return (
        <StyledRadioButtonWithMessage>
            <StyledRadioButton>
                <StyledRadioButtonInput
                    aria-labelledby={label}
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
                />
                {label && (
                    <StyledRadioButtonLabel
                        name={`radio-button-${id}`}
                        isRequired={isRequired}
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
