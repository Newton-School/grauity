import React from 'react';
import { BUTTON_VARIANTS_ENUM, Icon, NSButton, TableProps } from '../../../ui';

const defaultArgs: TableProps = {
    config: {
        columnRows: [
            {
                key: 'column-row-1',
                cells: [
                    {
                        key: 'college',
                        display: 'College',
                        width: '200px',
                        align: 'left',
                        rowSpan: 2,
                    },
                    {
                        key: 'branch',
                        display: 'Action',
                        width: '300px',
                        align: 'center',
                        rowSpan: 2,
                    },
                    {
                        key: 'josaa-rounds',
                        display: 'JoSAA 2023 - Round 6',
                        align: 'center',
                        colSpan: 2,
                    },
                ],
            },
            {
                key: 'column-row-2',
                cells: [
                    { key: 'or', display: 'Opening Rank', align: 'center' },
                    { key: 'cr', display: 'Closing Rank', align: 'center' },
                ],
            },
        ],
        rows: [
            {
                key: 'row-1',
                cells: [
                    {
                        key: 'name',
                        display: 'John Doe University',
                        valign: 'top',
                    },
                    {
                        key: 'branch',
                        display: 'Chemical Engineering',
                        render: (cellData) => (
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px'}}>
                                <NSButton size="small" variant={BUTTON_VARIANTS_ENUM.PRIMARY_OUTLINED}>
                                    Click me!
                                </NSButton>
                                <NSButton size="small" variant={BUTTON_VARIANTS_ENUM.DANGER_OUTLINED} icon="archive" iconSize="20" isIconButton />
                            </div>
                        ),
                    },
                    { key: 'or', display: '100' },
                    { key: 'cr', display: '500' },
                ],
            },
            {
                key: 'row-1',
                cells: [
                    {
                        key: 'name',
                        display: 'John Doe University',
                        valign: 'top',
                    },
                    {
                        key: 'branch',
                        display: 'Chemical Engineering',
                        render: (cellData) => (
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px'}}>
                                <NSButton size="small" variant={BUTTON_VARIANTS_ENUM.PRIMARY_OUTLINED}>
                                    Click me!
                                </NSButton>
                                <NSButton size="small" variant={BUTTON_VARIANTS_ENUM.DANGER_OUTLINED} icon="archive" iconSize="20" isIconButton />
                            </div>
                        ),
                    },
                    { key: 'or', display: '100' },
                    { key: 'cr', display: '500' },
                ],
            },
            {
                key: 'row-1',
                cells: [
                    {
                        key: 'name',
                        display: 'John Doe University',
                        valign: 'top',
                    },
                    {
                        key: 'branch',
                        display: 'Chemical Engineering',
                        render: (cellData) => (
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px'}}>
                                <NSButton size="small" variant={BUTTON_VARIANTS_ENUM.PRIMARY_OUTLINED}>
                                    Click me!
                                </NSButton>
                                <NSButton size="small" variant={BUTTON_VARIANTS_ENUM.DANGER_OUTLINED} icon="archive" iconSize="20" isIconButton />
                            </div>
                        ),
                    },
                    { key: 'or', display: '100' },
                    { key: 'cr', display: '500' },
                ],
            },
            {
                key: 'row-1',
                cells: [
                    {
                        key: 'name',
                        display: 'John Doe University',
                        valign: 'top',
                    },
                    {
                        key: 'branch',
                        display: 'Chemical Engineering',
                        render: (cellData) => (
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px'}}>
                                <NSButton size="small" variant={BUTTON_VARIANTS_ENUM.PRIMARY_OUTLINED}>
                                    Click me!
                                </NSButton>
                                <NSButton size="small" variant={BUTTON_VARIANTS_ENUM.DANGER_OUTLINED} icon="archive" iconSize="20" isIconButton />
                            </div>
                        ),
                    },
                    { key: 'or', display: '100' },
                    { key: 'cr', display: '500' },
                ],
            },
            {
                key: 'row-1',
                cells: [
                    {
                        key: 'name',
                        display: 'John Doe University',
                        valign: 'top',
                    },
                    {
                        key: 'branch',
                        display: 'Chemical Engineering',
                        render: (cellData) => (
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px'}}>
                                <NSButton size="small" variant={BUTTON_VARIANTS_ENUM.PRIMARY_OUTLINED}>
                                    Click me!
                                </NSButton>
                                <NSButton size="small" variant={BUTTON_VARIANTS_ENUM.DANGER_OUTLINED} icon="archive" iconSize="20" isIconButton />
                            </div>
                        ),
                    },
                    { key: 'or', display: '100' },
                    { key: 'cr', display: '500' },
                ],
            },
            {
                key: 'row-1',
                cells: [
                    {
                        key: 'name',
                        display: 'John Doe University',
                        valign: 'top',
                    },
                    {
                        key: 'branch',
                        display: 'Chemical Engineering',
                        render: (cellData) => (
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px'}}>
                                <NSButton size="small" variant={BUTTON_VARIANTS_ENUM.PRIMARY_OUTLINED}>
                                    Click me!
                                </NSButton>
                                <NSButton size="small" variant={BUTTON_VARIANTS_ENUM.DANGER_OUTLINED} icon="archive" iconSize="20" isIconButton />
                            </div>
                        ),
                    },
                    { key: 'or', display: '100' },
                    { key: 'cr', display: '500' },
                ],
            },
            {
                key: 'row-1',
                cells: [
                    {
                        key: 'name',
                        display: 'John Doe University',
                        valign: 'top',
                    },
                    {
                        key: 'branch',
                        display: 'Chemical Engineering',
                        render: (cellData) => (
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px'}}>
                                <NSButton size="small" variant={BUTTON_VARIANTS_ENUM.PRIMARY_OUTLINED}>
                                    Click me!
                                </NSButton>
                                <NSButton size="small" variant={BUTTON_VARIANTS_ENUM.DANGER_OUTLINED} icon="archive" iconSize="20" isIconButton />
                            </div>
                        ),
                    },
                    { key: 'or', display: '100' },
                    { key: 'cr', display: '500' },
                ],
            },
            {
                key: 'row-1',
                cells: [
                    {
                        key: 'name',
                        display: 'John Doe University',
                        valign: 'top',
                    },
                    {
                        key: 'branch',
                        display: 'Chemical Engineering',
                        render: (cellData) => (
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px'}}>
                                <NSButton size="small" variant={BUTTON_VARIANTS_ENUM.PRIMARY_OUTLINED}>
                                    Click me!
                                </NSButton>
                                <NSButton size="small" variant={BUTTON_VARIANTS_ENUM.DANGER_OUTLINED} icon="archive" iconSize="20" isIconButton />
                            </div>
                        ),
                    },
                    { key: 'or', display: '100' },
                    { key: 'cr', display: '500' },
                ],
            },
            {
                key: 'row-1',
                cells: [
                    {
                        key: 'name',
                        display: 'John Doe University',
                        valign: 'top',
                    },
                    {
                        key: 'branch',
                        display: 'Chemical Engineering',
                        render: (cellData) => (
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px'}}>
                                <NSButton size="small" variant={BUTTON_VARIANTS_ENUM.PRIMARY_OUTLINED}>
                                    Click me!
                                </NSButton>
                                <NSButton size="small" variant={BUTTON_VARIANTS_ENUM.DANGER_OUTLINED} icon="archive" iconSize="20" isIconButton />
                            </div>
                        ),
                    },
                    { key: 'or', display: '100' },
                    { key: 'cr', display: '500' },
                ],
            },
            {
                key: 'row-1',
                cells: [
                    {
                        key: 'name',
                        display: 'John Doe University',
                        valign: 'top',
                    },
                    {
                        key: 'branch',
                        display: 'Chemical Engineering',
                        render: (cellData) => (
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px'}}>
                                <NSButton size="small" variant={BUTTON_VARIANTS_ENUM.PRIMARY_OUTLINED}>
                                    Click me!
                                </NSButton>
                                <NSButton size="small" variant={BUTTON_VARIANTS_ENUM.DANGER_OUTLINED} icon="archive" iconSize="20" isIconButton />
                            </div>
                        ),
                    },
                    { key: 'or', display: '100' },
                    { key: 'cr', display: '500' },
                ],
            },
            {
                key: 'row-1',
                cells: [
                    {
                        key: 'name',
                        display: 'John Doe University',
                        valign: 'top',
                    },
                    {
                        key: 'branch',
                        display: 'Chemical Engineering',
                        render: (cellData) => (
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px'}}>
                                <NSButton size="small" variant={BUTTON_VARIANTS_ENUM.PRIMARY_OUTLINED}>
                                    Click me!
                                </NSButton>
                                <NSButton size="small" variant={BUTTON_VARIANTS_ENUM.DANGER_OUTLINED} icon="archive" iconSize="20" isIconButton />
                            </div>
                        ),
                    },
                    { key: 'or', display: '100' },
                    { key: 'cr', display: '500' },
                ],
            },
            {
                key: 'row-1',
                cells: [
                    {
                        key: 'name',
                        display: 'John Doe University',
                        valign: 'top',
                    },
                    {
                        key: 'branch',
                        display: 'Chemical Engineering',
                        render: (cellData) => (
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px'}}>
                                <NSButton size="small" variant={BUTTON_VARIANTS_ENUM.PRIMARY_OUTLINED}>
                                    Click me!
                                </NSButton>
                                <NSButton size="small" variant={BUTTON_VARIANTS_ENUM.DANGER_OUTLINED} icon="archive" iconSize="20" isIconButton />
                            </div>
                        ),
                    },
                    { key: 'or', display: '100' },
                    { key: 'cr', display: '500' },
                ],
            },
            {
                key: 'row-1',
                cells: [
                    {
                        key: 'name',
                        display: 'John Doe University',
                        valign: 'top',
                    },
                    {
                        key: 'branch',
                        display: 'Chemical Engineering',
                        render: (cellData) => (
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px'}}>
                                <NSButton size="small" variant={BUTTON_VARIANTS_ENUM.PRIMARY_OUTLINED}>
                                    Click me!
                                </NSButton>
                                <NSButton size="small" variant={BUTTON_VARIANTS_ENUM.DANGER_OUTLINED} icon="archive" iconSize="20" isIconButton />
                            </div>
                        ),
                    },
                    { key: 'or', display: '100' },
                    { key: 'cr', display: '500' },
                ],
            },
            {
                key: 'row-1',
                cells: [
                    {
                        key: 'name',
                        display: 'John Doe University',
                        valign: 'top',
                    },
                    {
                        key: 'branch',
                        display: 'Chemical Engineering',
                        render: (cellData) => (
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px'}}>
                                <NSButton size="small" variant={BUTTON_VARIANTS_ENUM.PRIMARY_OUTLINED}>
                                    Click me!
                                </NSButton>
                                <NSButton size="small" variant={BUTTON_VARIANTS_ENUM.DANGER_OUTLINED} icon="archive" iconSize="20" isIconButton />
                            </div>
                        ),
                    },
                    { key: 'or', display: '100' },
                    { key: 'cr', display: '500' },
                ],
            },
            {
                key: 'row-1',
                cells: [
                    {
                        key: 'name',
                        display: 'John Doe University',
                        valign: 'top',
                    },
                    {
                        key: 'branch',
                        display: 'Chemical Engineering',
                        render: (cellData) => (
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px'}}>
                                <NSButton size="small" variant={BUTTON_VARIANTS_ENUM.PRIMARY_OUTLINED}>
                                    Click me!
                                </NSButton>
                                <NSButton size="small" variant={BUTTON_VARIANTS_ENUM.DANGER_OUTLINED} icon="archive" iconSize="20" isIconButton />
                            </div>
                        ),
                    },
                    { key: 'or', display: '100' },
                    { key: 'cr', display: '500' },
                ],
            },
            {
                key: 'row-1',
                cells: [
                    {
                        key: 'name',
                        display: 'John Doe University',
                        valign: 'top',
                    },
                    {
                        key: 'branch',
                        display: 'Chemical Engineering',
                        render: (cellData) => (
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px'}}>
                                <NSButton size="small" variant={BUTTON_VARIANTS_ENUM.PRIMARY_OUTLINED}>
                                    Click me!
                                </NSButton>
                                <NSButton size="small" variant={BUTTON_VARIANTS_ENUM.DANGER_OUTLINED} icon="archive" iconSize="20" isIconButton />
                            </div>
                        ),
                    },
                    { key: 'or', display: '100' },
                    { key: 'cr', display: '500' },
                ],
            },
            {
                key: 'row-1',
                cells: [
                    {
                        key: 'name',
                        display: 'John Doe University',
                        valign: 'top',
                    },
                    {
                        key: 'branch',
                        display: 'Chemical Engineering',
                        render: (cellData) => (
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px'}}>
                                <NSButton size="small" variant={BUTTON_VARIANTS_ENUM.PRIMARY_OUTLINED}>
                                    Click me!
                                </NSButton>
                                <NSButton size="small" variant={BUTTON_VARIANTS_ENUM.DANGER_OUTLINED} icon="archive" iconSize="20" isIconButton />
                            </div>
                        ),
                    },
                    { key: 'or', display: '100' },
                    { key: 'cr', display: '500' },
                ],
            },
            {
                key: 'row-1',
                cells: [
                    {
                        key: 'name',
                        display: 'John Doe University',
                        valign: 'top',
                    },
                    {
                        key: 'branch',
                        display: 'Chemical Engineering',
                        render: (cellData) => (
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px'}}>
                                <NSButton size="small" variant={BUTTON_VARIANTS_ENUM.PRIMARY_OUTLINED}>
                                    Click me!
                                </NSButton>
                                <NSButton size="small" variant={BUTTON_VARIANTS_ENUM.DANGER_OUTLINED} icon="archive" iconSize="20" isIconButton />
                            </div>
                        ),
                    },
                    { key: 'or', display: '100' },
                    { key: 'cr', display: '500' },
                ],
            },
        ],
    },
    condensed: true,
    striped: true,
    borderAround: true,
    borderWithin: true,
    className: '',
    loading: false,
    style: {},
    capitalizeHeaders: true,
};

export default defaultArgs;
