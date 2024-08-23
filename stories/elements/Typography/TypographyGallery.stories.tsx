import React from 'react';

import { NSTableBody, NSTableDataCell, NSTableHead, NSTableHeadingCell, NSTableRow, NSTableWrapper, NSTypography, TYPOGRAPHY_AS_ENUM, TYPOGRAPHY_VARIANTS, TYPOGRAPHY_VARIANTS_ENUM, TypographyProps } from '../../../ui';

export default {
    title: 'Elements/NSTypography',
    component: NSTypography,
};

const Template = (args: TypographyProps) => (
    <NSTableWrapper>
        <NSTableHead>
            <NSTableHeadingCell align='left'>NSTypography variant</NSTableHeadingCell>
            <NSTableHeadingCell align='left'>NSTypography</NSTableHeadingCell>
        </NSTableHead>
        <NSTableBody>
            {TYPOGRAPHY_VARIANTS.map(variant => (
                <NSTableRow condensed>
                    <NSTableDataCell>{variant}</NSTableDataCell>
                    <NSTableDataCell>
                        <NSTypography variant={variant} as={TYPOGRAPHY_AS_ENUM.AUTO} color={args?.color}>
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
TypographyGallery.parameters = {
    theme: 'light',
};
TypographyGallery.args = {
    ...defaultArgs,
};

export const TypographyGalleryDark = Template.bind({});
TypographyGalleryDark.parameters = {
    theme: 'dark',
};
TypographyGalleryDark.args = {
    ...defaultArgs,
};
