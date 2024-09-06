import React from 'react';
import {
    BUTTON_VARIANTS,
    IconButton,
    IconButtonProps,
} from 'ui/elements/Button';
import NSTable from 'ui/elements/Table';

import TokenBlock from '../../helper-components/TokenBlock';

export default {
    title: 'Elements/NSIconButton',
    component: IconButton,
    tags: ['!autodocs'],
};

const Template = (args: IconButtonProps) => (
    <NSTable.Table borderAround={false} borderVertical={false}>
        <NSTable.TableHead highlightHeaders={false}>
            <NSTable.TableRow>
                <NSTable.TableHeadingCell align="left">
                    IconButton variant
                </NSTable.TableHeadingCell>
                <NSTable.TableHeadingCell align="left">
                    IconButton
                </NSTable.TableHeadingCell>
            </NSTable.TableRow>
        </NSTable.TableHead>
        <NSTable.TableBody>
            {BUTTON_VARIANTS.map((variant) => (
                <NSTable.TableRow>
                    <NSTable.TableDataCell>
                        <TokenBlock copy>{variant}</TokenBlock>
                    </NSTable.TableDataCell>
                    <NSTable.TableDataCell>
                        <IconButton {...args} variant={variant} key={variant} />
                    </NSTable.TableDataCell>
                </NSTable.TableRow>
            ))}
        </NSTable.TableBody>
    </NSTable.Table>
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
