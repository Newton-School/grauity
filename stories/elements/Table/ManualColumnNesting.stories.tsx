/* eslint-disable import/no-duplicates */
import Table, { TableProps } from 'ui/elements/Table';

import { Template } from './ManualColumnNesting.source';
import templateRawSourceCode from './ManualColumnNesting.source?raw';

export default {
    title: 'Elements/Table/ManualTableColumnNesting',
    component: Table,
    parameters: {
        docs: {
            source: {
                code: templateRawSourceCode,
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
