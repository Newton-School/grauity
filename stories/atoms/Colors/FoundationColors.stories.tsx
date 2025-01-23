import React from 'react';
import Table from 'ui/elements/Table';

import { constantGlobalStyle } from '../../../ui/themes/GlobalStyle';
import { extractTokensFromGlobalStyles } from '../../utils/extractTokensFromGlobalStyles';

export default {
    title: 'Atoms/Colors',
    tags: ['!autodocs'],
};

export const FoundationColors = () => {
    const colorTokenRegExp = /--(neutral|brand|error|success|warning|yellow|purple|alpha)-\d+:\s*(.+)/g;
    const rows = extractTokensFromGlobalStyles({
        globalStyleString: constantGlobalStyle,
        regExp: colorTokenRegExp,
        type: 'colors',
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
            borderVertical={false}
            highlightHeaders={false}
            hoverable
        />
    );
};
