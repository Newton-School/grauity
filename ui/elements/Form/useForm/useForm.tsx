import React, { useCallback, useState } from 'react';

import FormRenderer from './FormRenderer';
import {
    FieldName,
    FormErrors,
    FormState,
    HandleFormFieldChangeProps,
    UseFormProps,
    UseFormReturnProps,
} from './types';
import { checkFieldValidation } from './utils';

const useForm = ({
    formConfig,
    rowStyles = {},
    isMobileView = false,
    shouldFocusOnFirstError = true,
    shouldSubmitOnEnter = true,
    shouldShowSubmitButton = true,
    onSubmit = () => {},
}: UseFormProps): UseFormReturnProps => {
    const {
        fieldNames = [],
        initialState = {},
        rows = [],
        schema,
    } = formConfig;

    const [formData, setFormData] = useState<FormState>(initialState);
    const [errors, setErrors] = useState<FormErrors>({});

    const validate = useCallback(
        (fields: FieldName[] = []) => {
            const fieldsToValidate = fields.length > 0 ? fields : fieldNames;
            const errorObj: FormErrors = {};

            fieldsToValidate.forEach((fieldName) => {
                const errorMessage = checkFieldValidation({
                    field: fieldName,
                    data: formData,
                    schema,
                });
                errorObj[fieldName] = errorMessage;
            });

            setErrors(errorObj);
            return errorObj;
        },
        [setErrors, formData, schema, fieldNames]
    );

    const submit = useCallback(() => {
        const errorObj = validate();
        const hasErrors = Object.values(errorObj).some(
            (error) => error.length > 0
        );

        if (!hasErrors) {
            onSubmit(formData);
        }
    }, [validate]);

    const changeFormData = useCallback((newData: FormState) => {
        setFormData((prev) => {
            return { ...prev, ...newData };
        });
    }, []);

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
            formRows={rows}
            rowStyles={rowStyles}
            handleChange={handleFormFieldChange}
            handleSubmit={submit}
            isMobileView={isMobileView}
            shouldFocusOnFirstError={shouldFocusOnFirstError}
            shouldSubmitOnEnter={shouldSubmitOnEnter}
            shouldShowSubmitButton={shouldShowSubmitButton}
        />
    );

    return {
        formData,
        formRenderer,
        validate,
        submit,
        changeFormData,
    };
};

export default useForm;
