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
