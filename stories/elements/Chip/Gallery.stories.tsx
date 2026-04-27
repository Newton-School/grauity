import React from 'react';
import Chip, { ChipProps } from 'ui/elements/Chip';
import {
    CHIP_DARKER_BG_OPTIONS,
    CHIP_STATES,
    CHIP_TYPES,
    CHIP_WITH_BORDER_OPTIONS,
} from 'ui/elements/Chip/constants';
import Table from 'ui/elements/Table';

import TokenBlock from '../../helper-components/TokenBlock';

export default {
    title: 'Elements/Chip',
    component: Chip,
    tags: ['!autodocs'],
};

const variantCombinations = CHIP_TYPES.flatMap((type) =>
    CHIP_STATES.flatMap((state) =>
        CHIP_DARKER_BG_OPTIONS.flatMap((darkerbg) =>
            CHIP_WITH_BORDER_OPTIONS.map((withborder) => ({
                type,
                state,
                darkerbg,
                withborder,
            }))
        )
    )
);

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
            {variantCombinations.map(({ type, state, darkerbg, withborder }) => {
                const key = `${type}-${state}-${darkerbg}-${withborder}`;
                return (
                    <Table.TableRow condensed key={key}>
                        <Table.TableDataCell>
                            <TokenBlock copy>
                                {`type=${type}, state=${state}, darkerbg=${darkerbg}, withborder=${withborder}`}
                            </TokenBlock>
                        </Table.TableDataCell>
                        <Table.TableDataCell>
                            <Chip
                                {...args}
                                type={type}
                                state={state}
                                darkerbg={darkerbg}
                                withborder={withborder}
                            >
                                Chip {type}
                            </Chip>
                        </Table.TableDataCell>
                    </Table.TableRow>
                );
            })}
        </Table.TableBody>
    </Table.Table>
);

const defaultArgs: ChipProps = {
    type: 'brand',
    state: 'default',
    darkerbg: false,
    withborder: false,
    size: 'medium',
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
