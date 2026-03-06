import React, { useMemo } from 'react';

import {
    StyledTable,
    StyledTableBody,
    StyledTableDataCell,
    StyledTableHead,
    StyledTableHeadingCell,
    StyledTableRow,
} from './Table.styles';
import {
    TableBodyComponentProps,
    TableComponentProps,
    TableDataCellComponentProps,
    TableHeadComponentProps,
    TableHeadingCellComponentProps,
    TableProps,
    TableRowComponentProps,
} from './types';

const TableRoot = React.forwardRef<HTMLTableElement, TableComponentProps>(
    (
        {
            borderAround,
            borderWithin,
            borderHorizontal,
            borderVertical,
            striped,
            ...rest
        },
        ref
    ) => {
        return (
            <StyledTable
                ref={ref}
                $borderAround={borderAround}
                $borderWithin={borderWithin}
                $borderHorizontal={borderHorizontal}
                $borderVertical={borderVertical}
                $striped={striped}
                {...rest}
            />
        );
    }
);

const TableHead = React.forwardRef<
    HTMLTableSectionElement,
    TableHeadComponentProps
>(({ capitalizeHeaders, highlightHeaders, ...rest }, ref) => {
    return (
        <StyledTableHead
            ref={ref}
            $capitalizeHeaders={capitalizeHeaders}
            $highlightHeaders={highlightHeaders}
            {...rest}
        />
    );
});

const TableBody = React.forwardRef<
    HTMLTableSectionElement,
    TableBodyComponentProps
>((props, ref) => {
    return <StyledTableBody ref={ref} {...props} />;
});

const TableRow = React.forwardRef<HTMLTableRowElement, TableRowComponentProps>(
    ({ condensed, hoverable, ...rest }, ref) => {
        return (
            <StyledTableRow
                ref={ref}
                $condensed={condensed}
                $hoverable={hoverable}
                {...rest}
            />
        );
    }
);

const TableDataCell = React.forwardRef<
    HTMLTableCellElement,
    TableDataCellComponentProps
>(({ flexAlign, ...rest }, ref) => {
    const { vAlign, ...tableCellProps } = rest;
    return (
        <StyledTableDataCell
            ref={ref}
            $flexAlign={flexAlign}
            $vAlign={vAlign}
            {...tableCellProps}
        />
    );
});

const TableHeadingCell = React.forwardRef<
    HTMLTableCellElement,
    TableHeadingCellComponentProps
>((props, ref) => {
    return <StyledTableHeadingCell ref={ref} {...props} />;
});

TableRoot.displayName = 'TableRoot';
TableHead.displayName = 'TableHead';
TableBody.displayName = 'TableBody';
TableRow.displayName = 'TableRow';
TableDataCell.displayName = 'TableDataCell';
TableHeadingCell.displayName = 'TableHeadingCell';

/**
 * A table is a component that is used to display data in a tabular format.
 * It is composed of rows and columns.
 */
const Table = (({
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
        <TableRoot
            borderAround={borderAround}
            borderWithin={borderWithin}
            borderHorizontal={borderHorizontal}
            borderVertical={borderVertical}
            striped={striped}
            className={className}
            style={style}
            role="table"
        >
            <TableHead
                capitalizeHeaders={capitalizeHeaders}
                highlightHeaders={highlightHeaders}
            >
                <TableRow condensed={condensed}>
                    {columns?.map((column, columnIndex) => (
                        <TableHeadingCell
                            key={
                                column?.key ||
                                `table--column-${columnIndex + 1}`
                            }
                            align={column?.align || 'center'}
                            width={column?.width || 'auto'}
                            colSpan={column?.colSpan || 1}
                            rowSpan={column?.rowSpan || 1}
                        >
                            {column.display}
                        </TableHeadingCell>
                    ))}
                </TableRow>
            </TableHead>

            <TableBody>
                {rows?.map((row, rowIndex) => (
                    <TableRow
                        key={`table--row-${rowIndex + 1}`}
                        condensed={condensed}
                        hoverable={hoverable}
                    >
                        {columns?.map((column) => {
                            const tableCellData = row[column.key];
                            if (!tableCellData) {
                                return null;
                            }
                            return (
                                <TableDataCell
                                    key={`table--column-${column.key}--row-${
                                        rowIndex + 1
                                    }`}
                                    align={
                                        tableCellData?.align ||
                                        columnMap?.[column.key]?.align ||
                                        'center'
                                    }
                                    colSpan={tableCellData?.colSpan || 1}
                                    rowSpan={tableCellData?.rowSpan || 1}
                                    vAlign={tableCellData?.vAlign || 'middle'}
                                >
                                    {tableCellData?.render
                                        ? tableCellData.render(tableCellData)
                                        : tableCellData?.display}
                                </TableDataCell>
                            );
                        })}
                    </TableRow>
                ))}
            </TableBody>
        </TableRoot>
    );
}) as React.FC<TableProps> & {
    Table: typeof TableRoot;
    TableBody: typeof TableBody;
    TableDataCell: typeof TableDataCell;
    TableHead: typeof TableHead;
    TableHeadingCell: typeof TableHeadingCell;
    TableRow: typeof TableRow;
};

Table.Table = TableRoot;
Table.TableBody = TableBody;
Table.TableDataCell = TableDataCell;
Table.TableHead = TableHead;
Table.TableHeadingCell = TableHeadingCell;
Table.TableRow = TableRow;

export default Table;
