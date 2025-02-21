import React, { useMemo } from 'react';

import DropdownMenu, { BaseItemOptionProps } from '../../../DropdownMenu';
import { DropdownProps } from '../../Dropdown';
import { FormFieldProps } from '../types';
import { getConditionalProps } from '../utils';

const DropdownMenuWrapper = (props: FormFieldProps) => {
    const { formField, formData, handleChange } = props;
    const rendererProps = formField.rendererProps as DropdownProps;

    const conditionalProps = getConditionalProps({
        formField,
        formData,
    });

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
        <DropdownMenu
            key={rendererProps.name}
            showHeader={false}
            {...rendererProps}
            selectedValues={getSelectedValues()}
            onChange={handleApply}
            {...conditionalProps}
        />
    );
};

export default DropdownMenuWrapper;
