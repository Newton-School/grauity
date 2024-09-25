import styled from 'styled-components';

import {
    StyledAccordionContentProps,
    StyledAccordionHeaderProps,
    StyledAccordionWrappeer,
} from './types';

export const AccordionHeader = styled.div<StyledAccordionHeaderProps>`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    padding: 8px;
    align-items: center;
    background-color: #f6f7f9;
    font-size: 1.2em;
    border-bottom: ${({ expanded }) =>
        expanded ? '1px solid #EDEFF3' : 'none'};
`;

export const AccordionIcon = styled.span`
    font-size: 1.5em;
    margin-left: 10px;
`;

export const AccordionContent = styled.div<StyledAccordionContentProps>`
    overflow: hidden;
    background-color: #fafafa;
    padding: ${({ expanded }) => (expanded ? '8px' : '0')};
    max-height: ${({ expanded }) => (expanded ? '500px' : '0')};
    transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1),
        padding 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const StyledAccordionDiv = styled.div<StyledAccordionWrappeer>`
    border: 1px solid #ddd;
    border-radius: 4px;
    margin: 10px 0;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;
