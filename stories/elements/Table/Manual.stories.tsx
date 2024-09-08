/* eslint-disable import/no-duplicates */
import Table, { TableProps } from 'ui/elements/Table';

import { Template } from './Manual.source';

// eslint-disable-next-line import/no-unresolved, import/extensions, import/no-webpack-loader-syntax
const sourceCode = require('!!raw-loader!./Manual.source.tsx').default;

export default {
    title: 'Elements/Table/ManuallyCreatedTable',
    description: 'Table component manually created',
    component: Table,
    parameters: {
        docs: {
            source: {
                code: sourceCode,
            },
        },
    },
};

const args: TableProps = {
    condensed: true,
    striped: true,
    borderAround: true,
    borderWithin: true,
    borderHorizontal: true,
    borderVertical: true,
    className: '',
    loading: false,
    style: {},
    capitalizeHeaders: true,
};

export const Component = Template.bind({});

Component.args = {
    ...args,
};
