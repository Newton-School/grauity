import React from 'react';
import Table from 'ui/elements/Table';
import Typography, {
    TYPOGRAPHY_AS_ENUM,
    TYPOGRAPHY_VARIANT_AS_MAPPING,
    TYPOGRAPHY_VARIANTS,
    TYPOGRAPHY_VARIANTS_ENUM,
    TypographyProps,
} from 'ui/elements/Typography';

import TokenBlock from '../../helper-components/TokenBlock';

export default {
    title: 'Elements/Typography',
    component: Typography,
    tags: ['!autodocs'],
};

const Template = (args: TypographyProps) => (
    <Table.Table borderAround={false} borderVertical={false}>
        <Table.TableHead highlightHeaders={false}>
            <Table.TableHeadingCell align="left" width="400px">
                Variant
            </Table.TableHeadingCell>
            <Table.TableHeadingCell align="left">As</Table.TableHeadingCell>
            <Table.TableHeadingCell align="left">
                Typography
            </Table.TableHeadingCell>
        </Table.TableHead>
        <Table.TableBody>
            {TYPOGRAPHY_VARIANTS.map((variant) => (
                <Table.TableRow condensed>
                    <Table.TableDataCell>
                        <TokenBlock copy>{variant}</TokenBlock>
                    </Table.TableDataCell>
                    <Table.TableDataCell>
                        <TokenBlock>
                            {TYPOGRAPHY_VARIANT_AS_MAPPING[variant]}
                        </TokenBlock>
                    </Table.TableDataCell>
                    <Table.TableDataCell>
                        <Typography
                            variant={variant}
                            as={TYPOGRAPHY_AS_ENUM.AUTO}
                            color={args?.color}
                        >
                            {args?.children}
                        </Typography>
                    </Table.TableDataCell>
                </Table.TableRow>
            ))}
        </Table.TableBody>
    </Table.Table>
);

const defaultArgs = {
    children: 'The quick brown fox jumps over the lazy dog!',
    variant: TYPOGRAPHY_VARIANTS_ENUM.HEADING_SEMIBOLD_H40,
    color: 'var(--text-primary, #16191d)',
    as: TYPOGRAPHY_AS_ENUM.AUTO,
};

export const Gallery = Template.bind({});

Gallery.args = {
    ...defaultArgs,
};
