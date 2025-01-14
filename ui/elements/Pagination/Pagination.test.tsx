import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import Pagination from './Pagination';
import { PaginationProps } from './types';

describe('Pagination Component', () => {
    const defaultProps: PaginationProps = {
        totalPageCount: 5,
        defaultCurrentPage: 1,
        onPageChange: jest.fn(),
    };

    it('renders without crashing', () => {
        render(<Pagination {...defaultProps} />);
        expect(screen.getByText('1')).toBeInTheDocument();
    });

    it('calls onPageChange when a page number is clicked', () => {
        render(<Pagination {...defaultProps} />);
        fireEvent.click(screen.getByText('2'));
        expect(defaultProps.onPageChange).toHaveBeenCalledWith(2);
    });

    it('disables the previous button on the first page', () => {
        render(<Pagination {...defaultProps} />);
        expect(
            screen.getByTestId('data-testid-pagination-prev')
        ).toBeDisabled();
    });

    it('disables the next button on the last page', () => {
        render(<Pagination {...defaultProps} defaultCurrentPage={5} />);
        expect(
            screen.getByTestId('data-testid-pagination-next')
        ).toBeDisabled();
    });

    it('calls onPageChange when the next button is clicked', () => {
        render(<Pagination {...defaultProps} />);
        fireEvent.click(screen.getByText('Next'));
        expect(defaultProps.onPageChange).toHaveBeenCalledWith(2);
    });

    it('calls onPageChange when the previous button is clicked', () => {
        render(<Pagination {...defaultProps} defaultCurrentPage={2} />);
        fireEvent.click(screen.getByText('Previous'));
        expect(defaultProps.onPageChange).toHaveBeenCalledWith(1);
    });

    it('renders ellipsis when there are more than 4 pages', () => {
        render(<Pagination {...defaultProps} totalPageCount={10} />);
        expect(screen.getAllByTestId('testid-iconbutton')).toHaveLength(1);
    });

    it('renders the correct number of page buttons', () => {
        render(<Pagination {...defaultProps} totalPageCount={3} />);
        expect(screen.getAllByRole('button')).toHaveLength(5); // 3 page buttons + 2 control buttons
    });
});
