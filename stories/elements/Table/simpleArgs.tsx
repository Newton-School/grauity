import React from 'react';
import Button from 'ui/elements/Button';
import { TableProps } from 'ui/elements/Table';

const simpleArgs: TableProps = {
    columns: [
        {
            key: 'name',
            display: 'Name',
            align: 'left',
        },
        {
            key: 'age',
            display: 'Age',
            align: 'center',
        },
        {
            key: 'action',
            display: 'Action',
            align: 'left',
        },
    ],
    rows: [
        {
            name: { display: 'John Doe', vAlign: 'top' },
            age: { display: 25 },
            action: {
                render: () => (
                    <Button size="small" icon="code">
                        Click me
                    </Button>
                ),
            },
        },
        {
            name: { display: 'John Doe' },
            age: { display: 25 },
            action: {
                render: () => (
                    <Button size="small" icon="code">
                        Click me
                    </Button>
                ),
            },
        },
        {
            name: { display: 'John Doe' },
            age: { display: 25 },
            action: {
                render: () => (
                    <Button size="small" icon="code">
                        Click me
                    </Button>
                ),
            },
        },
        {
            name: { display: 'John Doe' },
            age: { display: 25 },
            action: {
                render: () => (
                    <Button size="small" icon="code">
                        Click me
                    </Button>
                ),
            },
        },
    ],
    condensed: true,
    striped: true,
    borderAround: true,
    borderWithin: true,
    borderHorizontal: true,
    borderVertical: true,
    className: '',
    loading: false,
    style: {},
    capitalizeHeaders: true,
};

export default simpleArgs;
