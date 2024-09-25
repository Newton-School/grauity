import { StoryFn } from '@storybook/react';
import React from 'react';
import { CalendarEvent, CalendarEventProps } from 'ui/elements/Calendar';

export default {
    title: 'Elements/Calendar/CalendarEvent',
    component: CalendarEvent,
    decorators: [
        (Story: StoryFn) => (
            <div
                style={{
                    width: '150px',
                    height: '90px',
                }}
            >
                <Story />
            </div>
        ),
    ],
};

const Template = (args: CalendarEventProps) => <CalendarEvent {...args} />;

const defaultArgs: CalendarEventProps = {
    title: 'Event Title',
    chipContent: '123',
    start: new Date(2024, 9, 25, 10, 0),
    end: new Date(2024, 9, 25, 12, 0),
    minDurationToDisplayTime: 1 * 60 * 60 * 1000,
    textColor: null,
    backgroundColor: null,
    borderColor: null,
    chipTextColor: null,
    chipBackgroundColor: null,
};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};
