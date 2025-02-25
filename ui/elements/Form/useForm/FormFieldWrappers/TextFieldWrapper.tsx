import React, { useMemo } from 'react';

import TextField, { TextFieldProps } from '../../TextField';
import { FormFieldProps } from '../types';
import { getConditionalProps } from '../utils';

const TextFieldWrapper = (props: FormFieldProps) => {
    const { formField, error, formData, handleChange } = props;
    const rendererProps = formField.rendererProps as TextFieldProps;

    const conditionalProps = getConditionalProps({
        formField,
        formData,
    });

    useMemo(() => {
        if (
            conditionalProps.value !== undefined &&
            conditionalProps.value !== null
        ) {
            handleChange({
                name: rendererProps.name,
                value: conditionalProps.value,
            });
        }
    }, [conditionalProps.value]);

    return (
        <TextField
            key={rendererProps.name}
            {...rendererProps}
            value={formData[rendererProps.name] || ''}
            onChange={(e) =>
                handleChange({ name: e.target.name, value: e.target.value })
            }
            {...conditionalProps}
            validationMessage={error}
            errorMessage={error}
        />
    );
};

export default TextFieldWrapper;
