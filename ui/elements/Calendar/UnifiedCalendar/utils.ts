import { CalendarView } from '../types';

export const getEpochDiffForDateChange = (
    date: Date,
    view: CalendarView
): number => {
    const nextMonth = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate()
    );

    const nextWeek = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate() + 7
    );

    switch (view) {
        case 'monthly':
            return nextMonth.getTime() - date.getTime();
        case 'weekly':
            return nextWeek.getTime() - date.getTime();
        default:
            return 0;
    }
};
