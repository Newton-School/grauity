/* eslint-disable indent */
import { useEffect, useState } from 'react';

import { getScrollableParent } from '../../../common/utils';
import { CALENDAR_BLOCK_HEIGHT } from './constants';
import { StickyEventLineProps, StickyEventLineRecord } from './types';

export const useCalculateStickyEventLines = (
    props: StickyEventLineProps
): [StickyEventLineRecord, StickyEventLineRecord, number, number] => {
    const { events = {}, calendarHeaderRef } = props;

    const [topStickyLinesCount, setTopStickyLinesCount] =
        useState<StickyEventLineRecord>({});
    const [bottomStickyLinesCount, setBottomStickyLinesCount] =
        useState<StickyEventLineRecord>({});
    const [topPosition, setTopPosition] = useState(0);
    const [bottomPosition, setBottomPosition] = useState(0);

    const calculateStickyEventLines = () => {
        const header = calendarHeaderRef.current;
        if (!header) {
            return;
        }

        const scrollableParent = getScrollableParent(header);
        const scrollableParentTop =
            scrollableParent === window
                ? window.scrollY
                : (scrollableParent as HTMLElement).getBoundingClientRect().top;
        const scrollableParentBottom =
            scrollableParent === window
                ? window.innerHeight + window.scrollY
                : (scrollableParent as HTMLElement).getBoundingClientRect()
                      .bottom;

        const visibleTop = header.getBoundingClientRect().bottom;
        const visibleBottom = Math.min(
            window.innerHeight,
            scrollableParentBottom
        );

        const topLinesByDate: StickyEventLineRecord = {};
        const bottomLinesByDate: StickyEventLineRecord = {};

        Object.keys(events).forEach((date: string) => {
            let topStickyLines = 0;
            let bottomStickyLines = 0;

            const dateEvents = events[parseInt(date, 10)];

            dateEvents.forEach((event) => {
                const eventStart = event.start;
                const eventEnd = event.end;

                const eventTop =
                    visibleTop +
                    CALENDAR_BLOCK_HEIGHT *
                        (eventStart.getHours() + eventStart.getMinutes() / 60) -
                    scrollableParentTop;
                const eventBottom =
                    visibleTop +
                    CALENDAR_BLOCK_HEIGHT *
                        (eventEnd.getHours() + eventEnd.getMinutes() / 60) -
                    scrollableParentTop;

                if (eventBottom <= visibleTop) {
                    topStickyLines += 1;
                }
                if (eventTop >= visibleBottom) {
                    bottomStickyLines += 1;
                }
            });

            topLinesByDate[date] = topStickyLines;
            bottomLinesByDate[date] = bottomStickyLines;
        });

        setTopStickyLinesCount(topLinesByDate);
        setBottomStickyLinesCount(bottomLinesByDate);
        setTopPosition(visibleTop);
        setBottomPosition(visibleBottom);
    };

    useEffect(() => {
        if (!events) {
            return () => {};
        }
        calculateStickyEventLines();
        window.addEventListener('scroll', calculateStickyEventLines);
        return () => {
            window.removeEventListener('scroll', calculateStickyEventLines);
        };
    }, [events]);

    return [
        topStickyLinesCount,
        bottomStickyLinesCount,
        topPosition,
        bottomPosition,
    ];
};
