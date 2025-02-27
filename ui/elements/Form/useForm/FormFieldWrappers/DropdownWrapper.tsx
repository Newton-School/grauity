import React, { useMemo } from 'react';

import { BaseItemOptionProps } from '../../../DropdownMenu';
import Dropdown, { DropdownProps } from '../../Dropdown';
import { FormFieldProps, FormValidationType } from '../types';
import { getConditionalProps } from '../utils';

const DropdownWrapper = (props: FormFieldProps) => {
    const {
        formField,
        error,
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
        <Dropdown
            key={rendererProps.name}
            showHeader={false}
            {...rendererProps}
            selectedValues={getSelectedValues()}
            onChange={handleApply}
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
};

export default DropdownWrapper;
