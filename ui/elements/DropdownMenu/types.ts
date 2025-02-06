import React from 'react';
import { grauityIconName } from 'ui/core';

enum BaseItemType {
    SUB_HEADER = 'subheader',
    SEARCH = 'search',
    DIVIDER = 'divider',
    DEFAULT = 'default',
    CHECKBOX = 'checkbox',
}

type BaseItemSubHeaderProps = {
    type: BaseItemType.SUB_HEADER;
    title: string;
};
type BaseItemSearchProps = {
    type: BaseItemType.SEARCH;
    icon?: grauityIconName;
    placeholder?: string;
    onChange?: (value: string) => void;
};
type BaseItemDividerProps = {
    type: BaseItemType.DIVIDER;
};
type BaseItemDefaultProps = {
    type: BaseItemType.DEFAULT;
    label: string;
    description?: string;
    leftIcon?: grauityIconName;
    rightIcon?: grauityIconName;
    checked?: boolean;
    disabled?: boolean;
    onClick?: () => void;
};
type BaseItemCheckboxProps = {
    type: BaseItemType.CHECKBOX;
    label: string;
    description?: string;
    leftIcon?: grauityIconName;
    checked?: boolean;
    disabled?: boolean;
    onChange?: (checked: boolean) => void;
};

type BaseItemProps =
    | BaseItemSubHeaderProps
    | BaseItemSearchProps
    | BaseItemDividerProps
    | BaseItemDefaultProps
    | BaseItemCheckboxProps;

export interface DropdownMenuProps {
    showHeader?: boolean;
    title?: string;
    overline?: string;
    subtext?: string;
    customHeader?: React.ReactNode;
    items: BaseItemProps[];
    showFooter?: boolean;
    showClearAllButton?: boolean;
    showApplyButton?: boolean;
    clearAllButtonText?: string;
    applyButtonText?: string;
    onClearAll?: () => void;
    onApply?: () => void;
    onClose?: () => void;
    onScrollToBottom?: () => void;
}
