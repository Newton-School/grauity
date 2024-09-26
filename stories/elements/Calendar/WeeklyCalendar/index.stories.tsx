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
    parameters: {
        docs: {
            source: {
                code: `
<WeeklyCalendar
  eventRenderer={null}
  events={[]}
  onWeekChange={() => {}}
  shouldShowWeekControls
  weekOffset={0}
/>
                `,
            },
        },
    },
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
                weekStartDate + 1,
                11,
                0
            ),
            end: new Date(currentYear, currentMonth, weekStartDate + 1, 13, 0),
        },
        {
            title: 'Event 2',
            start: new Date(
                currentYear,
                currentMonth,
                weekStartDate + 1,
                12,
                35
            ),
            end: new Date(currentYear, currentMonth, weekStartDate + 1, 14, 0),
        },
        {
            title: 'Event 3',
            start: new Date(
                currentYear,
                currentMonth,
                weekStartDate + 1,
                14,
                0
            ),
            end: new Date(currentYear, currentMonth, weekStartDate + 1, 15, 0),
        },
        {
            title: 'Event 4',
            start: new Date(
                currentYear,
                currentMonth,
                weekStartDate + 1,
                16,
                0
            ),
            end: new Date(currentYear, currentMonth, weekStartDate + 3, 8, 0),
        },
        {
            title: 'Event 5',
            start: new Date(
                currentYear,
                currentMonth,
                weekStartDate + 3,
                14,
                0
            ),
            end: new Date(currentYear, currentMonth, weekStartDate + 3, 14, 45),
        },
        {
            title: 'Event 6',
            start: new Date(
                currentYear,
                currentMonth,
                weekStartDate + 3,
                12,
                0
            ),
            end: new Date(currentYear, currentMonth, weekStartDate + 3, 14, 0),
        },
        {
            title: 'Event 7',
            start: new Date(
                currentYear,
                currentMonth,
                weekStartDate + 2,
                14,
                45
            ),
            end: new Date(currentYear, currentMonth, weekStartDate + 2, 18, 30),
        },
        {
            title: 'Event 8',
            start: new Date(
                currentYear,
                currentMonth,
                weekStartDate + 2,
                15,
                0
            ),
            end: new Date(currentYear, currentMonth, weekStartDate + 2, 17, 0),
        },
        {
            title: 'Event 9',
            start: new Date(
                currentYear,
                currentMonth,
                weekStartDate + 1,
                13,
                0
            ),
            end: new Date(currentYear, currentMonth, weekStartDate + 1, 14, 0),
        },
        {
            title: 'Event 10',
            start: new Date(
                currentYear,
                currentMonth,
                weekStartDate + 3,
                11,
                0
            ),
            end: new Date(currentYear, currentMonth, weekStartDate + 3, 12, 0),
        },
        {
            title: 'Event 11',
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
            title: 'Event 12',
            start: new Date(
                currentYear,
                currentMonth,
                weekStartDate + 3,
                13,
                0
            ),
            end: new Date(currentYear, currentMonth, weekStartDate + 3, 15, 0),
        },
        {
            title: 'Event 13',
            start: new Date(
                currentYear,
                currentMonth,
                weekStartDate + 3,
                15,
                0
            ),
            end: new Date(currentYear, currentMonth, weekStartDate + 3, 17, 0),
        },
        {
            title: 'Event 14',
            start: new Date(
                currentYear,
                currentMonth,
                weekStartDate + 3,
                15,
                30
            ),
            end: new Date(currentYear, currentMonth, weekStartDate + 3, 17, 30),
        },
        {
            title: 'Event 15',
            start: new Date(
                currentYear,
                currentMonth,
                weekStartDate + 3,
                16,
                0
            ),
            end: new Date(currentYear, currentMonth, weekStartDate + 3, 18, 0),
        },
        {
            title: 'Event 16',
            start: new Date(
                currentYear,
                currentMonth,
                weekStartDate + 3,
                18,
                0
            ),
            end: new Date(currentYear, currentMonth, weekStartDate + 3, 18, 30),
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
