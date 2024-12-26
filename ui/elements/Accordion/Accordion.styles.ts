import { motion } from 'framer-motion';
import styled from 'styled-components';

import { StyledDivProps } from '../../../common/types';
import {
    StyledAccordionContentProps,
    StyledAccordionHeaderProps,
} from './types';

export const StyledAccordionHeader = styled.div<StyledAccordionHeaderProps>`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    padding: 8px;
    align-items: center;
    background-color: ${(props) => props.$headerBackgroundColor};
    font-family: var(--font-family, 'Mona Sans');
    color: var(--text-primary);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%;
    letter-spacing: 0.1px;
`;

export const StyledAccordionHeaderSuffix = styled.div`
    display: flex;
    align-items: center;
`;

export const StyledAccordionContent = styled(
    motion.div
)<StyledAccordionContentProps>`
    overflow: hidden;
    background-color: ${(props) => props.$contentBackgroundColor};
    padding: 0px 8px;
    font-size: 12px;
    color: var(--text-primary);
    font-family: var(--font-family, 'Mona Sans');
`;

export const StyledAccordionWrapper = styled.div<StyledDivProps>`
    width: 100%;
    border-radius: 4px;
`;

export const StyledLine = styled.div`
    height: 1px;
    background: var(--bg-tertiary, #edeff3);
`;
