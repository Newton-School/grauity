import React from 'react';
import { useGlobals } from '@storybook/addons';

import { NSTable } from '../../../ui'; // Adjust the import path as necessary
import { TableRow } from '../../../ui/elements/Table/types';
import TokenBlock from '../../helper-components/TokenBlock';
import THEMES from '../../../ui/themes/constants';

export default {
    title: 'Design System/Colors',
};

const colorTokens = [
    {
        token: '--text-primary',
        dark: 'var(--neutral-0, #ffffff)',
        light: 'var(--neutral-900, #16191D)',
    },
    {
        token: '--text-secondary',
        dark: 'var(--neutral-600, #b2b9c7)',
        light: 'var(--neutral-700, #5B6271)',
    },
    {
        token: '--text-disabled',
        dark: 'var(--neutral-700, #5b6271)',
        light: 'var(--neutral-600, #8C95A6)',
    },
    {
        token: '--text-action',
        dark: 'var(--neutral-0, #ffffff)',
        light: 'var(--neutral-0, #FFFFFF)',
    },
    {
        token: '--text-action2',
        dark: 'var(--neutral-900, #16191D)',
        light: 'var(--neutral-0, #FFFFFF)',
    },
    {
        token: '--text-brand',
        dark: 'var(--brand-300, #0673f9)',
        light: 'var(--brand-500, #0673F9)',
    },
    {
        token: '--text-success',
        dark: 'var(--success-300, #13b97c)',
        light: 'var(--success-600, #007A51)',
    },
    {
        token: '--text-error',
        dark: 'var(--error-300, #ee3f44)',
        light: 'var(--error-500, #D22D3A)',
    },
    {
        token: '--text-warning',
        dark: 'var(--warning-300, #f37216)',
        light: 'var(--warning-500, #DE5A02)',
    },
    {
        token: '--text-yellow',
        dark: 'var(--yellow-300, #f59700)',
        light: 'var(--yellow-500, #F59700)',
    },
    {
        token: '--text-purple',
        dark: 'var(--purple-300, #b49dfe)',
        light: 'var(--purple-500, #7B55EE)',
    },
    {
        token: '--bg-primary',
        dark: 'var(--neutral-1000, #0b0c0e)',
        light: 'var(--neutral-0, #FFFFFF)',
    },
    {
        token: '--bg-secondary',
        dark: 'var(--neutral-900, #16191d)',
        light: 'var(--neutral-100, #F6F7F9)',
    },
    {
        token: '--bg-tertiary',
        dark: 'var(--neutral-800, #23282f)',
        light: 'var(--neutral-200, #EDEFF3)',
    },
    {
        token: '--bg-brand',
        dark: 'var(--brand-900, #002452)',
        light: 'var(--brand-0, #E5F1FF)',
    },
    {
        token: '--bg-success',
        dark: 'var(--success-800, #003d29)',
        light: 'var(--success-0, #D9FCED)',
    },
    {
        token: '--bg-error',
        dark: 'var(--error-900, #4a040a)',
        light: 'var(--error-0, #FFE5E7)',
    },
    {
        token: '--bg-warning',
        dark: 'var(--warning-900, #441704)',
        light: 'var(--warning-0, #FFF1E5)',
    },
    {
        token: '--bg-yellow',
        dark: 'var(--yellow-900, #3d1a00)',
        light: 'var(--yellow-0, #FFF3D6)',
    },
    {
        token: '--bg-purple',
        dark: 'var(--purple-800, #331d72)',
        light: 'var(--purple-0, #F5E5FF)',
    },
    {
        token: '--bg-disabled',
        dark: 'var(--neutral-800, #23282F)',
        light: 'var(--neutral-200, #EDEFF3)',
    },
    {
        token: '--bg-action-brand',
        dark: 'var(--brand-500, #0673f9)',
        light: 'var(--brand-500, #0673f9)',
    },
    {
        token: '--bg-action-success',
        dark: 'var(--success-500, #009965)',
        light: 'var(--success-500, #009965)',
    },
    {
        token: '--bg-action-error',
        dark: 'var(--error-500, #d22d3a)',
        light: 'var(--error-500, #d22d3a)',
    },
    {
        token: '--bg-action-warning',
        dark: 'var(--warning-400, #f37216)',
        light: 'var(--warning-400, #f37216)',
    },
    {
        token: '--bg-action-yellow',
        dark: 'var(--yellow-400, #f59700)',
        light: 'var(--yellow-400, #f59700)',
    },
    {
        token: '--bg-action-purple',
        dark: 'var(--purple-600, #6138d3)',
        light: 'var(--purple-600, #6138d3)',
    },
    {
        token: '--bg-invert-primary',
        dark: 'var(--neutral-0, #ffffff)',
        light: 'var(--neutral-1000, #0B0C0E)',
    },
    {
        token: '--bg-invert-secondary',
        dark: 'var(--neutral-100, #F6F7F9)',
        light: 'var(--neutral-900, #16191D)',
    },
    {
        token: '--bg-invert-tertiary',
        dark: 'var(--neutral-200, #edeff3)',
        light: 'var(--neutral-800, #23282F)',
    },
    {
        token: '--bg-primary-hover',
        dark: 'var(--neutral-900, #16191D)',
        light: 'var(--neutral-100, #F6F7F9)',
    },
    {
        token: '--bg-invert-primary-hover',
        dark: 'var(--neutral-100, #F6F7F9)',
        light: 'var(--neutral-900, #16191D)',
    },
    {
        token: '--bg-action-brand-hover',
        dark: 'var(--brand-400, #2989FF)',
        light: 'var(--brand-400, #2989FF)',
    },
    {
        token: '--bg-action-success-hover',
        dark: 'var(--success-400, #13B97C)',
        light: 'var(--success-400, #13B97C)',
    },
    {
        token: '--bg-action-error-hover',
        dark: 'var(--error-400, #EE3F44)',
        light: 'var(--error-400, #EE3F44)',
    },
    {
        token: '--bg-action-warning-hover',
        dark: 'var(--warning-300, #FD9254)',
        light: 'var(--warning-300, #FD9254)',
    },
    {
        token: '--bg-action-yellow-hover',
        dark: 'var(--yellow-400, #F37216)',
        light: 'var(--yellow-400, #F37216)',
    },
    {
        token: '--alpha-hover',
        dark: 'var(--alpha-20, rgba(255, 255, 255, 0.20))',
        light: 'var(--alpha-20, rgba(255, 255, 255, 0.20))',
    },
    {
        token: '--alpha-pressed',
        dark: 'var(--alpha-12, rgba(255, 255, 255, 0.12))',
        light: 'var(--alpha-12, rgba(255, 255, 255, 0.12))',
    },
    {
        token: '--alpha-overlay',
        dark: 'var(--alpha-overlay, rgba(22, 25, 29, 0.80))',
        light: 'var(--alpha-overlay, rgba(22, 25, 29, 0.80))',
    },
    {
        token: '--border',
        dark: 'var(--neutral-750, #30363d)',
        light: 'var(--neutral-300, #E1E5EA)',
    },
    {
        token: '--border-brand',
        dark: 'var(--brand-800, #003270)',
        light: 'var(--brand-200, #94C4FF)',
    },
    {
        token: '--border-success',
        dark: 'var(--success-700, #005c3d)',
        light: 'var(--success-100, #ACF7D3)',
    },
    {
        token: '--border-error',
        dark: 'var(--error-800, #63080d)',
        light: 'var(--error-100, #FBBBBF)',
    },
    {
        token: '--border-warning',
        dark: 'var(--warning-700, #802d00)',
        light: 'var(--warning-100, #FFD2BA)',
    },
    {
        token: '--border-yellow',
        dark: 'var(--yellow-800, #5c2900)',
        light: 'var(--yellow-100, #FFD580)',
    },
    {
        token: '--border-purple',
        dark: 'var(--purple-700, #46279b)',
        light: 'var(--purple-100, #CEBCFE)',
    },
    {
        token: '--border-neutral',
        dark: 'var(--neutral-800, #23282F)',
        light: 'var(--neutral-300, #E1E5EA)',
    },
];

const getRowsByTheme: (theme?: string) => TableRow[] = (theme = THEMES.LIGHT) =>
    colorTokens.map((token) => ({
        token: {
            render: () => <TokenBlock>{token.token}</TokenBlock>,
        },
        value: {
            render: () => <TokenBlock>{token[theme]}</TokenBlock>,
        },
        color: {
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

export const ColorTokens = () => {
    const [{ theme }] = useGlobals();
    return (
        <NSTable
            columns={[
                { key: 'token', display: 'Token', align: 'left' },
                { key: 'value', display: 'Value', align: 'left' },
                { key: 'color', display: 'Visual Representation', align: 'left' },
            ]}
            rows={getRowsByTheme(theme)}
            capitalizeHeaders
            borderAround={false}
            borderVertical={false}
            condensed={false}
            highlightHeaders={false}
        />
    );
};
