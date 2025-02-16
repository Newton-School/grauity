import React from 'react';
import { grauityIconName } from 'ui/core';

import { StyledDivProps } from '../../../common/types';

export enum BaseItemType {
    SUB_HEADER = 'subheader',
    DIVIDER = 'divider',
    OPTION = 'option',
}

export type BaseItemSubHeaderProps = {
    type: BaseItemType.SUB_HEADER;
    title: string;
};
export type BaseItemDividerProps = {
    type: BaseItemType.DIVIDER;
};
export type BaseItemOptionProps = {
    type: BaseItemType.OPTION;
    label: string;
    value: string | number;
    description?: string;
    leftIcon?: grauityIconName;
    rightIcon?: grauityIconName;
    disabled?: boolean;
};

export type BaseItemProps =
    | BaseItemSubHeaderProps
    | BaseItemDividerProps
    | BaseItemOptionProps;

export interface DropdownMenuProps {
    /**
     * The name of the dropdown menu.
     * @type {string}
     */
    name: string;

    /**
     * Whether to show the header of the dropdown menu.
     * - If `showHeader` is false, `title`, `overline`, and `subtext` will be ignored.
     * - if `title`, `overline`, and `subtext` all are not provided, `showHeader` will be ignored.
     * @default true
     */
    showHeader?: boolean;

    /**
     * The title of the dropdown menu.
     * @default 'Select'
     */
    title?: string;

    /**
     * The overline text of the dropdown menu.
     * @default ''
     */
    overline?: string;

    /**
     * The subtext of the dropdown menu.
     * @default ''
     */
    subtext?: string;

    /**
     * Custom header component for the dropdown menu.
     * - If `customHeader` is provided, `showHeader`, `title`, `overline`, and `subtext` will be ignored.
     * @default null
     */
    customHeader?: React.ReactNode;

    /**
     * Whether the dropdown menu is searchable.
     * @default false
     */
    searchable?: boolean;

    /**
     * Placeholder text for the search input.
     * @default 'Search'
     */
    searchPlaceholder?: string;

    /**
     * Icon name for the search input.
     * @default 'search'
     */
    searchIcon?: grauityIconName;

    /**
     * Callback function called when the search input value changes.
     * @param value - The new value of the search input.
     * @default A function that searches on label and description of items.
     */
    onSearchInputChange?: (value: string) => void;

    /**
     * Whether multiple items can be selected.
     * @default false
     */
    multiple?: boolean;

    /**
     * List of items to be displayed in the dropdown menu.
     * @type {
            type: 'subheader'
            title?: string;
        } | {
            type: 'divider'
        } | {
            type: 'option'
            label: string;
            value: string;
            description?: string;
            leftIcon?: grauityIconName;
            rightIcon?: grauityIconName;
            disabled?: boolean;
        }
     * @default []
     */
    items: BaseItemProps[];

    /**
     * Whether to show action buttons (e.g., Apply, Clear All).
     * @default false in single select mode, true in multiple select mode
     */
    showActionButtons?: boolean;

    /**
     * Whether to show the "Clear All" button.
     * - If `showActionButtons` is false, `showClearAllButton` will be ignored.
     * - If `multiple` is false, `showClearAllButton` will always be false.
     * @default true
     */
    showClearAllButton?: boolean;

    /**
     * Text for the "Clear All" button.
     * @default 'Clear All'
     */
    clearAllButtonText?: string;

    /**
     * Text for the "Apply" button.
     * @default 'Apply'
     */
    applyButtonText?: string;

    /**
     * Callback function called when the "Clear All" button is clicked.
     * @default null
     */
    onClearAll?: () => void;

    /**
     * Callback function called to apply the selected items.
     * - In single select mode, if `showActionButtons` is false, `onApply` will be called when an option is clicked.
     * - In multiple select mode, if `showActionButtons` is false, `onApply` will be called when clicked outside the dropdown menu.
     * - If `showActionButtons` is true, `onApply` will be called when the "Apply" button is clicked.
     * @param items - The selected items.
     * @default null
     */
    onApply?: (items: BaseItemOptionProps[] | BaseItemOptionProps) => void;

    /**
     * Callback function called when the dropdown menu is scrolled to the bottom.
     * @default null
     */
    onScrollToBottom?: () => void;

    /**
     * Additional class names for the dropdown menu.
     * @default null
     */
    className?: string;

    /**
     * Additional styles for the dropdown menu.
     * @default {}
     */
    styles?: React.CSSProperties;

    /**
     * The values of the selected items.
     * @default []
     */
    selectedValues?: (string | number)[];

    /**
     * The trigger element for the dropdown menu.
     * - If the trigger element is not provided, the dropdown menu will be always visible.
     * - If the trigger element is provided, initially the dropdown menu will be hidden.
     * - If the trigger element is provided, the dropdown menu will be shown when the trigger element is clicked.
     * @default null
     */
    trigger?: React.ReactNode;

    /**
     * The width of the dropdown menu.
     * - If width is not provided, the width will be set to 300px.
     * - If width is provided, the width will be set to the provided value.
     * - If the width is 100%, the width will be equal to the width of the trigger element or parent element if trigger is not given.
     * @default '300px'
     */
    width?: string;

    /**
     * Additional props for the dropdown trigger.
     * @default {}
     */
    triggerProps?: DropdownTriggerProps;
}

export interface DropdownTriggerProps {
    /**
     * The label for the dropdown trigger.
     * @type {string}
     */
    label: string;

    /**
     * The placeholder text for the dropdown trigger.
     * @type {string}
     * @default 'Select'
     */
    placeholder?: string;

    /**
     * The error message to display when the dropdown trigger is invalid.
     * @type {string}
     */
    errorMessage?: string;

    /**
     * Whether the dropdown trigger is required.
     * @type {boolean}
     * @default false
     */
    isRequired?: boolean;

    /**
     * The children of the dropdown trigger.
     * @type {React.ReactNode}
     */
    children?: React.ReactNode;
}

export interface StyledDropdownMenuProps extends StyledDivProps {
    $width: string;
}

export interface StyledDropdownMenuOptionDescriptionProps
    extends StyledDivProps {
    $disabled?: boolean;
}
