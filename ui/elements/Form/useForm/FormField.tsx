import React, { forwardRef, useEffect } from 'react';

import DropdownMenu from '../../DropdownMenu';
import CheckboxGroup from '../CheckboxGroup';
import Dropdown from '../Dropdown';
import RadioButtonGroup from '../RadioButtonGroup';
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
        renderCustomComponent,
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
        if (typeof renderCustomComponent === 'function') {
            rendererComponent = renderCustomComponent(
                formField.renderer,
                props
            );
        }
    } else {
        switch (formField.type) {
            case FormFieldType.TEXTFIELD:
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
                        color={error ? 'error' : 'brand'}
                    />
                );
                break;
            case FormFieldType.DROPDOWN:
                rendererComponent = (
                    <Dropdown
                        key={rendererProps.name}
                        showHeader={false}
                        {...rendererProps}
                        value={formData[rendererProps.name]}
                        onChange={(selectedValue) => {
                            handleChange({
                                name: rendererProps.name,
                                value: selectedValue,
                            });
                        }}
                        onClose={(selectedValue) => {
                            if (whenToValidate === FormValidationType.ON_BLUR) {
                                handleValidate({
                                    name: rendererProps.name,
                                    value: selectedValue,
                                });
                            }
                        }}
                        {...conditionalProps}
                        errorMessage={error}
                        color={error ? 'error' : 'brand'}
                    />
                );
                break;
            case FormFieldType.DROPDOWN_MENU:
                rendererComponent = (
                    <DropdownMenu
                        key={rendererProps.name}
                        showHeader={false}
                        {...rendererProps}
                        value={formData[rendererProps.name]}
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
            case FormFieldType.CHECKBOX_GROUP:
                rendererComponent = (
                    <CheckboxGroup
                        key={rendererProps.name}
                        {...rendererProps}
                        value={formData[rendererProps.name] || []}
                        onChange={(selectedValues) => {
                            if (whenToValidate === FormValidationType.ON_BLUR) {
                                handleValidate({
                                    name: rendererProps.name,
                                    value: selectedValues,
                                });
                            }
                            handleChange({
                                name: rendererProps.name,
                                value: selectedValues,
                            });
                        }}
                        {...conditionalProps}
                        errorMessage={error}
                        color={error ? 'error' : 'brand'}
                    />
                );
                break;
            case FormFieldType.RADIOBUTTON_GROUP:
                rendererComponent = (
                    <RadioButtonGroup
                        key={rendererProps.name}
                        {...rendererProps}
                        value={formData[rendererProps.name]}
                        onChange={(selectedValue) => {
                            if (whenToValidate === FormValidationType.ON_BLUR) {
                                handleValidate({
                                    name: rendererProps.name,
                                    value: selectedValue,
                                });
                            }
                            handleChange({
                                name: rendererProps.name,
                                value: selectedValue,
                            });
                        }}
                        {...conditionalProps}
                        errorMessage={error}
                        color={error ? 'error' : 'brand'}
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
