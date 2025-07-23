import React from 'react';
import {
    BaseItemOptionProps,
    BaseItemProps,
    BaseItemType,
} from 'ui/elements/DropdownMenu';

import { getSelectedValuesForDropdownType } from '../../DropdownMenu/utils';

/**
 * Calculates the position for a dropdown menu based on the position of a trigger element.
 *
 * @param triggerRef - A reference to the HTMLDivElement that triggers the dropdown menu.
 * @param menuHeight - The height of the dropdown menu.
 * @returns An object containing the top and left positions for the dropdown menu.
 */
export function calculateDropdownMenuPosition(
    triggerRef: React.RefObject<HTMLButtonElement | HTMLDivElement>,
    menuHeight: number
) {
    return {
        top: Math.min(
            triggerRef.current?.getBoundingClientRect().bottom,
            window.innerHeight - menuHeight - 20
        ),
        left: triggerRef.current?.getBoundingClientRect().left,
    };
}

/**
 * Retrieves selected options from the provided items and current value
 * based on whether the field is in multiple select mode or not.
 */
export const getSelectedOptionsFromValues = ({
    value,
    multiple,
    items,
}: {
    value: BaseItemOptionProps | BaseItemOptionProps[];
    items: BaseItemProps[];
    multiple: boolean;
}) => {
    const selectedValues = getSelectedValuesForDropdownType(multiple, value);

    if (multiple) {
        return items.filter(
            (item) =>
                item.type === BaseItemType.OPTION &&
                selectedValues
                    .map((option) => option.value)
                    .includes(item.value)
        ) as BaseItemOptionProps[];
    }

    return items.find(
        (item) =>
            item.type === BaseItemType.OPTION &&
            selectedValues.map((option) => option.value).includes(item.value)
    ) as BaseItemOptionProps;
};
