import { CalendarView } from '../types';

export const getOffsetBy = (date: Date, view: CalendarView): number => {
    const nextMonth = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate()
    );

    const nextWeek = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate() + 7
    );

    switch (true) {
        case view === 'monthly':
            return nextMonth.getTime() - date.getTime();
        case view === 'weekly':
            return nextWeek.getTime() - date.getTime();
        default:
            return 0;
    }
};
