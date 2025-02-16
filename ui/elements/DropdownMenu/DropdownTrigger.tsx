import React from 'react';

import { ErrorMessage } from '../Form/ErrorMessage';
import { Label } from '../Form/Label';
import { Icon } from '../Icon';
import {
    StyledDropdownDefaultTrigger,
    StyledDropdownDefaultTriggerButton,
} from './DropdownMenu.styles';

const DropdownTrigger = ({
    label = 'Select',
    children = 'Select',
    errorMessage = '',
    isRequired = false,
}) => {
    return (
        <StyledDropdownDefaultTrigger>
            <Label name={label} isRequired={isRequired}>
                {label}
            </Label>
            <StyledDropdownDefaultTriggerButton
                name={label}
                variant="secondary-outlined"
                fullWidth
                onClick={(e) => {
                    e.preventDefault();
                }}
            >
                <span>{children}</span>
                <Icon name="chevron-down" />
            </StyledDropdownDefaultTriggerButton>
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </StyledDropdownDefaultTrigger>
    );
};

export default DropdownTrigger;
