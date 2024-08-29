import React from 'react';
import NSTable from 'ui/elements/Table';

import { constantGlobalStyle } from '../../../ui/themes/GlobalStyle';
import { ColorRenderer } from '../../helper-components/ColorRenderer';
import { extractTokensFromGlobalStyles } from '../../utils';

export default {
    title: 'Atoms/Colors',
};

const FoundationColorsStory = () => {
    const colorTokenRegExp =
        /--(neutral|brand|error|success|warning|yellow|purple|alpha)-\d+: (#[0-9A-Fa-f]{6}|rgba?\([^)]+\));/g;
    const rows = extractTokensFromGlobalStyles({
        type: 'colors',
        globalStyleString: constantGlobalStyle,
        regExp: colorTokenRegExp,
        render: (token) => <ColorRenderer color={token} />,
    });
    return (
        <NSTable
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
            condensed={false}
            highlightHeaders={false}
        />
    );
};

export const FoundationColors = FoundationColorsStory;
