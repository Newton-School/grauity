import React, { useState } from 'react';
import { DropdownTriggerProps } from 'ui/elements/Form/Dropdown/types';
import {
    DropdownProps,
    NSButton,
    NSDropdown,
    NSDropdownMenuBaseItemOptionProps,
    NSDropdownMenuBaseItemType,
} from 'ui/index';

export default {
    title: 'Elements/Form/Dropdown',
    component: NSDropdown,
};

const Template = (args: DropdownProps) => <NSDropdown {...args} />;

const triggerProps: DropdownTriggerProps = {
    name: 'dropdown',
    label: 'Dropdown',
    placeholder: 'Select',
    isRequired: false,
    isDisabled: false,
    helpMessage: '',
    errorMessage: '',
    showSelectedValueOnTrigger: true,
};

const defaultArgs: DropdownProps = {
    ...triggerProps,
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
    onChange: () => {},
    onScrollToBottom: () => {},
    className: '',
    styles: {},
    selectedValues: [],
    menuProps: {
        width: '300px',
        fullWidth: true,
    },
};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};

// Example Tempate
const ExampleTemplate = (args: DropdownProps) => {
    const [selectedValues, setSelectedValues] = useState<
        NSDropdownMenuBaseItemOptionProps[]
    >([]);

    return (
        <>
            <NSDropdown
                {...args}
                selectedValues={selectedValues.map((value) => value.value)}
                onChange={setSelectedValues}
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
const singleSelectArgs: DropdownProps = {
    ...triggerProps,
    ...defaultArgs,
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
const multipleSelectArgs: DropdownProps = {
    ...triggerProps,
    ...defaultArgs,
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

// Dropdown With Custom Trigger
export const CustomTrigger = ExampleTemplate.bind({});
CustomTrigger.args = {
    ...singleSelectArgs,
    menuProps: {
        width: '300px',
        fullWidth: false,
    },
    trigger: <NSButton>Custom Trigger</NSButton>,
};
