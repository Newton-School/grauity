import React from 'react';
import Tag from 'ui/elements/Tag/Tag';
import { TagProps } from 'ui/elements/Tag/types';

export default {
    title: 'Elements/Tag',
    component: Tag,
};

const Template = (args: TagProps) => <Tag {...args} />;

const defaultArgs: TagProps = {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    onButtonClick: () => {
        alert('Tag close clicked!');
    },
    isDisabled: false,
    shouldTruncateText: true,
    className: 'custom-tag-class-name',
    icon: 'filter-filled',
    buttonIcon: 'close',
};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};
