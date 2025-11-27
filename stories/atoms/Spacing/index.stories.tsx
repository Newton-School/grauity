import React from 'react';
import Table from 'ui/elements/Table';

import { constantGlobalStyle } from '../../../ui/themes/GlobalStyle';
import { extractTokensFromGlobalStyles } from '../../utils/extractTokensFromGlobalStyles';

export default {
    title: 'Atoms/Spacing',
    tags: ['!autodocs'],
};

export const SpacingTokens = () => {
    const spacingTokenRegExp = /--spacing-(\d+px): (\d+px);/g;
    const rows = extractTokensFromGlobalStyles({
        type: 'visual',
        globalStyleString: constantGlobalStyle,
        regExp: spacingTokenRegExp,
        render: (token, value) => (
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: token,
                    height: '32px',
                    backgroundColor: 'var(--bg-subtle-brand-default, #e5f1ff)',
                    color: 'var(--text-emphasis-brand-default, #0673f9)',
                    textIndent: 'var(--spacing-4px)',
                    fontWeight: 'var(--font-weight-medium, 500)',
                }}
            >
                {value}
            </div>
        ),
    });

    return (
        <Table
            columns={[
                { key: 'token', display: 'Token', align: 'left' },
                { key: 'value', display: 'Pixels', align: 'left' },
                {
                    key: 'visual',
                    display: 'Visual Representation',
                    align: 'left',
                },
            ]}
            rows={rows}
            capitalizeHeaders
            borderAround={false}
            highlightHeaders={false}
            borderVertical={false}
            hoverable
        />
    );
};
