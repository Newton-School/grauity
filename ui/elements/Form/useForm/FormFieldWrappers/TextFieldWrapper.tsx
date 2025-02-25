import React, { useMemo } from 'react';

import TextField, { TextFieldProps } from '../../TextField';
import { FormFieldProps, FormValidationType } from '../types';
import { getConditionalProps } from '../utils';

const TextFieldWrapper = (props: FormFieldProps) => {
    const {
        formField,
        error,
        formData,
        handleChange,
        handleValidate,
        whenToValidate,
    } = props;
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
            onChange={(e) => {
                if (whenToValidate === FormValidationType.ON_CHANGE) {
                    handleValidate({
                        name: e.target.name,
                        value: e.target.value,
                    });
                }
                handleChange({ name: e.target.name, value: e.target.value });
            }}
            onBlur={(e) => {
                if (whenToValidate === FormValidationType.ON_BLUR) {
                    handleValidate({
                        name: e.target.name,
                        value: e.target.value,
                    });
                }
            }}
            {...conditionalProps}
            validationMessage={error}
            errorMessage={error}
        />
    );
};

export default TextFieldWrapper;
