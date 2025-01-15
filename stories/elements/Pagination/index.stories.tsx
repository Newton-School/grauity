/* eslint-disable no-console */
import React from 'react';
import { NSPagination, PaginationProps } from 'ui/index';

export default {
    title: 'Elements/Pagination',
    component: NSPagination,
};

const Template = (args: PaginationProps) => {
    const [currentPage, setCurrentPage] = React.useState(1);

    const onPageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        console.log(
            `Current page changed from ${currentPage} to ${pageNumber}`
        );
    };

    return <NSPagination {...args} onPageChange={onPageChange} />;
};

export const Default = Template.bind({});
Default.args = {
    size: 'small',
    justifyContent: 'space-between',
    totalPageCount: 20,
    defaultCurrentPage: 1,
    className: 'custom-pagination-class',
};
