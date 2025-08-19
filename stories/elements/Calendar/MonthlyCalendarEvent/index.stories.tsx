import { StoryFn } from '@storybook/react';
import React from 'react';
import {
    MonthlyCalendarEvent,
    MonthlyCalendarEventProps,
} from 'ui/elements/Calendar';

export default {
    title: 'Elements/Calendar/MonthlyCalendarEvent',
    component: MonthlyCalendarEvent,
    decorators: [
        (Story: StoryFn) => (
            <div
                style={{
                    width: '150px',
                    height: '16px',
                }}
            >
                <Story />
            </div>
        ),
    ],
};

const Template = (args: MonthlyCalendarEventProps) => (
    <MonthlyCalendarEvent {...args} />
);

const defaultArgs: MonthlyCalendarEventProps = {
    eventTime: new Date(2024, 9, 25, 8, 0),
    eventTitle: 'Sample Event Title',
    eventTitleColor: 'var(--text-emphasis-invert-primary-default, #ffffff)',
    eventTimeColor: 'var(--text-emphasis-invert-primary-default, #ffffff)',
    backgroundColor: 'var(--bg-emphasis-brand-default, #0673f9)',
    borderRadius: '4px',
    width: '100%',
    height: '100%',
    isActive: false,
};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};
