import React, { forwardRef } from 'react';

import DropdownMenuWrapper from './DropdownMenuWrapper';
import { BaseItemOptionProps, DropdownMenuProps, OptionValue } from './types';

const DropdownMenu = forwardRef<HTMLDivElement, DropdownMenuProps>(
    (props, ref) => {
        const { multiple = false, value = [], onChange = () => {} } = props;

        const getSelectedValues = (): OptionValue[] => {
            if (!value) {
                return [];
            }
            if (multiple) {
                return value as OptionValue[];
            }
            return [value as OptionValue];
        };

        const handleChange = (selectedValues: BaseItemOptionProps[]) => {
            let finalValue: BaseItemOptionProps | BaseItemOptionProps[] =
                selectedValues;

            if (multiple) {
                finalValue = selectedValues;
            } else if (selectedValues.length === 0) {
                finalValue = null;
            } else {
                [finalValue] = selectedValues;
            }

            onChange(finalValue);
        };

        return (
            <DropdownMenuWrapper
                {...props}
                ref={ref}
                selectedValues={getSelectedValues()}
                onChange={handleChange}
            />
        );
    }
);

export default DropdownMenu;
