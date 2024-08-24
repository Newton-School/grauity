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

export default {
    title: 'Elements/NSTypography',
    component: NSTypography,
};

const Template = (args: TypographyProps) => (
    <NSTableWrapper>
        <NSTableHead>
            <NSTableHeadingCell align="left" width="250px">
                <NSTypography
                    variant={
                        TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_MEDIUM_LABEL
                    }
                >
                    Variant
                </NSTypography>
            </NSTableHeadingCell>
            <NSTableHeadingCell align="left">
                <NSTypography
                    variant={
                        TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_MEDIUM_LABEL
                    }
                >
                    As
                </NSTypography>
            </NSTableHeadingCell>
            <NSTableHeadingCell align="left">
                <NSTypography
                    variant={
                        TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_MEDIUM_LABEL
                    }
                >
                    NSTypography
                </NSTypography>
            </NSTableHeadingCell>
        </NSTableHead>
        <NSTableBody>
            {TYPOGRAPHY_VARIANTS.map((variant) => (
                <NSTableRow condensed>
                    <NSTableDataCell>
                        <NSTypography
                            variant={
                                TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_MEDIUM_LABEL
                            }
                        >
                            {variant}
                        </NSTypography>
                    </NSTableDataCell>
                    <NSTableDataCell>
                        <NSTypography
                            variant={
                                TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_MEDIUM_LABEL
                            }
                        >
                            {TYPOGRAPHY_VARIANT_AS_MAPPING[variant]}
                        </NSTypography>
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
