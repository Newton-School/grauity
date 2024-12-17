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
    monthOffset: 0,
    onMonthChange: jest.fn(),
    loading: false,
    renderItem: null,
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

    it('calls onWeekChange with -1 when "Previous" is clicked', async () => {
        render(<MonthlyCalendar {...defaultProps} />);

        fireEvent.click(screen.getAllByLabelText(/Go to month/i)[0]);
        await waitFor(() => {
            expect(defaultProps.onMonthChange).toHaveBeenCalledWith(-1);
        });
    });

    it('calls onWeekChange with 1 when "Next" is clicked', async () => {
        render(<MonthlyCalendar {...defaultProps} />);
        fireEvent.click(screen.getAllByLabelText(/Go to month/i)[1]);
        await waitFor(() => {
            expect(defaultProps.onMonthChange).toHaveBeenCalledWith(1);
        });
    });

    it('calls onWeekChange with 0 when "Today" is clicked', async () => {
        render(<MonthlyCalendar {...defaultProps} />);
        fireEvent.click(screen.getByText('Today'));
        await waitFor(() => {
            expect(defaultProps.onMonthChange).toHaveBeenCalledWith(0);
        });
    });

    it('renders correctly with renderItem', async () => {
        render(
            <MonthlyCalendar
                {...defaultProps}
                renderItem={() => <div>Test RenderItem Call</div>}
                events={[
                    { title: 'Test Event', start: new Date(), end: new Date() },
                ]}
            />
        );
        expect(
            screen.getAllByText('Test RenderItem Call').length
        ).toBeGreaterThan(0);
    });
});
