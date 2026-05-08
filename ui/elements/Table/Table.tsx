import React, { useMemo, forwardRef } from 'react';

import {
    StyledTable,
    StyledTableBody,
    StyledTableDataCell,
    StyledTableHead,
    StyledTableHeadingCell,
    StyledTableRow,
} from './Table.styles';
import {
    TableProps,
    TableComponentProps,
    TableDataCellComponentProps,
    TableHeadComponentProps,
    TableHeadingCellComponentProps,
    TableRowComponentProps,
} from './types';

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
}: TableProps) => {
    const columnMap = useMemo(
        () => Object.fromEntries(columns.map((c) => [c.key, c])),
        [columns]
    );

    return (
        <StyledTable
            $borderAround={borderAround}
            $borderWithin={borderWithin}
            $borderHorizontal={borderHorizontal}
            $borderVertical={borderVertical}
            $striped={striped}
            className={className}
            style={style}
            role="table"
        >
            <StyledTableHead
                $capitalizeHeaders={capitalizeHeaders}
                $highlightHeaders={highlightHeaders}
            >
                <StyledTableRow $condensed={condensed}>
                    {columns?.map((column, columnIndex) => (
                        <StyledTableHeadingCell
                            key={
                                column?.key ||
                                `table--column-${columnIndex + 1}`
                            }
                            $align={column?.align || 'center'}
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
                        $condensed={condensed}
                        $hoverable={hoverable}
                    >
                        {columns?.map((column) => {
                            const tableCellData = row[column.key];
                            if (!tableCellData) {
                                return null;
                            }
                            return (
                                <StyledTableDataCell
                                    key={`table--column-${column.key}--row-${
                                        rowIndex + 1
                                    }`}
                                    $align={
                                        tableCellData?.align ||
                                        columnMap?.[column.key]?.align ||
                                        'center'
                                    }
                                    colSpan={tableCellData?.colSpan || 1}
                                    rowSpan={tableCellData?.rowSpan || 1}
                                    $vAlign={tableCellData?.vAlign || 'middle'}
                                >
                                    {tableCellData?.render
                                        ? tableCellData.render(tableCellData)
                                        : tableCellData?.display}
                                </StyledTableDataCell>
                            );
                        })}
                    </StyledTableRow>
                ))}
            </StyledTableBody>
        </StyledTable>
    );
};

Table.Table = forwardRef<HTMLTableElement, TableComponentProps>(
    (
        {
            borderAround,
            borderWithin,
            borderHorizontal,
            borderVertical,
            striped,
            ...props
        },
        ref
    ) => (
        <StyledTable
            ref={ref}
            $borderAround={borderAround}
            $borderWithin={borderWithin}
            $borderHorizontal={borderHorizontal}
            $borderVertical={borderVertical}
            $striped={striped}
            {...props}
        />
    )
);

Table.TableBody = StyledTableBody;
Table.TableDataCell = forwardRef<
    HTMLTableCellElement,
    TableDataCellComponentProps
>(({ align, vAlign, flexAlign, colSpan, rowSpan, ...props }, ref) => (
    <StyledTableDataCell
        ref={ref}
        $align={align}
        $vAlign={vAlign}
        $flexAlign={flexAlign}
        colSpan={colSpan}
        rowSpan={rowSpan}
        {...props}
    />
));

Table.TableHead = forwardRef<HTMLTableSectionElement, TableHeadComponentProps>(
    ({ capitalizeHeaders, highlightHeaders, ...props }, ref) => (
        <StyledTableHead
            ref={ref}
            $capitalizeHeaders={capitalizeHeaders}
            $highlightHeaders={highlightHeaders}
            {...props}
        />
    )
);

Table.TableHeadingCell = forwardRef<
    HTMLTableCellElement,
    TableHeadingCellComponentProps
>(({ align, width, flexAlign, colSpan, rowSpan, ...props }, ref) => (
    <StyledTableHeadingCell
        ref={ref}
        $align={align}
        width={width}
        flexAlign={flexAlign}
        colSpan={colSpan}
        rowSpan={rowSpan}
        {...props}
    />
));

Table.TableRow = forwardRef<HTMLTableRowElement, TableRowComponentProps>(
    ({ condensed, hoverable, ...props }, ref) => (
        <StyledTableRow
            ref={ref}
            $condensed={condensed}
            $hoverable={hoverable}
            {...props}
        />
    )
);

export default Table;
