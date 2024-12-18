import { CalendarEvent } from '../types';
import { CalendarEventExtended } from './types';

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

export async function getOverlapInformationForDay<T>(
    events: CalendarEvent<T>[]
): Promise<CalendarEventExtended<T>[]> {
    events.sort((a, b) => a.start.getTime() - b.start.getTime());

    const eventsWithOverlap: CalendarEventExtended<T>[] = events.map(
        (event) => ({
            ...event,
            overlap: 1,
            index: 0,
        })
    );
    const eventsInQueue: Record<number, boolean> = {};

    let counter = 0;
    let minIndex = 0;

    eventsWithOverlap.forEach((event, index) => {
        // Check for ended events
        Object.keys(eventsInQueue).forEach((key) => {
            const keyInt = parseInt(key, 10);
            const eventInQueue = eventsWithOverlap[keyInt];
            if (event.start.getTime() >= eventInQueue.end.getTime()) {
                delete eventsInQueue[keyInt];
                counter -= 1;
                minIndex = Math.min(minIndex, eventInQueue.index);
            }
        });

        eventsInQueue[index] = true;
        counter += 1;

        eventsWithOverlap[index].overlap = counter;
        eventsWithOverlap[index].index = minIndex;
        minIndex += 1;

        Object.keys(eventsInQueue).forEach((key) => {
            const keyInt = parseInt(key, 10);
            const eventInQueue = eventsWithOverlap[keyInt];
            eventInQueue.overlap = Math.max(eventInQueue.overlap, counter);
        });
    });

    return eventsWithOverlap;
}

export const isPlaceholderBlock = (date: Date, hourIndex: number) => {
    const day = date.getDay();
    if (day === 1) {
        return (hourIndex + 1) % 4 === 0;
    }
    if (day === 3) {
        return hourIndex % 4 === 0;
    }
    if (day === 5) {
        return (hourIndex + 2) % 4 === 0;
    }
    return false;
};
