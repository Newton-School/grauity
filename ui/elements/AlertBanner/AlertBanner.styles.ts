import styled from 'styled-components';

import { AlertBannerContainerProps, AlertBannerTextProps } from './types';

export const StyledAlertBannerText = styled.span<AlertBannerTextProps>`
    font-size: var(--Label, 14px);
    font-weight: var(--font-weight-medium, 500);
    line-height: 120%;
    letter-spacing: 0.5px;
`;

export const StyledAlertBannerContainer = styled.div<AlertBannerContainerProps>`
    display: flex;
    gap: var(--spacing-12px, 12px);
    width: 100%;
    min-height: var(--spacing-40px, 40px);
    padding: var(--spacing-8px, 8px);
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

    position: ${({ position }) => position};
    top: ${({ top }) => top};
    bottom: ${({ bottom }) => bottom};
    left: ${({ left }) => left};
    right: ${({ right }) => right};

    ${StyledAlertBannerText} {
    }
`;
