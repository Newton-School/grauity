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
                expect(
                    screen.getByText(cell.display as string)
                ).toBeInTheDocument();
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

    it('renders complex rowspan and colspan correctly', () => {
        const complexRows: TableProps['rows'] = [
            {
                col1: { display: 'Row 1, Cell 1', rowSpan: 3 },
                col2: { display: 'Row 1, Cell 2', colSpan: 2 },
            },
            {
                col2: { display: 'Row 2, Cell 2' },
                col3: { display: 'Row 2, Cell 3' },
            },
            {
                col2: { display: 'Row 3, Cell 2' },
                col3: { display: 'Row 3, Cell 3' },
            },
            {
                col1: { display: 'Row 4, Cell 1' },
                col2: { display: 'Row 4, Cell 2' },
                col3: { display: 'Row 4, Cell 3' },
            },
        ];

        render(<Table columns={columns} rows={complexRows} />);

        // Helper function to validate cell attributes
        const validateCell = (
            text: string,
            attributes: Record<string, string> = {}
        ) => {
            const cell = screen.getByText(text);
            expect(cell).toBeInTheDocument();
            Object.entries(attributes).forEach(([attr, value]) => {
                expect(cell).toHaveAttribute(attr, value);
            });
        };

        // Check if the table renders the cells correctly
        validateCell('Row 1, Cell 1', { rowspan: '3' });
        validateCell('Row 1, Cell 2', { colspan: '2' });
        validateCell('Row 2, Cell 2');
        validateCell('Row 2, Cell 3');
        validateCell('Row 3, Cell 2');
        validateCell('Row 3, Cell 3');
        validateCell('Row 4, Cell 1');
        validateCell('Row 4, Cell 2');
        validateCell('Row 4, Cell 3');

        // Check if correct number of rows are rendered
        const renderedRows = screen.getAllByRole('row');
        expect(renderedRows).toHaveLength(5); // Should be 4 body rows + 1 header row rendered

        // Validate header row structure
        expect(renderedRows[0].children).toHaveLength(3); // Header row should have 3 cells

        // Validate body rows structure
        expect(renderedRows[1].children).toHaveLength(2); // First row should have 2 cells
        expect(renderedRows[2].children).toHaveLength(2); // Second row should have 2 cells
        expect(renderedRows[3].children).toHaveLength(2); // Third row should have 2 cells
        expect(renderedRows[4].children).toHaveLength(3); // Fourth row should have 3 cells
    });
});
