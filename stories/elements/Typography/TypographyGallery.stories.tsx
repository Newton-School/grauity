import React from 'react';
import NSTable from 'ui/elements/Table';
import NSTypography, {
    TYPOGRAPHY_AS_ENUM,
    TYPOGRAPHY_VARIANT_AS_MAPPING,
    TYPOGRAPHY_VARIANTS,
    TYPOGRAPHY_VARIANTS_ENUM,
    TypographyProps,
} from 'ui/elements/Typography';

import TokenBlock from '../../helper-components/TokenBlock';

export default {
    title: 'Elements/NSTypography',
    component: NSTypography,
};

const Template = (args: TypographyProps) => (
    <NSTable.Table borderAround={false} borderVertical={false}>
        <NSTable.TableHead highlightHeaders={false}>
            <NSTable.TableHeadingCell align="left" width="400px">
                Variant
            </NSTable.TableHeadingCell>
            <NSTable.TableHeadingCell align="left">As</NSTable.TableHeadingCell>
            <NSTable.TableHeadingCell align="left">
                NSTypography
            </NSTable.TableHeadingCell>
        </NSTable.TableHead>
        <NSTable.TableBody>
            {TYPOGRAPHY_VARIANTS.map((variant) => (
                <NSTable.TableRow>
                    <NSTable.TableDataCell>
                        <TokenBlock copy>{variant}</TokenBlock>
                    </NSTable.TableDataCell>
                    <NSTable.TableDataCell>
                        <TokenBlock>
                            {TYPOGRAPHY_VARIANT_AS_MAPPING[variant]}
                        </TokenBlock>
                    </NSTable.TableDataCell>
                    <NSTable.TableDataCell>
                        <NSTypography
                            variant={variant}
                            as={TYPOGRAPHY_AS_ENUM.AUTO}
                            color={args?.color}
                        >
                            {args?.children}
                        </NSTypography>
                    </NSTable.TableDataCell>
                </NSTable.TableRow>
            ))}
        </NSTable.TableBody>
    </NSTable.Table>
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
