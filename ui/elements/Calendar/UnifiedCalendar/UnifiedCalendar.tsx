/* eslint-disable indent */
import React, { useEffect, useState } from 'react';

import Tooltip from '../../Tooltip/Tooltip';
import { withTooltip } from '../../Tooltip/utils/withTooltip';
import MonthlyCalendar from '../MonthlyCalendar';
import { CalendarEvent } from '../types';
import { getMonthLabel } from '../utils';
import WeeklyCalendar from '../WeeklyCalendar';
import Header from './Header';
import { UnifiedCalendarProps } from './types';
import { getEpochDiffForDateChange } from './utils';

function UnifiedCalendar(props: UnifiedCalendarProps<any>) {
    const {
        events = [],
        eventRenderer = () => null,
        view = 'weekly',
        onViewChange = () => {},
        shouldShowControls = true,
        header = null,
        date = new Date(),
        onDateChange = () => {},
        loading = false,
        weeklyCalendarProps = {},
        monthlyCalendarProps = {},
    } = props;

    const rawRenderDayItem = monthlyCalendarProps?.renderDayItem;
    const adaptedRenderDayItem = rawRenderDayItem
        ? (item: CalendarEvent<any>) =>
              withTooltip(item, () => rawRenderDayItem(item, 'monthly'))
        : undefined;

    const [viewType, setViewType] = useState(view);
    const [currentDate, setCurrentDate] = useState(date);

    useEffect(() => {
        onViewChange(viewType);
    }, [viewType]);

    useEffect(() => {
        onDateChange(date);
    }, [currentDate]);

    useEffect(() => {
        if (date.valueOf() !== currentDate.valueOf()) {
            setCurrentDate(date);
        }
    }, [date]);

    useEffect(() => {
        setViewType(view);
    }, [view]);

    switch (viewType) {
        case 'monthly':
            return (
                <MonthlyCalendar
                    events={events}
                    eventRenderer={(item) =>
                        withTooltip(item, (i) => eventRenderer(i, 'monthly'))
                    }
                    shouldShowMonthControls={false}
                    header={
                        <>
                            {header}
                            {shouldShowControls ? (
                                <Header
                                    loading={loading}
                                    date={currentDate}
                                    initialActiveTab={0}
                                    epochDiffForDateChange={getEpochDiffForDateChange(
                                        currentDate,
                                        'monthly'
                                    )}
                                    setDate={setCurrentDate}
                                    onViewChange={(currentView) => {
                                        setViewType(currentView);
                                    }}
                                    label={`monthly ${getMonthLabel(
                                        currentDate
                                    )} ${currentDate.getFullYear()}`}
                                />
                            ) : null}
                        </>
                    }
                    date={currentDate}
                    onDateChange={setCurrentDate}
                    loading={loading}
                    {...monthlyCalendarProps}
                    renderDayItem={adaptedRenderDayItem}
                />
            );
        case 'weekly':
            return (
                <WeeklyCalendar
                    events={events}
                    eventRenderer={(item) =>
                        withTooltip(item, (i) => eventRenderer(i, 'weekly'))
                    }
                    shouldShowWeekControls={false}
                    header={
                        <>
                            {header}
                            {shouldShowControls ? (
                                <Header
                                    loading={loading}
                                    date={currentDate}
                                    initialActiveTab={1}
                                    epochDiffForDateChange={getEpochDiffForDateChange(
                                        currentDate,
                                        'weekly'
                                    )}
                                    setDate={setCurrentDate}
                                    onViewChange={(currentView) => {
                                        setViewType(currentView);
                                    }}
                                    label={`weekly ${getMonthLabel(
                                        currentDate
                                    )} ${currentDate.getFullYear()}`}
                                />
                            ) : null}
                        </>
                    }
                    date={currentDate}
                    onDateChange={setCurrentDate}
                    loading={loading}
                    {...weeklyCalendarProps}
                />
            );
        default:
            return null;
    }
}

export default UnifiedCalendar;
export { UnifiedCalendarProps };
