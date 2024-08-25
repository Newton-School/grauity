import React from 'react';

import { NSTable, TableProps } from '../../../ui';
import simpleArgs from './simpleArgs';

export default {
    title: 'Elements/NSTable',
    component: NSTable,
};

const Template = (args: TableProps) => <NSTable {...args} />;

export const SimpleTable = Template.bind({});

SimpleTable.args = {
    ...simpleArgs,
};
