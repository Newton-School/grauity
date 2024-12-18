import React from 'react';

import MonthlyCalendar from './MonthlyCalendar';
import { CalendarProps } from './types';
import WeeklyCalendar from './WeeklyCalendar';

function Calendar(props: CalendarProps<any>) {
    switch (true) {
        case props?.view === 'monthly':
            return <MonthlyCalendar {...props} monthOffset={props?.offset} />;
        case props?.view === 'weekly':
            return (
                <WeeklyCalendar
                    {...props}
                    {...props?.weeklyCalendarProps}
                    eventRenderer={(event) =>
                        props?.eventRenderer(event, 'weekly')
                    }
                />
            );
        default:
            return null;
    }
}

export default Calendar;
