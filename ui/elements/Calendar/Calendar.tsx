import React from 'react';

import MonthlyCalendar from './MonthlyCalendar';
import { CalendarProps } from './types';
import WeeklyCalendar from './WeeklyCalendar';

function Calendar(props: CalendarProps<any>) {
    const {
        events,
        eventRenderer,
        view,
        // onViewChange,
        shouldShowControls,
        header,
        date,
        onDateChange,
        loading,
        weeklyCalendarProps,
        monthtlyCalendarProps,
    } = props;

    switch (true) {
        case view === 'monthly':
            return (
                <MonthlyCalendar
                    events={events}
                    eventRenderer={(item) => eventRenderer(item, 'monthly')}
                    shouldShowMonthControls={shouldShowControls}
                    header={header}
                    date={date}
                    onDateChange={onDateChange}
                    loading={loading}
                    {...monthtlyCalendarProps}
                />
            );
        case view === 'weekly':
            return (
                <WeeklyCalendar
                    events={events}
                    eventRenderer={(item) => eventRenderer(item, 'weekly')}
                    shouldShowWeekControls={shouldShowControls}
                    header={header}
                    date={date}
                    onDateChange={onDateChange}
                    loading={loading}
                    {...weeklyCalendarProps}
                />
            );
        default:
            return null;
    }
}

export default Calendar;
