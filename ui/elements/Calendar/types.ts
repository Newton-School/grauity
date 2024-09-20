import React from 'react';

export interface WeeklyCalendarProps {}

export interface StyledDivProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface StyledCalendarBlockProps extends StyledDivProps {
    $active?: boolean;
}

export interface StyledCalendarTimelineBlockProps extends StyledDivProps {
    text?: string;
}
