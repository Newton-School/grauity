import { TableProps } from '../../../ui';

const simpleArgs: TableProps = {
    config: {
        columnRows: [
            {
                key: 'column-row-1',
                cells: [
                    {
                        key: 'name',
                        display: 'Name',
                        width: '150px',
                        align: 'left',
                    },
                    {
                        key: 'age',
                        display: 'Age',
                        width: '100px',
                        align: 'left',
                    },
                    {
                        key: 'address',
                        display: 'Address',
                        width: '200px',
                        align: 'center',
                    },
                ],
            },
        ],
        rows: [
            {
                key: 'row-1',
                cells: [
                    { key: 'name', display: 'John Doe', valign: 'top' },
                    { key: 'age', display: 25 },
                    {
                        key: 'address',
                        display: '123 Main St, Springfield, IL 62701',
                    },
                ],
            },
            {
                key: 'row-2',
                cells: [
                    { key: 'name', display: 'Jane Doe', valign: 'center' },
                    { key: 'age', display: 30 },
                    {
                        key: 'address',
                        display: '456 Main St, Springfield, IL 62701',
                    },
                ],
            },
            {
                key: 'row-3',
                cells: [
                    { key: 'name', display: 'James Doe', valign: 'bottom' },
                    { key: 'age', display: 35 },
                    {
                        key: 'address',
                        display: '789 Main St, Springfield, IL 62701',
                    },
                ],
            },
        ],
    },
    condensed: false,
    striped: true,
    borderAround: true,
    borderWithin: true,
    className: '',
    loading: false,
    style: {},
    capitalizeHeaders: true,
};

export default simpleArgs;
