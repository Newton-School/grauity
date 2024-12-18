import React, { useEffect, useState } from 'react';

import MonthlyCalendar from './MonthlyCalendar';
import { CalendarProps } from './types';
import WeeklyCalendar from './WeeklyCalendar';

function Calendar(props: CalendarProps<any>) {
    const {
        events,
        eventRenderer,
        view,
        onViewChange = () => {},
        shouldShowControls,
        header,
        date,
        onDateChange,
        loading,
        weeklyCalendarProps,
        monthtlyCalendarProps,
    } = props;

    const [viewType, setViewType] = useState(view);

    useEffect(() => {
        onViewChange(viewType);
    }, [viewType]);

    switch (true) {
        case viewType === 'monthly':
            return (
                <MonthlyCalendar
                    events={events}
                    eventRenderer={(item) => eventRenderer(item, 'monthly')}
                    shouldShowMonthControls={shouldShowControls}
                    header={header}
                    date={date}
                    onDateChange={onDateChange}
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
                    date={date}
                    onDateChange={onDateChange}
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
