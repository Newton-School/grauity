import { CalendarEvent } from './types';

export const cloneDate = (date: Date): Date => new Date(date.getTime());

export const getCurrentWeek = (): Date[] => {
    const current = new Date();
    const week: Date[] = [];
    for (let i = 0; i < 7; i += 1) {
        const first = current.getDate() - current.getDay() + i;
        const day = new Date(current.setDate(first));
        week.push(day);
    }
    return week;
};

export const getWeekDayLabel = (day: Date): string =>
    day.toLocaleDateString('en-US', { weekday: 'short' });

export const getMonthLabel = (day: Date): string =>
    day.toLocaleDateString('en-US', { month: 'short' });

export const getYearLabel = (day: Date): string => day.getFullYear().toString();

export const getMonthDetails = (day: Date): string =>
    `${getMonthLabel(day)} ${getYearLabel(day)}`;

export const getDateFullLabel = (day: Date, offset: number = 0): string => {
    const newDate = cloneDate(day);
    newDate.setDate(newDate.getDate() + offset);
    return `${getWeekDayLabel(newDate)}, ${newDate.getDate()} ${getMonthDetails(
        newDate
    )}`;
};

export const checkIsToday = (day: Date): boolean => {
    const today = new Date();
    return (
        day.getDate() === today.getDate() &&
        day.getMonth() === today.getMonth() &&
        day.getFullYear() === today.getFullYear()
    );
};

export const getWeekByOffset = (offset: number = 0): Date[] => {
    const current = new Date();
    current.setDate(current.getDate() + offset * 7);
    const week: Date[] = [];
    for (let i = 0; i < 7; i += 1) {
        const first = current.getDate() - current.getDay() + i;
        const day = new Date(current.setDate(first));
        week.push(day);
    }
    return week;
};

export const get12HourFormatFromDate = (date: Date): string => {
    const hour = date.getHours() % 12 || 12;
    const minute = date.getMinutes();
    const period = date.getHours() < 12 ? 'AM' : 'PM';
    return `${hour}:${minute} ${period}`;
};

export const getTimeListIn12HourFormat = (): string[] => {
    const timeList: string[] = [];
    for (let i = 0; i < 24; i += 1) {
        const hour = i % 12 || 12;
        const period = i < 12 ? 'AM' : 'PM';
        timeList.push(`${hour} ${period}`);
    }
    return timeList;
};

export const getCurrentTimeStickPosition = (): number => {
    const current = new Date();
    const hour = current.getHours();
    const minute = current.getMinutes();
    return hour + minute / 60;
};

export const getStartTimestampOfHourBlock = (
    date: Date,
    hour: number
): number => {
    const newDate = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        hour
    );
    return newDate.getTime();
};

export const getEventBlockStartPosition = (event: CalendarEvent): number => {
    const hour = event.start.getHours();
    const minute = event.start.getMinutes();
    const startIndex = hour + minute / 60;
    return startIndex - Math.floor(startIndex);
};

export const getEventBlockHeight = (event: CalendarEvent): number => {
    const start = event.start.getTime();
    const end = event.end.getTime();
    return (end - start) / (60 * 60 * 1000);
};
