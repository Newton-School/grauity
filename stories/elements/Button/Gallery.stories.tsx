import React from 'react';
import Button, { BUTTON_VARIANTS, ButtonProps } from 'ui/elements/Button';
import { BUTTON_COLORS } from 'ui/elements/Button/constants';
import Table from 'ui/elements/Table';

import TokenBlock from '../../helper-components/TokenBlock';

export default {
    title: 'Elements/Button',
    component: Button,
    tags: ['!autodocs'],
};

const Template = (args: ButtonProps) => (
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
                    Button
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
                                <Button
                                    {...args}
                                    variant={variant}
                                    color={color}
                                    key={variant}
                                >
                                    {args?.children}
                                </Button>
                            </Table.TableDataCell>
                        </Table.TableRow>
                    );
                });
            })}
        </Table.TableBody>
    </Table.Table>
);

const defaultArgs = {
    children: 'Click Me',
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
