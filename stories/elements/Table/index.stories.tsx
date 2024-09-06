import React from 'react';
import Table, { TableProps } from 'ui/elements/Table';

import simpleArgs from './simpleArgs';

export default {
    title: 'Elements/Table',
    component: Table,
};

const Template = (args: TableProps) => <Table {...args} />;

export const Component = Template.bind({});

Component.args = {
    ...simpleArgs,
};
