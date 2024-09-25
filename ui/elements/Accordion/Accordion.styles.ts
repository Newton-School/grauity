import styled from 'styled-components';

import {
    StyledAccordionContentProps,
    StyledAccordionHeaderProps,
    StyledAccordionWrappeer,
    StyledIconProps,
} from './types';

export const StyledAccordionHeader = styled.div<StyledAccordionHeaderProps>`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    padding: 8px;
    align-items: center;
    background-color: #f6f7f9;
    font-family: 'Mona Sans';
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%;
    letter-spacing: 0.1px;
    border-bottom: 1px solid #edeff3;
`;

export const StyledIcon = styled.img<StyledIconProps>`
    font-size: 1.5em;
    margin-left: 10px;
`;

export const StyledAccordionContent = styled.div<StyledAccordionContentProps>`
    overflow: hidden;
    background-color: #fafafa;
    padding: 0px 8px;
    font-size: 12px;
    max-height: ${({ expanded }) => (expanded ? '1000px' : '0')};
    transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const StyledAccordionWrapper = styled.div<StyledAccordionWrappeer>`
    border: 1px solid #ddd;
    border-radius: 4px;
    margin: 10px 0;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;
