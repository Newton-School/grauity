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
            items = [],
            value = [],
            onChange = () => {},
            isRequired = false,
            helpMessage,
            errorMessage,
            color = 'brand',
            className,
        } = props;

        return (
            <StyledCheckboxGroup ref={ref} className={className} role="group">
                {label && (
                    <Label
                        name={name}
                        isRequired={isRequired}
                        color={color === 'brand' ? 'primary' : color}
                    >
                        {label}
                    </Label>
                )}
                {items.map((item) => (
                    <Checkbox
                        key={`${name}-${item.value}`}
                        name={name}
                        {...item}
                        isChecked={value.includes(item.value)}
                        color={color}
                        onChange={(e) => {
                            if (e.target.checked) {
                                onChange([...value, item.value]);
                            } else {
                                onChange(value.filter((v) => v !== item.value));
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
