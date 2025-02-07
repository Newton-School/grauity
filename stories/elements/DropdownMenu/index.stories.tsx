import React from 'react';
import DropdownMenu, { DropdownMenuProps } from 'ui/elements/DropdownMenu';

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
    items: [],
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
