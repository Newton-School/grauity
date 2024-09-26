import React from 'react';

export interface CalendarEventProps {
    /**
     * The title of the calendar event.
     */
    title: string;

    /**
     * Optional content to be displayed on a chip within the event.
     * If not provided, the chip will not be displayed.
     */
    chipContent?: string;

    /**
     * The start date and time of the event.
     */
    start: Date;

    /**
     * The end date and time of the event.
     */
    end: Date;

    /**
     * Optional click handler for the event.
     */
    onClick?: () => void;

    /**
     * Indicates whether the event is focused.
     */
    focused?: boolean;

    /**
     * Minimum duration (in milliseconds) required to display the event time.
     */
    minDurationToDisplayTime?: number;

    /**
     * Text color of the event.
     * @default 'var(--text-action2)'
     */
    textColor?: string;

    /**
     * Background color of the event.
     * @default 'var(--bg-action-brand)'
     */
    backgroundColor?: string;

    /**
     * Border color of the event.
     * @default 'var(--border)'
     */
    borderColor?: string;

    /**
     * Text color of the chip content.
     * @default 'var(--text-action2)'
     */
    chipTextColor?: string;

    /**
     * Background color of the chip content.
     * @default 'var(--color-brand-600)'
     */
    chipBackgroundColor?: string;
}

export interface StyledDivProps extends React.HTMLAttributes<HTMLDivElement> {
    ref?: React.Ref<HTMLDivElement>;
}

export interface StyledCalendarEventWrapperProps extends StyledDivProps {
    $textColor?: string;
    $backgroundColor?: string;
    $borderColor?: string;
    $focused?: boolean;
    $smallEvent?: boolean;
    $extraSmallEvent?: boolean;
}
