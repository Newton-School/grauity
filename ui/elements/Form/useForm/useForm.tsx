import debounce from 'lodash/debounce';
import React, { useCallback, useRef, useState } from 'react';

import FormRenderer from './FormRenderer';
import {
    FieldName,
    FormErrors,
    FormState,
    FormValidationType,
    HandleFormFieldChangeProps,
    UseFormProps,
    UseFormReturnProps,
} from './types';
import { checkFieldValidation, focusOnFirstErrorField } from './utils';

/**
 * Custom hook to manage form state, validation, submission and rendering.
 *
 * @param {Object} formConfig - Configuration object for the form.
 * @param {Object} [rowStyles={}] - Optional styles for form rows.
 * @param {string} whenToValidate - Determines when to validate the form fields.
 * @param {boolean} [isMobileView=false] - Flag to indicate if the form is in mobile view.
 * @param {boolean} [shouldFocusOnFirstError=true] - Flag to indicate if the first error field should be focused.
 * @param {boolean} [shouldSubmitOnEnter=true] - Flag to indicate if the form should be submitted on pressing Enter.
 * @param {boolean} [shouldShowSubmitButton=true] - Flag to indicate if the submit button should be shown.
 * @param {Object} [submitButtonProps={}] - Optional properties for the submit button.
 * @param {Function} [onSubmit=() => {}] - Callback function to handle form submission.
 *
 * @returns {Object} - Returns an object containing:
 * - `formData`: The current state of the form data.
 * - `formRenderer`: The rendered form component.
 * - `validate`: Function to validate form fields.
 * - `submit`: Function to submit the form.
 * - `changeFormData`: Function to update form data externally.
 *
 * @description
 * This hook provides the following functionalities:
 * - Validates form fields based on the provided schema in `formConfig`.
 * - Handles form submission and triggers the `onSubmit` callback if there are no validation errors.
 * - Provides a form renderer component to render the form UI with default submit button.
 * - Allows updating form data and handling individual field changes.
 */
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

    const formFieldRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

    const setFormFieldRef = (name: string, element: HTMLDivElement | null) => {
        formFieldRefs.current[name] = element;
    };

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
        } else if (shouldFocusOnFirstError) {
            focusOnFirstErrorField(errorObj, formFieldRefs);
        }
    }, [validate]);

    const changeFormData = useCallback((newData: FormState) => {
        setFormData((prev) => {
            return { ...prev, ...newData };
        });
    }, []);

    const handleFormFieldChange = useCallback(
        ({ name, value }: HandleFormFieldChangeProps) => {
            if (whenToValidate === FormValidationType.ON_CHANGE) {
                validate([name], { ...formData, [name]: value });
            }
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
            shouldSubmitOnEnter={shouldSubmitOnEnter}
            shouldShowSubmitButton={shouldShowSubmitButton}
            submitButtonProps={submitButtonProps}
            setFormFieldRef={setFormFieldRef}
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
