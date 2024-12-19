import React, { useEffect, useState } from 'react';

import MonthlyCalendar from './MonthlyCalendar';
import { CalendarProps } from './types';
import WeeklyCalendar from './WeeklyCalendar';

function Calendar(props: CalendarProps<any>) {
    const {
        events = [],
        eventRenderer = () => null,
        view = 'weekly',
        onViewChange = () => {},
        shouldShowControls = true,
        header = null,
        date = new Date(),
        onDateChange = () => {},
        loading = false,
        weeklyCalendarProps = {},
        monthtlyCalendarProps = {},
    } = props;

    const [viewType, setViewType] = useState(view);
    const [currentDate, setCurrentDate] = useState(date);

    useEffect(() => {
        onViewChange(viewType);
    }, [viewType]);

    useEffect(() => {
        onDateChange(date);
    }, [currentDate]);

    switch (true) {
        case viewType === 'monthly':
            return (
                <MonthlyCalendar
                    events={events}
                    eventRenderer={(item) => eventRenderer(item, 'monthly')}
                    shouldShowMonthControls={shouldShowControls}
                    header={header}
                    date={currentDate}
                    onDateChange={setCurrentDate}
                    loading={loading}
                    onViewChange={(currentView) => {
                        setViewType(currentView);
                    }}
                    {...monthtlyCalendarProps}
                />
            );
        case viewType === 'weekly':
            return (
                <WeeklyCalendar
                    events={events}
                    eventRenderer={(item) => eventRenderer(item, 'weekly')}
                    shouldShowWeekControls={shouldShowControls}
                    header={header}
                    date={currentDate}
                    onDateChange={setCurrentDate}
                    loading={loading}
                    onViewChange={(currentView) => {
                        setViewType(currentView);
                    }}
                    {...weeklyCalendarProps}
                />
            );
        default:
            return null;
    }
}

export default Calendar;
export { CalendarProps };
