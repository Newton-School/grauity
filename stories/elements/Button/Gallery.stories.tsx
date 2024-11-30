import React from 'react';
import Button, { BUTTON_VARIANTS, ButtonProps } from 'ui/elements/Button';
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
                    Button variant
                </Table.TableHeadingCell>
                <Table.TableHeadingCell align="left">
                    Button
                </Table.TableHeadingCell>
            </Table.TableRow>
        </Table.TableHead>
        <Table.TableBody>
            {BUTTON_VARIANTS.map((variant) => (
                <Table.TableRow condensed>
                    <Table.TableDataCell>
                        <TokenBlock copy>{variant}</TokenBlock>
                    </Table.TableDataCell>
                    <Table.TableDataCell>
                        <Button {...args} variant={variant} key={variant}>
                            {args?.children}
                        </Button>
                    </Table.TableDataCell>
                </Table.TableRow>
            ))}
        </Table.TableBody>
    </Table.Table>
);

const defaultArgs = {
    children: 'Click Me',
    icon: 'exclamation-circle',
    variant: 'primary',
    size: 'medium',
    onClick: () => {},
};

export const Gallery = Template.bind({});

Gallery.args = {
    ...defaultArgs,
};
