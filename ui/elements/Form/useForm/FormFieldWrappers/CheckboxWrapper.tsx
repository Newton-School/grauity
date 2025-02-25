import React, { useMemo } from 'react';

import Checkbox, { CheckboxProps } from '../../Checkbox';
import { FormFieldProps, FormValidationType } from '../types';
import { getConditionalProps } from '../utils';

const CheckboxWrapper = (props: FormFieldProps) => {
    const {
        formField,
        error,
        formData,
        handleChange,
        handleValidate,
        whenToValidate,
    } = props;
    const rendererProps = formField.rendererProps as CheckboxProps;

    const isChecked = Array.from(formData[rendererProps.name] || []).includes(
        rendererProps.value
    );
    const conditionalProps = getConditionalProps({ formField, formData });

    const handleCheckboxChange = (isCheckedValue: boolean) => {
        let value: any = [];
        if (isCheckedValue) {
            value = [
                ...(formData[rendererProps.name] || []),
                rendererProps.value,
            ];
        } else {
            value = formData[rendererProps.name].filter(
                (val: string) => val !== rendererProps.value
            );
        }

        if (whenToValidate === FormValidationType.ON_CHANGE) {
            handleValidate({
                name: rendererProps.name,
                value,
            });
        }

        handleChange({
            name: rendererProps.name,
            value,
        });
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
