import styled, { css } from 'styled-components';

import { TabContainerProps, TabItemContainerProps } from './types';

export const StyledTabContainer = styled.div<TabContainerProps>`
    display: flex;
    padding: 4px;
    align-items: center;
    width: fit-content;

    border-radius: 8px;
    border: 1px solid var(--border-neutral, #e1e5ea);
    background: var(--bg-secondary, #f6f7f9);

    ${({ backgroundColor }) =>
        backgroundColor &&
        css`
            background: ${backgroundColor};
        `}
`;

export const StyledTabItemContainer = styled.div<TabItemContainerProps>`
    display: flex;
    height: 32px;
    padding: 12px 8px;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    cursor: pointer;

    ${({ isActive }) =>
        isActive &&
        css`
            background: var(--bg-primary, #fff);
            color: var(--text-brand, #0673f9);
        `}

    ${({ backgroundColor }) =>
        backgroundColor &&
        css`
            background: ${backgroundColor};
        `}
`;

export const StyledTabItemText = styled.p`
    font-family: var(--font-family, 'Mona Sans');
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 22.4px;
    letter-spacing: 0.014px;
`;
