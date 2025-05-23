import '@testing-library/jest-dom';

import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';

import UnifiedCalendar, { UnifiedCalendarProps } from './UnifiedCalendar';

beforeAll(() => {
    window.scrollTo = jest.fn();
});

const renderEvent = (event: any) => <div>{event.title}</div>;

const defaultProps: UnifiedCalendarProps<any> = {
    events: [],
    eventRenderer: renderEvent,
    shouldShowControls: true,
    date: new Date(),
    onDateChange: jest.fn(),
    loading: false,
    onViewChange: jest.fn(),
};

describe('UnifiedCalendar', () => {
    it('renders UnifiedCalendar without crashing', async () => {
        render(<UnifiedCalendar {...defaultProps} />);
        await waitFor(() => {
            expect(screen.getByText('Today')).toBeInTheDocument();
        });
    });

    it('renders WeeklyCalendar when default view is weekly', async () => {
        render(<UnifiedCalendar {...defaultProps} view="weekly" />);
        await waitFor(() => {
            expect(
                screen.getByLabelText(
                    /Weekly Calendar for the week starting from/i
                )
            ).toBeInTheDocument();
        });
    });

    it('renders MonthlyCalendar when default view is monthly', async () => {
        render(<UnifiedCalendar {...defaultProps} view="monthly" />);
        await waitFor(() => {
            expect(
                screen.getByLabelText(/Monthly Calendar for the month/i)
            ).toBeInTheDocument();
        });
    });

    it('switch from monthlyCalendar to weeklyCalendar when clicked switch', async () => {
        render(<UnifiedCalendar {...defaultProps} view="monthly" />);
        await waitFor(() => {
            const weeklyButton = screen.getByText('weekly');
            expect(weeklyButton).toBeInTheDocument();
            fireEvent.click(weeklyButton);
            expect(defaultProps.onViewChange).toHaveBeenCalledWith('weekly');
        });
    });

    it('switch from weeklyCalendar to monthlyCalenda when clicked switch', async () => {
        render(<UnifiedCalendar {...defaultProps} view="weekly" />);
        await waitFor(() => {
            const weeklyButton = screen.getByText('monthly');
            expect(weeklyButton).toBeInTheDocument();
            fireEvent.click(weeklyButton);
            expect(defaultProps.onViewChange).toHaveBeenCalledWith('monthly');
        });
    });

    it('shows tooltip on event hover in monthly view', async () => {
        const testEvent = {
            id: '1',
            name: 'Unified Calendar Event',
            start: new Date(),
            end: new Date(),
        };
    
        const eventRenderer = (event: any) => (
            <div title={event.name} data-testid="event-title">
                {event.name}
            </div>
        );
    
        render(
            <UnifiedCalendar
                view="monthly"
                date={new Date()}
                events={[testEvent]}
                eventRenderer={(event) => eventRenderer(event)}
            />
        );
    
        const eventElement = await screen.findByTestId('event-title');
        expect(eventElement).toBeInTheDocument();
        expect(eventElement).toHaveAttribute('title', 'Unified Calendar Event');
    });
});
