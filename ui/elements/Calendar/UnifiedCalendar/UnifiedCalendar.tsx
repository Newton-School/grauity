/* eslint-disable indent */
import React, { useEffect, useState } from 'react';

import Tooltip from '../../Tooltip/Tooltip';
import MonthlyCalendar from '../MonthlyCalendar';
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
                    eventRenderer={(item) => (
                        <Tooltip content={(item as unknown as { name: string }).name}>
                            <div className="truncate text-xs font-medium cursor-pointer">
                                {eventRenderer(item, 'monthly')}
                            </div>
                        </Tooltip>
                      )}
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
                    renderDayItem={
                        typeof monthlyCalendarProps?.renderDayItem === 'function'
                          ? (item) => (
                              <Tooltip content={(item as unknown as { name: string }).name}>
                                  <div className="truncate text-xs font-medium cursor-pointer">
                                      {monthlyCalendarProps.renderDayItem(item, 'monthly')}
                                  </div>
                              </Tooltip>
                            )
                          : null
                    }
                />
            );
        case 'weekly':
            return (
                <WeeklyCalendar
                    events={events}
                    eventRenderer={(item) => (
                        <Tooltip content={(item as unknown as { name: string }).name}>
                            <div className="truncate text-xs font-medium cursor-pointer">
                                {eventRenderer(item, 'weekly')}
                            </div>
                        </Tooltip>
                      )}
                    
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
