import { StoryFn } from '@storybook/react';
import React, { useState } from 'react';
import Combobox, { ComboboxProps } from 'ui/elements/Combobox';
import { BaseItemOptionProps, BaseItemType } from 'ui/elements/DropdownMenu';

export default {
    title: 'Elements/Combobox',
    component: Combobox,
    decorators: [
        (Story: StoryFn) => (
            <div style={{ width: '400px', height: '300px' }}>
                <Story />
            </div>
        ),
    ],
};

const Template = (args: ComboboxProps) => <Combobox {...args} />;

const defaultOptions: BaseItemOptionProps[] = [
    { label: 'Apple', value: 'apple', type: BaseItemType.OPTION },
    { label: 'Banana', value: 'banana', type: BaseItemType.OPTION },
    { label: 'Orange', value: 'orange', type: BaseItemType.OPTION },
];

export const Component = Template.bind({});
Component.args = {
    options: defaultOptions,
};

export const WithAPI = () => {
    const [options, setOptions] = useState<BaseItemOptionProps[]>(defaultOptions);
    const [selected, setSelected] = useState<BaseItemOptionProps[]>([]);

    return (
        <Combobox
            options={options}
            value={selected}
            onChange={(val) => setSelected(val)}
            onSearchInputChange={(value) => {
                // connect with API
                setOptions(
                    defaultOptions.filter((opt) =>
                        opt.label.toLowerCase().includes(value.toLowerCase())
                    )
                );
            }}
        />
    );
};
