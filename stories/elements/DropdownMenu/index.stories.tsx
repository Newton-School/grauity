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
            value: 'easy',
            description: 'Please write your description here',
            leftIcon: 'check-circle',
            rightIcon: 'check-circle',
        },
        {
            type: BaseItemType.OPTION,
            label: 'Medium',
            value: 'medium',
            description: 'Please write your description here',
            leftIcon: 'check-circle',
        },
        {
            type: BaseItemType.DIVIDER,
        },
        {
            type: BaseItemType.OPTION,
            label: 'Hard',
            value: 'hard',
            leftIcon: 'check-circle',
            rightIcon: 'check-circle',
        },
        {
            type: BaseItemType.OPTION,
            label: 'Impossible',
            value: 'impossible',
            description: 'Please write your description here',
            leftIcon: 'check-circle',
            disabled: true,
        },
        {
            type: BaseItemType.DIVIDER,
        },
        {
            type: BaseItemType.SUB_HEADER,
            title: 'OTHERS',
        },
        {
            type: BaseItemType.OPTION,
            label: 'Option 1',
            value: 'option1',
            leftIcon: 'check-circle',
        },
        {
            type: BaseItemType.OPTION,
            label: 'Option 2',
            value: 'option2',
            leftIcon: 'check-circle',
        },
        {
            type: BaseItemType.OPTION,
            label: 'Option 3',
            value: 'option3',
            leftIcon: 'check-circle',
        },
        {
            type: BaseItemType.OPTION,
            label: 'Option 4',
            value: 'option4',
            leftIcon: 'check-circle',
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
    selectedValues: [],
};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};

// Single Select Dropdown Menu
const singleSelectArgs: DropdownMenuProps = {
    showHeader: true,
    title: 'Select',
    subtext: 'Click an option to select',
    multiple: false,
    searchable: true,
    items: Array.from({ length: 20 }, (_, i) => ({
        type: BaseItemType.OPTION,
        label: `Option ${i + 1}`,
        value: `option${i + 1}`,
    })),
    selectedValues: [],
};

export const SingleSelect = Template.bind({});
SingleSelect.args = {
    ...singleSelectArgs,
};

export const SingleSelectWithApplyButton = Template.bind({});
SingleSelectWithApplyButton.args = {
    ...singleSelectArgs,
    showActionButtons: true,
};

// Multiple Select Dropdown Menu
const multipleSelectArgs: DropdownMenuProps = {
    showHeader: true,
    title: 'Select',
    subtext: 'Click an option to select',
    multiple: true,
    searchable: true,
    items: Array.from({ length: 20 }, (_, i) => ({
        type: BaseItemType.OPTION,
        label: `Option ${i + 1}`,
        value: `option${i + 1}`,
    })),
    selectedValues: [],
};

export const MultipleSelect = Template.bind({});
MultipleSelect.args = {
    ...multipleSelectArgs,
};

export const MultipleSelectWithApplyButton = Template.bind({});
MultipleSelectWithApplyButton.args = {
    ...multipleSelectArgs,
    showActionButtons: true,
};
