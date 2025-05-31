import React from 'react';
import Table, { TableProps } from 'ui/elements/Table';

import complexArgs from './complexArgs';
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

export const ComplexRowsAndColumns = Template.bind({});
ComplexRowsAndColumns.args = {
    ...complexArgs
};
