import React from 'react';

export interface CalendarEventProps {
    title: string;
    chipContent?: string | number;
    start: Date;
    end: Date;
}

export interface StyledDivProps extends React.HTMLAttributes<HTMLDivElement> {
    ref?: React.Ref<HTMLDivElement>;
}
