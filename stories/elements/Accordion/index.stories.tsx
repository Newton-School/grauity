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
    <>
        <Accordion {...args} title="Accordion 1">
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                }}
            >
                <div>Accordion Content</div>
                <div>Accordion Content</div>
                <div>Accordion Content</div>
                <div>Accordion Content</div>
            </div>
        </Accordion>
        <Accordion {...args} title="Accordion 2">
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                }}
            >
                <div>Accordion Content</div>
                <div>Accordion Content</div>
                <div>Accordion Content</div>
                <div>Accordion Content</div>
            </div>
        </Accordion>
    </>
);

const defaultArgs: AccordionProps = {
    title: 'Accordion',
    expanded: false,
    onToggle: () => {},
    suffix: null,
    headerBackgroundColor: 'var(--bg-secondary)',
    contentBackgroundColor: 'var(--text-secondary)',
    iconColor: 'var(--text-primary)',
};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};
