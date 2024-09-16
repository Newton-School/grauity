import { StoryFn } from '@storybook/react';
import React from 'react';
import SelectDropDown, {
    SelectDropdownProps,
} from 'ui/elements/SelectDropdown';

export default {
    title: 'Elements/SelectDropdown',
    component: SelectDropDown,
    decorators: [
        (Story: StoryFn) => (
            <div style={{ width: '150px', height: '40px' }}>
                <Story />
            </div>
        ),
    ],
};

const Template = (args: SelectDropdownProps) => <SelectDropDown {...args} />;

const defaultArgs: SelectDropdownProps = {
    iconName: 'plus',
    text: 'Select',
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
    onOptionSelected: () => {},
};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};
