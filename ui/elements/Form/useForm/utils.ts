import React from 'react';
import { object, reach, Schema } from 'yup';

import {
    CheckFieldValidationProps,
    FormErrors,
    FormRowColumnCondition,
    GetConditionalProps,
    GetConditionalPropsReturn,
    GetFormRowColumnValueProps,
} from './types';

export function checkFieldValidation({
    field,
    data,
    schema,
}: CheckFieldValidationProps): string {
    let validationSchema: Schema = null;

    try {
        validationSchema = object({
            [field]: reach(schema, field),
        });
    } catch (e) {
        return '';
    }

    if (validationSchema) {
        try {
            validationSchema.validateSync(data);
        } catch (e) {
            return e.message;
        }
    }
    return '';
}

export function getFormRowColumnValue({
    column,
    isMobileView = false,
}: GetFormRowColumnValueProps) {
    if (column === FormRowColumnCondition.ALWAYS_COLUMN) {
        return true;
    }
    if (column === FormRowColumnCondition.ALWAYS_ROW) {
        return false;
    }
    if (column === FormRowColumnCondition.COLUMN_ON_MOBILE) {
        return isMobileView;
    }
    return false;
}

export function getConditionalProps({
    formField,
    formData,
}: GetConditionalProps): GetConditionalPropsReturn {
    if (formField.conditionalProps) {
        const props = formField.conditionalProps.map(
            ({ propName, propValue, conditions }) => {
                const isConditionMatched = conditions.every(
                    ({ prop, value }) => {
                        if (typeof value === 'object') {
                            return (
                                JSON.stringify(formData[prop]) ===
                                JSON.stringify(value)
                            );
                        }
                        return formData[prop] === value;
                    }
                );
                return isConditionMatched ? { [propName]: propValue } : {};
            }
        );
        return props.reduce((acc, prop) => ({ ...acc, ...prop }), {});
    }
    return {};
}

export function focusOnFirstErrorField(
    errors: FormErrors,
    formFieldRefs: React.MutableRefObject<{
        [key: string]: HTMLDivElement | null;
    }>
) {
    const firstErrorField = Object.keys(errors).find((key) => errors[key]);
    if (
        firstErrorField &&
        errors[firstErrorField] &&
        formFieldRefs.current[firstErrorField]
    ) {
        formFieldRefs.current[firstErrorField].focus();
    }
}
