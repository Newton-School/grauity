import React, { forwardRef, useEffect } from 'react';

import { IconButton } from '../../Button';
import TextField from '../TextField';
import CheckboxWrapper from './FormFieldWrappers/CheckboxWrapper';
import DropdownMenuWrapper from './FormFieldWrappers/DropdownMenuWrapper';
import DropdownWrapper from './FormFieldWrappers/DropdownWrapper';
import { FormFieldProps, FormFieldType, FormValidationType } from './types';
import { getConditionalProps } from './utils';

const FormField = forwardRef<HTMLDivElement, FormFieldProps>((props, ref) => {
    const {
        error,
        formField,
        formData,
        handleChange,
        handleValidate,
        whenToValidate,
    } = props;
    const { rendererProps } = formField;

    const conditionalProps = getConditionalProps({
        formField,
        formData,
    });

    useEffect(() => {
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

    let rendererComponent = null;

    if (typeof formField.renderer === 'function') {
        rendererComponent = formField.renderer(props);
    } else {
        switch (formField.type) {
            case FormFieldType.TEXTFIELD:
            case FormFieldType.DATE_PICKER:
                rendererComponent = (
                    <TextField
                        key={rendererProps.name}
                        {...rendererProps}
                        value={formData[rendererProps.name] || ''}
                        {...conditionalProps}
                        onChange={(e) => {
                            handleChange({
                                name: e.target.name,
                                value: e.target.value,
                            });
                        }}
                        onBlur={(e) => {
                            if (whenToValidate === FormValidationType.ON_BLUR) {
                                handleValidate({
                                    name: e.target.name,
                                    value: e.target.value,
                                });
                            }
                        }}
                        validationMessage={error}
                        errorMessage={error}
                    />
                );
                break;
            case FormFieldType.DROPDOWN:
                rendererComponent = <DropdownWrapper {...props} />;
                break;
            case FormFieldType.DROPDOWN_MENU:
                rendererComponent = <DropdownMenuWrapper {...props} />;
                break;
            case FormFieldType.ICON_BUTTON:
                rendererComponent = <IconButton {...rendererProps} />;
                break;
            case FormFieldType.CHECKBOX:
                rendererComponent = <CheckboxWrapper {...props} />;
                break;
            default:
                break;
        }
    }

    if (!rendererComponent) {
        return null;
    }

    return (
        <div>
            {rendererComponent}
            <div ref={ref} tabIndex={-1} />
        </div>
    );
});

export default FormField;
