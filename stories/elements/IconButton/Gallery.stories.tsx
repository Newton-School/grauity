import React from 'react';
import {
    BUTTON_VARIANTS,
    IconButton,
    IconButtonProps,
} from 'ui/elements/Button';
import { BUTTON_COLORS } from 'ui/elements/Button/constants';
import Table from 'ui/elements/Table';

import TokenBlock from '../../helper-components/TokenBlock';

export default {
    title: 'Elements/IconButton',
    component: IconButton,
    tags: ['!autodocs'],
};

const Template = (args: IconButtonProps) => (
    <Table.Table borderAround={false} borderVertical={false}>
        <Table.TableHead highlightHeaders={false}>
            <Table.TableRow condensed>
                <Table.TableHeadingCell align="left">
                    Variant
                </Table.TableHeadingCell>
                <Table.TableHeadingCell align="left">
                    Color
                </Table.TableHeadingCell>
                <Table.TableHeadingCell align="left">
                    Icon Button
                </Table.TableHeadingCell>
            </Table.TableRow>
        </Table.TableHead>
        <Table.TableBody>
            {BUTTON_COLORS.map((color) => {
                return BUTTON_VARIANTS.map((variant) => {
                    return (
                        <Table.TableRow condensed>
                            <Table.TableDataCell>
                                <TokenBlock copy>{variant}</TokenBlock>
                            </Table.TableDataCell>
                            <Table.TableDataCell>
                                <TokenBlock copy>{color}</TokenBlock>
                            </Table.TableDataCell>
                            <Table.TableDataCell>
                                <IconButton
                                    {...args}
                                    variant={variant}
                                    color={color}
                                    key={variant}
                                />
                            </Table.TableDataCell>
                        </Table.TableRow>
                    );
                });
            })}
        </Table.TableBody>
    </Table.Table>
);

const defaultArgs: IconButtonProps = {
    icon: 'exclamation-circle',
    variant: 'primary',
    color: 'brand',
    size: 'medium',
    onClick: () => {},
};

export const Gallery = Template.bind({});

Gallery.args = {
    ...defaultArgs,
};
