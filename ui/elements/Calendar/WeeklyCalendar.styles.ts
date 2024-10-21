import styled, { css } from 'styled-components';

import { CALENDAR_BLOCK_HEIGHT, CALENDAR_SIDEBAR_WIDTH } from './constants';
import {
    StyledCalendarBlockProps,
    StyledCalendarTimelineBlockProps,
    StyledDivProps,
    StyledEventWrapperProps,
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
    font-family: var(--font-family, 'Mona Sans');
    color: var(--text-primary, #16191d);

    display: grid;
    grid-template-rows: auto 1fr;

    --calendar-sidebar-width: ${CALENDAR_SIDEBAR_WIDTH}px;
    --calendar-block-height: ${CALENDAR_BLOCK_HEIGHT}px;
    --calendar-block-border: 1px solid var(--border-neutral, #e1e5ea);
`;

export const StyledCalendarHeader = styled.div<StyledDivProps>`
    position: sticky;
    top: 0;
    z-index: 5;
    background: var(--bg-primary, #fff);
    box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.12);
`;

export const StyledCalendarRow = styled.div<StyledDivProps>`
    box-sizing: border-box;
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
    z-index: 3;
    background: var(--bg-primary, #fff);
    box-sizing: border-box;
    width: var(--calendar-sidebar-width);
    border-right: var(--calendar-block-border);
    height: 100%;

    ${({ $headerBlock }) =>
        $headerBlock &&
        css`
            border-bottom: var(--calendar-block-border);
        `}

    ${({ $text }) =>
        $text &&
        css`
            &::before {
                content: '${$text}';
                position: absolute;
                top: -7px;
                z-index: 4;
                color: var(--text-disabled, #8c95a6);
                width: 100%;
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
    box-sizing: border-box;
    height: 100%;
    display: flex;
    padding: var(--spacing-12px, 12px);
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    flex: 1 0 0;
    border-right: var(--calendar-block-border);
    border-bottom: var(--calendar-block-border);
    background: var(--bg-primary, #fff);
    color: var(--text-secondary, #5b6271);
    font-size: 12px;

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
    width: 20px;
    height: 20px;
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

export const StyledCalendarBlock = styled.div<StyledCalendarBlockProps>`
    box-sizing: border-box;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    border-right: var(--calendar-block-border);
    border-bottom: var(--calendar-block-border);
    position: relative;

    ${({ $active }) =>
        $active &&
        css`
            background: var(--bg-brand, #e5f1ff);
        `}

    ${({ $currentTimeStick }) =>
        typeof $currentTimeStick === 'number' &&
        css`
            &::before {
                position: absolute;
                top: calc(100% * ${$currentTimeStick});
                content: '';
                z-index: 2;
                width: 100%;
                height: var(--spacing-2px, 2px);
                border-radius: 4px;
                background: var(--bg-action-error, #d22d3a);
            }
            &::after {
                position: absolute;
                top: calc(100% * ${$currentTimeStick} - 4px);
                left: -5px;
                content: '';
                z-index: 2;
                width: 10px;
                height: var(--spacing-10px, 10px);
                border-radius: 40px;
                background: var(--bg-action-error, #d22d3a);
            }
        `}
`;

export const StyledEventWrapper = styled.div<StyledEventWrapperProps>`
    z-index: 1;
    position: absolute;
    top: ${({ $startPosition }) => `${$startPosition}%`};
    left: ${({ $indexFactor, $widthFactor }) =>
        `${$indexFactor * 100 * $widthFactor}%`};
    width: ${({ $widthFactor }) => `${100 * $widthFactor}%`};
    overflow: hidden;
    height: ${({ $height }) => `${$height}%`};
`;
