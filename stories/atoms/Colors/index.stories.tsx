import React from 'react';
import NSTable from 'ui/elements/Table';

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
            theme,
            category: 'colors',
            subcategories: ['text'],
            render: (token) => <ColorRenderer color={`var(${token.token})`} />,
        });
        return (
            <NSTable
                columns={[
                    { key: 'token', display: 'Token', align: 'left' },
                    { key: 'value', display: 'Value', align: 'left' },
                    {
                        key: 'colors',
                        display: 'Color',
                        align: 'left',
                    },
                ]}
                rows={rows}
                capitalizeHeaders
                borderAround={false}
                borderVertical={false}
                condensed={false}
                highlightHeaders={false}
            />
        );
    },
};

export const Background = {
    render: (args: any, { globals }: any) => {
        const { theme } = globals;
        const rows = extractTokensFromTheme({
            theme,
            category: 'colors',
            subcategories: ['background'],
            render: (token) => <ColorRenderer color={`var(${token.token})`} />,
        });
        return (
            <NSTable
                columns={[
                    { key: 'token', display: 'Token', align: 'left' },
                    { key: 'value', display: 'Value', align: 'left' },
                    {
                        key: 'colors',
                        display: 'Color',
                        align: 'left',
                    },
                ]}
                rows={rows}
                capitalizeHeaders
                borderAround={false}
                borderVertical={false}
                condensed={false}
                highlightHeaders={false}
            />
        );
    },
};

export const Border = {
    render: (args: any, { globals }: any) => {
        const { theme } = globals;
        const rows = extractTokensFromTheme({
            theme,
            category: 'colors',
            subcategories: ['border'],
            render: (token) => <ColorRenderer color={`var(${token.token})`} />,
        });
        return (
            <NSTable
                columns={[
                    { key: 'token', display: 'Token', align: 'left' },
                    { key: 'value', display: 'Value', align: 'left' },
                    {
                        key: 'colors',
                        display: 'Color',
                        align: 'left',
                    },
                ]}
                rows={rows}
                capitalizeHeaders
                borderAround={false}
                borderVertical={false}
                condensed={false}
                highlightHeaders={false}
            />
        );
    },
};

export const Alpha = {
    render: (args: any, { globals }: any) => {
        const { theme } = globals;
        const rows = extractTokensFromTheme({
            theme,
            category: 'colors',
            subcategories: ['alpha'],
            render: (token) => <ColorRenderer color={`var(${token.token})`} />,
        });
        return (
            <NSTable
                columns={[
                    { key: 'token', display: 'Token', align: 'left' },
                    { key: 'value', display: 'Value', align: 'left' },
                    {
                        key: 'colors',
                        display: 'Color',
                        align: 'left',
                    },
                ]}
                rows={rows}
                capitalizeHeaders
                borderAround={false}
                borderVertical={false}
                condensed={false}
                highlightHeaders={false}
            />
        );
    },
};
