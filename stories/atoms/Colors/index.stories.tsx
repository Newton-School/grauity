import { useGlobals } from '@storybook/addons';
import React from 'react';

import { NSTable } from '../../../ui'; // Adjust the import path as necessary
import { ColorRenderer } from '../../helper-components/ColorRenderer';
import { extractTokensFromTheme } from '../../utils';

export default {
    title: 'Atoms/Colors',
};

export const Text = () => {
    const [{ theme }] = useGlobals();
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
};

export const Background = () => {
    const [{ theme }] = useGlobals();
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
};

export const Border = () => {
    const [{ theme }] = useGlobals();
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
};

export const Alpha = () => {
    const [{ theme }] = useGlobals();
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
};
