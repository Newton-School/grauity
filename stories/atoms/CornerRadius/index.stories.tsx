import React from 'react';
import Table from 'ui/elements/Table';

import { constantGlobalStyle } from '../../../ui/themes/GlobalStyle';
import { extractTokensFromGlobalStyles } from '../../utils/extractTokensFromGlobalStyles';

export default {
    title: 'Atoms/Corner Radius',
    tags: ['!autodocs'],
};

export const CornerRadiusTokens = () => {
    const cornerRadiusTokenRegExp =
        /--corner-radius-(\d+px|\d+percent): (\d+px|\d+%);/g;
    const rows = extractTokensFromGlobalStyles({
        type: 'visual',
        globalStyleString: constantGlobalStyle,
        regExp: cornerRadiusTokenRegExp,
        render: (token, value) => (
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
                        color: 'var(--text-brand, #0673F9)',
                        borderRadius: token,
                        border: 'var(--spacing-3px, 3px) solid var(--border, #e1e5ea)',
                        fontWeight: 'var(--font-weight-medium, 500)',
                    }}
                >
                    {value}
                </div>
                <div
                    style={{
                        width: '100px',
                        height: '100px',
                        borderRadius: token,
                        border: 'var(--spacing-3px, 3px) solid var(--bg-action-brand, #0673f9)',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        clipPath: 'polygon(70% 0, 100% 0%, 100% 30%, 70% 30%)',
                    }}
                />
            </div>
        ),
    });

    return (
        <Table
            columns={[
                { key: 'token', display: 'Token', align: 'left' },
                { key: 'value', display: 'Value', align: 'left' },
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
        />
    );
};
