import '@testing-library/jest-dom';

import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';

import MonthlyCalendar from './MonthlyCalendar';
import { MonthlyCalendarProps } from './types';

const renderEvent = (event: any) => (
    <div title={event.title} data-testid="event-title">{event.title}</div>
);

const defaultProps: MonthlyCalendarProps<any> = {
    events: [],
    eventRenderer: renderEvent,
    shouldShowMonthControls: true,
    date: new Date(),
    onDateChange: jest.fn(),
    loading: false,
    renderDayItem: null,
};

describe('MonthlyCalendar', () => {
    it('renders the MonthlyCalendar component', async () => {
        render(<MonthlyCalendar {...defaultProps} />);
        await waitFor(() => {
            expect(screen.getByText('Today')).toBeInTheDocument();
        });
    });

    it('renders controls disabled when loading is true', () => {
        render(<MonthlyCalendar {...defaultProps} loading />);
        expect(screen.getByText('Today').parentElement).toBeDisabled();
    });

    it('calls onDateChange when clicking next month', async () => {
        render(<MonthlyCalendar {...defaultProps} />);
        fireEvent.click(screen.getAllByLabelText(/Go to month/i)[0]);
        await waitFor(() => {
            expect(defaultProps.onDateChange).toHaveBeenCalled();
        });
    });

    it('calls onDateChange when clicking previous month', async () => {
        render(<MonthlyCalendar {...defaultProps} />);
        fireEvent.click(screen.getAllByLabelText(/Go to month/i)[1]);
        await waitFor(() => {
            expect(defaultProps.onDateChange).toHaveBeenCalled();
        });
    });

    it('calls onDateChange when clicking today', async () => {
        render(<MonthlyCalendar {...defaultProps} />);
        fireEvent.click(screen.getByText('Today'));
        await waitFor(() => {
            expect(defaultProps.onDateChange).toHaveBeenCalled();
        });
    });

    it('renders correctly with renderDayItem', () => {
        render(
            <MonthlyCalendar
                {...defaultProps}
                renderDayItem={() => <div>Test renderDayItem Call</div>}
                events={[{ title: 'Test Event', start: new Date(), end: new Date() }]}
            />
        );
        expect(screen.getAllByText('Test renderDayItem Call').length).toBeGreaterThan(0);
    });

    it('renders event with title as tooltip when using eventRenderer', async () => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const testEvent = {
            id: '1',
            title: 'Event with Tooltip',
            start: today,
            end: today,
        };

        render(
            <MonthlyCalendar
                {...defaultProps}
                events={[testEvent]}
                eventRenderer={renderEvent}
            />
        );

        const tooltipElement = await screen.findByTestId('event-title');
        expect(tooltipElement).toBeInTheDocument();
        expect(tooltipElement).toHaveAttribute('title', 'Event with Tooltip');
    });
});
