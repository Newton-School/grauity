import React, { forwardRef } from 'react';

import { ErrorMessage } from '../ErrorMessage';
import { HelpMessage } from '../HelpMessage';
import { Label } from '../Label';
import RadioButton from '../RadioButton/RadioButton';
import { StyledRadioButtonGroup } from './RadioButtonGroup.styles';
import { RadioButtonGroupProps } from './types';

const RadioButtonGroup = forwardRef<HTMLDivElement, RadioButtonGroupProps>(
    (props, ref) => {
        const {
            name,
            label,
            items = [],
            value = null,
            onChange = () => {},
            isRequired = false,
            helpMessage,
            errorMessage,
            className,
        } = props;

        return (
            <StyledRadioButtonGroup
                ref={ref}
                className={className}
                role="group"
            >
                {label && (
                    <Label name={name} isRequired={isRequired}>
                        {label}
                    </Label>
                )}
                {items.map((item) => (
                    <RadioButton
                        key={`${name}-${item.value}`}
                        name={name}
                        {...item}
                        checked={value === item.value}
                        onChange={(e) => {
                            onChange(e.target.value);
                        }}
                    />
                ))}
                {helpMessage && <HelpMessage>{helpMessage}</HelpMessage>}
                {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            </StyledRadioButtonGroup>
        );
    }
);

export default RadioButtonGroup;
