import styled, { css } from 'styled-components';

import {
    MonthlyCalendarEventProps,
    StyledMonthlyCalendarEventTextProps,
} from './types';

export const StyledMonthlyCalendarEvent = styled.div<MonthlyCalendarEventProps>`
    cursor: pointer;
    box-sizing: border-box;
    font-family: var(--font-family, 'Mona Sans');
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: ${({ borderRadius }) => borderRadius || '4px'};
    background-color: ${({ backgroundColor }) =>
        backgroundColor || 'var(--bg-action-brand)'};
    width: ${({ width }) => width || '100%'};
    height: ${({ height }) => height || '16px'};
    padding: 2px;

    ${({ isActive, width, height }) =>
        isActive &&
        css`
            border: 2px solid var(--text-action, #fff);
            box-shadow: 0px 4px 32px var(--spacing-0px, 0px) rgba(0, 0, 0, 0.32);
            width: calc(${width} + 4px);
            height: calc(${height} + 4px);
        `}
`;

export const StyledMonthlyCalendarEventText = styled.p<StyledMonthlyCalendarEventTextProps>`
    color: var(--text-brand-action);
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0.1px;
    padding: 0 2px;
    color: ${({ color }) => color || 'var(--text-brand-action)'};
    text-wrap: nowrap;
    margin: 0px;
`;

export const StyledMonthlyCalendarEventTitleText = styled.span<StyledMonthlyCalendarEventTextProps>`
    color: var(--text-brand-action);
    text-overflow: ellipsis;
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 0.1px;
    padding: 0 2px;
    color: ${({ color }) => color || 'var(--text-brand-action)'};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;
