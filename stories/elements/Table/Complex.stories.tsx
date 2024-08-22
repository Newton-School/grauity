import React from 'react';

import { TableProps, NSTable } from '../../../ui';
import complexArgs from './complexArgs';

export default {
    title: 'Elements/NSTable',
    component: NSTable,
};

const Template = (args: TableProps) => <NSTable {...args} />;

// Table in Light Theme
export const ComplexLight = Template.bind({});
ComplexLight.parameters = {
    theme: 'light',
};
ComplexLight.args = {
    ...complexArgs,
};

// Table in Dark Theme
export const ComplexDark = Template.bind({});
ComplexDark.parameters = {
    theme: 'dark',
};
ComplexDark.args = {
    ...complexArgs,
};
