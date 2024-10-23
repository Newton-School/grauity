import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import RangeInput from './RangeInput';

describe('RangeInput Component', () => {
    // Rendering
    it('should render correctly', () => {
        render(<RangeInput />);
        expect(screen.getAllByRole('slider')).not.toHaveLength(0);
    });

    // Sliding the range input
    it('should call onChange when min value is changed', () => {
        const onChange = jest.fn();
        render(<RangeInput onChange={onChange} />);
        fireEvent.change(screen.getAllByRole('slider')[0], {
            target: { value: '10' },
        });
        expect(onChange).toHaveBeenCalledWith({ min: 10, max: 100 });
    });
    it('should call onChange when max value is changed', () => {
        const onChange = jest.fn();
        render(<RangeInput onChange={onChange} />);
        fireEvent.change(screen.getAllByRole('slider')[1], {
            target: { value: '90' },
        });
        expect(onChange).toHaveBeenCalledWith({ min: 0, max: 90 });
    });
    it('should call onChange when min and max values are changed', () => {
        const onChange = jest.fn();
        render(<RangeInput onChange={onChange} />);
        fireEvent.change(screen.getAllByRole('slider')[0], {
            target: { value: '10' },
        });
        fireEvent.change(screen.getAllByRole('slider')[1], {
            target: { value: '90' },
        });
        expect(onChange).toHaveBeenCalledWith({ min: 10, max: 90 });
    });

    // Sliding the min and max values to cross each other
    it('should call onChange when min and max values cross each other', () => {
        const onChange = jest.fn();
        render(<RangeInput onChange={onChange} />);
        fireEvent.change(screen.getAllByRole('slider')[0], {
            target: { value: '90' },
        });
        fireEvent.change(screen.getAllByRole('slider')[1], {
            target: { value: '10' },
        });
        expect(onChange).toHaveBeenCalledWith({ min: 10, max: 90 });
    });

    // Display the values
    it('should display the correct min and max values', () => {
        render(<RangeInput />);
        expect(screen.getByText('0')).toBeInTheDocument();
        expect(screen.getByText('100')).toBeInTheDocument();
    });
    it('should display the correct min and max values when min value is changed', () => {
        render(<RangeInput />);
        fireEvent.change(screen.getAllByRole('slider')[0], {
            target: { value: '10' },
        });
        expect(screen.getByText('10')).toBeInTheDocument();
        expect(screen.getByText('100')).toBeInTheDocument();
    });
    it('should display the correct min and max values when max value is changed', () => {
        render(<RangeInput />);
        fireEvent.change(screen.getAllByRole('slider')[1], {
            target: { value: '90' },
        });
        expect(screen.getByText('0')).toBeInTheDocument();
        expect(screen.getByText('90')).toBeInTheDocument();
    });
});
