import React from 'react';

import {
    NSTable,
    NSTableBody,
    NSTableDataCell,
    NSTableHead,
    NSTableHeadingCell,
    NSTableRow,
    NSTableWrapper,
    TableProps,
} from '../../../ui';

export default {
    title: 'Elements/NSTable',
    component: NSTable,
};

const Template = (args: TableProps) => (
    <NSTableWrapper
        borderAround={args?.borderAround}
        borderWithin={args?.borderWithin}
        borderHorizontal={args?.borderHorizontal}
        borderVertical={args?.borderVertical}
        striped={args?.striped}
    >
        <NSTableHead
            capitalizeHeaders={args?.capitalizeHeaders}
            highlightHeaders={args?.highlightHeaders}
        >
            <NSTableRow condensed={args?.condensed}>
                <NSTableHeadingCell rowSpan={2}>
                    Column 1 (rowSpan=2)
                </NSTableHeadingCell>
                <NSTableHeadingCell colSpan={2}>
                    Super Column (colSpan=2)
                </NSTableHeadingCell>
            </NSTableRow>
            <NSTableRow condensed={args?.condensed}>
                <NSTableHeadingCell>Column 2</NSTableHeadingCell>
                <NSTableHeadingCell>Column 3</NSTableHeadingCell>
            </NSTableRow>
        </NSTableHead>

        <NSTableBody>
            <NSTableRow condensed={args?.condensed}>
                <NSTableDataCell>Row 1, Cell 1</NSTableDataCell>
                <NSTableDataCell>Row 1, Cell 2</NSTableDataCell>
                <NSTableDataCell>Row 1, Cell 3</NSTableDataCell>
            </NSTableRow>
            <NSTableRow condensed={args?.condensed}>
                <NSTableDataCell>Row 2, Cell 1</NSTableDataCell>
                <NSTableDataCell>Row 2, Cell 2</NSTableDataCell>
                <NSTableDataCell>Row 2, Cell 3</NSTableDataCell>
            </NSTableRow>
            <NSTableRow condensed={args?.condensed}>
                <NSTableDataCell>Row 3, Cell 1</NSTableDataCell>
                <NSTableDataCell>Row 3, Cell 2</NSTableDataCell>
                <NSTableDataCell>Row 3, Cell 3</NSTableDataCell>
            </NSTableRow>
        </NSTableBody>
    </NSTableWrapper>
);

const args = {
    condensed: true,
    striped: true,
    borderAround: true,
    borderWithin: true,
    borderHorizontal: true,
    borderVertical: true,
    className: '',
    loading: false,
    style: {},
    capitalizeHeaders: false,
    highlightHeaders: false,
};

export const ManualTableColumnNesting = Template.bind({});

ManualTableColumnNesting.args = {
    ...args,
};
