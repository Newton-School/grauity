import React from 'react';
import Table from 'ui/elements/Table';

import { constantGlobalStyle } from '../../../ui/themes/GlobalStyle';
import { ColorRenderer } from '../../helper-components/ColorRenderer';
import { extractTokensFromGlobalStyles } from '../../utils';

export default {
    title: 'Atoms/Colors',
    tags: ['!autodocs'],
};

export const FoundationColors = () => {
    const colorTokenRegExp =
        /--(neutral|brand|error|success|warning|yellow|purple|alpha)-\d+: (#[0-9A-Fa-f]{6}|rgba?\([^)]+\));/g;
    const rows = extractTokensFromGlobalStyles({
        type: 'colors',
        globalStyleString: constantGlobalStyle,
        regExp: colorTokenRegExp,
        render: (token) => <ColorRenderer color={token} />,
    });
    return (
        <Table
            columns={[
                { key: 'token', display: 'Token', align: 'left' },
                { key: 'value', display: 'Value', align: 'left' },
                {
                    key: 'colors',
                    display: 'Visual Representation',
                    align: 'left',
                },
            ]}
            rows={rows}
            capitalizeHeaders
            borderAround={false}
            borderVertical={false}
            highlightHeaders={false}
        />
    );
};
