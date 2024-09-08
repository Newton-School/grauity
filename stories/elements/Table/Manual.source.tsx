import React from 'react';
import Table, {
    TableProps,
} from 'ui/elements/Table';

export const Template = (args: TableProps) => (
    <Table.Table
        borderAround={args?.borderAround}
        borderWithin={args?.borderWithin}
        striped={args?.striped}
    >
        <Table.TableHead capitalizeHeaders={args?.capitalizeHeaders}>
            <Table.TableRow condensed={args?.condensed}>
                <Table.TableHeadingCell>Column 1</Table.TableHeadingCell>
                <Table.TableHeadingCell>Column 2</Table.TableHeadingCell>
                <Table.TableHeadingCell>Column 3</Table.TableHeadingCell>
            </Table.TableRow>
        </Table.TableHead>

        <Table.TableBody>
            <Table.TableRow condensed={args?.condensed}>
                <Table.TableDataCell>Row 1, Cell 1</Table.TableDataCell>
                <Table.TableDataCell>Row 1, Cell 2</Table.TableDataCell>
                <Table.TableDataCell>Row 1, Cell 3</Table.TableDataCell>
            </Table.TableRow>
            <Table.TableRow condensed={args?.condensed}>
                <Table.TableDataCell>Row 2, Cell 1</Table.TableDataCell>
                <Table.TableDataCell>Row 2, Cell 2</Table.TableDataCell>
                <Table.TableDataCell>Row 2, Cell 3</Table.TableDataCell>
            </Table.TableRow>
            <Table.TableRow condensed={args?.condensed}>
                <Table.TableDataCell>Row 3, Cell 1</Table.TableDataCell>
                <Table.TableDataCell>Row 3, Cell 2</Table.TableDataCell>
                <Table.TableDataCell>Row 3, Cell 3</Table.TableDataCell>
            </Table.TableRow>
        </Table.TableBody>
    </Table.Table>
);
