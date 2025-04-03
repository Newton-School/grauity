import React from 'react';
import Table from 'ui/elements/Table';

import { constantGlobalStyle } from '../../../ui/themes/GlobalStyle';
import { extractTokensFromGlobalStyles } from '../../utils/extractTokensFromGlobalStyles';

export default {
    title: 'Atoms/Stacking',
    tags: ['!autodocs'],
};

export const ZIndexTokens = () => {
    const zIndexTokenRegExp = /(.*?--z-index-[\w-]+):\s*(.+);/g;
    const rows = extractTokensFromGlobalStyles({
        globalStyleString: constantGlobalStyle,
        regExp: zIndexTokenRegExp,
    });

    return (
        <Table
            columns={[
                { key: 'token', display: 'Token', align: 'left' },
                { key: 'value', display: 'Value', align: 'left' },
            ]}
            rows={rows}
            capitalizeHeaders
            borderAround={false}
            highlightHeaders={false}
            borderVertical={false}
        />
    );
};

ZIndexTokens.storyName = 'z-index Tokens';