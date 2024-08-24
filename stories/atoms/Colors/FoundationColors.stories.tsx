import React from 'react';
import { NSTable } from '../../../ui'; // Adjust the import path as necessary
import { TableRow } from '../../../ui/elements/Table/types';
import TokenBlock from '../../helper-components/TokenBlock';

export default {
    title: 'Design System/Colors',
};

const colorTokens = [
    { token: '--neutral-0', value: '#FFFFFF' },
    { token: '--neutral-100', value: '#F6F7F9' },
    { token: '--neutral-200', value: '#EDEFF3' },
    { token: '--neutral-300', value: '#E1E5EA' },
    { token: '--neutral-400', value: '#C9CFD9' },
    { token: '--neutral-500', value: '#B2B9C7' },
    { token: '--neutral-600', value: '#8C95A6' },
    { token: '--neutral-700', value: '#5B6271' },
    { token: '--neutral-750', value: '#30363D' },
    { token: '--neutral-800', value: '#23282F' },
    { token: '--neutral-900', value: '#16191D' },
    { token: '--neutral-1000', value: '#0B0C0E' },

    { token: '--brand-0', value: '#E5F1FF' },
    { token: '--brand-100', value: '#C2DDFF' },
    { token: '--brand-200', value: '#94C4FF' },
    { token: '--brand-300', value: '#61A8FF' },
    { token: '--brand-400', value: '#2989FF' },
    { token: '--brand-500', value: '#0673F9' },
    { token: '--brand-600', value: '#005ED1' },
    { token: '--brand-700', value: '#004599' },
    { token: '--brand-800', value: '#003270' },
    { token: '--brand-900', value: '#002452' },

    { token: '--error-0', value: '#FFE5E7' },
    { token: '--error-100', value: '#FBBBBF' },
    { token: '--error-200', value: '#FA9499' },
    { token: '--error-300', value: '#F8636B' },
    { token: '--error-400', value: '#EE3F44' },
    { token: '--error-500', value: '#D22D3A' },
    { token: '--error-600', value: '#A01B22' },
    { token: '--error-700', value: '#7E1219' },
    { token: '--error-800', value: '#63080D' },
    { token: '--error-900', value: '#4A040A' },

    { token: '--success-0', value: '#D9FCED' },
    { token: '--success-100', value: '#ACF7D3' },
    { token: '--success-200', value: '#7EE7B8' },
    { token: '--success-300', value: '#50CE99' },
    { token: '--success-400', value: '#13B97C' },
    { token: '--success-500', value: '#009965' },
    { token: '--success-600', value: '#007A51' },
    { token: '--success-700', value: '#005C3D' },
    { token: '--success-800', value: '#003D29' },
    { token: '--success-900', value: '#002D1E' },

    { token: '--warning-0', value: '#FFF1E5' },
    { token: '--warning-100', value: '#FFD2BA' },
    { token: '--warning-200', value: '#FFB286' },
    { token: '--warning-300', value: '#FD9254' },
    { token: '--warning-400', value: '#F37216' },
    { token: '--warning-500', value: '#DE5A02' },
    { token: '--warning-600', value: '#A83E00' },
    { token: '--warning-700', value: '#802D00' },
    { token: '--warning-800', value: '#5C1F00' },
    { token: '--warning-900', value: '#441704' },

    { token: '--yellow-0', value: '#FFF3D6' },
    { token: '--yellow-100', value: '#FFE4AD' },
    { token: '--yellow-200', value: '#FFD580' },
    { token: '--yellow-300', value: '#FEC553' },
    { token: '--yellow-400', value: '#FEB000' },
    { token: '--yellow-500', value: '#F59700' },
    { token: '--yellow-600', value: '#D17300' },
    { token: '--yellow-700', value: '#944500' },
    { token: '--yellow-800', value: '#5C2900' },
    { token: '--yellow-900', value: '#3D1A00' },

    { token: '--purple-0', value: '#F5E5FF' },
    { token: '--purple-100', value: '#E1D1FF' },
    { token: '--purple-200', value: '#CEBCFE' },
    { token: '--purple-300', value: '#B49DFE' },
    { token: '--purple-400', value: '#967CFD' },
    { token: '--purple-500', value: '#7B55EE' },
    { token: '--purple-600', value: '#6138D3' },
    { token: '--purple-700', value: '#46279B' },
    { token: '--purple-800', value: '#331D72' },
    { token: '--purple-900', value: '#221056' },

    { token: '--alpha-20', value: 'rgba(255, 255, 255, 0.20)' },
    { token: '--alpha-12', value: 'rgba(255, 255, 255, 0.12)' },
    { token: '--alpha-80', value: 'rgba(255, 255, 255, 0.80)' },
    { token: '--alpha-overlay', value: 'rgba(22, 25, 29, 0.80)' },
];

const rows: TableRow[] = colorTokens.map((token) => ({
    token: { 
        render: () => (
            <TokenBlock>
                {token.token}
            </TokenBlock>
        ) 
    },
    value: { 
        render: () => (
            <TokenBlock>
                {token.value}
            </TokenBlock>
        ) 
    },
    visual: {
        render: () => (
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '32px',
                    height: '32px',
                    backgroundColor: `var(${token.token})`,
                    padding: '0 var(--spacing-4px)',
                    fontWeight: 'var(--font-weight-medium, 500)',
                    border: '1px solid var(--border, #e1e5ea)',
                    borderRadius: 'var(--corner-radius-4px, 4px)',
                }}
            />
        ),
    },
}));

const ColorTokensStory = () => (
    <NSTable
        columns={[
            { key: 'token', display: 'Token', align: 'left' },
            { key: 'value', display: 'Value', align: 'left'  },
            { key: 'visual', display: 'Visual Representation', align: 'left' },
        ]}
        rows={rows}
        capitalizeHeaders
        borderAround={false}
        borderVertical={false}
        condensed={false}
        highlightHeaders={false}
    />
);

export const FoundationColors = ColorTokensStory;
