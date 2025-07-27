import React from 'react';
import { ACTION_COLORS } from 'ui/core';

import { StyledDivProps } from '../../../../common/types';
import { BaseItemOptionProps, DropdownMenuProps } from '../../DropdownMenu';
import { TagProps } from '../../Tag';

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

    /**
     * Additional props for the Tag element.
     *
     * Default: `{}`
     */
    tagProps?: Omit<TagProps, 'children'>;
}

export interface ComboboxTriggerInternalProps extends ComboboxTriggerProps {
    onTriggerClick?: () => void;
    selectedItems?: BaseItemOptionProps | BaseItemOptionProps[];
    onItemDismissClick?: (item: BaseItemOptionProps) => void;
    inputText?: string;
    inputRef?: React.MutableRefObject<HTMLInputElement>;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    isOpen?: boolean;
    dropdownMenuId?: string;
    multiple?: boolean;
}

export interface ComboboxProps
    extends ComboboxTriggerProps,
        Omit<DropdownMenuProps, 'searchable' | 'onSearchInputChange'> {
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
     * Whether the dropdown should call the onChange callback on selecting an
     * option in multiple mode
     *
     * NOTE: If `showActionButtons` is true then onChange will NOT be called
     * on clicking an option, irrespective of the value of `applyOnOptionSelectInMultipleMode` prop
     * @default true
     */
    applyOnOptionSelectInMultipleMode?: DropdownMenuProps['applyOnOptionSelectInMultipleMode'];

    /**
     * useSearchMethod is used to determine whether the default search method should be applied on
     * the elements, which is a case-insensitive search on the `label` and `description` properties
     * of each option, to check if they include the searched value.
     * @default true
     */
    useDefaultSearchMethod?: boolean;

    /**
     * Callback function to be called when the combobox menu is closed.
     */
    onClose?: (value: BaseItemOptionProps | BaseItemOptionProps[]) => void;
}

export interface StyledComboboxTriggerProps extends StyledDivProps {
    $isDisabled?: boolean;
    $color?: `${ACTION_COLORS}`;
    $isFocused?: boolean;
}
