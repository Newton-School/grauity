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

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();
const currentDate = new Date().getDate();
const currentDay = new Date().getDay();
const weekStartDate = currentDate - currentDay;

const defaultArgs: WeeklyCalendarProps = {
    events: [
        {
            title: 'Event 1',
            start: new Date(
                currentYear,
                currentMonth,
                weekStartDate + 4,
                10,
                0
            ),
            end: new Date(currentYear, currentMonth, weekStartDate + 4, 12, 0),
        },
        {
            title: 'Event 2',
            start: new Date(
                currentYear,
                currentMonth,
                weekStartDate + 4,
                10,
                45
            ),
            end: new Date(currentYear, currentMonth, weekStartDate + 4, 11, 45),
        },
        {
            title: 'Event 3',
            start: new Date(
                currentYear,
                currentMonth,
                weekStartDate + 5,
                12,
                0
            ),
            end: new Date(currentYear, currentMonth, weekStartDate + 5, 12, 30),
        },
        {
            title: 'Event 4',
            start: new Date(
                currentYear,
                currentMonth,
                weekStartDate + 5,
                12,
                30
            ),
            end: new Date(currentYear, currentMonth, weekStartDate + 5, 13, 0),
        },
        {
            title: 'Event 8',
            start: new Date(
                currentYear,
                currentMonth,
                weekStartDate + 5,
                12,
                30
            ),
            end: new Date(currentYear, currentMonth, weekStartDate + 5, 13, 0),
        },
        {
            title: 'Event 5',
            start: new Date(
                currentYear,
                currentMonth,
                weekStartDate + 3,
                12,
                0
            ),
            end: new Date(currentYear, currentMonth, weekStartDate + 3, 13, 0),
        },
        {
            title: 'Event 6',
            start: new Date(
                currentYear,
                currentMonth,
                weekStartDate + 2,
                12,
                0
            ),
            end: new Date(currentYear, currentMonth, weekStartDate + 2, 12, 15),
        },
        {
            title: 'Event 7',
            start: new Date(
                currentYear,
                currentMonth,
                weekStartDate + 5,
                15,
                0
            ),
            end: new Date(currentYear, currentMonth, weekStartDate + 5, 17, 30),
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
