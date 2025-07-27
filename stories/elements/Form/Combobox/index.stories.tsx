import React, { useState } from 'react';
import { BaseItemProps } from 'ui/elements/DropdownMenu';
import { ComboboxTriggerInternalProps } from 'ui/elements/Form/Combobox/types';
import {
    ComboboxProps,
    NSCheckbox,
    NSCombobox,
    NSDropdownMenuBaseItemOptionProps,
    NSDropdownMenuBaseItemType,
} from 'ui/index';

export default {
    title: 'Elements/Form/Combobox',
    component: NSCombobox,
};

const Template = (args: ComboboxProps) => <NSCombobox {...args} />;

const triggerProps: ComboboxTriggerInternalProps = {
    name: 'dropdown',
    label: 'Combobox',
    placeholder: 'Type to search...',
    isRequired: false,
    isDisabled: false,
    helpMessage: '',
    errorMessage: '',
    color: 'brand',
};

const defaultArgs: ComboboxProps = {
    ...triggerProps,
    showHeader: true,
    title: 'Select',
    overline: '',
    subtext: '',
    customHeader: null,
    searchPlaceholder: 'Search',
    searchIcon: 'search',
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
            label: 'Avatar',
            value: 'option1',
            leftIcon: 'check-circle',
        },
        {
            type: NSDropdownMenuBaseItemType.OPTION,
            label: 'Avengers: Endgame',
            value: 'option2',
            leftIcon: 'check-circle',
        },
        {
            type: NSDropdownMenuBaseItemType.OPTION,
            label: 'Avatar: The Way of Water',
            value: 'option3',
            leftIcon: 'check-circle',
        },
        {
            type: NSDropdownMenuBaseItemType.OPTION,
            label: 'Star Wars: The Force Awakens',
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
    value: null,
    menuProps: {
        width: '300px',
        fullWidth: true,
    },
};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};

// Single Select Combobox Menu
const ExampleSingleSelectTemplate = (args: ComboboxProps) => {
    const [selectedValue, setSelectedValue] =
        useState<NSDropdownMenuBaseItemOptionProps>();

    return (
        <>
            <NSCombobox
                {...args}
                multiple={false}
                value={selectedValue}
                onChange={(value) =>
                    setSelectedValue(value as NSDropdownMenuBaseItemOptionProps)
                }
            />
            <div>
                <h2>Selected Values</h2>
                <ul>
                    <li>{selectedValue?.label || ''}</li>
                </ul>
            </div>
        </>
    );
};

const comboboxOptions: BaseItemProps[] = Array.from({ length: 20 }, (_, i) => ({
    type: NSDropdownMenuBaseItemType.OPTION,
    label: `Option ${i + 1} with some really looong text`,
    value: `option${i + 1}`,
}));

const singleSelectArgs: ComboboxProps = {
    ...triggerProps,
    ...defaultArgs,
    showHeader: true,
    title: 'Select',
    subtext: 'Click an option to select',
    multiple: false,
    items: comboboxOptions,
};

export const SingleSelect = ExampleSingleSelectTemplate.bind({});
SingleSelect.args = {
    ...singleSelectArgs,
};

export const SingleSelectWithApplyButton = ExampleSingleSelectTemplate.bind({});
SingleSelectWithApplyButton.args = {
    ...singleSelectArgs,
    showActionButtons: true,
};

// Multiple Select Combobox Menu
const ExampleMultiSelectTemplate = (args: ComboboxProps) => {
    const [selectedValues, setSelectedValues] = useState<
        NSDropdownMenuBaseItemOptionProps[]
    >([]);
    const [options, setOptions] = useState<BaseItemProps[]>(comboboxOptions);
    const [emulateSearch, setEmulateSearch] = useState(false);

    const handleTextInputChange = (text: string) => {
        if (!emulateSearch) {
            return;
        }

        if (!text) {
            setTimeout(() => {
                setOptions(comboboxOptions);
            }, 1000);
            return;
        }

        const newOptions = Array.from({ length: 20 }, (_, i) => ({
            type: NSDropdownMenuBaseItemType.OPTION,
            label: `Searched ${text} ${i + 1} with some really looong text`,
            value: `option${i + 1}-${text}`,
        })) as BaseItemProps[];

        setTimeout(() => {
            setOptions(newOptions);
        }, 1000);
    };

    return (
        <>
            <NSCombobox
                {...args}
                items={options}
                multiple
                value={selectedValues}
                showHeader={false}
                onChange={(value) =>
                    setSelectedValues(
                        value as NSDropdownMenuBaseItemOptionProps[]
                    )
                }
                onTextInputChange={handleTextInputChange}
                // useDefaultSearchMethod={false}
            />
            <br />
            <NSCheckbox name="emulate-search" isChecked={emulateSearch} onChange={e => {
                setEmulateSearch(e.target.checked);
            }} label="Should emulate search" />
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

const multipleSelectArgs: ComboboxProps = {
    ...triggerProps,
    ...defaultArgs,
    showHeader: true,
    title: 'Select',
    subtext: 'Click an option to select',
    multiple: true,
    items: comboboxOptions,
    value: [],
};

export const MultipleSelect = ExampleMultiSelectTemplate.bind({});
MultipleSelect.args = {
    ...multipleSelectArgs,
};

export const MultipleSelectWithApplyButton = ExampleMultiSelectTemplate.bind(
    {}
);
MultipleSelectWithApplyButton.args = {
    ...multipleSelectArgs,
    showActionButtons: true,
};
