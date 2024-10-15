import { StoryFn } from '@storybook/react';
import React from 'react';
import Button from 'ui/elements/Button';
import MultiSelectDropdown, {
    MultiSelectDropdownProps,
} from 'ui/elements/MultiSelectDropdown';

export default {
    title: 'Elements/MultiSelectDropdown/WithTrigger',
    component: MultiSelectDropdown,
    decorators: [
        (Story: StoryFn) => (
            <div style={{ width: '600px', height: '600px' }}>
                <div style={{ width: '250px', height: '50px' }}>
                    <Story />
                </div>
            </div>
        ),
    ],
};

const Template = (args: MultiSelectDropdownProps) => (
    <MultiSelectDropdown {...args} />
);

const defaultArgs: MultiSelectDropdownProps = {
    noOptionSelctedText: 'Select',
    options: new Set([
        { id: '1', label: 'Option 1' },
        { id: '2', label: 'Option 2' },
        { id: '3', label: 'Option 3' },
        { id: '4', label: 'Option 4' },
        { id: '5', label: 'Option 5' },
        { id: '6', label: 'Option 6' },
        { id: '7', label: 'Option 7' },
        { id: '8', label: 'Option 8' },
        { id: '9', label: 'Option 9' },
    ]),
    shouldEnableSearch: true,
    onSearchInputChange: () => {},
    searchPlaceholder: 'Search',
    shouldEnableAllSelected: true,
    defaultAllSelected: false,
    allOptionText: 'All',
    onOptionsChange: () => {},
    triggerComponent: <Button>Custom Trigger</Button>,
};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};
