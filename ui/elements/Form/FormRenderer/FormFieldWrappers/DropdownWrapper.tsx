import React, { useMemo } from 'react';

import { BaseItemOptionProps, BaseItemType } from '../../../DropdownMenu';
import Dropdown, { DropdownProps } from '../../Dropdown';
import { FormFieldProps } from '../types';
import { getConditionalProps } from '../utils';

const DropdownWrapper = (props: FormFieldProps) => {
    const { formField, error, formData, handleChange } = props;
    const rendererProps = formField.rendererProps as DropdownProps;

    const conditionalProps = getConditionalProps({
        formField,
        formData,
    });

    const getCurrentValue = (): string => {
        if (rendererProps.multiple) {
            return rendererProps.placeholder;
        }
        if (Array.isArray(rendererProps.items)) {
            const selectedOption = rendererProps.items.find(
                (item) =>
                    item.type === BaseItemType.OPTION &&
                    item.value === formData[rendererProps.name]
            ) as BaseItemOptionProps;
            return selectedOption
                ? selectedOption.label
                : rendererProps.placeholder;
        }
        return formData[rendererProps.name] || rendererProps.placeholder;
    };

    const getSelectedValues = () => {
        if (!formData[rendererProps.name]) {
            return [];
        }
        if (rendererProps.multiple) {
            return formData[rendererProps.name];
        }
        return [formData[rendererProps.name]];
    };

    const handleApply = (selectedValues: BaseItemOptionProps[]) => {
        if (rendererProps.multiple) {
            handleChange({
                name: rendererProps.name,
                value: selectedValues.map((item) => item.value),
            });
        } else if (selectedValues.length === 0) {
            handleChange({
                name: rendererProps.name,
                value: '',
            });
        } else {
            handleChange({
                name: rendererProps.name,
                value: selectedValues[0].value,
            });
        }
    };

    useMemo(() => {
        if (conditionalProps.selectedValues) {
            handleApply(conditionalProps.selectedValues);
        }
    }, [conditionalProps.selectedValues]);

    return (
        <Dropdown
            key={rendererProps.name}
            showHeader={false}
            {...rendererProps}
            placeholder={getCurrentValue()}
            selectedValues={getSelectedValues()}
            onApply={handleApply}
            {...conditionalProps}
            errorMessage={error}
        />
    );
};

export default DropdownWrapper;
