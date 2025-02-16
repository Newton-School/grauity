import React, { useCallback, useState } from 'react';

import FormRenderer from './FormRenderer';
import {
    FormErrors,
    FormFields,
    FormState,
    HandleFormFieldChangeProps,
    UseFormHookProps,
    UseFormHookReturnProps,
} from './types';
import { checkFieldValidation } from './utils';

const useFormHook = ({
    initialState = {},
    formRows = [],
    rowStyles = {},
    isMobileView = false,
}: UseFormHookProps): UseFormHookReturnProps => {
    const [formData, setFormData] = useState<FormState>(initialState);
    const [errors, setErrors] = useState<FormErrors>({});

    const validateFields = useCallback(
        (fields: FormFields = {}, data: FormState = {}): FormErrors => {
            const errorObj: FormErrors = {};
            Object.keys(fields || {}).forEach((fieldName) => {
                const errorMessage = checkFieldValidation({
                    field: fields[fieldName],
                    data: data[fieldName],
                });
                errorObj[fieldName] = errorMessage;
            });
            setErrors(errorObj);
            return errorObj;
        },
        []
    );

    const handleFormFieldChange = useCallback(
        ({ name, value }: HandleFormFieldChangeProps) => {
            setFormData((prev) => {
                return { ...prev, [name]: value };
            });
        },
        [setFormData]
    );

    const formRenderer: React.ReactNode = (
        <FormRenderer
            formData={formData}
            errors={errors}
            formRows={formRows}
            rowStyles={rowStyles}
            handleChange={handleFormFieldChange}
            isMobileView={isMobileView}
        />
    );

    return {
        formData,
        formRenderer,
        validateFields,
    };
};

export default useFormHook;
