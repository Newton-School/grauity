import React from 'react';
import { BaseItemOptionProps } from '../DropdownMenu';
import { StyledDivProps, StyledInputProps } from '../../../common/types';

export interface ComboboxProps {
    /**
     * Options to choose from.
     * @default []
     */
    options?: BaseItemOptionProps[];

    /**
     * Placeholder for the input.
     * @default 'Select'
     */
    placeholder?: string;

    /**
     * Currently selected values.
     * @default []
     */
    value?: BaseItemOptionProps[];

    /**
     * Callback fired when selected values change.
     */
    onChange?: (value: BaseItemOptionProps[]) => void;

    /**
     * Callback fired when search input changes.
     */
    onSearchInputChange?: (value: string) => void;

    /**
     * Width of the combobox.
     * @default '250px'
     */
    width?: string;

    /**
     * Additional class names for the wrapper.
     */
    className?: string;

    /**
     * Additional styles for the wrapper.
     */
    style?: React.CSSProperties;
}

export interface StyledComboboxProps extends StyledDivProps {
    $width: string;
}

export interface StyledComboboxInputProps extends StyledInputProps {
    $hasChips: boolean;
}
