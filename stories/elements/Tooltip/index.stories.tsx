import { TOOLTIP_PLACEMENT } from 'elements/Tooltip/constants';
import Tooltip from 'elements/Tooltip/Tooltip';
import React from 'react';
import Button from 'ui/elements/Button';
import { TooltipProps } from 'ui/index';

export default {
    title: 'Elements/Tooltip',
    component: Tooltip,
    argTypes: {
        placement: {
            control: {
                type: 'select',
                options: Object.values(TOOLTIP_PLACEMENT),
            },
        },
        fixedPositioning: { control: 'boolean' },
        hidden: { control: 'boolean' },
        hideArrow: { control: 'boolean' },
    },
};

const Template = (args: TooltipProps) => (
    <Tooltip {...args}>
        <Button variant='tertiary'>Hover over me!</Button>
    </Tooltip>
);

export const Default = Template.bind({});
Default.args = {
    content: 'This is a tooltip',
    placement: TOOLTIP_PLACEMENT.TOP,
    fixedPositioning: false,
    hidden: false,
    hideArrow: false,
    config: {
        tooltip: {
            maxWidth: '200px',
            padding: '12px',
        },
    },
};

export const WithoutArrow = Template.bind({});
WithoutArrow.args = {
    ...Default.args,
    content: 'This is a tooltip without an arrow',
    hideArrow: true,
};

export const WithCustomContent = Template.bind({});
WithCustomContent.args = {
    ...Default.args,
    content: (
        <div>
            <h3>Custom content</h3>
            <p>This is custom tooltip content</p>
        </div>
    )
};
