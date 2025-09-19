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

/**
 * Generates a set of conditional properties for a form field based on the current form data.
 *
 * Iterates over the `conditionalProps` array defined in the `formField` object, and for each conditional prop:
 * - Evaluates the `is` function with the provided `formData`.
 * - If the condition matches, assigns the `then` value to the corresponding property.
 * - Otherwise, assigns the `otherwise` value if defined.
 *
 * @param formField - The form field configuration containing conditional properties.
 * @param formData - The current form data used to evaluate conditions.
 * @returns An object containing the final set of conditional properties to apply to the form field.
 */
export function getConditionalProps({
    formField,
    formData,
}: GetConditionalProps): GetConditionalPropsReturn {
    const conditionalProps = formField.conditionalProps || [];
    const finalProps: Record<string, any> = {};

    conditionalProps.forEach(({ prop, is, then, otherwise }) => {
        const isMatched = is(formData);
        if (isMatched) {
            if (then !== undefined) {
                finalProps[prop] = then;
            }
        } else if (otherwise !== undefined) {
            finalProps[prop] = otherwise;
        }
    });

    return finalProps;
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
