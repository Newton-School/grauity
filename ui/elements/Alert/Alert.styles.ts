import styled, { css } from 'styled-components';

import {
    AlertBodyProps,
    AlertContainerProps,
    AlertDescriptionProps,
    AlertTitleProps,
} from './types';

export const StyledAlertContainer = styled.div<AlertContainerProps>`
    display: flex;
    width: 100%;
    ${({ $maxWidth }) => $maxWidth && `max-width: ${$maxWidth};`}
    min-height: var(--spacing-48px, 48px);
    align-items: flex-start;
    border-radius: var(--spacing-8px, 8px);
    border: var(--spacing-1px, 1px) solid ${({ $borderColor }) => $borderColor};
    background: ${({ $backgroundColor }) => $backgroundColor};
    padding: var(--spacing-12px, 12px);
    gap: var(--spacing-20px, 20px);
    ${({ $position }) => $position && `position: ${$position};`}
    ${({ $top }) => $top && `top: ${$top};`}
    ${({ $bottom }) => $bottom && `bottom: ${$bottom};`}
    ${({ $left }) => $left && `left: ${$left};`}
    ${({ $right }) => $right && `right: ${$right};`}
`;

export const StyledAlertBody = styled.div<AlertBodyProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: var(--spacing-4px, 4px);
    margin-right: var(--spacing-4px, 4px);
    flex: 1 0 0;

    ${({ $inlineButtons }) =>
        $inlineButtons &&
        css`
            flex-direction: row;
            align-items: flex-start;
        `};
`;

export const StyledAlertContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: var(--spacing-4px, 4px);
`;

export const StyledAlertTitle = styled.h2<AlertTitleProps>`
    align-self: stretch;
    color: ${({ $textColor }) => $textColor};
    font-size: var(--font-size-14px, 14px);
    font-weight: var(--font-weight-semibold, 600);
    line-height: 160%;
    letter-spacing: 0.014px;
    margin: 0;
`;

export const StyledAlertDescription = styled.div<AlertDescriptionProps>`
    align-self: stretch;
    color: ${({ $textColor }) => $textColor};
    font-size: var(--font-size-14px, 14px);
    font-weight: var(--font-weight-medium, 500);
    line-height: 160%;
    letter-spacing: 0.1px;
    margin-bottom: var(--spacing-4px, 4px);
`;
