import React, { useState } from 'react';

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
        label,
        value,
        isRequired = false,
        validationMessage,
        helpMessage,
        errorMessage,
        onChange = () => {},
        checked = false,
        size = 'medium',
        state = 'default',
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
                />
                {label && (
                    <StyledRadioButtonLabel name={name} isRequired={isRequired}>
                        {label}
                    </StyledRadioButtonLabel>
                )}
            </StyledRadioButton>
            {helpMessage && <HelpMessage>{helpMessage}</HelpMessage>}
        </StyledRadioButtonWithMessage>
    );
};

export default RadioButton;
