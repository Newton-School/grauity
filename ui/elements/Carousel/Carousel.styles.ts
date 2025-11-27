import styled from 'styled-components';

import {
    StyledCarouselContainerProps,
    StyledCarouselControlsProps,
    StyledCarouselHeaderRowProps,
    StyledCarouselItemProps,
    StyledCarouselItemsContainerProps,
} from './types';

export const StyledCarouselContainer = styled.div<StyledCarouselContainerProps>`
    box-sizing: border-box;
    width: 100%;
    overflow-x: hidden;
    padding: 2px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    font-family: var(--font-family, 'Mona Sans');
    ${({ $headerGap }) => $headerGap && `gap: ${$headerGap}px;`}
`;

export const StyledCarouselHeaderRow = styled.div<StyledCarouselHeaderRowProps>`
    width: 100%;
    display: flex;
    flex-direction: ${({ $iconPosition }) =>
        $iconPosition === 'left' ? 'row-reverse' : 'row'};
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
`;

export const StyledCarouselTitle = styled.div`
    color: var(--text-emphasis-primary-default, #16191d);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 25.6px;
    letter-spacing: 0.1px;
`;

export const StyledCarouselControls = styled.div<StyledCarouselControlsProps>`
    display: flex;
    height: 24px;
    align-items: flex-start;
    gap: ${({ $iconGap }) => $iconGap}px;
`;

export const StyledCarouselItemsContainer = styled.div<StyledCarouselItemsContainerProps>`
    width: 100%;
    display: flex;
    gap: ${({ $gap }) => $gap}px;
    scroll-behavior: smooth;
    transform: translateX(${({ $translateX }) => $translateX}px);
    transition: transform 0.5s ease-in-out;
`;

export const StyledCarouselItem = styled.div<StyledCarouselItemProps>`
    flex: 0 0 auto;
    ${({ $fullWidth }) => $fullWidth && 'width: 100%;'}
`;
