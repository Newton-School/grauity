import React from 'react';

import { NSTable } from '../../../ui'; // Adjust the import path as necessary
import { TableRow } from '../../../ui/elements/Table/types';
import TokenBlock from '../../helper-components/TokenBlock';

export default {
    title: 'Atoms/Corner Radius',
};

const cornerRadiusTokens = [
    { token: '--corner-radius-0px', value: '0px' },
    { token: '--corner-radius-2px', value: '2px' },
    { token: '--corner-radius-4px', value: '4px' },
    { token: '--corner-radius-8px', value: '8px' },
    { token: '--corner-radius-12px', value: '12px' },
    { token: '--corner-radius-16px', value: '16px' },
    { token: '--corner-radius-20px', value: '20px' },
    { token: '--corner-radius-24px', value: '24px' },
    { token: '--corner-radius-32px', value: '32px' },
    { token: '--corner-radius-40px', value: '40px' },
    { token: '--corner-radius-50percent', value: '50%' },
    { token: '--corner-radius-100percent', value: '100%' },
];

const rows: TableRow[] = cornerRadiusTokens.map((token) => ({
    token: {
        render: () => <TokenBlock copy>{token.token}</TokenBlock>,
    },
    value: {
        render: () => <TokenBlock>{token.value}</TokenBlock>,
    },
    visual: {
        render: () => (
            <div
                style={{
                    position: 'relative',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100px',
                        height: '100px',
                        // backgroundColor: 'var(--bg-brand, #E5F1FF)',
                        color: 'var(--text-brand, #0673F9)',
                        borderRadius: `var(${token.token})`,
                        border: 'var(--spacing-3px, 3px) solid var(--border, #e1e5ea)',
                        fontWeight: 'var(--font-weight-medium, 500)',
                    }}
                >
                    {token.value}
                </div>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100px',
                        height: '100px',
                        color: 'var(--text-brand, #0673F9)',
                        borderRadius: `var(${token.token})`,
                        border: 'var(--spacing-3px, 3px) solid var(--bg-action-brand, #0673f9)',
                        fontWeight: 'var(--font-weight-medium, 500)',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        clipPath: 'polygon(70% 0, 100% 0%, 100% 30%, 70% 30%)',
                    }}
                />
            </div>
        ),
    },
}));

const CornerRadiusTokensStory = () => (
    <NSTable
        columns={[
            { key: 'token', display: 'Token', align: 'left' },
            { key: 'value', display: 'Value', align: 'left' },
            { key: 'visual', display: 'Visual Representation', align: 'left' },
        ]}
        rows={rows}
        capitalizeHeaders
        borderAround={false}
        highlightHeaders={false}
        borderVertical={false}
        condensed={false}
    />
);

export const CornerRadiusTokens = CornerRadiusTokensStory;
