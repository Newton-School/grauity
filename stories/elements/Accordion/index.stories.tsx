import type { Meta } from '@storybook/react';
import React from 'react';
import Accordion from 'ui/elements/Accordion/Accordion';
import { AccordionProps } from 'ui/elements/Accordion/types';

const Template = (args: AccordionProps) => (
    <>
        <Accordion {...args}>
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
    title: 'Accordion 1',
    expanded: false,
    onToggle: () => {},
    suffix: null,
    headerBackgroundColor: 'var(--bg-secondary, #F6F7F9)',
    contentBackgroundColor: 'var(--bg-secondary, #F6F7F9)',
    iconColor: 'var(--text-primary, #16191D)',
    style: {},
    className: '',
    showSeparator: true,
    iconSize: '16',
};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};

const meta: Meta<typeof Accordion> = {
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

export default meta;
