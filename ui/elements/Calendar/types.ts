import React from 'react';

export interface CalendarEventRequiredProps {
    start: Date;
    end: Date;
}

export type EventRendererFn<T> = (event: CalendarEvent<T>) => React.ReactNode;

export interface CalendarEvent<T = {}> {
    id?: string | number;
    title?: string;
    start: Date;
    end: Date;
    allDay?: boolean;
    render?: EventRendererFn<T>;
    focused?: boolean;
}
