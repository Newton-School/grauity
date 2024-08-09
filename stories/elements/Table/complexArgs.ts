import { TableProps } from '../../../ui';

const defaultArgs: TableProps = {
    config: {
        columnRows: [
            {
                key: 'column-row-1',
                cells: [
                    {
                        key: 'college',
                        display: 'College',
                        width: '200px',
                        align: 'left',
                        rowSpan: 2,
                    },
                    {
                        key: 'branch',
                        display: 'Branch',
                        width: '300px',
                        align: 'left',
                        rowSpan: 2,
                    },
                    {
                        key: 'josaa-rounds',
                        display: 'JoSAA 2023 - Round 6',
                        align: 'center',
                        colSpan: 2,
                    },
                ],
            },
            {
                key: 'column-row-2',
                cells: [
                    { key: 'or', display: 'Opening Rank', align: 'center' },
                    { key: 'cr', display: 'Closing Rank', align: 'center' },
                ],
            },
        ],
        rows: [
            {
                key: 'row-1',
                cells: [
                    {
                        key: 'name',
                        display: 'John Doe University',
                        valign: 'top',
                    },
                    { key: 'branch', display: 'Chemical Engineering' },
                    { key: 'or', display: '100' },
                    { key: 'cr', display: '500' },
                ],
            },
            {
                key: 'row-2',
                cells: [
                    {
                        key: 'name',
                        display: 'Jane Doe Institute',
                        valign: 'center',
                    },
                    { key: 'branch', display: 'Mechanical Engineering' },
                    { key: 'or', display: '100' },
                    { key: 'cr', display: '500' },
                ],
            },
            {
                key: 'row-3',
                cells: [
                    {
                        key: 'name',
                        display: 'James Doe College',
                        valign: 'bottom',
                    },
                    {
                        key: 'branch',
                        display: 'Computer Science & Engineering',
                    },
                    { key: 'or', display: '100' },
                    { key: 'cr', display: '500' },
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

export default defaultArgs;
