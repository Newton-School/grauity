import React from 'react';
import PropTypes from 'prop-types';
import { StyledTable, StyledTableBody, StyledTableDataCell, StyledTableHead, StyledTableHeadingCell, StyledTableRow } from './Table.styles';
import { TableProps } from './types';

/**
 * `gra.UI.ty Table`: Formal. Clean. Neat. On the rocks.
 * Shorthand example:
 * <Table config={{columnRows: [], rows: []}} />
 * @returns The Table component.
 */
const Table = ({config,...props}: TableProps) => (
    <StyledTable>
        <StyledTableHead capitalizeHeaders={props?.capitalizeHeaders || true}>
            {config?.columnRows?.map((columnRow, columnRowIndex) => (
                <StyledTableRow key={columnRow?.key || `column-row-${columnRowIndex + 1}`}>
                    {columnRow?.cells?.map((column, columnIndex) => (
                        <StyledTableHeadingCell
                            key={column?.key || `table-column-${columnIndex + 1}`}
                            align={column?.align || 'center'}
                            width={column?.width || 'auto'}
                            colSpan={column?.colSpan || 1}
                            rowSpan={column?.rowSpan || 1}
                        >
                            {column.display}
                        </StyledTableHeadingCell>
                    ))}
                </StyledTableRow>
            ))}
        </StyledTableHead>
        <StyledTableBody>
            {config?.rows?.map((row, rowIndex) => (
                <StyledTableRow key={row?.key || `table--row-${rowIndex + 1}`}>
                    {row?.cells?.map((cell, cellIndex) => (
                        <StyledTableDataCell
                            key={cell?.key || `table--column-${cellIndex + 1}--row-${rowIndex + 1}`}
                            align={cell?.align || config?.columnRows[0]?.cells[cellIndex]?.align || 'center'}
                            colSpan={cell?.colSpan || 1}
                            rowSpan={cell?.rowSpan || 1}
                        >
                            {cell.display}
                        </StyledTableDataCell>
                    ))}
                </StyledTableRow>
            ))}
        </StyledTableBody>
    </StyledTable>

);

Table.propTypes = {
    config: PropTypes.shape({
        columnRows: PropTypes.arrayOf(PropTypes.shape({
            key: PropTypes.string,
            cells: PropTypes.arrayOf(PropTypes.shape({
                key: PropTypes.string,
                display: PropTypes.any,
                width: PropTypes.string,
                align: PropTypes.oneOf(['left', 'right', 'center']),
                rowSpan: PropTypes.number,
                colSpan: PropTypes.number    
            }))
        })),
        rows: PropTypes.arrayOf(PropTypes.shape({
            key: PropTypes.string,
            cells: PropTypes.arrayOf(PropTypes.shape({
                key: PropTypes.string,
                display: PropTypes.any,
                valign: PropTypes.oneOf(['top', 'bottom', 'center']),
                rowSpan: PropTypes.number,
                colSpan: PropTypes.number
            })),
        })),
    }),
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
    config: {
        columns: [],
        rows: []
    },
    condensed: false,
    striped: false,
    borderAround: true,
    borderWithin: true,
    className: '',
    loading: false,
    style: {},
    capitalizeHeaders: false,
};

export default Table;