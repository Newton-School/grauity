import React, { useEffect, useRef } from 'react';

import FormRow from '../FormRow';
import FormField from './FormField';
import { FormRendererProps } from './types';
import { getFormRowColumnValue } from './utils';

const FormRenderer = (props: FormRendererProps) => {
    const {
        formData = {},
        errors = {},
        formRows = [],
        rowStyles = {},
        handleChange = () => {},
        isMobileView = false,
        shouldFocusOnFirstError = true,
    } = props;

    const formFieldRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

    useEffect(() => {
        if (shouldFocusOnFirstError) {
            const firstErrorField = Object.keys(errors).find(
                (key) => errors[key]
            );
            if (
                firstErrorField &&
                errors[firstErrorField] &&
                formFieldRefs.current[firstErrorField]
            ) {
                formFieldRefs.current[firstErrorField].focus();
            }
        }
    }, [errors, shouldFocusOnFirstError]);

    const setFormFieldRef = (name: string, element: HTMLDivElement | null) => {
        formFieldRefs.current[name] = element;
    };

    return (
        <>
            {formRows.map((row) => (
                <div style={rowStyles}>
                    <FormRow
                        widths={row.widths || '1fr'}
                        column={getFormRowColumnValue({
                            column: row.column,
                            isMobileView,
                        })}
                    >
                        {(row.items || []).map((formField) => (
                            <FormField
                                ref={(element) =>
                                    setFormFieldRef(
                                        formField.rendererProps.name,
                                        element
                                    )
                                }
                                formField={formField}
                                error={errors[formField.rendererProps.name]}
                                formData={formData}
                                handleChange={handleChange}
                            />
                        ))}
                    </FormRow>
                </div>
            ))}
        </>
    );
};

export default FormRenderer;
