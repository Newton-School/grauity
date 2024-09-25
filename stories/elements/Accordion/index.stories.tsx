import React from 'react';
import Accordion from 'ui/elements/Accordion/Accordion';
import { AccordionProps } from 'ui/elements/Accordion/types';

export default {
    title: 'Elements/Accordion',
    component: Accordion,
    decorators: [
        (Story: React.FC) => (
            <div style={{ width: '500px' }}>
                <Story />
            </div>
        ),
    ],
};

const Template = (args: AccordionProps) => (
    <Accordion {...args}>
        <div>
            <div>Accordion Content</div>
            <div>Accordion Content</div>
            <div>Accordion Content</div>
            <div>Accordion Content</div>
            <div>Accordion Content</div>
            <div>Accordion Content</div>
        </div>
    </Accordion>
);

const defaultArgs: AccordionProps = {
    title: 'Accordion',
    expanded: false,
    onToggle: () => {},
};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};
