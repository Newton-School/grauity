import { DATE_SIZE, EVENT_HEIGHT, GRID_GAP } from './constants';

export const getMonthOffsetByDate = (date: Date) => {
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth();
    const requiredYear = new Date().getFullYear();
    const requiredMonth = new Date().getMonth();
    const monthsPassed = currentYear * 12 + currentMonth;
    const requiredMonthsPassed = requiredYear * 12 + requiredMonth;
    return monthsPassed - requiredMonthsPassed;
};

export function numberOfElementsOverflowing(
    containerHeight: number,
    numberOfEvents: number
) {
    if (
        typeof containerHeight !== 'number' ||
        typeof numberOfEvents !== 'number'
    ) {
        return 0;
    }

    const dateHeight = DATE_SIZE + GRID_GAP;
    const eventHeight = EVENT_HEIGHT + GRID_GAP;

    const spaceAvailableForEvents = containerHeight - dateHeight;
    const spaceTakenByEvents = numberOfEvents * eventHeight;

    if (spaceTakenByEvents > spaceAvailableForEvents) {
        const overflowBy = spaceTakenByEvents - spaceAvailableForEvents;
        return Math.ceil(overflowBy / eventHeight);
    }

    return 0;
}

export const getMonthLabel = (month: number) =>
    new Date(0, month).toLocaleString('default', { month: 'long' });
