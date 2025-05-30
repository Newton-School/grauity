import { TableColumn } from './types';

/**
 * Retrieves a specified property value from a table column within an array of columns.
 *
 * @param {Object} params - The parameters object.
 * @param {TableColumn[]} params.columns - An array of table columns.
 * @param {TableColumn['key']} params.columnKey - The unique key of the table column.
 * @param {keyof TableColumn} params.property - The property name to retrieve from the matched column.
 * @returns {TableColumn[keyof TableColumn] | undefined} The value of the requested property if found; otherwise, undefined.
 */
export const getColumnProperty = ({
    columns,
    columnKey,
    property,
}: {
    columns: TableColumn[];
    columnKey: TableColumn['key'];
    property: keyof TableColumn;
}): TableColumn[keyof TableColumn] | undefined => {
    if (!columns) {
        return undefined;
    }

    const column = columns.find((col) => col.key === columnKey);
    return column ? column[property] : undefined;
};
