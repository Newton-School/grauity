import React from 'react';
import NSTable, {
    TableProps,
} from 'ui/elements/Table';

export const Template = (args: TableProps) => (
    <NSTable.Table
        borderAround={args?.borderAround}
        borderWithin={args?.borderWithin}
        striped={args?.striped}
    >
        <NSTable.TableHead capitalizeHeaders={args?.capitalizeHeaders}>
            <NSTable.TableRow condensed={args?.condensed}>
                <NSTable.TableHeadingCell>Column 1</NSTable.TableHeadingCell>
                <NSTable.TableHeadingCell>Column 2</NSTable.TableHeadingCell>
                <NSTable.TableHeadingCell>Column 3</NSTable.TableHeadingCell>
            </NSTable.TableRow>
        </NSTable.TableHead>

        <NSTable.TableBody>
            <NSTable.TableRow condensed={args?.condensed}>
                <NSTable.TableDataCell>Row 1, Cell 1</NSTable.TableDataCell>
                <NSTable.TableDataCell>Row 1, Cell 2</NSTable.TableDataCell>
                <NSTable.TableDataCell>Row 1, Cell 3</NSTable.TableDataCell>
            </NSTable.TableRow>
            <NSTable.TableRow condensed={args?.condensed}>
                <NSTable.TableDataCell>Row 2, Cell 1</NSTable.TableDataCell>
                <NSTable.TableDataCell>Row 2, Cell 2</NSTable.TableDataCell>
                <NSTable.TableDataCell>Row 2, Cell 3</NSTable.TableDataCell>
            </NSTable.TableRow>
            <NSTable.TableRow condensed={args?.condensed}>
                <NSTable.TableDataCell>Row 3, Cell 1</NSTable.TableDataCell>
                <NSTable.TableDataCell>Row 3, Cell 2</NSTable.TableDataCell>
                <NSTable.TableDataCell>Row 3, Cell 3</NSTable.TableDataCell>
            </NSTable.TableRow>
        </NSTable.TableBody>
    </NSTable.Table>
);
