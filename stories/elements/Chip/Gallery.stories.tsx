import React from 'react';
import Chip, { ChipProps } from 'ui/elements/Chip';
import { CHIP_VARIANTS } from 'ui/elements/Chip/constants';
import Table from 'ui/elements/Table';

import TokenBlock from '../../helper-components/TokenBlock';

export default {
    title: 'Elements/Chip',
    component: Chip,
    tags: ['!autodocs'],
};

const Template = (args: ChipProps) => (
    <Table.Table borderAround={false} borderVertical={false}>
        <Table.TableHead highlightHeaders={false}>
            <Table.TableRow>
                <Table.TableHeadingCell align="left">
                    Chip variant
                </Table.TableHeadingCell>
                <Table.TableHeadingCell align="left">
                    Chip
                </Table.TableHeadingCell>
            </Table.TableRow>
        </Table.TableHead>
        <Table.TableBody>
            {CHIP_VARIANTS.map((variant) => (
                <Table.TableRow>
                    <Table.TableDataCell>
                        <TokenBlock copy>{variant}</TokenBlock>
                    </Table.TableDataCell>
                    <Table.TableDataCell>
                        <Chip {...args} variant={variant} key={variant}>
                            Chip {variant}
                        </Chip>
                    </Table.TableDataCell>
                </Table.TableRow>
            ))}
        </Table.TableBody>
    </Table.Table>
);

const defaultArgs: ChipProps = {
    variant: 'brand',
    size: 'medium',
    hasBorder: false,
    textColor: null,
    backgroundColor: null,
    borderColor: null,
    rounded: false,
};

export const Gallery = Template.bind({});

Gallery.args = {
    ...defaultArgs,
};
