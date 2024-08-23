/* eslint-disable @typescript-eslint/no-use-before-define */
import styled, { css } from 'styled-components';
import {
    TableBodyComponentProps,
    TableComponentProps,
    TableDataCellComponentProps,
    TableHeadComponentProps,
    TableHeadingCellComponentProps,
    TableRowComponentProps,
} from './types';

export const StyledTable = styled.table<TableComponentProps>`
    border-collapse: collapse;
    font-size: var(--font-size-12px, 12px);
    width: 100%;
    border-radius: var(--corner-radius-10px, 10px);
    overflow: hidden;
    outline: 0.5px solid var(--border, #e1e5ea);
    font-family: var(--font-family, "Mona Sans");

    ${({ borderAround }) => borderAround === false && 'outline: none;'}

    ${({ borderWithin }) =>
        borderWithin === false
            ? css`
                  ${StyledTableRow} {
                      border-bottom: none;
                  }
                  ${StyledTableDataCell} {
                      border-right: none;
                  }
                  ${StyledTableHeadingCell} {
                      border-bottom: none;
                  }
              `
            : css`
                  ${StyledTableRow}:not(:last-child) {
                      border-bottom: var(--spacing-1px, 1px) solid
                          var(--border, #e1e5ea);
                  }
                  ${StyledTableDataCell} {
                      border-right: var(--spacing-1px, 1px) solid
                          var(--border, #e1e5ea);
                  }
                  ${StyledTableHeadingCell} {
                      border-right: var(--spacing-1px, 1px) solid
                          var(--border, #e1e5ea);
                      border-bottom: var(--spacing-1px, 1px) solid
                          var(--border, #e1e5ea);
                  }
              `}
    
    ${({ striped }) =>
        striped &&
        css`
            ${StyledTableBody} ${StyledTableRow}:nth-child(even) {
                background-color: var(--bg-secondary, #f6f7f9);
            }
        `}
`;

export const StyledTableHeadingCell = styled.th<TableHeadingCellComponentProps>`
    color: var(--text-secondary, #5b6271);
    font-size: var(--font-size-12px, 12px);
    font-weight: var(--font-weight-550, 550);
    line-height: 120%;
    letter-spacing: 0.4px;
    padding: var(--spacing-10px, 10px);

    ${({ align }) => `text-align: ${align};`}
`;

export const StyledTableDataCell = styled.td<TableDataCellComponentProps>`
    color: var(--text-primary, #16191d);
    font-size: var(--font-size-12px, 12px);
    font-weight: var(--font-weight-450, 450);
    line-height: 120%;
    letter-spacing: 0.4px;
    padding: var(--spacing-10px, 10px);

    &:last-of-type {
        border-right: none;
    }

    ${({ align }) => align && `text-align: ${align};`}

    ${({ flexAlign }) =>
        flexAlign &&
        css`
            display: flex;
            flex-direction: row;
            align-items: ${flexAlign};
        `}
`;

export const StyledTableRow = styled.tr<TableRowComponentProps>`
    ${({ condensed }) =>
        !condensed &&
        css`
            ${StyledTableDataCell} {
                padding: 18px;
            }
            ${StyledTableHeadingCell} {
                padding: 18px;
            }
        `}

    &:last-of-type ${StyledTableDataCell}:first-of-type {
        border-bottom-left-radius: var(--corner-radius-8px, 8px);
    }

    &:last-of-type ${StyledTableDataCell}:last-of-type {
        border-bottom-right-radius: var(--corner-radius-8px, 8px);
    }
`;

export const StyledTableHead = styled.thead<TableHeadComponentProps>`
    background: var(--bg-secondary, #f6f7f9);

    ${({ capitalizeHeaders }) =>
        capitalizeHeaders !== false && 'text-transform: uppercase;'}

    ${StyledTableRow} ${StyledTableHeadingCell}:last-child {
        border-right: none;
    }

    ${StyledTableRow}:first-child ${StyledTableHeadingCell}:first-child {
        border-top-left-radius: var(--corner-radius-8px, 8px);
    }

    ${StyledTableRow}:first-child ${StyledTableHeadingCell}&:last-child {
        border-top-right-radius: var(--corner-radius-8px, 8px);
    }
`;

export const StyledTableBody = styled.tbody<TableBodyComponentProps>`
    background-color: var(--bg-primary, #fff);
`;
