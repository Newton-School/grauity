import React from 'react';

import { TableProps, NSTable } from '../../../ui';
import simpleArgs from './simpleArgs';

export default {
    title: 'Elements/NSTable',
    component: NSTable,
};

const Template = (args: TableProps) => <NSTable {...args} />;

export const SimpleTable = Template.bind({});
SimpleTable.parameters = {
    theme: 'light',
};
SimpleTable.args = {
    ...simpleArgs,
};

export const SimpleTableDark = Template.bind({});
SimpleTableDark.parameters = {
    theme: 'dark',
};
SimpleTableDark.args = {
    ...simpleArgs,
};
