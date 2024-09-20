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

export const getTimeListIn12HourFormat = (): string[] => {
    const timeList: string[] = [];
    for (let i = 0; i < 24; i += 1) {
        const hour = i % 12 || 12;
        const period = i < 12 ? 'AM' : 'PM';
        timeList.push(`${hour} ${period}`);
    }
    return timeList;
};
