import React from 'react';
import { MonthlyCalendar, MonthlyCalendarProps } from 'ui/elements/Calendar';
import { EVENT_HEIGHT } from 'ui/elements/Calendar/MonthlyCalendar/constants';
import { MonthlyCalendarEvent } from 'ui/elements/Calendar/MonthlyCalendar/types';
// eslint-disable-next-line import/no-named-default
import { default as MonthlyCalendarEventItem } from 'ui/elements/Calendar/MonthlyCalendarEvent';

import withRemovePadding from '../../../decorators/withRemovePadding';

const EVENTS_DATA: MonthlyCalendarEvent[] = [
    {
        id: '1',
        title: 'Event 1',
        start: new Date(2024, 9, 25, 8, 0),
        end: new Date(2024, 9, 25, 10, 0),
    },
    {
        id: '2',
        title: 'Event 2',
        start: new Date(2024, 9, 25, 10, 0),
        end: new Date(2024, 9, 25, 12, 0),
    },
    {
        id: '3',
        title: 'Event 3',
        start: new Date(2024, 9, 25, 12, 0),
        end: new Date(2024, 9, 25, 14, 0),
    },
    {
        id: '4',
        title: 'Event 4',
        start: new Date(2024, 9, 25, 14, 0),
        end: new Date(2024, 9, 25, 16, 0),
    },
    {
        id: '5',
        title: 'Event 5',
        start: new Date(2024, 9, 25, 14, 0),
        end: new Date(2024, 9, 25, 16, 0),
    },
    {
        id: '6',
        title: 'Event 6',
        start: new Date(2024, 9, 25, 14, 0),
        end: new Date(2024, 9, 25, 16, 0),
    },
    {
        id: '7',
        title: 'Event 7',
        start: new Date(2024, 9, 25, 14, 0),
        end: new Date(2024, 9, 25, 16, 0),
    },
    {
        id: '8',
        title: 'Event 8',
        start: new Date(2024, 9, 25, 14, 0),
        end: new Date(2024, 9, 25, 16, 0),
    },
    {
        id: '9',
        title: 'Event 9',
        start: new Date(2024, 9, 25, 14, 0),
        end: new Date(2024, 9, 25, 16, 0),
    },
    {
        id: '10',
        title: 'Event 10',
        start: new Date(2024, 9, 25, 14, 0),
        end: new Date(2024, 9, 25, 16, 0),
    },
];

export default {
    title: 'Elements/Calendar/MonthlyCalendar',
    component: MonthlyCalendar,
    decorators: [
        (Story: React.ComponentType) => (
            <div
                style={{
                    width: '100vw',
                    height: '100vh',
                }}
            >
                <Story />
            </div>
        ),
        withRemovePadding,
    ],
    parameters: {
        docs: {
            source: {
                code: `
                    <MonthlyCalendar/>
                `,
            },
        },
    },
};

const Template = (args: MonthlyCalendarProps<any>) => (
    <MonthlyCalendar {...args} />
);

export const Component = Template.bind({});

const defaultArgs: MonthlyCalendarProps<any> = {
    monthOffset: 0,
    events: EVENTS_DATA,
    eventRenderer: (event: MonthlyCalendarEvent) => (
        <MonthlyCalendarEventItem
            key={event.id}
            eventTime={event.start}
            eventTitle={event.title}
            eventTitleColor="var(--text-action2)"
            eventTimeColor="var(--text-action2)"
            backgroundColor="var(--bg-action-brand)"
            height={`${EVENT_HEIGHT}px`}
        />
    ),
    shouldShowMonthControls: true,
    header: <h1>Header</h1>,
    onMonthChange: () => {},
    loading: true,
};

Component.args = {
    ...defaultArgs,
};
