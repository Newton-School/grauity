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
    return items.filter((item) => item.type === BaseItemType.OPTION);
}
