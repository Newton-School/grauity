import React from 'react';
import NSTable, { TableProps } from 'ui/elements/Table';

export const Template = (args: TableProps) => (
    <NSTable.Table
        borderAround={args?.borderAround}
        borderWithin={args?.borderWithin}
        borderHorizontal={args?.borderHorizontal}
        borderVertical={args?.borderVertical}
        striped={args?.striped}
    >
        <NSTable.TableHead
            capitalizeHeaders={args?.capitalizeHeaders}
            highlightHeaders={args?.highlightHeaders}
        >
            <NSTable.TableRow condensed={args?.condensed}>
                <NSTable.TableHeadingCell rowSpan={2}>
                    Column 1 (rowSpan=2)
                </NSTable.TableHeadingCell>
                <NSTable.TableHeadingCell colSpan={2}>
                    Super Column (colSpan=2)
                </NSTable.TableHeadingCell>
            </NSTable.TableRow>
            <NSTable.TableRow condensed={args?.condensed}>
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
