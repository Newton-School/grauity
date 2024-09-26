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

const defaultArgs: WeeklyCalendarProps = {
    events: [
        {
            title: 'Event 1',
            start: new Date(2024, 8, 26, 10, 0),
            end: new Date(2024, 8, 26, 12, 0),
        },
        {
            title: 'Event 2',
            start: new Date(2024, 8, 26, 10, 45),
            end: new Date(2024, 8, 26, 11, 45),
        },
        {
            title: 'Event 3',
            start: new Date(2024, 8, 27, 12, 0),
            end: new Date(2024, 8, 27, 12, 30),
        },
        {
            title: 'Event 4',
            start: new Date(2024, 8, 27, 12, 30),
            end: new Date(2024, 8, 27, 13, 0),
        },
        {
            title: 'Event 5',
            start: new Date(2024, 8, 25, 12, 0),
            end: new Date(2024, 8, 25, 13, 0),
        },
        {
            title: 'Event 5',
            start: new Date(2024, 8, 24, 12, 0),
            end: new Date(2024, 8, 24, 12, 15),
        },
    ],
    eventRenderer: null,
    shouldShowWeekControls: true,
    weekOffset: 0,
    onWeekChange: () => {},
};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};
