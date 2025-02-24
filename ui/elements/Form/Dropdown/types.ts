import React from 'react';

import { DropdownMenuProps } from '../../DropdownMenu';

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
     * The custom trigger element to display in the dropdown
     * @default null
     * @example <Button>Click me</Button>
     */
    customTrigger?: React.ReactNode;
}

export interface DropdownTriggerInternalProps extends DropdownTriggerProps {
    onTriggerClick: () => void;
}

export interface DropdownProps extends DropdownTriggerProps, DropdownMenuProps {
    /**
     * The width of the dropdown menu.
     * @default '100%'
     */
    width?: string;
}
