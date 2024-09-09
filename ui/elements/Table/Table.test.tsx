import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import React from 'react';

import Table from '.';
import { TableProps } from './types';

describe('Table', () => {
    const columns: TableProps['columns'] = [
        { key: 'col1', display: 'Column 1' },
        { key: 'col2', display: 'Column 2' },
        { key: 'col3', display: 'Column 3' },
    ];

    const rows: TableProps['rows'] = [
        {
            col1: { display: 'Row 1, Cell 1' },
            col2: { display: 'Row 1, Cell 2' },
            col3: { display: 'Row 1, Cell 3' },
        },
        {
            col1: { display: 'Row 2, Cell 1' },
            col2: { display: 'Row 2, Cell 2' },
            col3: { display: 'Row 2, Cell 3' },
        },
    ];

    it('renders table with columns and rows', () => {
        render(<Table columns={columns} rows={rows} />);

        columns.forEach((column) => {
            expect(screen.getByText(column.display)).toBeInTheDocument();
        });

        rows.forEach((row) => {
            Object.values(row).forEach((cell) => {
                expect(screen.getByText(cell.display as string)).toBeInTheDocument();
            });
        });
    });


    it('renders custom cell content using render function', () => {
        const customRows: TableProps['rows'] = [
            {
                col1: { render: () => <span>Custom Cell 1</span> },
                col2: { display: 'Row 1, Cell 2' },
                col3: { display: 'Row 1, Cell 3' },
            },
        ];

        render(<Table columns={columns} rows={customRows} />);

        expect(screen.getByText('Custom Cell 1')).toBeInTheDocument();
    });

    it('applies custom styles and classes', () => {
        render(
            <Table
                columns={columns}
                rows={rows}
                className="custom-class"
                style={{ backgroundColor: 'red' }}
            />
        );

        const tableElement = screen.getByRole('table');
        expect(tableElement).toHaveClass('custom-class');
        expect(tableElement).toHaveStyle('background-color: red');
    });
});