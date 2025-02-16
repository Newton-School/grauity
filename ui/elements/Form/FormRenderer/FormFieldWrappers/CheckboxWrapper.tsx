import React, { useMemo } from 'react';
import Checkbox, { CheckboxProps } from 'ui/elements/Form/Checkbox';

import { FormFieldProps } from '../types';
import { getConditionalProps } from '../utils';

const CheckboxWrapper = (props: FormFieldProps) => {
    const { formField, error, formData, handleChange } = props;
    const rendererProps = formField.rendererProps as CheckboxProps;

    const isChecked = Array.from(formData[rendererProps.name] || []).includes(
        rendererProps.value
    );
    const conditionalProps = getConditionalProps({ formField, formData });

    const handleCheckboxChange = (isCheckedValue: boolean) => {
        if (isCheckedValue) {
            handleChange({
                name: rendererProps.name,
                value: [
                    ...(formData[rendererProps.name] || []),
                    rendererProps.value,
                ],
            });
        } else {
            handleChange({
                name: rendererProps.name,
                value: formData[rendererProps.name].filter(
                    (value: string) => value !== rendererProps.value
                ),
            });
        }
    };

    useMemo(() => {
        if (typeof conditionalProps.isChecked === 'boolean') {
            handleCheckboxChange(conditionalProps.isChecked);
        }
    }, [conditionalProps.value]);

    return (
        <Checkbox
            key={rendererProps.name}
            {...rendererProps}
            value={rendererProps.value}
            isChecked={isChecked}
            onChange={(e) => handleCheckboxChange(e.target.checked)}
            {...conditionalProps}
            errorMessage={error}
        />
    );
};

export default CheckboxWrapper;
