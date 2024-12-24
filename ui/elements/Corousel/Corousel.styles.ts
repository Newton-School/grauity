import styled from 'styled-components';

import { StyledDivProps } from '../../../common/types';
import { StyledCorouselItemsContainerProps } from './types';

export const StyledCorouselContainer = styled.div<StyledDivProps>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    align-self: stretch;
    font-family: var(--font-family, 'Mona Sans');
`;

export const StyledCorouselHeaderRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
`;
export const StyledCorouselTitle = styled.div`
    color: var(--text-primary, #16191d);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 25.6px;
    letter-spacing: 0.1px;
`;
export const StyledCorouselControls = styled.div`
    display: flex;
    height: 24px;
    align-items: flex-start;
    gap: 4px;
`;

export const StyledCorouselItemsContainer = styled.div<StyledCorouselItemsContainerProps>`
    display: flex;
    align-items: flex-start;
    gap: ${(props) => props.$gap}px;
`;
