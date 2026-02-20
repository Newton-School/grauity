import React, { useState } from 'react';
import {
    BaseItemOptionProps,
    BaseItemProps,
    BaseItemType,
} from 'ui/elements/DropdownMenu';
import Dropdown from 'ui/elements/Form/Dropdown';
import Pill from 'ui/elements/Pill/Pill';
import { PillProps } from 'ui/elements/Pill/types';

export default {
    title: 'Elements/Pill',
    component: Pill,
};

const Template = (args: PillProps) => <Pill {...args} />;

const defaultArgs: PillProps = {
    children: 'Select Status',
    color: 'brand',
    count: 3,
    leftIconName: 'waveform',
    rightIconName: 'chevron-down',
    isActive: false,
    isDisabled: false,
    isReadOnly: false,
    onClick: () => {},
    size: 'medium',
};

const dropdownItems: BaseItemProps[] = [
    {
        type: BaseItemType.OPTION,
        label: 'Open',
        value: 'open',
    },
    {
        type: BaseItemType.OPTION,
        label: 'In Progress',
        value: 'in_progress',
    },
    {
        type: BaseItemType.OPTION,
        label: 'Blocked',
        value: 'blocked',
    },
    {
        type: BaseItemType.OPTION,
        label: 'Done',
        value: 'done',
    },
];

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};

export const Active = Template.bind({});

Active.args = {
    ...defaultArgs,
    isActive: true,
};

export const Disabled = Template.bind({});

Disabled.args = {
    ...defaultArgs,
    isDisabled: true,
};

export const ReadOnly = Template.bind({});

ReadOnly.args = {
    ...defaultArgs,
    isReadOnly: true,
};

const DropdownTriggerTemplate = (args: PillProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState<
        BaseItemOptionProps | BaseItemOptionProps[]
    >([]);

    const isActive = isOpen || (Array.isArray(value) && value.length > 0);

    return (
        <Dropdown
            name="pill-dropdown"
            items={dropdownItems}
            value={value}
            showActionButtons
            showClearAllButton
            title='Select Status'
            onChange={(selectedValue) => {
                setValue(selectedValue);
            }}
            multiple
            onClose={() => {
                setIsOpen(false);
            }}
            menuProps={{
                width: '240px',
                fullWidth: false,
            }}
            trigger={
                <Pill
                    {...args}
                    count={Array.isArray(value) && value.length}
                    isActive={isActive}
                    rightIconName={isOpen ? 'chevron-up' : 'chevron-down'}
                    onClick={() => {
                        setIsOpen((prev) => !prev);
                    }}
                />
            }
        />
    );
};

export const DropdownTrigger = DropdownTriggerTemplate.bind({});

DropdownTrigger.args = {
    ...defaultArgs,
    onClick: () => {},
};

const BooleanTriggerTemplate = (args: PillProps) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <Pill
            {...args}
            isActive={isActive}
            rightIconName={isActive ? 'close' : null}
            onClick={() => {
                setIsActive((prev) => !prev);
            }}
        />
    );
};

export const BooleanTrigger = BooleanTriggerTemplate.bind({});

BooleanTrigger.args = {
    children: 'Toggle State',
};
