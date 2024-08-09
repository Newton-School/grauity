import React from 'react';

import { TableProps, NSTable } from '../../../ui';
import complexArgs from './complexArgs';

export default {
    title: 'Elements/NSTable',
    component: NSTable,
};

const Template = (args: TableProps) => <NSTable {...args} />;

export const Complex = Template.bind({});

Complex.args = {
    ...complexArgs,
};
