import React from 'react';
import Chip, { ChipProps } from 'ui/elements/Chip';
import { CHIP_VARIANTS } from 'ui/elements/Chip/constants';
import Table from 'ui/elements/Table';

import TokenBlock from '../../helper-components/TokenBlock';

type ChipParitySnapshot = Pick<
    ChipProps,
    'variant' | 'size' | 'hasBorder' | 'rounded' | 'icon' | 'iconPosition'
> & {
    id: string;
    label: string;
};

export const CHIP_PARITY_COMPONENT_NAME_ALIASES = ['Chip', 'System_thunder'];

export const CHIP_PARITY_VARIANT_SNAPSHOTS: ChipParitySnapshot[] = [
    ...CHIP_VARIANTS.map(
        (variant): ChipParitySnapshot => ({
            id: `variant-${variant}`,
            label: variant,
            variant: variant as ChipProps['variant'],
            size: 'medium',
            hasBorder: false,
            rounded: false,
            icon: null,
            iconPosition: 'left',
        })
    ),
    {
        id: 'variant-brand-icon-left',
        label: 'brand + icon left',
        variant: 'brand',
        size: 'medium',
        hasBorder: false,
        rounded: false,
        icon: 'thunder',
        iconPosition: 'left',
    },
    {
        id: 'variant-brand-icon-right',
        label: 'brand + icon right',
        variant: 'brand',
        size: 'medium',
        hasBorder: false,
        rounded: false,
        icon: 'thunder',
        iconPosition: 'right',
    },
];

export const CHIP_PARITY_PARAMETERS = {
    componentName: 'Chip',
    designComponentName: 'System_thunder',
    componentNameAliases: CHIP_PARITY_COMPONENT_NAME_ALIASES,
    payloadSnapshots: CHIP_PARITY_VARIANT_SNAPSHOTS,
};

export default {
    title: 'Elements/Chip',
    component: Chip,
    tags: ['!autodocs'],
    parameters: {
        parity: CHIP_PARITY_PARAMETERS,
    },
};

const Template = (args: ChipProps) => (
    <Table.Table borderAround={false} borderVertical={false}>
        <Table.TableHead highlightHeaders={false}>
            <Table.TableRow condensed>
                <Table.TableHeadingCell align="left">
                    Chip variant
                </Table.TableHeadingCell>
                <Table.TableHeadingCell align="left">
                    Chip
                </Table.TableHeadingCell>
            </Table.TableRow>
        </Table.TableHead>
        <Table.TableBody>
            {CHIP_PARITY_VARIANT_SNAPSHOTS.map(
                ({ id, label, ...snapshotArgs }) => (
                    <Table.TableRow condensed key={id}>
                        <Table.TableDataCell>
                            <TokenBlock copy>{label}</TokenBlock>
                        </Table.TableDataCell>
                        <Table.TableDataCell>
                            <Chip {...args} {...snapshotArgs}>
                                Chip {label}
                            </Chip>
                        </Table.TableDataCell>
                    </Table.TableRow>
                )
            )}
        </Table.TableBody>
    </Table.Table>
);

const defaultArgs: ChipProps = {
    variant: 'brand',
    size: 'medium',
    hasBorder: false,
    textColor: null,
    className: 'chip',
    backgroundColor: null,
    borderColor: null,
    rounded: false,
};

export const Gallery = Template.bind({});

Gallery.args = {
    ...defaultArgs,
};
