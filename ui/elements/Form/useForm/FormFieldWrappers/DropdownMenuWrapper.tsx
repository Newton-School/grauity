import React, { useMemo } from 'react';

import DropdownMenu, { BaseItemOptionProps } from '../../../DropdownMenu';
import { DropdownProps } from '../../Dropdown';
import { FormFieldProps, FormValidationType } from '../types';
import { getConditionalProps } from '../utils';

const DropdownMenuWrapper = (props: FormFieldProps) => {
    const {
        formField,
        formData,
        handleChange,
        handleValidate,
        whenToValidate,
    } = props;
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
        let value: any = '';
        if (rendererProps.multiple) {
            value = selectedValues.map((item) => item.value);
        } else if (selectedValues.length === 0) {
            value = '';
        } else {
            value = selectedValues[0].value;
        }

        if (whenToValidate === FormValidationType.ON_CHANGE) {
            handleValidate({
                name: rendererProps.name,
                value,
            });
        }

        handleChange({
            name: rendererProps.name,
            value,
        });
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
