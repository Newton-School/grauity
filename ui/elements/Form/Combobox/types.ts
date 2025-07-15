import { ACTION_COLORS } from 'ui/core';
import {
    BaseItemOptionProps,
    DropdownMenuProps,
} from 'ui/elements/DropdownMenu';

export interface ComboboxTriggerProps {
    /**
     * Whether to disable the combobox trigger
     * @default false
     */
    isDisabled?: boolean;

    /**
     * The name of the combobox field
     * @required
     */

    name: string;

    /**
     * The label for the combobox field
     */
    label?: string;

    /**
     * The placeholder text for the combobox field
     * @default 'Select'
     */
    placeholder?: string;

    /**
     * Whether the combobox field is required
     * @default false
     */
    isRequired?: boolean;

    /**
     * The help message to display below the combobox field
     */
    helpMessage?: string;

    /**
     * The error message to display when the combobox field is invalid
     */
    errorMessage?: string;

    /**
     * Color of the combobox field.
     * @default 'brand'
     */
    color?: `${ACTION_COLORS}`;

    /**
     * Callback function to be called when the input text changes.
     * @param text - The new input text.
     * @default () => {}
     */
    onTextInputChange?: (text: string) => void;
}

export interface ComboboxTriggerInternalProps extends ComboboxTriggerProps {
    onTriggerClick?: () => void;
    selectedItems?: BaseItemOptionProps | BaseItemOptionProps[];
    onItemDismissClick?: (item: BaseItemOptionProps) => void;
    inputText?: string;
}

export interface ComboboxProps extends ComboboxTriggerProps, DropdownMenuProps {
    menuProps?: {
        /**
         * The width of the dropdown menu.
         * @default '300px'
         */
        width?: string;

        /**
         * Whether the dropdown menu is same width as trigger
         * @default true
         */
        fullWidth?: boolean;
    };
    /**
     * Callback function to be called when the combobox menu is closed.
     */
    onClose?: (value: BaseItemOptionProps | BaseItemOptionProps[]) => void;
}
