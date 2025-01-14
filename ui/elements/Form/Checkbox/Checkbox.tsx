import React, { useId } from 'react';

import { Icon } from '../../Icon';
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

/**
 * A checkbox is a form element that allows the user to select one or more options from a set of choices.
 */
const Checkbox: React.FC<CheckboxProps> = ({
    name,
    label,
    isRequired = false,
    size = 'medium',
    state = 'default',
    helpMessage,
    errorMessage,
    onChange = () => {},
    isChecked = false,
    isIndeterminate = false,
    isDisabled = false,
    value,
}) => {
    const id = useId();

    const handleCheckboxButtonClick = (
        e: React.MouseEvent<HTMLButtonElement>
    ) => {
        if (isDisabled) {
            return;
        }

        if (isChecked && isIndeterminate) {
            onChange({
                ...e,
                target: {
                    ...e.target,
                    name,
                    value,
                    checked: false,
                },
            } as any);
            return;
        }

        onChange({
            ...e,
            target: {
                ...e.target,
                name,
                value,
                checked: !isChecked,
            },
        } as any);
    };

    return (
        <StyledCheckboxWithMessage>
            <StyledCheckbox>
                <StyledCheckboxButton
                    type="button"
                    role="checkbox"
                    name={name}
                    aria-checked={isIndeterminate ? 'mixed' : isChecked}
                    data-state={isChecked ? 'checked' : 'unchecked'}
                    $size={size}
                    $state={state}
                    $checked={isChecked}
                    onClick={handleCheckboxButtonClick}
                    disabled={isDisabled}
                    id={`checkbox-${id}`}
                    $indeterminate={isIndeterminate}
                    aria-labelledby={`checkbox-label-${id}`}
                >
                    {isChecked && !isIndeterminate && (
                        <Icon
                            size={getIconSize(size)}
                            name="check"
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
                        name={`checkbox-${id}`}
                        isRequired={isRequired}
                        isDisabled={isDisabled}
                        id={`checkbox-label-${id}`}
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
