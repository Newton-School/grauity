import React, { ReactNode } from 'react';
import { grauityIconName } from '../../core';

export interface TableColumn {
    /**
     * Column key
     * */
    key: string;

    /**
     * Column display name
     * */
    display: string;

    /**
     * Column width
     * */
    width?: string;

    /**
     * Column alignment, default is center
     * */
    align?: 'left' | 'right' | 'center';

    /**
     * Row span, default is 1
     * */
    rowSpan?: number;

    /**
     * Col span, default is 1
     * */
    colSpan?: number;
}

export interface TableCell {
    /**
     * Cell key
     * */
    key: string;

    /**
     * Cell display, can be a string or a React element
     * */
    display?: any;

    /**
     * Custom cell render function. If provided, display will be ignored
     * */
    render?: (args: TableCell) => ReactNode;

    /**
     * Row vertical alignment, default is top
     * */
    valign?: 'top' | 'bottom' | 'center';

    /**
     * Row span, default is 1
     * */
    rowSpan?: number;

    /**
     * Col span, default is 1
     * */
    colSpan?: number;

    /**
     * Row actions (rendered as buttons by default)
     * */
    actions?: TableCellAction[];

    /**
     * Row alignment
     * */
    align?: 'left' | 'right' | 'center';
}

export interface TableCellAction {
    /**
     * Action key
     * */
    key: string;

    /**
     * Action display, can be a string or a React element
     * */
    display: any;

    /**
     * Action icon
     * */
    icon?: grauityIconName;

    /**
     * Action type, can be a button or a link, default is button
     * */
    as?: 'button' | 'link';

    /**
     * Action href, only used if the action type is link
     * */
    href?: string;

    /**
     * Action click handler
     * */
    handleClick?: (data: any) => void;
}

export interface TableRow {
    /**
     * Row key
     * */
    key: string;

    /**
     * Row cells
     * */
    cells: TableCell[];
}

export interface TableColumnRow {
    /**
     * Row key
     * */
    key: string;

    /**
     * Row cells
     * */
    cells: TableColumn[];
}

export interface TableConfig {
    /**
     * Column rows configuration, use atleast one column row
     * */
    columnRows: TableColumnRow[];

    /**
     * Rows configuration
     * */
    rows: TableRow[];
}

export interface TableProps {
    /**
     * Table configuration
     * */
    config: TableConfig;

    /**
     * Determines if the table is condensed (Reduced padding).
     * Available choices: true, false
     *
     * Default: `true`
     * */
    condensed?: boolean;

    /**
     * Are alternate rows striped (shaded).
     * Available choices: true, false
     *
     * Default: `false`
     * */
    striped?: boolean;

    /**
     * Determines if the table has a border around it.
     * Available choices: true, false
     *
     * Default: `true`
     * */
    borderAround?: boolean;

    /**
     * Determines if the table has a border between rows.
     * Available choices: true, false
     *
     * Default: `true`
     * */
    borderWithin?: boolean;

    /**
     * Additional classes to be added to the component.
     * */
    className?: string;

    /**
     * Show that the table is loading
     *
     * Default: `false`
     * */
    loading?: boolean;

    /**
     * Additional styles to be used over the element
     *
     * Default: `{}`
     * */
    style?: React.CSSProperties;

    /**
     * Capitalize the header
     *
     * Default: `true`
     * */
    capitalizeHeaders?: boolean;
}

// Interface for NSTableWrapper component props
export interface TableComponentProps {
    borderAround?: boolean;
    borderWithin?: boolean;
    striped?: boolean;
    children: ReactNode;
}

// Interface for NSTableHead component props
export interface TableHeadComponentProps {
    capitalizeHeaders?: boolean;
    children: ReactNode;
}

// Interface for NSTableBody component props
export interface TableBodyComponentProps {
    children: ReactNode;
}

// Interface for NSTableRow component props
export interface TableRowComponentProps {
    key?: string;
    condensed?: boolean;
    children: ReactNode;
}

// Interface for NSTableDataCell component props
export interface TableDataCellComponentProps {
    key?: string;
    align?: string;
    flexAlign?: string;
    colSpan?: number;
    rowSpan?: number;
    children: ReactNode;
}

// Interface for NSTableHeadingCell component props
export interface TableHeadingCellComponentProps {
    key?: string;
    align?: string;
    width?: string;
    flexAlign?: string;
    colSpan?: number;
    rowSpan?: number;
    children: ReactNode;
}
