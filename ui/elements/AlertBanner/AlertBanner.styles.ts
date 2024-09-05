import styled from 'styled-components';

import { AlertBannerContainerProps } from './types';

export const StyledAlertBannerContainer = styled.div<AlertBannerContainerProps>`
    display: flex;
    gap: var(--spacing-12px, 12px);
    width: 100%;
    min-height: var(--spacing-40px, 40px);
    align-items: center;
    flex-shrink: 0;

    position: ${({ position }) => position};
    top: ${({ top }) => top};
    bottom: ${({ bottom }) => bottom};
    left: ${({ left }) => left};
    right: ${({ right }) => right};
    padding: ${({ padding }) => padding};
    justify-content: ${({ justifyContent }) => justifyContent};

    color: ${({ textColor }) => textColor};
    background-color: ${({ backgroundColor }) => backgroundColor};
    border: 1px solid ${({ borderColor }) => borderColor};
`;

export const StyledAlertBannerContent = styled.div<any>`
    display: flex;
    align-items: center;
    gap: var(--spacing-8px, 8px);
    color: ${({ color }) => color};
    font-family: var(--font-family, 'Mona Sans');
    font-size: var(--font-size-14px, 14px);
    font-weight: var(--font-weight-semibold, 600);
    line-height: 120%;
    letter-spacing: 0.5px;
`;
