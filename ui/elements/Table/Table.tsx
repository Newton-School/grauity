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
        <StyledTableHead capitalizeHeaders={props?.capitalizeHeaders}>
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
                    {Object.entries(row)?.map(([rowColumnKey, cell], rowColumnIndex) => (
                        <StyledTableDataCell
                            key={
                                `table--column-${rowColumnKey}--row-${
                                    rowIndex + 1
                                }`
                            }
                            align={
                                cell?.align ||
                                columns[rowColumnIndex]?.align ||
                                'center'
                            }
                            colSpan={cell?.colSpan || 1}
                            rowSpan={cell?.rowSpan || 1}
                        >
                            {cell.render ? cell.render(cell) : cell.display}
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
