import React from 'react';

import {
    StyledTable,
    StyledTableBody,
    StyledTableDataCell,
    StyledTableHead,
    StyledTableHeadingCell,
    StyledTableRow,
} from './Table.styles';
import { TableColumn, TableProps } from './types';
import { getColumnProperty } from './utils';

/**
 * A table is a component that is used to display data in a tabular format.
 * It is composed of rows and columns.
 */
const Table = ({
    rows = [],
    columns = [],
    condensed = true,
    striped = false,
    borderAround = true,
    borderWithin = true,
    borderHorizontal = true,
    borderVertical = true,
    className = '',
    style = {},
    capitalizeHeaders = false,
    highlightHeaders = true,
    hoverable = false,
}: TableProps) => (
    <StyledTable
        borderAround={borderAround}
        borderWithin={borderWithin}
        borderHorizontal={borderHorizontal}
        borderVertical={borderVertical}
        striped={striped}
        className={className}
        style={style}
        role="table"
    >
        <StyledTableHead
            capitalizeHeaders={capitalizeHeaders}
            highlightHeaders={highlightHeaders}
        >
            <StyledTableRow condensed={condensed}>
                {columns?.map((column, columnIndex) => (
                    <StyledTableHeadingCell
                        key={column?.key || `table--column-${columnIndex + 1}`}
                        align={column?.align || 'center'}
                        width={column?.width || 'auto'}
                        colSpan={column?.colSpan || 1}
                        rowSpan={column?.rowSpan || 1}
                    >
                        {column.display}
                    </StyledTableHeadingCell>
                ))}
            </StyledTableRow>
        </StyledTableHead>

        <StyledTableBody>
            {rows?.map((row, rowIndex) => (
                <StyledTableRow
                    key={`table--row-${rowIndex + 1}`}
                    condensed={condensed}
                    hoverable={hoverable}
                >
                    {Object.entries(row)?.map(([columnKey, tableCellData]) => (
                        <StyledTableDataCell
                            key={`table--column-${columnKey}--row-${
                                rowIndex + 1
                            }`}
                            align={
                                tableCellData?.align ||
                                (getColumnProperty({
                                    columns,
                                    columnKey,
                                    property: 'align',
                                }) as TableColumn['align']) ||
                                'center'
                            }
                            colSpan={tableCellData?.colSpan || 1}
                            rowSpan={tableCellData?.rowSpan || 1}
                            vAlign={tableCellData?.vAlign || 'middle'}
                        >
                            {tableCellData?.render
                                ? tableCellData.render(tableCellData)
                                : tableCellData?.display}
                        </StyledTableDataCell>
                    ))}
                </StyledTableRow>
            ))}
        </StyledTableBody>
    </StyledTable>
);

Table.Table = StyledTable;
Table.TableBody = StyledTableBody;
Table.TableDataCell = StyledTableDataCell;
Table.TableHead = StyledTableHead;
Table.TableHeadingCell = StyledTableHeadingCell;
Table.TableRow = StyledTableRow;

export default Table;
