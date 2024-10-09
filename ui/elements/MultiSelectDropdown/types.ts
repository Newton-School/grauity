import {
    StyledButtonProps,
    StyledDivProps,
    StyledInputProps,
    StyledSelectProps,
} from '../../../common/types';

export interface DropdownOption {
    id: string;
    label: string;
}

export interface MultiSelectDropdownProps {
    /**
     * Text to display when no option is selected.
     * @default Select
     */
    noOptionSelctedText?: string;

    /**
     * Set of options available for selection.
     * @default new Set([])
     */
    options?: Set<DropdownOption>;

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
     * Flag to enable or disable the "Select All" functionality.
     * @default true
     */
    shouldEnableAllSelected?: boolean;

    /**
     * Flag to set all options as selected by default.
     * @default false
     */
    defaultAllSelected?: boolean;

    /**
     * Text to display for the "Select All" option.
     * @default All
     */
    allOptionText?: string;

    /**
     * Callback function triggered when the selected options change.
     * @param options - The current set of selected options.
     */
    onOptionsChange?: (options: Set<DropdownOption>) => void;
}

export interface DropdownListItemProps {
    displayText: string;
    onClickFn: () => void;
    isSelected?: boolean;
    autoFocus?: boolean;
}

export interface StyledDropdownWrapperProps extends StyledSelectProps {}

export interface StyledDropdownHeaderProps extends StyledButtonProps {}

export interface StyledDropdownListProps extends StyledDivProps {}

export interface StyledDropdownListItemProps extends StyledButtonProps {}

export interface StyledDropdownSearchInputProps extends StyledInputProps {}

export interface StyledDropdownItemTextProps extends StyledDivProps {
    $selected?: boolean;
}
