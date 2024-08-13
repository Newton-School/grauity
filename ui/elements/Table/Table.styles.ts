import styled, { css } from 'styled-components';

export const StyledTable = styled.table`
    border-collapse: collapse;
    font-size: 12px;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    outline: 0.5px solid var(--border, #e1e5ea);
    font-family: "Mona Sans";
`;

export const StyledTableHead = styled.thead<any>`
    background: var(--bg-secondary, #f6f7f9);
    border-radius: 8px 8px 0 0;
    border-bottom: 1px solid #dddddd;

    ${({ capitalizeHeaders }) =>
        capitalizeHeaders && 'text-transform: uppercase;'}
`;

export const StyledTableBody = styled.tbody`
    background-color: var(--bg-primary, #fff);
`;

export const StyledTableDataCell = styled.td<any>`
    color: var(--text-primary, #16191d);
    font-size: 12px;
    font-weight: 450;
    line-height: 120%;
    letter-spacing: 0.4px;
    padding: 10px;
    border-right: 1px solid var(--border, #e1e5ea);

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

export const StyledTableRow = styled.tr<any>`
    &:not(:last-child) {
        border-bottom: 1px solid #dddddd;
    }

    &:last-of-type ${StyledTableDataCell}:first-of-type {
        border-bottom-left-radius: 8px;
    }

    &:last-of-type ${StyledTableDataCell}:last-of-type {
        border-bottom-right-radius: 8px;
    }

    ${({ striped }) =>
        striped &&
        css`
            &:nth-child(even) {
                background-color: var(--bg-secondary, #f6f7f9);
            }
        `}
`;

export const StyledTableHeadingCell = styled.th<any>`
    color: var(--text-secondary, #5b6271);
    font-size: 12px;
    font-weight: 550;
    line-height: 120%;
    letter-spacing: 0.4px;
    padding: 10px;
    border-right: 1px solid var(--border, #e1e5ea);
    border-bottom: 1px solid var(--border, #e1e5ea);

    ${({ align }) => `text-align: ${align};`}

    &:first-of-type {
        border-top-left-radius: 8px;
    }

    &:last-of-type {
        border-top-right-radius: 8px;
        border-right: none;
    }
`;
