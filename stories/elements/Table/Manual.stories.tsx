import React from 'react';

import { NSTable, NSTableWrapper, NSTableBody, NSTableDataCell, NSTableHead, NSTableHeadingCell, NSTableRow } from '../../../ui';

export default {
    title: 'Elements/NSTable',
    component: NSTable,
};

export const Manual = () => (
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
