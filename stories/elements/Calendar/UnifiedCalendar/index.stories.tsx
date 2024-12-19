import React from 'react';
import { UnifiedCalendar, UnifiedCalendarProps } from 'ui/elements/Calendar';
import { EVENT_HEIGHT } from 'ui/elements/Calendar/MonthlyCalendar/constants';
import MonthlyCalendarEventItem from 'ui/elements/Calendar/MonthlyCalendarEvent';
import { CalendarEvent } from 'ui/elements/Calendar/types';

import withRemovePadding from '../../../decorators/withRemovePadding';

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();

const EVENTS_DATA: CalendarEvent[] = [
    // Day 1 events
    {
        id: '1-1',
        title: 'Morning Meeting',
        start: new Date(currentYear, currentMonth, 1, 9, 0),
        end: new Date(currentYear, currentMonth, 1, 10, 30),
    },
    {
        id: '1-2',
        title: 'Morning breakfast',
        start: new Date(currentYear, currentMonth, 1, 9, 0),
        end: new Date(currentYear, currentMonth, 1, 10, 30),
    },
    {
        id: '1-3',
        title: 'Morning Tea',
        start: new Date(currentYear, currentMonth, 1, 9, 0),
        end: new Date(currentYear, currentMonth, 1, 10, 30),
    },
    {
        id: '1-4',
        title: 'Team Lunch',
        start: new Date(currentYear, currentMonth, 1, 12, 0),
        end: new Date(currentYear, currentMonth, 1, 13, 0),
    },
    {
        id: '1-5',
        title: 'Team Dinner',
        start: new Date(currentYear, currentMonth, 1, 12, 0),
        end: new Date(currentYear, currentMonth, 1, 13, 0),
    },
    // Day 5 events
    {
        id: '5-1',
        title: 'Project Review',
        start: new Date(currentYear, currentMonth, 5, 11, 0),
        end: new Date(currentYear, currentMonth, 5, 12, 30),
    },
    {
        id: '5-2',
        title: 'Client Call',
        start: new Date(currentYear, currentMonth, 5, 14, 0),
        end: new Date(currentYear, currentMonth, 5, 15, 0),
    },
    {
        id: '5-3',
        title: 'Team Sync',
        start: new Date(currentYear, currentMonth, 5, 16, 0),
        end: new Date(currentYear, currentMonth, 5, 17, 0),
    },
    // Day 10 events
    {
        id: '10-1',
        title: 'Sprint Planning',
        start: new Date(currentYear, currentMonth, 10, 10, 0),
        end: new Date(currentYear, currentMonth, 10, 11, 30),
    },
    {
        id: '10-2',
        title: 'Design Review',
        start: new Date(currentYear, currentMonth, 10, 13, 0),
        end: new Date(currentYear, currentMonth, 10, 14, 0),
    },
    // Day 15 events
    {
        id: '15-1',
        title: 'Weekly Standup',
        start: new Date(currentYear, currentMonth, 15, 9, 30),
        end: new Date(currentYear, currentMonth, 15, 10, 30),
    },
    {
        id: '15-2',
        title: 'Product Demo',
        start: new Date(currentYear, currentMonth, 15, 11, 0),
        end: new Date(currentYear, currentMonth, 15, 12, 0),
    },
    {
        id: '15-3',
        title: 'Team Building',
        start: new Date(currentYear, currentMonth, 15, 14, 0),
        end: new Date(currentYear, currentMonth, 15, 16, 0),
    },
    // Day 20 events
    {
        id: '20-1',
        title: 'Code Review',
        start: new Date(currentYear, currentMonth, 20, 10, 0),
        end: new Date(currentYear, currentMonth, 20, 11, 0),
    },
    {
        id: '20-2',
        title: 'Deployment Planning',
        start: new Date(currentYear, currentMonth, 20, 13, 0),
        end: new Date(currentYear, currentMonth, 20, 14, 30),
    },
    {
        id: '20-3',
        title: 'Tech Talk',
        start: new Date(currentYear, currentMonth, 20, 15, 0),
        end: new Date(currentYear, currentMonth, 20, 16, 0),
    },
    // Day 25 events
    {
        id: '25-1',
        title: 'Monthly Review',
        start: new Date(currentYear, currentMonth, 25, 9, 0),
        end: new Date(currentYear, currentMonth, 25, 10, 0),
    },
    {
        id: '25-2',
        title: 'Team Lunch',
        start: new Date(currentYear, currentMonth, 25, 12, 0),
        end: new Date(currentYear, currentMonth, 25, 13, 30),
    },
];

export default {
    title: 'Elements/Calendar/UnifiedCalendar',
    component: UnifiedCalendar,
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
                    <Calendar
                        date={new Date()}
                        onDateChange={() => {}}
                        events={[{
                            id: '1-1',
                            title: 'Morning Meeting',
                            start: new Date(currentYear, currentMonth, 1, 9, 0),
                            end: new Date(currentYear, currentMonth, 1, 10, 30),
                        }]}
                        eventRenderer={(event: CalendarEvent) => (
                            <MonthlyCalendarEventItem
                                key={event.id}
                                eventTime={event.start}
                                eventTitle={event.title}
                                eventTitleColor="var(--text-action2)"
                                eventTimeColor="var(--text-action2)"
                                backgroundColor="var(--bg-action-brand)"
                                height={50}
                            />
                        )}
                        shouldShowControls
                        header={null}
                        loading={false}
                        view={'weekly'}
                        monthtlyCalendarProps={{
                            monthlyRenderDayItem: null,
                        }}
                        weeklyCalendarProps={{
                            defaultScrollHour: null,
                            shouldScrollToFirstEvent: false,
                        }}
                    />
                `,
            },
        },
    },
};

const Template = (args: UnifiedCalendarProps<any>) => (
    <UnifiedCalendar {...args} />
);

export const Component = Template.bind({});

const defaultArgs: UnifiedCalendarProps<any> = {
    date: new Date(),
    onDateChange: () => {},
    events: EVENTS_DATA,
    eventRenderer: (event: CalendarEvent) => (
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
    shouldShowControls: true,
    header: null,
    loading: false,
    view: 'monthly',
    monthtlyCalendarProps: {
        monthlyRenderDayItem: null,
    },
    weeklyCalendarProps: {
        defaultScrollHour: null,
        shouldScrollToFirstEvent: false,
    },
};

Component.args = {
    ...defaultArgs,
};
