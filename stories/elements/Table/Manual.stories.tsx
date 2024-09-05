/* eslint-disable import/no-duplicates */
import NSTable, {TableProps} from 'ui/elements/Table';

import { Template } from './Manual.source';
import templateRawSourceCode from './Manual.source?raw';

export default {
    title: 'Elements/NSTable/ManualTable',
    component: NSTable,
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
};

export const ManualTable = Template.bind({});

ManualTable.args = {
    ...args,
};
