import React, { useId, useState } from 'react';
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
import { getIconSize } from './utils';

const Checkbox: React.FC<CheckboxProps> = ({
    name,
    label,
    isRequired = false,
    size = 'medium',
    state = 'default',
    helpMessage,
    errorMessage,
    onChange = () => {},
    checked = false,
    indeterminate = false,
    isDisabled = false,
}) => {
    const id = useId();

    const [isChecked, setIsChecked] = useState<boolean>(checked);
    const [isIndeterminate, setIsIndeterminate] =
        useState<boolean>(indeterminate);
    const toggleCheckbox = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (isDisabled) {
            return;
        }
        if (isIndeterminate) {
            setIsIndeterminate(false);
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
                    aria-checked={indeterminate ? 'mixed' : isChecked}
                    data-state={isChecked ? 'checked' : 'unchecked'}
                    $size={size}
                    $state={state}
                    $checked={isChecked}
                    onClick={toggleCheckbox}
                    disabled={isDisabled}
                    id={`checkbox-${id}`}
                    $indeterminate={isIndeterminate}
                    aria-labelledby={`checkbox-${id}`}
                >
                    {isChecked && !isIndeterminate && (
                        <Icon
                            size={getIconSize(size)}
                            name="check-filled"
                            color="var(--text-action)"
                        />
                    )}
                    {isIndeterminate && (
                        <Icon
                            size={getIconSize(size)}
                            name="remove"
                            color="var(--text-action)"
                        />
                    )}
                </StyledCheckboxButton>
                {label && (
                    <StyledCheckboxLabel
                        name={name}
                        isRequired={isRequired}
                        disabled={isDisabled}
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
