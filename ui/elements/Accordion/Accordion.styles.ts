import styled from 'styled-components';

import {
    StyledAccordionContentProps,
    StyledAccordionHeaderProps,
    StyledAccordionWrappeer,
} from './types';

export const StyledAccordionHeader = styled.div<StyledAccordionHeaderProps>`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    padding: 8px;
    align-items: center;
    background-color: var(--bg-secondary, #f6f7f9);
    font-family: var(--font-family, 'Mona Sans');
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%;
    letter-spacing: 0.1px;
`;

export const StyledAccordionContent = styled.div<StyledAccordionContentProps>`
    overflow: hidden;
    background-color: var(--bg-secondary, #f6f7f9);
    padding: 0px 8px;
    font-size: 12px;
    max-height: ${({ expanded }) => (expanded ? '1000px' : '0')};
    transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const StyledAccordionWrapper = styled.div<StyledAccordionWrappeer>`
    border-radius: 4px;
    margin: 10px 0;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const StyledLine = styled.div`
    height: 1px;
    background: var(--bg-tertiary, #edeff3);
`;
