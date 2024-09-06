import React from 'react';
import Button, { BUTTON_VARIANTS, ButtonProps } from 'ui/elements/Button';
import NSTable from 'ui/elements/Table';

import TokenBlock from '../../helper-components/TokenBlock';

export default {
    title: 'Elements/Button',
    component: Button,
    tags: ['!autodocs'],
};

const Template = (args: ButtonProps) => (
    <NSTable.Table borderAround={false} borderVertical={false}>
        <NSTable.TableHead highlightHeaders={false}>
            <NSTable.TableRow>
                <NSTable.TableHeadingCell align="left">
                    Button variant
                </NSTable.TableHeadingCell>
                <NSTable.TableHeadingCell align="left">
                    Button
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
                        <Button {...args} variant={variant} key={variant}>
                            {args?.children}
                        </Button>
                    </NSTable.TableDataCell>
                </NSTable.TableRow>
            ))}
        </NSTable.TableBody>
    </NSTable.Table>
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
