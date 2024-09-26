import '@testing-library/jest-dom';

import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';

import { WeeklyCalendarProps } from './types';
import WeeklyCalendar from './WeeklyCalendar';

const renderEvent = (event: any) => <div>{event.title}</div>;

const defaultProps: WeeklyCalendarProps<any> = {
    events: [],
    eventRenderer: renderEvent,
    shouldShowWeekControls: true,
    weekOffset: 0,
    onWeekChange: jest.fn(),
};

describe('WeeklyCalendar', () => {
    window.scrollTo = jest.fn();
    it('renders the WeeklyCalendar component', async () => {
        render(<WeeklyCalendar {...defaultProps} />);
        await waitFor(() => {
            expect(
                screen.getByLabelText(
                    /Weekly Calendar for the week starting from/i
                )
            ).toBeInTheDocument();
        });
    });

    // Week Controls
    it('renders the week controls', async () => {
        render(<WeeklyCalendar {...defaultProps} />);
        await waitFor(() => {
            expect(
                screen.getAllByLabelText(/Go to week starting from/i)
            ).toHaveLength(2);
            expect(screen.getByText('Today')).toBeInTheDocument();
        });
    });
    it('calls onWeekChange with -1 when "Previous" is clicked', async () => {
        render(<WeeklyCalendar {...defaultProps} />);
        fireEvent.click(
            screen.getAllByLabelText(/Go to week starting from/i)[0]
        );
        await waitFor(() => {
            expect(defaultProps.onWeekChange).toHaveBeenCalledWith(-1);
        });
    });
    it('calls onWeekChange with 1 when "Next" is clicked', async () => {
        render(<WeeklyCalendar {...defaultProps} />);
        fireEvent.click(
            screen.getAllByLabelText(/Go to week starting from/i)[1]
        );
        await waitFor(() => {
            expect(defaultProps.onWeekChange).toHaveBeenCalledWith(1);
        });
    });
    it('calls onWeekChange with 0 when "Today" is clicked', async () => {
        render(<WeeklyCalendar {...defaultProps} />);
        fireEvent.click(screen.getByText('Today'));
        await waitFor(() => {
            expect(defaultProps.onWeekChange).toHaveBeenCalledWith(0);
        });
    });
});
