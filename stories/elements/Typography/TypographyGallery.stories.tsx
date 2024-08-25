import React from 'react';

import {
    NSTableBody,
    NSTableDataCell,
    NSTableHead,
    NSTableHeadingCell,
    NSTableRow,
    NSTableWrapper,
    NSTypography,
    TYPOGRAPHY_AS_ENUM,
    TYPOGRAPHY_VARIANTS,
    TYPOGRAPHY_VARIANTS_ENUM,
    TypographyProps,
} from '../../../ui';
import { TYPOGRAPHY_VARIANT_AS_MAPPING } from '../../../ui/elements/Typography/constants';
import TokenBlock from '../../helper-components/TokenBlock';

export default {
    title: 'Elements/NSTypography',
    component: NSTypography,
};

const Template = (args: TypographyProps) => (
    <NSTableWrapper borderAround={false} borderVertical={false}>
        <NSTableHead highlightHeaders={false}>
            <NSTableHeadingCell align="left" width="400px">
                Variant
            </NSTableHeadingCell>
            <NSTableHeadingCell align="left">As</NSTableHeadingCell>
            <NSTableHeadingCell align="left">NSTypography</NSTableHeadingCell>
        </NSTableHead>
        <NSTableBody>
            {TYPOGRAPHY_VARIANTS.map((variant) => (
                <NSTableRow>
                    <NSTableDataCell>
                        <TokenBlock copy>{variant}</TokenBlock>
                    </NSTableDataCell>
                    <NSTableDataCell>
                        <TokenBlock>
                            {TYPOGRAPHY_VARIANT_AS_MAPPING[variant]}
                        </TokenBlock>
                    </NSTableDataCell>
                    <NSTableDataCell>
                        <NSTypography
                            variant={variant}
                            as={TYPOGRAPHY_AS_ENUM.AUTO}
                            color={args?.color}
                        >
                            {args?.children}
                        </NSTypography>
                    </NSTableDataCell>
                </NSTableRow>
            ))}
        </NSTableBody>
    </NSTableWrapper>
);

const defaultArgs = {
    children: 'The quick brown fox jumps over the lazy dog!',
    variant: TYPOGRAPHY_VARIANTS_ENUM.HEADING_SEMIBOLD_H40,
    color: 'var(--text-primary, #16191d)',
    as: TYPOGRAPHY_AS_ENUM.AUTO,
};

export const TypographyGallery = Template.bind({});

TypographyGallery.args = {
    ...defaultArgs,
};
