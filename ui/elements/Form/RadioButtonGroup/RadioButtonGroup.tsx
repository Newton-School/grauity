import React, { forwardRef } from 'react';

import { ErrorMessage } from '../ErrorMessage';
import { HelpMessage } from '../HelpMessage';
import { Label } from '../Label';
import RadioButton from '../RadioButton/RadioButton';
import { StyledRadioButtonGroup } from './RadioButtonGroup.styles';
import { RadioButtonGroupProps } from './types';

/**
 * RadioButtonGroup component is used to render a group of radio buttons.
 * - It is used to select one option from a list of options.
 * - It can be used to render a list of radio buttons with a label, help message, and error message.
 *
 * @example
 * <RadioButtonGroup
 *      name="radio-button-group"
 *      label="Radio button group"
 *      items={[
 *          { value: 'option1', label: 'Option 1' },
 *          { value: 'option2', label: 'Option 2' },
 *          { value: 'option3', label: 'Option 3' },
 *          { value: 'option4', label: 'Option 4', isDisabled: true },
 *      ]}
 *      value="option1"
 *      onChange={(value) => {
 *          console.log(value);
 *      }}
 *      isRequired={true}
 *      helpMessage="This is a help message"
 *      errorMessage="This is an error message"
 *      className=""
 * />
 */
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
