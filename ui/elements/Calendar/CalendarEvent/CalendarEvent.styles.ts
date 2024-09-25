import styled from 'styled-components';

import { StyledCalendarEventWrapperProps, StyledDivProps } from './types';

export const StyledCalendarEventWrapper = styled.div<StyledCalendarEventWrapperProps>`
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
    border: 1px solid
        ${(props) => props.$borderColor || 'var(--border, #e1e5ea)'};
    color: ${(props) => props.$textColor || 'var(--text-action2, #fff)'};
    background: ${(props) =>
        props.$backgroundColor || 'var(--bg-action-brand, #0673f9)'};
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 160%;
    letter-spacing: 0.1px;

    transition: box-shadow 0.4s ease;

    &:focus {
        outline: none;
        z-index: 1;
        border-width: 2px;
        box-shadow: 0px 4px 32px var(--spacing-0px, 0px) rgba(0, 0, 0, 0.32);
    }
`;

export const StyledCalendarEventTitleRow = styled.div<StyledDivProps>`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
