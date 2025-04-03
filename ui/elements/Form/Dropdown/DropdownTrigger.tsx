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
    HTMLButtonElement | HTMLDivElement,
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
        color = 'brand',
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
            <StyledCustomTrigger
                ref={ref as React.Ref<HTMLDivElement>}
                onClick={() => onTriggerClick()}
            >
                {trigger}
            </StyledCustomTrigger>
        );
    }

    return (
        <StyledDropdown>
            {label && (
                <Label
                    name={name}
                    isRequired={isRequired}
                    isDisabled={isDisabled}
                    color={color === 'brand' ? 'primary' : color}
                >
                    {label}
                </Label>
            )}
            <StyledDropdownTrigger
                ref={ref as React.Ref<HTMLButtonElement>}
                id={name}
                name={name}
                variant="secondary"
                color={color === 'brand' ? 'neutral' : color}
                fullWidth
                onClick={() => onTriggerClick()}
                showAnimationOnClick={false}
            >
                <span>{getCurrentValue()}</span>
                <Icon name="chevron-down" color="currentColor" />
            </StyledDropdownTrigger>
            {helpMessage && <HelpMessage>{helpMessage}</HelpMessage>}
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </StyledDropdown>
    );
});

export default DropdownTrigger;
