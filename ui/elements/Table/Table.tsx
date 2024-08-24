import React from 'react';
import PropTypes from 'prop-types';
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
 * `gra.UI.ty Table`: Formal. Clean. Neat. On the rocks.
 * @returns The Table component.
 */
const Table = ({ rows, columns, ...props }: TableProps) => (
    <StyledTable
        borderAround={props.borderAround}
        borderWithin={props.borderWithin}
        striped={props?.striped}
    >
        <StyledTableHead
            capitalizeHeaders={props?.capitalizeHeaders}
            highlightHeaders={props?.highlightHeaders}
        >
            <StyledTableRow condensed={props.condensed}>
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
                    condensed={props.condensed}
                >
                    {columns?.map((column, columnIndex) => (
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

Table.propTypes = {
    rows: PropTypes.array,
    columns: PropTypes.array,
    condensed: PropTypes.bool,
    striped: PropTypes.bool,
    borderAround: PropTypes.bool,
    borderWithin: PropTypes.bool,
    className: PropTypes.string,
    loading: PropTypes.bool,
    style: PropTypes.object,
    capitalizeHeaders: PropTypes.bool,
    highlightHeaders: PropTypes.bool,
};

Table.defaultProps = {
    rows: [],
    columns: [],
    condensed: true,
    striped: false,
    borderAround: true,
    borderWithin: true,
    className: '',
    loading: false,
    style: {},
    capitalizeHeaders: false,
    highlightHeaders: true,
};

export {
    StyledTable,
    StyledTableBody,
    StyledTableDataCell,
    StyledTableHead,
    StyledTableHeadingCell,
    StyledTableRow,
};

export default Table;
