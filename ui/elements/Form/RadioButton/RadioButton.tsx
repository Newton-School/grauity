import React, { useState } from 'react';

import { Label } from '../Label';
import {
    StyledRadioButton,
    StyledRadioButtonInput,
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
        <StyledRadioButton>
            <StyledRadioButtonInput
                type="radio"
                name={name}
                value={value}
                onChange={(e) => {
                    setIsChecked(!isChecked);
                    onChange(e);
                }}
                checked={isChecked}
                disabled
            />
            {label && (
                <Label name={name} isRequired={isRequired}>
                    {label}
                </Label>
            )}
        </StyledRadioButton>
    );
};

export default RadioButton;
