import React from 'react';

import { DROPDOWN_MENU_VIEWPORT_GAP } from './constants';
import { BaseItemOptionProps, BaseItemProps, BaseItemType } from './types';

/**
 * Filters the given array of `BaseItemProps` and returns only the items of type `BaseItemType.OPTION`.
 *
 * @param items - An array of `BaseItemProps` to filter.
 * @returns An array of `BaseItemOptionProps` containing only the items of type `BaseItemType.OPTION`.
 */
export function getOptionsFromBaseDropdownItems(
    items: BaseItemProps[]
): BaseItemOptionProps[] {
    return items.filter(
        (item) => item.type === BaseItemType.OPTION
    ) as BaseItemOptionProps[];
}

/**
 * Filters the provided options based on the search value.
 *
 * This function performs a case-insensitive search on the `label` and `description`
 * properties of each option in the provided array. It returns an array of options
 * that match the search value.
 *
 * @param searchValue - The value to search for within the options.
 * @param options - An array of options to filter. Each option should have `label` and `description` properties.
 * @returns An array of options that match the search value.
 */
export function defaultSearchMethod(
    searchValue: string,
    options: BaseItemOptionProps[]
): BaseItemOptionProps[] {
    return options.filter(
        (option) =>
            option.label?.toLowerCase().includes(searchValue.toLowerCase()) ||
            option.description
                ?.toLowerCase()
                .includes(searchValue.toLowerCase())
    );
}

export const getSelectedValuesForDropdownType = (
    multiple: boolean,
    value: BaseItemOptionProps | BaseItemOptionProps[]
): BaseItemOptionProps[] => {
    if (!value) {
        return [];
    }
    if (multiple) {
        return value as BaseItemOptionProps[];
    }
    return [value as BaseItemOptionProps];
};

export function isDropdownMenuItemNavigable(item: BaseItemProps): boolean {
    if (item.type === BaseItemType.OPTION) {
        return !item.disabled;
    }
    if (item.type === BaseItemType.SUB_HEADER) {
        return true;
    }
    return false;
}

/**
 * Scrolls to the first item with scrollToOnOpen property set to true
 *
 * @param items - Array of items to search through
 * @param refs - Ref array containing DOM elements for each item
 * @param delay - Optional delay before scrolling (default: 100ms)
 */
export function scrollToFirstMarkedItem(
    items: BaseItemProps[],
    refs: React.MutableRefObject<(HTMLDivElement | HTMLButtonElement | null)[]>,
    delay: number = 100
): void {
    const itemIndex = items.findIndex((item) => item.scrollToOnOpen === true);

    if (itemIndex !== -1) {
        setTimeout(() => {
            const targetRef = refs.current[itemIndex];
            if (targetRef) {
                targetRef.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'nearest',
                });
            }
        }, delay);
    }
}

/**
 * Keeps one axis of a dropdown menu inside the viewport.
 *
 * A menu that already fits is left exactly where its trigger puts it — the
 * clamp engages only on a real overflow, matching how PopOver adjusts, so
 * ordinary placements are never nudged out of alignment with their trigger.
 * When it does engage the menu is pulled back to leave a gap, or flush to the
 * near edge when the menu is larger than the viewport and no gap will fit.
 *
 * @param anchor - The preferred position, taken from the trigger.
 * @param menuSize - The menu's size along this axis, including any offset it settles at.
 * @param viewportSize - The viewport's size along this axis.
 */
export function clampMenuAxisToViewport(
    anchor: number,
    menuSize: number,
    viewportSize: number
) {
    if (anchor + menuSize <= viewportSize) {
        return Math.max(0, anchor);
    }

    return Math.max(0, viewportSize - menuSize - DROPDOWN_MENU_VIEWPORT_GAP);
}
