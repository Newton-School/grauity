/* eslint-disable import/no-duplicates */
import Table, { TableProps } from 'ui/elements/Table';

import { Template } from './ManualColumnNesting.source';

// eslint-disable-next-line import/no-unresolved, import/extensions, import/no-webpack-loader-syntax
const sourceCode = require('!!raw-loader!./ManualColumnNesting.source.tsx').default;

export default {
    title: 'Elements/Table/ManualTableColumnNesting',
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
    highlightHeaders: true,
};

export const ManualTableColumnNesting = Template.bind({});

ManualTableColumnNesting.args = {
    ...args,
};
