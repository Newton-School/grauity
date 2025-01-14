import React from 'react';

import Button, { IconButton } from '../Button';
import { StyledPagination, StyledPaginationPages } from './Pagination.styles';
import { PaginationProps } from './types';

const Pagination = (props: PaginationProps) => {
    const {
        totalPageCount = 0,
        defaultCurrentPage = 1,
        onPageChange,
        size = 'small',
        justifyContent = 'space-between',
        buttonVariant = 'tertiary',
        activeButtonVariant = 'secondary',
        controlButtonVariant = 'tertiary',
        className = '',
    } = props;

    const [currentPage, setCurrentPage] = React.useState(defaultCurrentPage);

    const handlePageChange = (pageNumber: number) => {
        onPageChange(pageNumber);
        setCurrentPage(pageNumber);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPageCount) {
            onPageChange(currentPage + 1);
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    const renderPaginationItems = () => {
        const maxDisplayedPages = 4;

        if (totalPageCount <= maxDisplayedPages) {
            return Array.from({ length: totalPageCount }).map((_, index) => (
                <Button
                    variant={
                        index + 1 === currentPage
                            ? activeButtonVariant
                            : buttonVariant
                    }
                    onClick={() => handlePageChange(index + 1)}
                    size={size}
                >
                    {index + 1}
                </Button>
            ));
        }

        let firstPage;
        let lastPage;
        const showEllipsisBefore = currentPage > 3;
        const showEllipsisAfter = currentPage < totalPageCount - 2;

        if (showEllipsisBefore && showEllipsisAfter) {
            firstPage = currentPage - 1;
            lastPage = currentPage + 1;
        } else if (showEllipsisBefore) {
            firstPage = currentPage - 2;
            lastPage = currentPage + 1;
        } else if (showEllipsisAfter) {
            firstPage = currentPage - 1;
            lastPage = currentPage + 2;
        } else {
            firstPage = currentPage - 2;
            lastPage = currentPage + 2;
        }

        const paginationItems = [];

        if (showEllipsisBefore) {
            paginationItems.push(
                <Button
                    key={1}
                    variant={
                        currentPage === 1 ? activeButtonVariant : buttonVariant
                    }
                    onClick={() => handlePageChange(1)}
                    size={size}
                >
                    1
                </Button>
            );
            paginationItems.push(
                <IconButton
                    key="ellipsis-prev"
                    variant="tertiary-outlined"
                    icon="kebab-horizontal"
                    size={size}
                />
            );
        }

        for (let i = firstPage; i <= lastPage; i += 1) {
            if (i >= 1 && i <= totalPageCount) {
                paginationItems.push(
                    <Button
                        key={i}
                        variant={
                            i === currentPage
                                ? activeButtonVariant
                                : buttonVariant
                        }
                        onClick={() => handlePageChange(i)}
                        size={size}
                    >
                        {i}
                    </Button>
                );
            }
        }

        if (showEllipsisAfter) {
            paginationItems.push(
                <IconButton
                    key="ellipsis-after"
                    variant="tertiary-outlined"
                    icon="kebab-horizontal"
                    size={size}
                />
            );
            paginationItems.push(
                <Button
                    key={totalPageCount}
                    variant={
                        totalPageCount === currentPage
                            ? activeButtonVariant
                            : buttonVariant
                    }
                    onClick={() => handlePageChange(totalPageCount)}
                    size={size}
                >
                    {totalPageCount}
                </Button>
            );
        }

        return paginationItems;
    };

    if (totalPageCount <= 1) {
        return null;
    }

    return (
        <StyledPagination
            $justifyContent={justifyContent}
            className={className}
        >
            <Button
                variant={controlButtonVariant}
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                icon="chevron-left"
                size={size}
                data-testid="data-testid-pagination-prev"
            >
                <span className="pagination-button-text">Previous</span>
            </Button>
            <StyledPaginationPages>
                {renderPaginationItems()}
            </StyledPaginationPages>
            <Button
                variant={controlButtonVariant}
                onClick={handleNextPage}
                disabled={currentPage === totalPageCount}
                icon="chevron-right"
                iconPosition="right"
                size={size}
                data-testid="data-testid-pagination-next"
            >
                <span className="pagination-button-text">Next</span>
            </Button>
        </StyledPagination>
    );
};

export default Pagination;
