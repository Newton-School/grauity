import React from 'react';

import { ButtonProps, NSButton, NSTableBody, NSTableDataCell, NSTableHead, NSTableHeadingCell, NSTableRow, NSTableWrapper } from '../../../ui';
import { BUTTON_VARIANTS } from '../../../ui/elements/Button/constants';

export default {
    title: 'Elements/NSButton',
    component: NSButton,
};

const Template = (args: ButtonProps) => (
    <NSTableWrapper>
        <NSTableHead>
            <NSTableHeadingCell align='left'>NSButton variant</NSTableHeadingCell>
            <NSTableHeadingCell align='left'>NSButton</NSTableHeadingCell>
            <NSTableHeadingCell align='left'>NSButton with Icon only</NSTableHeadingCell>
        </NSTableHead>
        <NSTableBody>
            {BUTTON_VARIANTS.map(variant => (
                <NSTableRow condensed>
                    <NSTableDataCell>{variant}</NSTableDataCell>
                    <NSTableDataCell>
                        <NSButton
                            {...args}
                            variant={variant}
                            key={variant}
                        >
                            {args?.children}
                        </NSButton>
                    </NSTableDataCell>
                    <NSTableDataCell>
                        <NSButton
                            variant={variant}
                            key={variant}
                            icon='sparkle'
                            isIconButton
                        />
                    </NSTableDataCell>
                </NSTableRow>
            ))}
        </NSTableBody>
    </NSTableWrapper>
);

const defaultArgs = {
    children: 'Click Me!',
    hasIcon: true,
    icon: 'sparkle',
    variant: 'primary',
    size: 'medium',
    onClick: () => {
        console.log('NSButton clicked!');
    },
};

export const ButtonGallery = Template.bind({});

ButtonGallery.args = {
    ...defaultArgs,
};
