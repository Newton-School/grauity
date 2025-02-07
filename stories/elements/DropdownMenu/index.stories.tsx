import React from 'react';
import DropdownMenu, { DropdownMenuProps } from 'ui/elements/DropdownMenu';
import { BaseItemType } from 'ui/elements/DropdownMenu/types';

export default {
    title: 'Elements/DropdownMenu',
    component: DropdownMenu,
};

const Template = (args: DropdownMenuProps) => <DropdownMenu {...args} />;

const defaultArgs: DropdownMenuProps = {
    showHeader: true,
    title: 'Select',
    overline: '',
    subtext: '',
    customHeader: null,
    searchable: false,
    searchPlaceholder: 'Search',
    searchIcon: 'search',
    onSearchInputChange: () => {},
    multiple: false,
    items: [
        {
            type: BaseItemType.SUB_HEADER,
            title: 'LEVELS',
        },
        {
            type: BaseItemType.OPTION,
            label: 'Easy',
            description: 'Please write your description here',
            leftIcon: 'check-circle',
            rightIcon: 'check-circle',
        },
        {
            type: BaseItemType.OPTION,
            label: 'Medium',
            description: 'Please write your description here',
            leftIcon: 'check-circle',
            rightIcon: 'check-circle',
        },
        {
            type: BaseItemType.DIVIDER,
        },
        {
            type: BaseItemType.OPTION,
            label: 'Hard',
            description: 'Please write your description here',
            leftIcon: 'check-circle',
            rightIcon: 'check-circle',
        },
        {
            type: BaseItemType.OPTION,
            label: 'Impossible',
            description: 'Please write your description here',
            leftIcon: 'check-circle',
            rightIcon: 'check-circle',
        },
    ],
    showActionButtons: false,
    showClearAllButton: true,
    clearAllButtonText: 'Clear All',
    applyButtonText: 'Apply',
    onClearAll: () => {},
    onApply: () => {},
    onScrollToBottom: () => {},
    className: '',
    styles: {},
};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};
