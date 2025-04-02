import React from 'react';
import Table from 'ui/elements/Table';
import { NSIconButton, NSTextField, NSTooltip } from 'ui/index';

import { constantGlobalStyle } from '../../../ui/themes/GlobalStyle';
import { extractTokensFromGlobalStyles } from '../../utils/extractTokensFromGlobalStyles';

export default {
    title: 'Atoms/Font',
    tags: ['!autodocs'],
};

const DEFAULT_TEXT = 'The quick brown fox jumps over the lazy dog';

export const FontWeightTokens = () => {
    const [text, setText] = React.useState(DEFAULT_TEXT);

    const fontWeightTokensRegExp = /(.*?--font-weight-[\w-]+):\s*(.+);/g;
    const rows = extractTokensFromGlobalStyles({
        type: 'visual',
        globalStyleString: constantGlobalStyle,
        regExp: fontWeightTokensRegExp,
        render: (token) => (
            <div
                style={{
                    fontWeight: token,
                    fontSize: 'var(--font-size-16px)',
                    fontFamily: 'var(--font-family)',
                    color: 'var(--text-emphasis-primary-default)',
                }}
            >
                {text}
            </div>
        ),
    });

    return (
        <div>
            <div style={{
                width: '100%',
                position: 'sticky',
                top: '0',
                padding: '10px 0 16px 0',
                background: 'linear-gradient(to bottom, var(--bg-subtle-primary-default) 91%, transparent 100%)',
                zIndex: 1,
            }}>
                <NSTextField
                    name="font-weight-text"
                    label="Change text to preview font weight"
                    placeholder="Enter text here..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    adornments={{
                        end: (
                            <NSTooltip content="Reset">
                                <NSIconButton
                                    icon="refresh"
                                    variant="secondary"
                                    color="neutral"
                                    size="small"
                                    onClick={() => setText(DEFAULT_TEXT)}
                                />
                            </NSTooltip>
                        ),
                    }}
                />
            </div>
            <Table
                columns={[
                    { key: 'token', display: 'Token', align: 'left' },
                    {
                        key: 'value',
                        display: 'Value',
                        align: 'left',
                        width: '25%',
                    },
                    {
                        key: 'visual',
                        display: 'Visual Representation',
                        align: 'left',
                        width: '50%',
                    },
                ]}
                rows={rows}
                capitalizeHeaders
                borderAround={false}
                highlightHeaders={false}
                borderVertical={false}
                hoverable
            />
        </div>
    );
};
