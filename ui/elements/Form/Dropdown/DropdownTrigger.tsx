import React, { forwardRef } from 'react';

import { Icon } from '../../Icon';
import { ErrorMessage } from '../ErrorMessage';
import { HelpMessage } from '../HelpMessage';
import { Label } from '../Label';
import { StyledDropdown, StyledDropdownTrigger } from './Dropdown.styles';
import { DropdownTriggerInternalProps } from './types';

const DropdownTrigger = forwardRef<
    HTMLDivElement,
    DropdownTriggerInternalProps
>((props, ref) => {
    const {
        name,
        label,
        placeholder = 'Select',
        isRequired = false,
        isDisabled = false,
        helpMessage,
        errorMessage,
        onTriggerClick = () => {},
    } = props;

    return (
        <StyledDropdown ref={ref}>
            {label && (
                <Label
                    name={name}
                    isRequired={isRequired}
                    isDisabled={isDisabled}
                >
                    {label}
                </Label>
            )}
            <StyledDropdownTrigger
                name={name}
                variant="secondary-outlined"
                fullWidth
                onClick={() => onTriggerClick()}
            >
                <span>{placeholder}</span>
                <Icon name="chevron-down" />
            </StyledDropdownTrigger>
            {helpMessage && <HelpMessage>{helpMessage}</HelpMessage>}
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </StyledDropdown>
    );
});

export default DropdownTrigger;
