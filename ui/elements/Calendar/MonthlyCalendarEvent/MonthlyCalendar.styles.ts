import styled from 'styled-components';

import {
    MonthlyCalendarEventProps,
    StyledMonthlyCalendarEventTextProps,
} from './types';

export const StyledMonthlyCalendarEvent = styled.div<MonthlyCalendarEventProps>`
    box-sizing: border-box;
    font-family: var(--font-family, 'Mona Sans');
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: ${({ borderRadius }) => borderRadius || '4px'};
    background-color: ${({ backgroundColor }) =>
        backgroundColor || 'var(--bg-brand-action)'};
    width: ${({ width }) => width || '150px'};
    height: ${({ height }) => height || '16px'};
    padding: 2px;
`;

export const StyledMonthlyCalendarEventText = styled.p<StyledMonthlyCalendarEventTextProps>`
    color: var(--text-brand-action);
    font-size: 10px;
    font-style: normal;
    font-weight: ${({ fontWeight }) => fontWeight || '600'};
    line-height: 16px;
    letter-spacing: 0.1px;
    padding: 0 2px;
    color: ${({ color }) => color || 'var(--text-brand-action)'};
    text-wrap: nowrap;
`;

export const StyledMonthlyCalendarEventTitleText = styled.span<StyledMonthlyCalendarEventTextProps>`
    color: var(--text-brand-action);
    text-overflow: ellipsis;
    font-size: 10px;
    font-style: normal;
    font-weight: ${({ fontWeight }) => fontWeight || '600'};
    line-height: 16px;
    letter-spacing: 0.1px;
    padding: 0 2px;
    color: ${({ color }) => color || 'var(--text-brand-action)'};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;
