import React from 'react';

export interface DropdownOption {
    id: string;
    label: string;
}

export interface MultiSelectDropdownProps {
    noOptionSelctedText?: string;
    options: Set<DropdownOption>;
    shouldEnableSearch?: boolean;
    onSearchInputChange?: (value: string) => void;
    searchPlaceholder?: string;
    shouldEnableAllSelected?: boolean;
    defaultAllSelected?: boolean;
    allOptionText?: string;
    onOptionsChange?: (options: Set<DropdownOption>) => void;
}

export interface DropdownListItemProps {
    displayText: string;
    onClickFn: () => void;
    isSelected?: boolean;
}

export interface StyledDropdownWrapperProps
    extends React.SelectHTMLAttributes<HTMLSelectElement> {
    ref?: React.Ref<HTMLSelectElement>;
}

export interface StyledDropdownHeaderProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export interface StyledDropdownListItemProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export interface StyledDropdownSearchInputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {}
