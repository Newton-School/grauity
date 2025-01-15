import React from 'react';

import {
    StyledTable,
    StyledTableBody,
    StyledTableDataCell,
    StyledTableHead,
    StyledTableHeadingCell,
    StyledTableRow,
} from './Table.styles';
import { TableProps } from './types';

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
                    {columns?.map((column) => (
                        <StyledTableDataCell
                            key={`table--column-${column.key}--row-${
                                rowIndex + 1
                            }`}
                            align={
                                row[column.key]?.align ||
                                column?.align ||
                                'center'
                            }
                            colSpan={row[column.key]?.colSpan || 1}
                            rowSpan={row[column.key]?.rowSpan || 1}
                            vAlign={row[column.key]?.vAlign || 'middle'}
                        >
                            {row[column.key]?.render
                                ? row[column.key].render(row[column.key])
                                : row[column.key]?.display}
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
