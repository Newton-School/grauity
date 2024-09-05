import React from 'react';
import NSTable from 'ui/elements/Table';

import { constantGlobalStyle } from '../../../ui/themes/GlobalStyle';
import { extractTokensFromGlobalStyles } from '../../utils';

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
                    backgroundColor: 'var(--bg-brand, #E5F1FF)',
                    color: 'var(--text-brand, #0673F9)',
                    textIndent: 'var(--spacing-4px)',
                    fontWeight: 'var(--font-weight-medium, 500)',
                }}
            >
                {value}
            </div>
        ),
    });

    return (
        <NSTable
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
            condensed={false}
        />
    );
};
