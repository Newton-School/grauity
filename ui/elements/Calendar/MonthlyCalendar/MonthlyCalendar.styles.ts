import styled, { css } from 'styled-components';

import { StyledDivProps } from '../../../../common/types';
import { DATE_SIZE, DAYS_IN_WEEK, GRID_GAP } from './constants';
import {
    GridContainerRows,
    StyledDateCircleProps,
    StyledDateTextProps,
    StyledMonthlyCalendarGridItemProps,
} from './types';

export const StyledDateCircle = styled.div<StyledDateCircleProps>`
    font-family: var(--font-family, 'Mona Sans');
    box-sizing: border-box;
    display: flex;
    padding: var(--spacing-4px, 4px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 32px;
    background: var(--color-neutral-100, #f6f7f9);
    width: ${DATE_SIZE}px;
    height: ${DATE_SIZE}px;

    ${({ isInActiveMonth }) =>
        isInActiveMonth &&
        css`
            background: var(--color-neutral-100, #f6f7f9);
        `}

    ${({ isToday }) =>
        isToday &&
        css`
            background: var(--bg-brand-action, #0673f9);
        `}

    ${({ backgroundColor }) =>
        backgroundColor &&
        css`
            background: ${backgroundColor};
        `}
`;

export const StyledDateCircleText = styled.span<StyledDateTextProps>`
    color: var(--text-secondary, #5b6271);
    text-align: center;
    font-size: var(--Label-2, 12px);
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    letter-spacing: 0.4px;

    ${({ isToday }) =>
        isToday &&
        css`
            color: var(--text-action, #ffffff);
        `}

    ${({ textColor }) =>
        textColor &&
        css`
            color: ${textColor};
        `}
`;

export const StyledMonthlyCalendarGridItem = styled.div<StyledMonthlyCalendarGridItemProps>`
    box-sizing: border-box;
    display: flex;
    padding: var(--spacing-8px, 8px);
    flex-direction: column;
    align-items: flex-end;
    gap: ${GRID_GAP}px;
    flex: 1;

    border: 1px solid var(--border-neutral, #e1e5ea);
    background: ${({ backgroundColor }) => backgroundColor};

    width: 100%;
    height: 100%;

    overflow: hidden;
`;

export const StyledMonthlyCalendarGrid = styled.div<GridContainerRows>`
    font-family: var(--font-family, 'Mona Sans');
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(${DAYS_IN_WEEK}, 1fr);
    grid-template-rows: repeat(${({ rows }) => rows}, 1fr);
    width: 100%;
    height: 100%;
`;

export const StyledMonthlyCalendarGridContainer = styled.div<StyledDivProps>`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const StyledOverflowIndicator = styled.div<StyledDivProps>`
    cursor: pointer;
    display: flex;
    padding: var(--spacing-spacing0, 0px) var(--spacing-4px, 4px);
    align-items: flex-start;
    gap: 4px;
    align-self: stretch;
    border-radius: var(--spacing-4px, 4px);
    border: 1px solid var(--border-neutral, #e1e5ea);
    background: var(--bg-secondary, #f6f7f9);
`;

export const StyledOverflowIndicatorText = styled.span`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    flex: 1 0 0;
    overflow: hidden;
    color: var(--text-primary, #16191d);
    text-overflow: ellipsis;
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    line-height: 160%;
    letter-spacing: 0.1px;
`;

export const StyledDayOfWeekHeader = styled.div`
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`;

export const StyledDayOfWeekHeaderItem = styled.div`
    display: flex;
    padding: var(--spacing-12px, 12px);
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
    flex: 1 0 0;
    align-self: stretch;
    border: 1px solid var(--border-neutral, #e1e5ea);
    background: var(--bg-primary, #fff);
`;

export const StyledDayOfWeekHeaderItemText = styled.span`
    color: var(--text-secondary, #5b6271);
    text-align: center;
    font-size: var(--Label-2, 12px);
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    letter-spacing: 0.4px;
`;

export const StyledMonthlyGridItemContainer = styled.div`
    flex: 1;
    flex-direction: column;
    overflow: hidden;
`;

export const StyledOverflowEventsListContainer = styled.div`
    display: flex;
    width: 189px;
    padding: var(--spacing-8px, 8px);
    flex-direction: column;
    align-items: flex-end;
    gap: var(--spacing-spacing3, 4px);

    border-radius: 12px;
    border: 2px solid var(--border-brand, #94c4ff);
    background: var(--bg-brand, #e5f1ff);
    box-shadow: 0px 8px 48px 0px rgba(0, 0, 0, 0.16);
`;

export const StyledCalendarMonthButton = styled.div<StyledDivProps>`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: var(--spacing-16px, 16px) var(--spacing-0px, 0px);
    gap: var(--spacing-16px, 16px);
`;
