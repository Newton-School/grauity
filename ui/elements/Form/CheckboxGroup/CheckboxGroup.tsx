import React, { forwardRef } from 'react';

import Checkbox from '../Checkbox/Checkbox';
import { ErrorMessage } from '../ErrorMessage';
import { HelpMessage } from '../HelpMessage';
import { Label } from '../Label';
import { StyledCheckboxGroup } from './CheckboxGroup.styles';
import { CheckboxGroupProps } from './types';

const CheckboxGroup = forwardRef<HTMLDivElement, CheckboxGroupProps>(
    (props, ref) => {
        const {
            name,
            label,
            options = [],
            value = [],
            onChange = () => {},
            isRequired = false,
            helpMessage,
            errorMessage,
            className,
        } = props;

        return (
            <StyledCheckboxGroup ref={ref} className={className}>
                {label && (
                    <Label name={name} isRequired={isRequired}>
                        {label}
                    </Label>
                )}
                {options.map((option) => (
                    <Checkbox
                        key={`${name}-${option.value}`}
                        name={name}
                        {...option}
                        isChecked={value.includes(option.value)}
                        onChange={(e) => {
                            if (e.target.checked) {
                                onChange([...value, option.value]);
                            } else {
                                onChange(
                                    value.filter((v) => v !== option.value)
                                );
                            }
                        }}
                    />
                ))}
                {helpMessage && <HelpMessage>{helpMessage}</HelpMessage>}
                {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            </StyledCheckboxGroup>
        );
    }
);

export default CheckboxGroup;
