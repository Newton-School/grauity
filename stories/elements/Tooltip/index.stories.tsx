import { TOOLTIP_PLACEMENT } from 'elements/Tooltip/constants';
import Tooltip from 'elements/Tooltip/Tooltip';
import React, { useState } from 'react';
import Button from 'ui/elements/Button';
import { NSButtonGroup, NSCheckbox, TooltipProps } from 'ui/index';

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
    className: '',
};

const Template = (args: TooltipProps) => (
    <Tooltip {...args}>
        <Button variant="primary" color="brand">
            Hover over me!
        </Button>
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
    ),
};

const TemplateWithControl = (args: TooltipProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <NSButtonGroup>
            <Tooltip {...args} isOpen={isOpen}>
                <Button variant="primary" color="brand">
                    Hover over me!
                </Button>
            </Tooltip>
            <NSCheckbox
                name="isOpen"
                label="Open Tooltip"
                isChecked={isOpen}
                onChange={() => {
                    setIsOpen(!isOpen);
                }}
            />
        </NSButtonGroup>
    );
};

export const ControlExternally = TemplateWithControl.bind({});
ControlExternally.args = {
    ...Default.args,
    content: 'This is a tooltip is operated by isOpen prop',
    isOpen: true,
};
