import { DATE_SIZE, EVENT_HEIGHT, GRID_GAP } from './constants';

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
