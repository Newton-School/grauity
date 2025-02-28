import { BaseItemOptionProps, DropdownMenuProps } from '../../DropdownMenu';

export interface DropdownTriggerProps {
    /**
     * The name of the dropdown field
     * @required
     */
    name: string;

    /**
     * The label for the dropdown field
     */
    label?: string;

    /**
     * The placeholder text for the dropdown field
     * @default 'Select'
     */
    placeholder?: string;

    /**
     * Whether the dropdown field is required
     * @default false
     */
    isRequired?: boolean;

    /**
     * Whether to disable the dropdown field
     * @default false
     */
    isDisabled?: boolean;

    /**
     * The help message to display below the dropdown field
     */
    helpMessage?: string;

    /**
     * The error message to display when the dropdown field is invalid
     */
    errorMessage?: string;

    /**
     * Whether to show the selected value on trigger
     * - If it is false, the placeholder will be shown always.
     * - In single select mode, value will be shown.
     * - In multi select mode, 'n selected' will be shown.
     * @default true
     */
    showSelectedValueOnTrigger?: boolean;

    /**
     * The function to call when the dropdown menu is closed
     */
    onClose?: () => void;
}

export interface DropdownTriggerInternalProps extends DropdownTriggerProps {
    onTriggerClick: () => void;
    selectedValues: BaseItemOptionProps | BaseItemOptionProps[];
    multiple: boolean;
}

export interface DropdownProps extends DropdownTriggerProps, DropdownMenuProps {
    /**
     * The width of the dropdown menu.
     * @default '100%'
     */
    width?: string;
}
