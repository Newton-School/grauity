import styled, { css } from 'styled-components';

import { StyledDateCircleProps, StyledDateTextProps } from './types';

export const StyledDateCircle = styled.div<StyledDateCircleProps>`
    font-family: var(--font-family, 'Mona Sans');
    box-sizing: border-box;
    display: flex;
    padding: var(--spacing-4px, 4px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 32px;
    background: var(--color-neutral-100, #f6f7f9);
    width: 32px;
    height: 32px;

    ${({ isActive }) =>
        isActive &&
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
