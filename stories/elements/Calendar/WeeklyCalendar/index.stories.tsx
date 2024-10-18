import React from 'react';
import WeeklyCalendar, { WeeklyCalendarProps } from 'ui/elements/Calendar';

import withRemovePadding from '../../../decorators/withRemovePadding';

export default {
    title: 'Elements/Calendar/WeeklyCalendar',
    component: WeeklyCalendar,
    decorators: [withRemovePadding],
    parameters: {
        docs: {
            source: {
                code: `
<WeeklyCalendar
  eventRenderer={null}
  events={[]}
  onWeekChange={() => {}}
  shouldShowWeekControls
  header={null}
  weekOffset={0}
  loading={false}
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
                weekStartDate + 3,
                12,
                0
            ),
            end: new Date(currentYear, currentMonth, weekStartDate + 3, 14, 0),
        },
        {
            title: 'Event 5',
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
            title: 'Event 6',
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
            title: 'Event 7',
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
            title: 'Event 8',
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
            title: 'Event 9',
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
            title: 'Event 10',
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
            title: 'Event 11',
            start: new Date(
                currentYear,
                currentMonth,
                weekStartDate + 3,
                16,
                0
            ),
            end: new Date(currentYear, currentMonth, weekStartDate + 3, 18, 0),
        },
    ],
    eventRenderer: null,
    shouldShowWeekControls: true,
    header: null,
    weekOffset: 0,
    onWeekChange: () => {},
    loading: false,
};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};
