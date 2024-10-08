import { grauityIconName } from 'ui/core';

import {
    StyledButtonProps,
    StyledInputProps,
    StyledSelectProps,
} from '../../../common/types';

export interface DropdownOption {
    id: number | string;
    label: string;
}

export interface SelectDropdownProps {
    /**
     * Set of options available for selection.
     * @default new Set([])
     */
    options?: Set<DropdownOption>;

    /**
     * Name of the icon to display in the dropdown button.
     */
    icon?: grauityIconName;

    /**
     * Text to display in the dropdown button.
     * @default Select
     */
    text?: string;

    /**
     * Flag to enable or disable the search functionality.
     * @default true
     */
    shouldEnableSearch?: boolean;

    /**
     * Callback function triggered when the search input value changes.
     * @param value - The current value of the search input.
     */
    onSearchInputChange?: (value: string) => void;

    /**
     * Placeholder text for the search input field.
     * @default Search
     */
    searchPlaceholder?: string;

    /**
     * Callback function triggered when the option is selected.
     * @param option - The selected option.
     */
    onChange?: (option: DropdownOption) => void;

    /**
     * Text to display when no option is available.
     * @default -- No options available --
     */
    noOptionsText?: string;
}

export interface StyledSelectDropdownWrapperProps extends StyledSelectProps {}

export interface StyledSelectDropdownItemProps extends StyledButtonProps {
    $disabled?: boolean;
}

export interface StyledDropdownSearchInputProps extends StyledInputProps {}
