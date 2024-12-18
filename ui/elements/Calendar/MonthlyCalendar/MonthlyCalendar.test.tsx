import '@testing-library/jest-dom';

import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';

import MonthlyCalendar from './MonthlyCalendar';
import { MonthlyCalendarProps } from './types';

const renderEvent = (event: any) => <div>{event.title}</div>;

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

    it('renders controls disabled when loading is true', async () => {
        render(
            <MonthlyCalendar
                {...defaultProps}
                loading
                shouldShowMonthControls
            />
        );
        expect(screen.getByText('Today').parentElement).toBeDisabled();
    });

    it('should call onDateChange when clicking on the next month button', async () => {
        render(<MonthlyCalendar {...defaultProps} />);
        fireEvent.click(screen.getAllByLabelText(/Go to month/i)[0]);
        await waitFor(() => {
            expect(defaultProps.onDateChange).toHaveBeenCalled();
        });
    });
    it('should call onDateChange when clicking on the previous month button', async () => {
        render(<MonthlyCalendar {...defaultProps} />);
        fireEvent.click(screen.getAllByLabelText(/Go to month/i)[1]);
        await waitFor(() => {
            expect(defaultProps.onDateChange).toHaveBeenCalled();
        });
    });
    it('should call onDateChange when clicking on the today button', async () => {
        render(<MonthlyCalendar {...defaultProps} />);
        fireEvent.click(screen.getByText('Today'));
        await waitFor(() => {
            expect(defaultProps.onDateChange).toHaveBeenCalled();
        });
    });

    it('renders correctly with renderDayItem', async () => {
        render(
            <MonthlyCalendar
                {...defaultProps}
                renderDayItem={() => <div>Test renderDayItem Call</div>}
                events={[
                    { title: 'Test Event', start: new Date(), end: new Date() },
                ]}
            />
        );
        expect(
            screen.getAllByText('Test renderDayItem Call').length
        ).toBeGreaterThan(0);
    });
});
