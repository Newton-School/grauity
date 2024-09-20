import styled, { css } from 'styled-components';

import {
    StyledCalendarBlockProps,
    StyledCalendarTimelineBlockProps,
    StyledDivProps,
} from './types';

export const StyledCalendarWrapper = styled.div<StyledDivProps>`
    width: 100%;
    height: 100%;
    font-family: var(--font-family, 'Mono Sans');

    display: grid;
    grid-template-rows: auto 1fr;

    --calendar-sidebar-width: 80px;
    --calendar-block-height: 52px;
`;

export const StyledCalendarRow = styled.div<StyledDivProps>`
    width: 100%;
    display: grid;
    grid-template-columns: var(--calendar-sidebar-width) repeat(7, 1fr);
    background: var(--bg-primary, #fff);
    box-shadow: 0px 0px 24px 0px var(--neutral-500);
`;

export const StyledCalendarEmptyBlock = styled.div<StyledDivProps>`
    padding: var(--spacing-12px, 12px);
    border-right: 1px solid var(--border-neutral, #e1e5ea);
    border-bottom: 1px solid var(--border-neutral, #e1e5ea);
    background: var(--bg-primary, #fff);
`;

export const StyledCalendarTimelineBlock = styled(
    StyledCalendarEmptyBlock
)<StyledCalendarTimelineBlockProps>`
    border-bottom: none;
    position: relative;

    ${({ text }) =>
        text &&
        css`
            &::before {
                content: '${text}';
                position: absolute;
                top: -7px;
                height: 7px;
                z-index: 1;
                align-self: stretch;
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

export const StyledCalendarHeader = styled(StyledCalendarRow)<StyledDivProps>`
    z-index: 1;
`;

export const StyledCalendarWeekDate = styled.div<StyledCalendarBlockProps>`
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

export const StyledCalendarBlock = styled.div<StyledCalendarBlockProps>`
    padding: var(--spacing-12px, 12px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex: 1 0 0;
    align-self: stretch;
    border: 1px solid var(--border-neutral, #e1e5ea);
    border-top: none;
    border-left: none;
    background: var(--bg-primary, #fff);

    color: var(--text-secondary, #5b6271);
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;

    ${({ $active }) =>
        $active &&
        css`
            color: var(--text-brand, #0673f9);
        `}
`;

export const StyledCalendarTimeline = styled.div<StyledDivProps>`
    width: 100%;
    height: 600px;
    overflow: auto;
    background: var(--bg-primary, #fff);
`;

export const StyledCalendarTimelineRow = styled(
    StyledCalendarRow
)<StyledDivProps>`
    width: 100%;
    height: var(--calendar-block-height);
`;
