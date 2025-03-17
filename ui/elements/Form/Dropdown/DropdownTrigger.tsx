import React, { forwardRef } from 'react';

import { BaseItemOptionProps } from '../../DropdownMenu';
import { Icon } from '../../Icon';
import { ErrorMessage } from '../ErrorMessage';
import { HelpMessage } from '../HelpMessage';
import { Label } from '../Label';
import {
    StyledCustomTrigger,
    StyledDropdown,
    StyledDropdownTrigger,
} from './Dropdown.styles';
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
        showSelectedValueOnTrigger = true,
        onTriggerClick = () => {},
        selectedValues = [],
        multiple = false,
        trigger,
    } = props;

    const getCurrentValue = (): string => {
        if (!showSelectedValueOnTrigger) {
            return placeholder;
        }
        if (multiple && Array.isArray(selectedValues)) {
            return selectedValues?.length
                ? `${selectedValues.length} selected`
                : placeholder;
        }
        if (!multiple) {
            return (
                (selectedValues as BaseItemOptionProps)?.label ||
                (selectedValues as BaseItemOptionProps[])?.[0]?.label ||
                placeholder
            );
        }
        return placeholder;
    };

    if (trigger) {
        return (
            <StyledCustomTrigger ref={ref} onClick={() => onTriggerClick()}>
                {trigger}
            </StyledCustomTrigger>
        );
    }

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
                id={name}
                name={name}
                variant="secondary-outlined"
                fullWidth
                onClick={() => onTriggerClick()}
            >
                <span>{getCurrentValue()}</span>
                <Icon name="chevron-down" />
            </StyledDropdownTrigger>
            {helpMessage && <HelpMessage>{helpMessage}</HelpMessage>}
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </StyledDropdown>
    );
});

export default DropdownTrigger;
