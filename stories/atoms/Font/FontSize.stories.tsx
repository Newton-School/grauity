import React from 'react';
import Table from 'ui/elements/Table';

import { constantGlobalStyle } from '../../../ui/themes/GlobalStyle';
import { extractTokensFromGlobalStyles } from '../../utils/extractTokensFromGlobalStyles';

export default {
    title: 'Atoms/Font',
    tags: ['!autodocs'],
};

export const FontSizeTokens = () => {
    const fontSizeTokensRegExp = /(.*?--font-size-[\w-]+):\s*(.+);/g;
    const rows = extractTokensFromGlobalStyles({
        type: 'visual',
        globalStyleString: constantGlobalStyle,
        regExp: fontSizeTokensRegExp,
    });

    return (
        <Table
            columns={[
                { key: 'token', display: 'Token', align: 'left' },
                {
                    key: 'value',
                    display: 'Value',
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
