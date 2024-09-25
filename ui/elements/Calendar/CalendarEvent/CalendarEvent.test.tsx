import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import CalendarEvent from './CalendarEvent';

describe('CalendarEvent Component', () => {
    // Rendering
    it('renders without crashing', () => {
        render(
            <CalendarEvent
                title="Event Title"
                start={new Date(2024, 9, 25, 10, 0)}
                end={new Date(2024, 9, 25, 12, 0)}
            />
        );
        expect(screen.getByRole('button')).toBeInTheDocument();
    });
    it('displays title', () => {
        render(
            <CalendarEvent
                title="Event Title"
                start={new Date(2024, 9, 25, 10, 0)}
                end={new Date(2024, 9, 25, 12, 0)}
            />
        );
        expect(screen.getByText('Event Title')).toBeInTheDocument();
    });

    // Chip
    it('displays chip content', () => {
        render(
            <CalendarEvent
                title="Event Title"
                chipContent="123"
                start={new Date(2024, 9, 25, 10, 0)}
                end={new Date(2024, 9, 25, 12, 0)}
            />
        );
        expect(screen.getByText('123')).toBeInTheDocument();
    });
    it('does not display chip content when not provided', () => {
        render(
            <CalendarEvent
                title="Event Title"
                start={new Date(2024, 9, 25, 10, 0)}
                end={new Date(2024, 9, 25, 12, 0)}
            />
        );
        expect(screen.queryByText('123')).not.toBeInTheDocument();
    });

    // Time Range
    it('displays time range', () => {
        render(
            <CalendarEvent
                title="Event Title"
                start={new Date(2024, 9, 25, 10, 0)}
                end={new Date(2024, 9, 25, 12, 0)}
            />
        );
        expect(screen.getByText('10:00 AM - 12:00 PM')).toBeInTheDocument();
    });

    // Default minDurationToDisplayTime
    it('does not display time range when duration is less than default minDurationToDisplayTime', () => {
        render(
            <CalendarEvent
                title="Event Title"
                start={new Date(2024, 9, 25, 10, 0)}
                end={new Date(2024, 9, 25, 10, 30)}
            />
        );
        expect(
            screen.queryByText('10:00 AM - 10:30 AM')
        ).not.toBeInTheDocument();
    });
    it('displays time range when duration is equal to default minDurationToDisplayTime', () => {
        render(
            <CalendarEvent
                title="Event Title"
                start={new Date(2024, 9, 25, 10, 0)}
                end={new Date(2024, 9, 25, 11, 0)}
            />
        );
        expect(screen.getByText('10:00 AM - 11:00 AM')).toBeInTheDocument();
    });

    // Custom minDurationToDisplayTime
    it('displays time range when duration is greater than given minDurationToDisplayTime', () => {
        render(
            <CalendarEvent
                title="Event Title"
                start={new Date(2024, 9, 25, 10, 0)}
                end={new Date(2024, 9, 25, 10, 30)}
                minDurationToDisplayTime={0.25 * 60 * 60 * 1000}
            />
        );
        expect(screen.getByText('10:00 AM - 10:30 AM')).toBeInTheDocument();
    });
    it('does not display time range when duration is less than given minDurationToDisplayTime', () => {
        render(
            <CalendarEvent
                title="Event Title"
                start={new Date(2024, 9, 25, 10, 0)}
                end={new Date(2024, 9, 25, 10, 15)}
                minDurationToDisplayTime={0.5 * 60 * 60 * 1000}
            />
        );
        expect(
            screen.queryByText('10:00 AM - 10:15 AM')
        ).not.toBeInTheDocument();
    });
    it('displays time range when duration is equal to given minDurationToDisplayTime', () => {
        render(
            <CalendarEvent
                title="Event Title"
                start={new Date(2024, 9, 25, 10, 0)}
                end={new Date(2024, 9, 25, 10, 15)}
                minDurationToDisplayTime={0.25 * 60 * 60 * 1000}
            />
        );
        expect(screen.getByText('10:00 AM - 10:15 AM')).toBeInTheDocument();
    });

    // onClick Callback
    it('calls onClick when clicked', () => {
        const handleClick = jest.fn();
        render(
            <CalendarEvent
                title="Event Title"
                start={new Date(2024, 9, 25, 10, 0)}
                end={new Date(2024, 9, 25, 12, 0)}
                onClick={handleClick}
            />
        );
        fireEvent.click(screen.getByRole('button'));
        expect(handleClick).toHaveBeenCalled();
    });
});
