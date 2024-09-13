/* eslint-disable no-console */
import React from 'react';
import MultiSelectDropdown, {
    MultiSelectDropdownProps,
} from 'ui/elements/MultiSelectDropdown';

export default {
    title: 'Elements/MultiSelectDropdown',
    component: MultiSelectDropdown,
};

const Template = (args: MultiSelectDropdownProps) => (
    <MultiSelectDropdown {...args} />
);

const defaultArgs: MultiSelectDropdownProps = {};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};
