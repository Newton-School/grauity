import React, { useState } from 'react';
import {
    DropdownMenuBaseItemOptionProps,
    DropdownMenuBaseItemType,
    DropdownMenuProps,
    NSButton,
    NSDropdownMenu,
} from 'ui/index';

export default {
    title: 'Elements/DropdownMenu',
    component: NSDropdownMenu,
};

const Template = (args: DropdownMenuProps) => <NSDropdownMenu {...args} />;

const defaultArgs: DropdownMenuProps = {
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
            type: DropdownMenuBaseItemType.SUB_HEADER,
            title: 'LEVELS',
        },
        {
            type: DropdownMenuBaseItemType.OPTION,
            label: 'Easy',
            value: 'easy',
            description: 'Please write your description here',
            leftIcon: 'check-circle',
            rightIcon: 'check-circle',
        },
        {
            type: DropdownMenuBaseItemType.OPTION,
            label: 'Medium',
            value: 'medium',
            description: 'Please write your description here',
            leftIcon: 'check-circle',
        },
        {
            type: DropdownMenuBaseItemType.DIVIDER,
        },
        {
            type: DropdownMenuBaseItemType.OPTION,
            label: 'Hard',
            value: 'hard',
            leftIcon: 'check-circle',
            rightIcon: 'check-circle',
        },
        {
            type: DropdownMenuBaseItemType.OPTION,
            label: 'Impossible',
            value: 'impossible',
            description: 'Please write your description here',
            leftIcon: 'check-circle',
            disabled: true,
        },
        {
            type: DropdownMenuBaseItemType.DIVIDER,
        },
        {
            type: DropdownMenuBaseItemType.SUB_HEADER,
            title: 'OTHERS',
        },
        {
            type: DropdownMenuBaseItemType.OPTION,
            label: 'Option 1',
            value: 'option1',
            leftIcon: 'check-circle',
        },
        {
            type: DropdownMenuBaseItemType.OPTION,
            label: 'Option 2',
            value: 'option2',
            leftIcon: 'check-circle',
        },
        {
            type: DropdownMenuBaseItemType.OPTION,
            label: 'Option 3',
            value: 'option3',
            leftIcon: 'check-circle',
        },
        {
            type: DropdownMenuBaseItemType.OPTION,
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
    trigger: null,
    width: '300px',
};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};

// Example Tempate
const ExampleTemplate = (args: DropdownMenuProps) => {
    const { multiple } = args;
    const [selectedValues, setSelectedValues] = useState<
        DropdownMenuBaseItemOptionProps[]
    >([]);

    return (
        <>
            <NSDropdownMenu
                {...args}
                selectedValues={selectedValues.map((value) => value.value)}
                onApply={(values) => {
                    if (multiple) {
                        setSelectedValues(
                            values as DropdownMenuBaseItemOptionProps[]
                        );
                    } else {
                        setSelectedValues([
                            values as DropdownMenuBaseItemOptionProps,
                        ]);
                    }
                }}
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
const singleSelectArgs: DropdownMenuProps = {
    showHeader: true,
    title: 'Select',
    subtext: 'Click an option to select',
    multiple: false,
    searchable: true,
    items: Array.from({ length: 20 }, (_, i) => ({
        type: DropdownMenuBaseItemType.OPTION,
        label: `Option ${i + 1}`,
        value: `option${i + 1}`,
    })),
    selectedValues: [],
    trigger: <NSButton>Open Dropdown</NSButton>,
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
const multipleSelectArgs: DropdownMenuProps = {
    showHeader: true,
    title: 'Select',
    subtext: 'Click an option to select',
    multiple: true,
    searchable: true,
    items: Array.from({ length: 20 }, (_, i) => ({
        type: DropdownMenuBaseItemType.OPTION,
        label: `Option ${i + 1}`,
        value: `option${i + 1}`,
    })),
    selectedValues: [],
    trigger: <NSButton>Open Dropdown</NSButton>,
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
