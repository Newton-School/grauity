import React from 'react';
import Table from 'ui/elements/Table';

import { ColorRenderer } from '../../helper-components/ColorRenderer';
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
            render: (token) => <ColorRenderer color={`var(${token.token})`} />,
        });
        return (
            <Table
                columns={[
                    { key: 'token', display: 'Token', align: 'left' },
                    { key: 'value', display: 'Value', align: 'left' },
                    {
                        key: 'colors',
                        display: 'Swatch',
                        align: 'left',
                    },
                ]}
                rows={rows}
                capitalizeHeaders
                borderAround={false}
                borderVertical={false}
                highlightHeaders={false}
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
            render: (token) => <ColorRenderer color={`var(${token.token})`} />,
        });
        return (
            <Table
                columns={[
                    { key: 'token', display: 'Token', align: 'left' },
                    { key: 'value', display: 'Value', align: 'left' },
                    {
                        key: 'colors',
                        display: 'Swatch',
                        align: 'left',
                    },
                ]}
                rows={rows}
                capitalizeHeaders
                borderAround={false}
                borderVertical={false}
                highlightHeaders={false}
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
            render: (token) => <ColorRenderer color={`var(${token.token})`} />,
        });
        return (
            <Table
                columns={[
                    { key: 'token', display: 'Token', align: 'left' },
                    { key: 'value', display: 'Value', align: 'left' },
                    {
                        key: 'colors',
                        display: 'Swatch',
                        align: 'left',
                    },
                ]}
                rows={rows}
                capitalizeHeaders
                borderAround={false}
                borderVertical={false}
                highlightHeaders={false}
            />
        );
    },
};
