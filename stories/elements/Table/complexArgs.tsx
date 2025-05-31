import { TableProps } from 'ui/elements/Table';

const complexArgs: TableProps = {
    columns: [
        { key: 'col1', display: 'Column 1' },
        { key: 'col2', display: 'Column 2' },
        { key: 'col3', display: 'Column 3' },
    ],
    rows: [
        {
            col1: { display: 'Row 1, Cell 1 (rowSpan: 3)', rowSpan: 3 },
            col2: { display: 'Row 1, Cell 2 (colSpan: 2)', colSpan: 2 },
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
        }
    ],
    condensed: true,
    striped: false,
    borderAround: true,
    borderWithin: true,
    borderHorizontal: true,
    borderVertical: true,
    className: '',
    loading: false,
    style: {},
    capitalizeHeaders: true,
};

export default complexArgs;
