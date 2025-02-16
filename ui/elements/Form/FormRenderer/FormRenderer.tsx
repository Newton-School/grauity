import React from 'react';

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
    } = props;

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
