import styled, { css } from 'styled-components';

import {
    StyledCalendarBlockProps,
    StyledCalendarTimelineBlockProps,
    StyledDivProps,
} from './types';

export const StyledCalendarMonthButton = styled.div<StyledDivProps>`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: var(--spacing-16px, 16px) var(--spacing-0px, 0px);
    gap: var(--spacing-16px, 16px);
`;

export const StyledCalendarWrapper = styled.div<StyledDivProps>`
    width: 100%;
    height: 100%;
    font-family: var(--font-family, 'Mono Sans');
    color: var(--text-primary, #16191d);
    overflow: auto;

    display: grid;
    grid-template-rows: auto 1fr;

    --calendar-sidebar-width: 80px;
    --calendar-block-height: 52px;
`;

export const StyledCalendarHeader = styled.div<StyledDivProps>`
    position: sticky;
    top: 0;
    z-index: 3;
    background: var(--bg-primary, #fff);
`;

export const StyledCalendarRow = styled.div<StyledDivProps>`
    width: 100%;
    min-width: 800px;
    background: var(--bg-primary, #fff);
    display: grid;
    grid-template-columns: var(--calendar-sidebar-width) repeat(7, 1fr);
`;

export const StyledCalendarHeaderRow = styled(
    StyledCalendarRow
)<StyledDivProps>`
    height: fit-content;
`;

export const StyledCalendarTimelineBlock = styled.div<StyledCalendarTimelineBlockProps>`
    position: sticky;
    left: 0;
    z-index: 1;
    background: var(--bg-primary, #fff);
    width: var(--calendar-sidebar-width);
    border-right: 1px solid var(--border-neutral, #e1e5ea);
    height: 100%;

    ${({ text }) =>
        text &&
        css`
            &::before {
                content: '${text}';
                position: absolute;
                top: -7px;
                z-index: 2;
                color: var(--text-disabled, #8c95a6);
                text-align: center;
                font-size: 11px;
                font-style: normal;
                font-weight: 650;
                letter-spacing: 2px;
                text-transform: uppercase;
            }
        `}
`;

export const StyledCalendarHeaderBlock = styled.div<StyledCalendarBlockProps>`
    height: 100%;
    display: flex;
    padding: var(--spacing-12px, 12px);
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    flex: 1 0 0;
    border-right: 1px solid var(--border-neutral, #e1e5ea);
    border-bottom: 1px solid var(--border-neutral, #e1e5ea);
    background: var(--bg-primary, #fff);
    color: var(--text-secondary, #5b6271);

    ${({ $active }) =>
        $active &&
        css`
            color: var(--text-brand, #0673f9);
        `}
`;

export const StyledCalendarWeekLabel = styled.div<StyledDivProps>`
    color: var(--text-brand, #0673f9);
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
`;

export const StyledCalendarDateLabel = styled.div<StyledCalendarBlockProps>`
    display: flex;
    padding: var(--spacing-4px, 4px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 32px;
    background: var(--bg-primary, #fff);

    ${({ $active }) =>
        $active &&
        css`
            background: var(--bg-brand, #e5f1ff);
        `}
`;

export const StyledCalendarTimeline = styled.div<StyledDivProps>`
    width: 100%;
`;

export const StyledCalendarTimelineRow = styled(
    StyledCalendarRow
)<StyledDivProps>`
    height: var(--calendar-block-height);
`;

export const StyledCalendarBlock = styled.div<StyledDivProps>`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    border-right: 1px solid var(--border-neutral, #e1e5ea);
    border-bottom: 1px solid var(--border-neutral, #e1e5ea);
`;
