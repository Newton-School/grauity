import React from 'react';

import { ButtonProps, NSButton } from '../../../ui';
import { BUTTON_VARIANTS } from '../../../ui/elements/Button/constants';

export default {
    title: 'Elements/Button Gallery',
    component: NSButton,
};

const Template = (args: ButtonProps) => (
    <table style={{fontFamily: 'Mona Sans'}}>
        <thead>
            <th>NSButton variant</th>
            <th>NSButton</th>
        </thead>
        <tbody>
            {BUTTON_VARIANTS.map(variant => (
                <tr>
                    <td>{variant}:</td>
                    <td style={{ padding: '10px', minWidth: '300px' }}>
                        <NSButton
                            {...args}
                            variant={variant}
                            key={variant}
                        >
                            {args?.children}
                        </NSButton>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
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

export const Default = Template.bind({});

Default.args = {
    ...defaultArgs,
};
