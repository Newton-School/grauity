import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import React from 'react';

import MonthlyCalendarEvent from './MonthlyCalendarEvent';

describe('MonthlyCalendarEvent Component', () => {
    // Rendering
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

    
});
