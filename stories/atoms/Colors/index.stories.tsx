import React from 'react';
import Table from 'ui/elements/Table';

import { extractTokensFromTheme } from '../../utils';

export default {
    title: 'Atoms/Colors',
    tags: ['!autodocs'],
};

export const Text = {
    render: (args: any, { globals }: any) => {
        const { theme } = globals;
        const rows = extractTokensFromTheme({
            currentTheme: theme,
            type: 'colors',
            categories: ['text'],
        });
        return (
            <Table
                columns={[
                    { key: 'token', display: 'Token', align: 'left' },
                    { key: 'light', display: 'Light', align: 'left' },
                    { key: 'dark', display: 'Dark', align: 'left' },
                ]}
                rows={rows}
                capitalizeHeaders
                borderAround={false}
                borderVertical={false}
                highlightHeaders={false}
                hoverable
            />
        );
    },
};

export const Background = {
    render: (args: any, { globals }: any) => {
        const { theme } = globals;
        const rows = extractTokensFromTheme({
            currentTheme: theme,
            type: 'colors',
            categories: ['background'],
        });
        return (
            <Table
                columns={[
                    { key: 'token', display: 'Token', align: 'left' },
                    { key: 'light', display: 'Light', align: 'left' },
                    { key: 'dark', display: 'Dark', align: 'left' },
                ]}
                rows={rows}
                capitalizeHeaders
                borderAround={false}
                borderVertical={false}
                highlightHeaders={false}
                hoverable
            />
        );
    },
};

export const Border = {
    render: (args: any, { globals }: any) => {
        const { theme } = globals;
        const rows = extractTokensFromTheme({
            currentTheme: theme,
            type: 'colors',
            categories: ['border'],
        });
        return (
            <Table
                columns={[
                    { key: 'token', display: 'Token', align: 'left' },
                    { key: 'light', display: 'Light', align: 'left' },
                    { key: 'dark', display: 'Dark', align: 'left' },
                ]}
                rows={rows}
                capitalizeHeaders
                borderAround={false}
                borderVertical={false}
                highlightHeaders={false}
                hoverable
            />
        );
    },
};
