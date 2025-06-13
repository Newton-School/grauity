import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import React from 'react';

import MonthlyCalendarEvent from './MonthlyCalendarEvent';

describe('MonthlyCalendarEvent Component', () => {
    it('renders without crashing', () => {
        render(
            <MonthlyCalendarEvent
                eventTitle="Event Title"
                eventTime={new Date(2024, 9, 25, 10, 0)}
            />
        );
        expect(screen.getByText('Event Title')).toBeInTheDocument();
        expect(screen.getByText('10:00 AM')).toBeInTheDocument();
    });

    it('shows tooltip on hover via title attribute', async () => {
        render(
            <MonthlyCalendarEvent
                eventTitle="Event with Tooltip"
                eventTime={new Date(2024, 9, 25, 12, 0)}
            />
        );

        const titleElement = screen.getByText('Event with Tooltip');
        expect(titleElement).toHaveAttribute('title', 'Event with Tooltip');
        expect(titleElement).toHaveAttribute('aria-label', 'Event with Tooltip');
    });
});
