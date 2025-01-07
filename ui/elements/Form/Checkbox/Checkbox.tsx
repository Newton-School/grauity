import React, { useState } from 'react';
import { Icon } from 'ui/elements/Icon';

import { ErrorMessage } from '../ErrorMessage';
import { HelpMessage } from '../HelpMessage';
import {
    StyledCheckbox,
    StyledCheckboxButton,
    StyledCheckboxLabel,
    StyledCheckboxWithMessage,
} from './Checkbox.styles';
import { CheckboxProps } from './types';

const Checkbox: React.FC<CheckboxProps> = ({
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
    disabled = false,
}) => {
    const [isChecked, setIsChecked] = useState<boolean>(checked);

    const toggleCheckbox = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (disabled) {
            return;
        }
        setIsChecked((prev) => !prev);
        onChange(e);
    };

    return (
        <StyledCheckboxWithMessage>
            <StyledCheckbox>
                <StyledCheckboxButton
                    type="button"
                    role="checkbox"
                    aria-checked={isChecked}
                    data-state={isChecked ? 'checked' : 'unchecked'}
                    $size={size}
                    $state={state}
                    $checked={isChecked}
                    onClick={toggleCheckbox}
                    disabled={disabled}
                    id={name}
                    value={value}
                >
                    {isChecked && (
                        <Icon
                            name="check-square-filled"
                            color={
                                isChecked
                                    ? 'var(--text-brand, #0673F9)'
                                    : 'var(--text-disabled, #8C95A6)'
                            }
                        />
                    )}
                </StyledCheckboxButton>
                {label && (
                    <StyledCheckboxLabel
                        name={name}
                        isRequired={isRequired}
                        disabled={disabled}
                    >
                        {label}
                    </StyledCheckboxLabel>
                )}
            </StyledCheckbox>
            {helpMessage && <HelpMessage>{helpMessage}</HelpMessage>}
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </StyledCheckboxWithMessage>
    );
};

export default Checkbox;
