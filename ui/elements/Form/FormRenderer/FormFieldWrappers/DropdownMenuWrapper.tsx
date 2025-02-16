import React, { useMemo } from 'react';
import DropdownMenu, {
    BaseItemOptionProps,
    BaseItemType,
    DropdownMenuProps,
    DropdownTrigger,
} from 'ui/elements/DropdownMenu';

import { FormFieldProps } from '../types';
import { getConditionalProps } from '../utils';

const DropdownMenuWrapper = (props: FormFieldProps) => {
    const { formField, error, formData, handleChange } = props;
    const rendererProps = formField.rendererProps as DropdownMenuProps;
    const { triggerProps } = rendererProps;

    const conditionalProps = getConditionalProps({
        formField,
        formData,
    });

    const getCurrentValue = () => {
        if (rendererProps.multiple) {
            return triggerProps.placeholder;
        }
        if (Array.isArray(rendererProps.items)) {
            const selectedOption = rendererProps.items.find(
                (item) =>
                    item.type === BaseItemType.OPTION &&
                    item.value === formData[rendererProps.name]
            ) as BaseItemOptionProps;
            return selectedOption
                ? selectedOption.label
                : triggerProps.placeholder;
        }
        return formData[rendererProps.name] || triggerProps.placeholder;
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

    const handleApply = (
        selectedValues: BaseItemOptionProps[] | BaseItemOptionProps
    ) => {
        if (rendererProps.multiple) {
            handleChange({
                name: rendererProps.name,
                value: (selectedValues as BaseItemOptionProps[]).map(
                    (item) => item.value
                ),
            });
        } else {
            handleChange({
                name: rendererProps.name,
                value: (selectedValues as BaseItemOptionProps).value,
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
            trigger={
                <DropdownTrigger
                    label={triggerProps.label}
                    errorMessage={error}
                    isRequired={triggerProps.isRequired}
                    placeholder={triggerProps.placeholder}
                >
                    {getCurrentValue()}
                </DropdownTrigger>
            }
            width="100%"
            {...rendererProps}
            selectedValues={getSelectedValues()}
            onApply={handleApply}
            {...conditionalProps}
        />
    );
};

export default DropdownMenuWrapper;
