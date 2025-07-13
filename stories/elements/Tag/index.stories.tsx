import React from 'react';
import Tag from 'ui/elements/Tag/Tag';
import { TagProps } from 'ui/elements/Tag/types';

export default {
    title: 'Elements/Tag',
    component: Tag,
};

const Template = (args: TagProps) => <Tag {...args} />;

const defaultArgs: TagProps = {
    children: 'This is a tag This is a tag This is a tag This is a tag This is a tag',
    onCloseClick: () => {
        alert('Tag close clicked!');
    },
    variant: 'brand',
    className: 'custom-tag-class-name',
    icon: 'filter-filled'
};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};
