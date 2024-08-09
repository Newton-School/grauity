import React from 'react';

import { TableProps, NSTable } from '../../../ui';
import simpleArgs from './simpleArgs';

export default {
    title: 'Elements/NSTable',
    component: NSTable,
};

const Template = (args: TableProps) => <NSTable {...args} />;

export const Simple = Template.bind({});

Simple.args = {
    ...simpleArgs,
};
