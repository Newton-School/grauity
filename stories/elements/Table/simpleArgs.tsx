import React from 'react';

import { NSButton, TableProps } from '../../../ui';

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
            name: { display: 'John Doe' },
            age: { display: 25 },
            action: {
                render: () => (
                    <NSButton size="small" icon="code">
                        Click me
                    </NSButton>
                ),
            },
        },
        {
            name: { display: 'John Doe' },
            age: { display: 25 },
            action: {
                render: () => (
                    <NSButton size="small" icon="code">
                        Click me
                    </NSButton>
                ),
            },
        },
        {
            name: { display: 'John Doe' },
            age: { display: 25 },
            action: {
                render: () => (
                    <NSButton size="small" icon="code">
                        Click me
                    </NSButton>
                ),
            },
        },
        {
            name: { display: 'John Doe' },
            age: { display: 25 },
            action: {
                render: () => (
                    <NSButton size="small" icon="code">
                        Click me
                    </NSButton>
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
