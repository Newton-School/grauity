import styled, { css } from 'styled-components';

import { StyledDivProps } from '../../../../common/types';
import { DATE_SIZE, GRID_GAP } from './constants';
import { StyledDateCircleProps, StyledDateTextProps } from './types';

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

export const StyledMonthlyCalendarGridItem = styled.div<StyledDivProps>`
    box-sizing: border-box;
    display: flex;
    padding: var(--spacing-8px, 8px);
    flex-direction: column;
    align-items: flex-end;
    gap: ${GRID_GAP}px;
    flex: 1;

    border: 1px solid var(--border-neutral, #e1e5ea);
    background: var(--bg-secondary, #f6f7f9);

    width: 100%;
    height: 100%;

    overflow: hidden;
`;

export const StyledMonthlyCalendarGrid = styled.div`
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(5, 1fr);
    background: red;
    border: 1px solid blue;
    height: 100vh;
    width: 100vw;
`;
