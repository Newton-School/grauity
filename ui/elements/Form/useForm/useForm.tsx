import debounce from 'lodash/debounce';
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
    whenToValidate,
    isMobileView = false,
    shouldFocusOnFirstError = true,
    shouldSubmitOnEnter = true,
    shouldShowSubmitButton = true,
    submitButtonProps = {},
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
        (fields: FieldName[] = [], data: FormState = null) => {
            const fieldsToValidate = fields.length > 0 ? fields : fieldNames;
            const dataToValidate = data || formData;

            const errorObj: FormErrors = {};

            fieldsToValidate.forEach((fieldName) => {
                const errorMessage = checkFieldValidation({
                    field: fieldName,
                    data: dataToValidate,
                    schema,
                });
                errorObj[fieldName] = errorMessage;
            });

            setErrors((prev) => ({
                ...prev,
                ...errorObj,
            }));
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

    const handleIndividualFieldValidation = useCallback(
        debounce(({ name, value }: HandleFormFieldChangeProps) => {
            validate([name], { ...formData, [name]: value });
        }, 300),
        [validate]
    );

    const formRenderer: React.ReactNode = (
        <FormRenderer
            formData={formData}
            errors={errors}
            formRows={rows}
            rowStyles={rowStyles}
            handleValidate={handleIndividualFieldValidation}
            whenToValidate={whenToValidate}
            handleChange={handleFormFieldChange}
            handleSubmit={submit}
            isMobileView={isMobileView}
            shouldFocusOnFirstError={shouldFocusOnFirstError}
            shouldSubmitOnEnter={shouldSubmitOnEnter}
            shouldShowSubmitButton={shouldShowSubmitButton}
            submitButtonProps={submitButtonProps}
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
