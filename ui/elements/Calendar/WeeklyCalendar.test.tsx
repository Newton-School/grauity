import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
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
    it('renders the WeeklyCalendar component', () => {
        render(<WeeklyCalendar {...defaultProps} />);
        expect(
            screen.getByLabelText(/Weekly Calendar for the week starting from/i)
        ).toBeInTheDocument();
    });

    // Week Controls
    it('renders the week controls', () => {
        render(<WeeklyCalendar {...defaultProps} />);
        expect(
            screen.getAllByLabelText(/Go to week starting from/i)
        ).toHaveLength(2);
        expect(screen.getByText('Today')).toBeInTheDocument();
    });
    it('calls onWeekChange with -1 when "Previous" is clicked', () => {
        render(<WeeklyCalendar {...defaultProps} />);
        fireEvent.click(
            screen.getAllByLabelText(/Go to week starting from/i)[0]
        );
        expect(defaultProps.onWeekChange).toHaveBeenCalledWith(-1);
    });
    it('calls onWeekChange with 1 when "Next" is clicked', () => {
        render(<WeeklyCalendar {...defaultProps} />);
        fireEvent.click(
            screen.getAllByLabelText(/Go to week starting from/i)[1]
        );
        expect(defaultProps.onWeekChange).toHaveBeenCalledWith(1);
    });
    it('calls onWeekChange with 0 when "Today" is clicked', () => {
        render(<WeeklyCalendar {...defaultProps} />);
        fireEvent.click(screen.getByText('Today'));
        expect(defaultProps.onWeekChange).toHaveBeenCalledWith(0);
    });
});
