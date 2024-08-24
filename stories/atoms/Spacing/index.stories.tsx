import React from 'react';
import { NSTable } from '../../../ui'; // Adjust the import path as necessary
import { TableRow } from '../../../ui/elements/Table/types';
import TokenBlock from '../../helper-components/TokenBlock';

export default {
    title: 'Design System/Spacing',
};

const spacingTokens = [
    { token: '--spacing-0px', value: '0px' },
    { token: '--spacing-1px', value: '1px' },
    { token: '--spacing-2px', value: '2px' },
    { token: '--spacing-3px', value: '3px' },
    { token: '--spacing-4px', value: '4px' },
    { token: '--spacing-5px', value: '5px' },
    { token: '--spacing-6px', value: '6px' },
    { token: '--spacing-7px', value: '7px' },
    { token: '--spacing-8px', value: '8px' },
    { token: '--spacing-9px', value: '9px' },
    { token: '--spacing-10px', value: '10px' },
    { token: '--spacing-12px', value: '12px' },
    { token: '--spacing-14px', value: '14px' },
    { token: '--spacing-16px', value: '16px' },
    { token: '--spacing-18px', value: '18px' },
    { token: '--spacing-20px', value: '20px' },
    { token: '--spacing-24px', value: '24px' },
    { token: '--spacing-28px', value: '28px' },
    { token: '--spacing-32px', value: '32px' },
    { token: '--spacing-36px', value: '36px' },
    { token: '--spacing-40px', value: '40px' },
    { token: '--spacing-48px', value: '48px' },
    { token: '--spacing-56px', value: '56px' },
    { token: '--spacing-64px', value: '64px' },
    { token: '--spacing-72px', value: '72px' },
    { token: '--spacing-80px', value: '80px' },
    { token: '--spacing-128px', value: '128px' },
    { token: '--spacing-160px', value: '160px' },
];

const rows: TableRow[] = spacingTokens.map((token) => ({
    token: { 
        render: () => (
            <TokenBlock>
                {token.token}
            </TokenBlock>
        ) 
    },
    value: { display: token.value },
    visual: {
        render: () => (
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: `var(${token.token})`,
                    height: '32px',
                    backgroundColor: 'var(--bg-brand, #E5F1FF)',
                    color: 'var(--text-brand, #0673F9)',
                    padding: '0 var(--spacing-4px)',
                    fontWeight: 'var(--font-weight-medium, 500)',
                }}
            >
                {token.value}
            </div>
        ),
    },
}));

const SpacingTokensStory = () => (
    <NSTable
        columns={[
            { key: 'token', display: 'Token', align: 'left' },
            { key: 'value', display: 'Pixels', align: 'left'  },
            { key: 'visual', display: 'Visual Representation', align: 'left' },
        ]}
        rows={rows}
        capitalizeHeaders
        borderAround={false}
        highlightHeaders={false}
    />
);

export const SpacingTokens = SpacingTokensStory;
