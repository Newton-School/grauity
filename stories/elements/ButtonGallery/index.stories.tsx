import React from 'react';

import { Button, ButtonProps } from '../../../ui';
import { BUTTON_VARIANTS } from '../../../ui/elements/Button/constants';

export default {
    title: 'Elements/Button Gallery',
    component: Button,
};

const Template = (args: ButtonProps) => (
    <table>
        <thead>
            <th>Button variant</th>
            <th>Button</th>
        </thead>
        <tbody>
            {BUTTON_VARIANTS.map(variant => (
                <tr>
                    <td>{variant}:</td>
                    <td style={{ padding: '10px', minWidth: '300px' }}>
                        <Button
                            {...args}
                            variant={variant}
                            key={variant}
                        />
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
);

const defaultArgs = {
    text: 'Click Me!',
    hasIcon: true,
    icon: 'sparkle',
    variant: 'primary',
    size: 'medium',
    onClick: () => {
        console.log('Button clicked!');
    },
};

export const Default = Template.bind({});

Default.args = {
    ...defaultArgs,
};
