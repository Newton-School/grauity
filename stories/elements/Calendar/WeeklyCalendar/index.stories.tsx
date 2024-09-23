import { StoryFn } from '@storybook/react';
import React from 'react';
import WeeklyCalendar, { WeeklyCalendarProps } from 'ui/elements/Calendar';

export default {
    title: 'Elements/Calendar/WeeklyCalendar',
    component: WeeklyCalendar,
    decorators: [
        (Story: StoryFn) => (
            <div
                style={{
                    height: '800px',
                }}
            >
                <Story />
            </div>
        ),
    ],
};

const Template = (args: WeeklyCalendarProps) => <WeeklyCalendar {...args} />;

const defaultArgs = {
    events: [
        {
            name: 'Event 1',
            start: new Date('2024-09-01T10:00:00'),
            end: new Date('2024-09-01T12:00:00'),
        },
        {
            name: 'Event 2',
            start: new Date('2024-09-21T14:15:00'),
            end: new Date('2024-09-21T15:30:00'),
        },
        {
            name: 'Event 3',
            start: new Date('2024-09-21T15:00:00'),
            end: new Date('2024-09-21T15:45:00'),
        },
        {
            name: 'Event 4',
            start: new Date('2024-09-21T15:00:00'),
            end: new Date('2024-09-21T16:00:00'),
        },
        {
            name: 'Event 5',
            start: new Date('2024-09-19T10:00:00'),
            end: new Date('2024-09-19T10:30:00'),
        },
    ],
    eventRenderer: (event: any) => <div>{event.name}</div>,
    shouldShowWeekControls: true,
    weekOffset: 0,
    onWeekChange: () => {},
};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};
