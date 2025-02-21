import React, { useState } from 'react';
import {
    NSDropdownMenu,
    NSDropdownMenuBaseItemOptionProps,
    NSDropdownMenuBaseItemType,
    NSDropdownMenuProps,
} from 'ui/index';

export default {
    title: 'Elements/DropdownMenu',
    component: NSDropdownMenu,
};

const Template = (args: NSDropdownMenuProps) => <NSDropdownMenu {...args} />;

const defaultArgs: NSDropdownMenuProps = {
    showHeader: true,
    title: 'Select',
    overline: '',
    subtext: '',
    customHeader: null,
    searchable: false,
    searchPlaceholder: 'Search',
    searchIcon: 'search',
    onSearchInputChange: null,
    multiple: false,
    items: [
        {
            type: NSDropdownMenuBaseItemType.SUB_HEADER,
            title: 'LEVELS',
        },
        {
            type: NSDropdownMenuBaseItemType.OPTION,
            label: 'Easy',
            value: 'easy',
            description: 'Please write your description here',
            leftIcon: 'check-circle',
            rightIcon: 'check-circle',
        },
        {
            type: NSDropdownMenuBaseItemType.OPTION,
            label: 'Medium',
            value: 'medium',
            description: 'Please write your description here',
            leftIcon: 'check-circle',
        },
        {
            type: NSDropdownMenuBaseItemType.DIVIDER,
        },
        {
            type: NSDropdownMenuBaseItemType.OPTION,
            label: 'Hard',
            value: 'hard',
            leftIcon: 'check-circle',
            rightIcon: 'check-circle',
        },
        {
            type: NSDropdownMenuBaseItemType.OPTION,
            label: 'Impossible',
            value: 'impossible',
            description: 'Please write your description here',
            leftIcon: 'check-circle',
            disabled: true,
        },
        {
            type: NSDropdownMenuBaseItemType.DIVIDER,
        },
        {
            type: NSDropdownMenuBaseItemType.SUB_HEADER,
            title: 'OTHERS',
        },
        {
            type: NSDropdownMenuBaseItemType.OPTION,
            label: 'Option 1',
            value: 'option1',
            leftIcon: 'check-circle',
        },
        {
            type: NSDropdownMenuBaseItemType.OPTION,
            label: 'Option 2',
            value: 'option2',
            leftIcon: 'check-circle',
        },
        {
            type: NSDropdownMenuBaseItemType.OPTION,
            label: 'Option 3',
            value: 'option3',
            leftIcon: 'check-circle',
        },
        {
            type: NSDropdownMenuBaseItemType.OPTION,
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
    width: '300px',
};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};

// Example Tempate
const ExampleTemplate = (args: NSDropdownMenuProps) => {
    const [selectedValues, setSelectedValues] = useState<
        NSDropdownMenuBaseItemOptionProps[]
    >([]);

    return (
        <>
            <NSDropdownMenu
                {...args}
                selectedValues={selectedValues.map((value) => value.value)}
                onApply={setSelectedValues}
            />
            <div>
                <h2>Selected Values</h2>
                <ul>
                    {selectedValues.map((value) => (
                        <li key={value.value}>{value.label}</li>
                    ))}
                </ul>
            </div>
        </>
    );
};

// Single Select Dropdown Menu
const singleSelectArgs: NSDropdownMenuProps = {
    showHeader: true,
    title: 'Select',
    subtext: 'Click an option to select',
    multiple: false,
    searchable: true,
    items: Array.from({ length: 20 }, (_, i) => ({
        type: NSDropdownMenuBaseItemType.OPTION,
        label: `Option ${i + 1}`,
        value: `option${i + 1}`,
    })),
    selectedValues: [],
};

export const SingleSelect = ExampleTemplate.bind({});
SingleSelect.args = {
    ...singleSelectArgs,
};

export const SingleSelectWithApplyButton = ExampleTemplate.bind({});
SingleSelectWithApplyButton.args = {
    ...singleSelectArgs,
    showActionButtons: true,
};

// Multiple Select Dropdown Menu
const multipleSelectArgs: NSDropdownMenuProps = {
    showHeader: true,
    title: 'Select',
    subtext: 'Click an option to select',
    multiple: true,
    searchable: true,
    items: Array.from({ length: 20 }, (_, i) => ({
        type: NSDropdownMenuBaseItemType.OPTION,
        label: `Option ${i + 1}`,
        value: `option${i + 1}`,
    })),
    selectedValues: [],
};

export const MultipleSelect = ExampleTemplate.bind({});
MultipleSelect.args = {
    ...multipleSelectArgs,
};

export const MultipleSelectWithApplyButton = ExampleTemplate.bind({});
MultipleSelectWithApplyButton.args = {
    ...multipleSelectArgs,
    showActionButtons: true,
};
