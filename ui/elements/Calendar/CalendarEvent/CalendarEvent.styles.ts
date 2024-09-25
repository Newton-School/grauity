import styled from 'styled-components';

import { StyledDivProps } from './types';

export const StyledCalendarEventWrapper = styled.div<StyledDivProps>`
    font-family: var(--font-family, 'Mona Sans');
    width: 100%;
    height: 100%;
    padding: 4px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    align-self: stretch;
    border-radius: 4px;
    border: 1px solid var(--text-action2, #fff);
    color: var(--text-action2, #fff);
    background: var(--text-brand, #e5f1ff);
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 160%;
    letter-spacing: 0.1px;
`;

export const StyledCalendarEventTitleRow = styled.div<StyledDivProps>`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
