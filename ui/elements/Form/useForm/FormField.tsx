import React, { forwardRef, useEffect } from 'react';

import { IconButton } from '../../Button';
import DropdownMenu from '../../DropdownMenu';
import CheckboxGroup from '../CheckboxGroup';
import Dropdown from '../Dropdown';
import TextField from '../TextField';
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
                rendererComponent = (
                    <Dropdown
                        key={rendererProps.name}
                        showHeader={false}
                        {...rendererProps}
                        value={formData[rendererProps.name] || ''}
                        onChange={(selectedValue) => {
                            handleChange({
                                name: rendererProps.name,
                                value: selectedValue,
                            });
                        }}
                        onClose={() => {
                            if (whenToValidate === FormValidationType.ON_BLUR) {
                                handleValidate({
                                    name: rendererProps.name,
                                    value: formData[rendererProps.name],
                                });
                            }
                        }}
                        {...conditionalProps}
                        errorMessage={error}
                    />
                );
                break;
            case FormFieldType.DROPDOWN_MENU:
                rendererComponent = (
                    <DropdownMenu
                        key={rendererProps.name}
                        showHeader={false}
                        {...rendererProps}
                        value={formData[rendererProps.name] || ''}
                        onChange={(selectedValue) => {
                            handleChange({
                                name: rendererProps.name,
                                value: selectedValue,
                            });
                        }}
                        {...conditionalProps}
                    />
                );
                break;
            case FormFieldType.ICON_BUTTON:
                rendererComponent = <IconButton {...rendererProps} />;
                break;
            case FormFieldType.CHECKBOX_GROUP:
                rendererComponent = (
                    <CheckboxGroup
                        key={rendererProps.name}
                        {...rendererProps}
                        value={formData[rendererProps.name] || []}
                        onChange={(selectedValues) => {
                            handleChange({
                                name: rendererProps.name,
                                value: selectedValues,
                            });
                        }}
                        {...conditionalProps}
                        errorMessage={error}
                    />
                );
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
