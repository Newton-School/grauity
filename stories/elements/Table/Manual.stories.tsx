import React from 'react';

import { NSTable, NSTableWrapper, NSTableBody, NSTableDataCell, NSTableHead, NSTableHeadingCell, NSTableRow, TableProps } from '../../../ui';

export default {
    title: 'Elements/NSTable',
    component: NSTable,
};

const Template = (args: TableProps) => (
    <NSTableWrapper borderAround={false} borderWithin striped={false}>
        <NSTableHead capitalizeHeaders={false}>
            <NSTableRow condensed={false}>
                <NSTableHeadingCell>
                    Column 1
                </NSTableHeadingCell>
                <NSTableHeadingCell>
                    Column 2
                </NSTableHeadingCell>
                <NSTableHeadingCell>
                    Column 3
                </NSTableHeadingCell>
            </NSTableRow>
        </NSTableHead>

        <NSTableBody>
            <NSTableRow condensed={false}>
                <NSTableDataCell>
                    Row 1, Cell 1
                </NSTableDataCell>
                <NSTableDataCell>
                    Row 1, Cell 2
                </NSTableDataCell>
                <NSTableDataCell>
                    Row 1, Cell 3
                </NSTableDataCell>
            </NSTableRow>
            <NSTableRow condensed={false}>
                <NSTableDataCell>
                    Row 2, Cell 1
                </NSTableDataCell>
                <NSTableDataCell>
                    Row 2, Cell 2
                </NSTableDataCell>
                <NSTableDataCell>
                    Row 2, Cell 3
                </NSTableDataCell>
            </NSTableRow>
            <NSTableRow condensed={false}>
                <NSTableDataCell>
                    Row 3, Cell 1
                </NSTableDataCell>
                <NSTableDataCell>
                    Row 3, Cell 2
                </NSTableDataCell>
                <NSTableDataCell>
                    Row 3, Cell 3
                </NSTableDataCell>
            </NSTableRow>
        </NSTableBody>
    </NSTableWrapper>
);

const args = {
    condensed: true,
    striped: true,
    borderAround: true,
    borderWithin: true,
    className: '',
    loading: false,
    style: {},
    capitalizeHeaders: false,
};

export const ManualTable = Template.bind({});
ManualTable.parameters = {
    theme: 'light',
};
ManualTable.args = {
    ...args,
};

export const ManualTableDark = Template.bind({});
ManualTableDark.parameters = {
    theme: 'dark',
};
ManualTableDark.args = {
    ...args,
};
