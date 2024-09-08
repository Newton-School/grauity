import React from 'react';
import {
    BUTTON_VARIANTS,
    IconButton,
    IconButtonProps,
} from 'ui/elements/Button';
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
            <Table.TableRow>
                <Table.TableHeadingCell align="left">
                    IconButton variant
                </Table.TableHeadingCell>
                <Table.TableHeadingCell align="left">
                    IconButton
                </Table.TableHeadingCell>
            </Table.TableRow>
        </Table.TableHead>
        <Table.TableBody>
            {BUTTON_VARIANTS.map((variant) => (
                <Table.TableRow>
                    <Table.TableDataCell>
                        <TokenBlock copy>{variant}</TokenBlock>
                    </Table.TableDataCell>
                    <Table.TableDataCell>
                        <IconButton {...args} variant={variant} key={variant} />
                    </Table.TableDataCell>
                </Table.TableRow>
            ))}
        </Table.TableBody>
    </Table.Table>
);

const defaultArgs: IconButtonProps = {
    icon: 'exclamation-circle',
    variant: 'primary',
    size: 'medium',
    onClick: () => {},
};

export const Gallery = Template.bind({});

Gallery.args = {
    ...defaultArgs,
};
