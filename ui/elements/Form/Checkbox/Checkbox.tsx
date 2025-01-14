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
    checked = false,
    indeterminate = false,
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

        if (checked && indeterminate) {
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
                checked: !checked,
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
                    aria-checked={indeterminate ? 'mixed' : checked}
                    data-state={checked ? 'checked' : 'unchecked'}
                    $size={size}
                    $state={state}
                    $checked={checked}
                    onClick={handleCheckboxButtonClick}
                    disabled={isDisabled}
                    id={`checkbox-${id}`}
                    $indeterminate={indeterminate}
                    aria-labelledby={`checkbox-label-${id}`}
                >
                    {checked && !indeterminate && (
                        <Icon
                            size={getIconSize(size)}
                            name="check"
                            color="var(--text-action)"
                        />
                    )}
                    {indeterminate && (
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
