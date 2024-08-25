import React from 'react';

import {
    ButtonProps,
    NSButton,
    NSTableBody,
    NSTableDataCell,
    NSTableHead,
    NSTableHeadingCell,
    NSTableRow,
    NSTableWrapper,
} from '../../../ui';
import { BUTTON_VARIANTS } from '../../../ui/elements/Button/constants';
import TokenBlock from '../../helper-components/TokenBlock';

export default {
    title: 'Elements/NSButton',
    component: NSButton,
};

const Template = (args: ButtonProps) => (
    <NSTableWrapper borderAround={false} borderVertical={false}>
        <NSTableHead highlightHeaders={false}>
            <NSTableRow>
                <NSTableHeadingCell align="left">
                    NSButton variant
                </NSTableHeadingCell>
                <NSTableHeadingCell align="left">NSButton</NSTableHeadingCell>
                <NSTableHeadingCell align="left">
                    NSButton with Icon only
                </NSTableHeadingCell>
            </NSTableRow>
        </NSTableHead>
        <NSTableBody>
            {BUTTON_VARIANTS.map((variant) => (
                <NSTableRow>
                    <NSTableDataCell>
                        <TokenBlock copy>{variant}</TokenBlock>
                    </NSTableDataCell>
                    <NSTableDataCell>
                        <NSButton {...args} variant={variant} key={variant}>
                            {args?.children}
                        </NSButton>
                    </NSTableDataCell>
                    <NSTableDataCell>
                        <NSButton
                            variant={variant}
                            key={variant}
                            icon={args?.icon}
                            size={args?.size}
                            disabled={args?.disabled}
                            loading={args?.loading}
                            isIconButton
                        />
                    </NSTableDataCell>
                </NSTableRow>
            ))}
        </NSTableBody>
    </NSTableWrapper>
);

const defaultArgs = {
    children: 'Click Me',
    icon: 'exclamation-circle',
    variant: 'primary',
    size: 'medium',
    onClick: () => {},
};

export const ButtonGallery = Template.bind({});

ButtonGallery.args = {
    ...defaultArgs,
};
