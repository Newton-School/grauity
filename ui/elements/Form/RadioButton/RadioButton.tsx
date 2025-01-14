import React, { useState } from 'react';

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

    const [isChecked, setIsChecked] = useState(checked);

    return (
        <StyledRadioButtonWithMessage>
            <StyledRadioButton>
                <StyledRadioButtonInput
                    $size={size}
                    $state={state}
                    type="radio"
                    name={name}
                    value={value}
                    onChange={(e) => {
                        setIsChecked(!isChecked);
                        onChange(e);
                    }}
                    checked={isChecked}
                    disabled={isDisabled}
                />
                {label && (
                    <StyledRadioButtonLabel name={name} isRequired={isRequired}>
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
