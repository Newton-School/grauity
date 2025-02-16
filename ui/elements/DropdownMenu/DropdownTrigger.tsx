import React from 'react';

import { ErrorMessage } from '../Form/ErrorMessage';
import { Label } from '../Form/Label';
import { Icon } from '../Icon';
import {
    StyledDropdownDefaultTrigger,
    StyledDropdownDefaultTriggerButton,
} from './DropdownMenu.styles';
import { DropdownTriggerProps } from './types';

const DropdownTrigger = ({
    label,
    placeholder = 'Select',
    children,
    errorMessage = '',
    isRequired = false,
}: DropdownTriggerProps) => {
    return (
        <StyledDropdownDefaultTrigger>
            {label && (
                <Label name={label} isRequired={isRequired}>
                    {label}
                </Label>
            )}
            <StyledDropdownDefaultTriggerButton
                name={label}
                variant="secondary-outlined"
                fullWidth
                onClick={(e) => {
                    e.preventDefault();
                }}
            >
                <span>{children || placeholder}</span>
                <Icon name="chevron-down" />
            </StyledDropdownDefaultTriggerButton>
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </StyledDropdownDefaultTrigger>
    );
};

export default DropdownTrigger;
